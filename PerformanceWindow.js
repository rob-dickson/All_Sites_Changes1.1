if (!!document.documentMode) {
    (function (undefined) { var _DOMTokenList = function () { var n = !0, t = function (t, e, r, o) { Object.defineProperty ? Object.defineProperty(t, e, { configurable: !1 === n || !!o, get: r }) : t.__defineGetter__(e, r) }; try { t({}, "support") } catch (e) { n = !1 } return function (n, e) { var r = this, o = [], i = {}, a = 0, c = 0, f = function (n) { t(r, n, function () { return u(), o[n] }, !1) }, l = function () { if (a >= c) for (; c < a; ++c)f(c) }, u = function () { var t, r, c = arguments, f = /\s+/; if (c.length) for (r = 0; r < c.length; ++r)if (f.test(c[r])) throw t = new SyntaxError('String "' + c[r] + '" contains an invalid character'), t.code = 5, t.name = "InvalidCharacterError", t; for (o = "object" == typeof n[e] ? ("" + n[e].baseVal).replace(/^\s+|\s+$/g, "").split(f) : ("" + n[e]).replace(/^\s+|\s+$/g, "").split(f), "" === o[0] && (o = []), i = {}, r = 0; r < o.length; ++r)i[o[r]] = !0; a = o.length, l() }; return u(), t(r, "length", function () { return u(), a }), r.toLocaleString = r.toString = function () { return u(), o.join(" ") }, r.item = function (n) { return u(), o[n] }, r.contains = function (n) { return u(), !!i[n] }, r.add = function () { u.apply(r, t = arguments); for (var t, c, f = 0, g = t.length; f < g; ++f)c = t[f], i[c] || (o.push(c), i[c] = !0); a !== o.length && (a = o.length >>> 0, "object" == typeof n[e] ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "), l()) }, r.remove = function () { u.apply(r, t = arguments); for (var t, c = {}, f = 0, g = []; f < t.length; ++f)c[t[f]] = !0, delete i[t[f]]; for (f = 0; f < o.length; ++f)c[o[f]] || g.push(o[f]); o = g, a = g.length >>> 0, "object" == typeof n[e] ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "), l() }, r.toggle = function (n, t) { return u.apply(r, [n]), undefined !== t ? t ? (r.add(n), !0) : (r.remove(n), !1) : i[n] ? (r.remove(n), !1) : (r.add(n), !0) }, r } }(); function ArrayCreate(r) { if (1 / r == -Infinity && (r = 0), r > Math.pow(2, 32) - 1) throw new RangeError("Invalid array length"); var n = []; return n.length = r, n } function Call(t, l) { var n = arguments.length > 2 ? arguments[2] : []; if (!1 === IsCallable(t)) throw new TypeError(Object.prototype.toString.call(t) + "is not a function."); return t.apply(l, n) } function CreateDataProperty(e, r, t) { var a = { value: t, writable: !0, enumerable: !0, configurable: !0 }; try { return Object.defineProperty(e, r, a), !0 } catch (n) { return !1 } } function CreateDataPropertyOrThrow(t, r, o) { var e = CreateDataProperty(t, r, o); if (!e) throw new TypeError("Cannot assign value `" + Object.prototype.toString.call(o) + "` to property `" + Object.prototype.toString.call(r) + "` on object `" + Object.prototype.toString.call(t) + "`"); return e } function CreateMethodProperty(e, r, t) { var a = { value: t, writable: !0, enumerable: !1, configurable: !0 }; Object.defineProperty(e, r, a) } function Get(n, t) { return n[t] } function IsCallable(n) { return "function" == typeof n } function RequireObjectCoercible(e) { if (null === e || e === undefined) throw TypeError(); return e } function SameValueNonNumber(e, n) { return e === n } function ToBoolean(o) { return Boolean(o) } function ToInteger(n) { var i = Number(n); return isNaN(i) ? 0 : 1 / i === Infinity || 1 / i == -Infinity || i === Infinity || i === -Infinity ? i : (i < 0 ? -1 : 1) * Math.floor(Math.abs(i)) } function ToLength(n) { var t = ToInteger(n); return t <= 0 ? 0 : Math.min(t, Math.pow(2, 53) - 1) } function ToObject(e) { if (null === e || e === undefined) throw TypeError(); return Object(e) } function GetV(t, e) { return ToObject(t)[e] } function GetMethod(e, n) { var r = GetV(e, n); if (null === r || r === undefined) return undefined; if (!1 === IsCallable(r)) throw new TypeError("Method not callable: " + n); return r } function Type(e) { switch (typeof e) { case "undefined": return "undefined"; case "boolean": return "boolean"; case "number": return "number"; case "string": return "string"; case "symbol": return "symbol"; default: return null === e ? "null" : "Symbol" in this && e instanceof this.Symbol ? "symbol" : "object" } } function CreateIterResultObject(e, r) { if ("boolean" !== Type(r)) throw new Error; var t = {}; return CreateDataProperty(t, "value", e), CreateDataProperty(t, "done", r), t } function GetIterator(t) { var e = arguments.length > 1 ? arguments[1] : GetMethod(t, Symbol.iterator), r = Call(e, t); if ("object" !== Type(r)) throw new TypeError("bad iterator"); var o = GetV(r, "next"), a = Object.create(null); return a["[[Iterator]]"] = r, a["[[NextMethod]]"] = o, a["[[Done]]"] = !1, a } function GetPrototypeFromConstructor(t, o) { var r = Get(t, "prototype"); return "object" !== Type(r) && (r = o), r } function OrdinaryCreateFromConstructor(r, e) { var t = arguments[2] || {}, o = GetPrototypeFromConstructor(r, e), a = Object.create(o); for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && Object.defineProperty(a, n, { configurable: !0, enumerable: !1, writable: !0, value: t[n] }); return a } function IsConstructor(t) { return "object" === Type(t) && ("function" == typeof t && !!t.prototype) } function Construct(r) { var t = arguments.length > 2 ? arguments[2] : r, o = arguments.length > 1 ? arguments[1] : []; if (!IsConstructor(r)) throw new TypeError("F must be a constructor."); if (!IsConstructor(t)) throw new TypeError("newTarget must be a constructor."); if (t === r) return new (Function.prototype.bind.apply(r, [null].concat(o))); var n = OrdinaryCreateFromConstructor(t, Object.prototype); return Call(r, n, o) } function IsRegExp(e) { if ("object" !== Type(e)) return !1; var t = "Symbol" in this && "match" in this.Symbol ? Get(e, this.Symbol.match) : undefined; if (t !== undefined) return ToBoolean(t); try { var n = e.lastIndex; return e.lastIndex = 0, RegExp.prototype.exec.call(e), !0 } catch (r) { } finally { e.lastIndex = n } return !1 } function IteratorClose(r, t) { if ("object" !== Type(r["[[Iterator]]"])) throw new Error(Object.prototype.toString.call(r["[[Iterator]]"]) + "is not an Object."); var e = r["[[Iterator]]"], o = GetMethod(e, "return"); if (o === undefined) return t; try { var n = Call(o, e) } catch (c) { var a = c } if (t) return t; if (a) throw a; if ("object" !== Type(n)) throw new TypeError("Iterator's return method returned a non-object."); return t } function IteratorComplete(t) { if ("object" !== Type(t)) throw new Error(Object.prototype.toString.call(t) + "is not an Object."); return ToBoolean(Get(t, "done")) } function IteratorNext(t) { if (arguments.length < 2) var e = Call(t["[[NextMethod]]"], t["[[Iterator]]"]); else e = Call(t["[[NextMethod]]"], t["[[Iterator]]"], [arguments[1]]); if ("object" !== Type(e)) throw new TypeError("bad iterator"); return e } function IteratorStep(t) { var r = IteratorNext(t); return !0 !== IteratorComplete(r) && r } function IteratorValue(t) { if ("object" !== Type(t)) throw new Error(Object.prototype.toString.call(t) + "is not an Object."); return Get(t, "value") } function OrdinaryToPrimitive(r, t) { if ("string" === t) var e = ["toString", "valueOf"]; else e = ["valueOf", "toString"]; for (var i = 0; i < e.length; ++i) { var n = e[i], a = Get(r, n); if (IsCallable(a)) { var o = Call(a, r); if ("object" !== Type(o)) return o } } throw new TypeError("Cannot convert to primitive.") } function SameValueZero(n, e) { return Type(n) === Type(e) && ("number" === Type(n) ? !(!isNaN(n) || !isNaN(e)) || (1 / n === Infinity && 1 / e == -Infinity || (1 / n == -Infinity && 1 / e === Infinity || n === e)) : SameValueNonNumber(n, e)) } function ToPrimitive(e) { var t = arguments.length > 1 ? arguments[1] : undefined; if ("object" === Type(e)) { if (arguments.length < 2) var i = "default"; else t === String ? i = "string" : t === Number && (i = "number"); var r = "function" == typeof this.Symbol && "symbol" == typeof this.Symbol.toPrimitive ? GetMethod(e, this.Symbol.toPrimitive) : undefined; if (r !== undefined) { var n = Call(r, e, [i]); if ("object" !== Type(n)) return n; throw new TypeError("Cannot convert exotic object to primitive.") } return "default" === i && (i = "number"), OrdinaryToPrimitive(e, i) } return e } function ToString(t) { switch (Type(t)) { case "symbol": throw new TypeError("Cannot convert a Symbol value to a string"); case "object": return ToString(ToPrimitive(t, "string")); default: return String(t) } } var _mutation = function () { function e(e) { return "function" == typeof Node ? e instanceof Node : e && "object" == typeof e && e.nodeName && e.nodeType >= 1 && e.nodeType <= 12 } return function (n) { if (1 === n.length) return e(n[0]) ? n[0] : document.createTextNode(n[0] + ""); for (var t = document.createDocumentFragment(), o = 0; o < n.length; o++)t.appendChild(e(n[o]) ? n[o] : document.createTextNode(n[o] + "")); return t } }(); CreateMethodProperty(Array, "of", function () { var r = arguments.length, t = arguments, e = this; if (IsConstructor(e)) var a = Construct(e, [r]); else var a = ArrayCreate(r); for (var o = 0; o < r;) { var n = t[o], v = ToString(o); CreateDataPropertyOrThrow(a, v, n); var o = o + 1 } return a.length = r, a }); CreateMethodProperty(Array.prototype, "fill", function (t) { for (var e = arguments[1], r = arguments[2], n = ToObject(this), o = ToLength(Get(n, "length")), a = ToInteger(e), h = a < 0 ? Math.max(o + a, 0) : Math.min(a, o), i = r === undefined ? o : ToInteger(r), g = i < 0 ? Math.max(o + i, 0) : Math.min(i, o); h < g;) { n[ToString(h)] = t, h += 1 } return n }); DocumentFragment.prototype.append = function () { this.appendChild(_mutation(arguments)) }; DocumentFragment.prototype.prepend = function () { this.insertBefore(_mutation(arguments), this.firstChild) }; !function (t) { "DOMTokenList" in t && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = _DOMTokenList), function () { var t = document.createElement("span"); "classList" in t && (t.classList.toggle("x", !1), t.classList.contains("x") && (t.classList.constructor.prototype.toggle = function (t) { var s = arguments[1]; if (s === undefined) { var e = !this.contains(t); return this[e ? "add" : "remove"](t), e } return s = !!s, this[s ? "add" : "remove"](t), s })) }(), function () { var t = document.createElement("span"); if ("classList" in t && (t.classList.add("a", "b"), !t.classList.contains("b"))) { var s = t.classList.constructor.prototype.add; t.classList.constructor.prototype.add = function () { for (var t = arguments, e = arguments.length, n = 0; n < e; n++)s.call(this, t[n]) } } }(), function () { var t = document.createElement("span"); if ("classList" in t && (t.classList.add("a"), t.classList.add("b"), t.classList.remove("a", "b"), t.classList.contains("b"))) { var s = t.classList.constructor.prototype.remove; t.classList.constructor.prototype.remove = function () { for (var t = arguments, e = arguments.length, n = 0; n < e; n++)s.call(this, t[n]) } } }() }(this); Document.prototype.after = Element.prototype.after = function () { if (this.parentNode) { for (var t = Array.prototype.slice.call(arguments), e = this.nextSibling, o = e ? t.indexOf(e) : -1; -1 !== o && (e = e.nextSibling);)o = t.indexOf(e); this.parentNode.insertBefore(_mutation(arguments), e) } }, "Text" in this && (Text.prototype.after = Element.prototype.after); Document.prototype.append = Element.prototype.append = function () { this.appendChild(_mutation(arguments)) }; Document.prototype.before = Element.prototype.before = function () { if (this.parentNode) { for (var e = Array.prototype.slice.call(arguments), t = this.previousSibling, o = t ? e.indexOf(t) : -1; -1 !== o && (t = t.previousSibling);)o = e.indexOf(t); this.parentNode.insertBefore(_mutation(arguments), t ? t.nextSibling : this.parentNode.firstChild) } }, "Text" in this && (Text.prototype.before = Element.prototype.before); !function (e) { var t = !0, r = function (e, r, n, i) { Object.defineProperty ? Object.defineProperty(e, r, { configurable: !1 === t || !!i, get: n }) : e.__defineGetter__(r, n) }; try { r({}, "support") } catch (i) { t = !1 } var n = function (e, i, l) { r(e.prototype, i, function () { var e, c = this, s = "__defineGetter__DEFINE_PROPERTY" + i; if (c[s]) return e; if (c[s] = !0, !1 === t) { for (var o, a = n.mirror || document.createElement("div"), f = a.childNodes, d = f.length, m = 0; m < d; ++m)if (f[m]._R === c) { o = f[m]; break } o || (o = a.appendChild(document.createElement("div"))), e = DOMTokenList.call(o, c, l) } else e = new DOMTokenList(c, l); return r(c, i, function () { return e }), delete c[s], e }, !0) }; n(e.Element, "classList", "className"), n(e.HTMLElement, "classList", "className"), n(e.HTMLLinkElement, "relList", "rel"), n(e.HTMLAnchorElement, "relList", "rel"), n(e.HTMLAreaElement, "relList", "rel") }(this); Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function (e) { for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), r = 0; o[r] && o[r] !== t;)++r; return !!o[r] }; Element.prototype.closest = function (e) { for (var n = this; n;) { if (n.matches(e)) return n; n = "SVGElement" in window && n instanceof SVGElement ? n.parentNode : n.parentElement } return null }; Document.prototype.prepend = Element.prototype.prepend = function () { this.insertBefore(_mutation(arguments), this.firstChild) }; Document.prototype.remove = Element.prototype.remove = function () { this.parentNode && this.parentNode.removeChild(this) }, "Text" in this && (Text.prototype.remove = Element.prototype.remove); Document.prototype.replaceWith = Element.prototype.replaceWith = function () { this.parentNode && this.parentNode.replaceChild(_mutation(arguments), this) }, "Text" in this && (Text.prototype.replaceWith = Element.prototype.replaceWith); !function () { function e(e, t) { for (var n = -1, o = e.length; ++n < o;)if (n in e && e[n] === t) return n; return -1 } function t(e, t) { if (!e) throw new Error("Not enough arguments"); var n; if ("createEvent" in document) { n = document.createEvent("Event"); var o = !(!t || t.bubbles === undefined) && t.bubbles, i = !(!t || t.cancelable === undefined) && t.cancelable; return n.initEvent(e, o, i), n } return n = document.createEventObject(), n.type = e, n.bubbles = !(!t || t.bubbles === undefined) && t.bubbles, n.cancelable = !(!t || t.cancelable === undefined) && t.cancelable, n } var n = { click: 1, dblclick: 1, keyup: 1, keypress: 1, keydown: 1, mousedown: 1, mouseup: 1, mousemove: 1, mouseover: 1, mouseenter: 1, mouseleave: 1, mouseout: 1, storage: 1, storagecommit: 1, textinput: 1 }; if ("undefined" != typeof document && "undefined" != typeof window) { var o = window.Event && window.Event.prototype || null; t.NONE = 0, t.CAPTURING_PHASE = 1, t.AT_TARGET = 2, t.BUBBLING_PHASE = 3, window.Event = Window.prototype.Event = t, o && Object.defineProperty(window.Event, "prototype", { configurable: !1, enumerable: !1, writable: !0, value: o }), "createEvent" in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function () { var t = this, o = arguments[0], i = arguments[1]; if (t === window && o in n) throw new Error("In IE8 the event: " + o + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information."); t._events || (t._events = {}), t._events[o] || (t._events[o] = function (n) { var o, i = t._events[n.type].list, r = i.slice(), c = -1, a = r.length; for (n.preventDefault = function () { !1 !== n.cancelable && (n.returnValue = !1) }, n.stopPropagation = function () { n.cancelBubble = !0 }, n.stopImmediatePropagation = function () { n.cancelBubble = !0, n.cancelImmediate = !0 }, n.currentTarget = t, n.relatedTarget = n.fromElement || null, n.target = n.target || n.srcElement || t, n.timeStamp = (new Date).getTime(), n.clientX && (n.pageX = n.clientX + document.documentElement.scrollLeft, n.pageY = n.clientY + document.documentElement.scrollTop); ++c < a && !n.cancelImmediate;)c in r && (o = r[c], -1 !== e(i, o) && "function" == typeof o && o.call(t, n)) }, t._events[o].list = [], t.attachEvent && t.attachEvent("on" + o, t._events[o])), t._events[o].list.push(i) }, window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function () { var t, n = this, o = arguments[0], i = arguments[1]; n._events && n._events[o] && n._events[o].list && -1 !== (t = e(n._events[o].list, i)) && (n._events[o].list.splice(t, 1), n._events[o].list.length || (n.detachEvent && n.detachEvent("on" + o, n._events[o]), delete n._events[o])) }, window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function (e) { if (!arguments.length) throw new Error("Not enough arguments"); if (!e || "string" != typeof e.type) throw new Error("DOM Events Exception 0"); var t = this, n = e.type; try { if (!e.bubbles) { e.cancelBubble = !0; var o = function (e) { e.cancelBubble = !0, (t || window).detachEvent("on" + n, o) }; this.attachEvent("on" + n, o) } this.fireEvent("on" + n, e) } catch (i) { e.target = t; do { e.currentTarget = t, "_events" in t && "function" == typeof t._events[n] && t._events[n].call(t, e), "function" == typeof t["on" + n] && t["on" + n].call(t, e), t = 9 === t.nodeType ? t.parentWindow : t.parentNode } while (t && !e.cancelBubble) } return !0 }, document.attachEvent("onreadystatechange", function () { "complete" === document.readyState && document.dispatchEvent(new t("DOMContentLoaded", { bubbles: !0 })) })) } }(); this.CustomEvent = function (e, t) { if (!e) throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.'); var n; if (t = t || { bubbles: !1, cancelable: !1, detail: null }, "createEvent" in document) try { n = document.createEvent("CustomEvent"), n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail) } catch (l) { n = document.createEvent("Event"), n.initEvent(e, t.bubbles, t.cancelable), n.detail = t.detail } else n = new Event(e, t), n.detail = t && t.detail || null; return n }, CustomEvent.prototype = Event.prototype; !function () { function t(t) { if (!(0 in arguments)) throw new TypeError("1 argument is required"); do { if (this === t) return !0 } while (t = t && t.parentNode); return !1 } if ("HTMLElement" in this && "contains" in HTMLElement.prototype) try { delete HTMLElement.prototype.contains } catch (e) { } "Node" in this ? Node.prototype.contains = t : document.contains = Element.prototype.contains = t }(); !function () { var e = this; CreateMethodProperty(Number, "isNaN", function (r) { return "number" === Type(r) && !!e.isNaN(r) }) }(); CreateMethodProperty(Object, "assign", function (e, r) { var t = ToObject(e); if (1 === arguments.length) return t; var n, o, a, c, l = Array.prototype.slice.call(arguments, 1); for (n = 0; n < l.length; n++) { var i = l[n]; for (i === undefined || null === i ? a = [] : (c = ToObject(i), a = Object.keys(c)), o = 0; o < a.length; o++) { var f = a[o], u = Object.getOwnPropertyDescriptor(c, f); if (u !== undefined && u.enumerable) { var b = Get(c, f); t[f] = b } } } return t }); !function (n) { function t(r) { if (e[r]) return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} }; return n[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports } var e = {}; t.m = n, t.c = e, t.i = function (n) { return n }, t.d = function (n, e, r) { t.o(n, e) || Object.defineProperty(n, e, { configurable: !1, enumerable: !0, get: r }) }, t.n = function (n) { var e = n && n.__esModule ? function () { return n["default"] } : function () { return n }; return t.d(e, "a", e), e }, t.o = function (n, t) { return Object.prototype.hasOwnProperty.call(n, t) }, t.p = "", t(t.s = 100) }({ 100: function (n, t, e) { (function (n) { var t = e(5); try { n.Promise = t, window.Promise = t } catch (r) { } }).call(t, e(2)) }, 2: function (n, t) { var e; e = function () { return this }(); try { e = e || Function("return this")() || (0, eval)("this") } catch (r) { "object" == typeof window && (e = window) } n.exports = e }, 5: function (n, t, e) { (function (t) { !function () { "use strict"; function e() { return rn[q][B] || D } function r(n) { return n && "object" == typeof n } function o(n) { return "function" == typeof n } function i(n, t) { return n instanceof t } function u(n) { return i(n, M) } function c(n, t, e) { if (!t(n)) throw h(e) } function f() { try { return R.apply(S, arguments) } catch (n) { return nn.e = n, nn } } function s(n, t) { return R = n, S = t, f } function a(n, t) { function e() { for (var e = 0; e < o;)t(r[e], r[e + 1]), r[e++] = P, r[e++] = P; o = 0, r.length > n && (r.length = n) } var r = A(n), o = 0; return function (n, t) { r[o++] = n, r[o++] = t, 2 === o && rn.nextTick(e) } } function l(n, t) { var e, r, u, c, f = 0; if (!n) throw h(Q); var a = n[rn[q][z]]; if (o(a)) r = a.call(n); else { if (!o(n.next)) { if (i(n, A)) { for (e = n.length; f < e;)t(n[f], f++); return f } throw h(Q) } r = n } for (; !(u = r.next()).done;)if ((c = s(t)(u.value, f++)) === nn) throw o(r[G]) && r[G](), c.e; return f } function h(n) { return new TypeError(n) } function v(n) { return (n ? "" : V) + (new M).stack } function _(n, t) { var e = "on" + n.toLowerCase(), r = O[e]; H && H.listeners(n).length ? n === Z ? H.emit(n, t._v, t) : H.emit(n, t) : r ? r({ reason: t._v, promise: t }) : rn[n](t._v, t) } function p(n) { return n && n._s } function d(n) { if (p(n)) return new n(tn); var t, e, r; return t = new n(function (n, o) { if (t) throw h(); e = n, r = o }), c(e, o), c(r, o), t } function w(n, t) { var e = !1; return function (r) { e || (e = !0, L && (n[N] = v(!0)), t === Y ? k(n, r) : x(n, t, r)) } } function y(n, t, e, r) { return o(e) && (t._onFulfilled = e), o(r) && (n[J] && _(X, n), t._onRejected = r), L && (t._p = n), n[n._c++] = t, n._s !== $ && on(n, t), t } function m(n) { if (n._umark) return !0; n._umark = !0; for (var t, e = 0, r = n._c; e < r;)if (t = n[e++], t._onRejected || m(t)) return !0 } function j(n, t) { function e(n) { return r.push(n.replace(/^\s+|\s+$/g, "")) } var r = []; return L && (t[N] && e(t[N]), function o(n) { n && K in n && (o(n._next), e(n[K] + ""), o(n._p)) }(t)), (n && n.stack ? n.stack : n) + ("\n" + r.join("\n")).replace(en, "") } function g(n, t) { return n(t) } function x(n, t, e) { var r = 0, o = n._c; if (n._s === $) for (n._s = t, n._v = e, t === U && (L && u(e) && (e.longStack = j(e, n)), un(n)); r < o;)on(n, n[r++]); return n } function k(n, t) { if (t === n && t) return x(n, U, h(W)), n; if (t !== C && (o(t) || r(t))) { var e = s(b)(t); if (e === nn) return x(n, U, e.e), n; o(e) ? (L && p(t) && (n._next = t), p(t) ? T(n, t, e) : rn.nextTick(function () { T(n, t, e) })) : x(n, Y, t) } else x(n, Y, t); return n } function b(n) { return n.then } function T(n, t, e) { var r = s(e, t)(function (e) { t && (t = C, k(n, e)) }, function (e) { t && (t = C, x(n, U, e)) }); r === nn && t && (x(n, U, r.e), t = C) } var P, R, S, C = null, F = "object" == typeof self, O = F ? self : t, E = O.Promise, H = O.process, I = O.console, L = !1, A = Array, M = Error, U = 1, Y = 2, $ = 3, q = "Symbol", z = "iterator", B = "species", D = q + "(" + B + ")", G = "return", J = "_uh", K = "_pt", N = "_st", Q = "Invalid argument", V = "\nFrom previous ", W = "Chaining cycle detected for promise", X = "rejectionHandled", Z = "unhandledRejection", nn = { e: C }, tn = function () { }, en = /^.+\/node_modules\/yaku\/.+\n?/gm, rn = function (n) { var t, e = this; if (!r(e) || e._s !== P) throw h("Invalid this"); if (e._s = $, L && (e[K] = v()), n !== tn) { if (!o(n)) throw h(Q); (t = s(n)(w(e, Y), w(e, U))) === nn && x(e, U, t.e) } }; rn["default"] = rn, function (n, t) { for (var e in t) n[e] = t[e] }(rn.prototype, { then: function (n, t) { if (this._s === undefined) throw h(); return y(this, d(rn.speciesConstructor(this, rn)), n, t) }, "catch": function (n) { return this.then(P, n) }, "finally": function (n) { return this.then(function (t) { return rn.resolve(n()).then(function () { return t }) }, function (t) { return rn.resolve(n()).then(function () { throw t }) }) }, _c: 0, _p: C }), rn.resolve = function (n) { return p(n) ? n : k(d(this), n) }, rn.reject = function (n) { return x(d(this), U, n) }, rn.race = function (n) { var t = this, e = d(t), r = function (n) { x(e, Y, n) }, o = function (n) { x(e, U, n) }, i = s(l)(n, function (n) { t.resolve(n).then(r, o) }); return i === nn ? t.reject(i.e) : e }, rn.all = function (n) { function t(n) { x(o, U, n) } var e, r = this, o = d(r), i = []; return (e = s(l)(n, function (n, u) { r.resolve(n).then(function (n) { i[u] = n, --e || x(o, Y, i) }, t) })) === nn ? r.reject(e.e) : (e || x(o, Y, []), o) }, rn.Symbol = O[q] || {}, s(function () { Object.defineProperty(rn, e(), { get: function () { return this } }) })(), rn.speciesConstructor = function (n, t) { var r = n.constructor; return r ? r[e()] || t : t }, rn.unhandledRejection = function (n, t) { I && I.error("Uncaught (in promise)", L ? t.longStack : j(n, t)) }, rn.rejectionHandled = tn, rn.enableLongStackTrace = function () { L = !0 }, rn.nextTick = F ? function (n) { E ? new E(function (n) { n() }).then(n) : setTimeout(n) } : H.nextTick, rn._s = 1; var on = a(999, function (n, t) { var e, r; return (r = n._s !== U ? t._onFulfilled : t._onRejected) === P ? void x(t, n._s, n._v) : (e = s(g)(r, n._v)) === nn ? void x(t, U, e.e) : void k(t, e) }), un = a(9, function (n) { m(n) || (n[J] = 1, _(Z, n)) }); try { n.exports = rn } catch (cn) { O.Yaku = rn } }() }).call(t, e(2)) } }); CreateMethodProperty(String.prototype, "endsWith", function (e) { "use strict"; var t = arguments.length > 1 ? arguments[1] : undefined, r = RequireObjectCoercible(this), n = ToString(r); if (IsRegExp(e)) throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression"); var i = ToString(e), o = n.length, s = t === undefined ? o : ToInteger(t), g = Math.min(Math.max(s, 0), o), h = i.length, u = g - h; return !(u < 0) && n.substr(u, h) === i }); CreateMethodProperty(String.prototype, "includes", function (e) { "use strict"; var t = arguments.length > 1 ? arguments[1] : undefined, r = RequireObjectCoercible(this), n = ToString(r); if (IsRegExp(e)) throw new TypeError("First argument to String.prototype.includes must not be a regular expression"); var i = ToString(e), o = ToInteger(t), g = n.length, a = Math.min(Math.max(o, 0), g); return -1 !== String.prototype.indexOf.call(n, i, a) }); CreateMethodProperty(String.prototype, "startsWith", function (t) { "use strict"; var e = arguments.length > 1 ? arguments[1] : undefined, r = RequireObjectCoercible(this), n = ToString(r); if (IsRegExp(t)) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression"); var i = ToString(t), o = ToInteger(e), s = n.length, a = Math.min(Math.max(o, 0), s); return !(i.length + a > s) && 0 === n.substr(a).indexOf(t) }); !function (e, n, r) { var t, o = 0, u = "" + Math.random(), a = "__symbol:", c = a.length, l = "__symbol@@" + u, i = "defineProperty", f = "defineProperties", v = "getOwnPropertyNames", s = "getOwnPropertyDescriptor", b = "propertyIsEnumerable", y = e.prototype, h = y.hasOwnProperty, m = y[b], p = y.toString, w = Array.prototype.concat, g = "object" == typeof window ? e.getOwnPropertyNames(window) : [], d = e[v], P = function (e) { if ("[object Window]" === p.call(e)) try { return d(e) } catch (n) { return w.call([], g) } return d(e) }, S = e[s], O = e.create, j = e.keys, E = e.freeze || e, _ = e[i], k = e[f], N = S(e, v), T = function (e, n, r) { if (!h.call(e, l)) try { _(e, l, { enumerable: !1, configurable: !1, writable: !1, value: {} }) } catch (t) { e[l] = {} } e[l]["@@" + n] = r }, z = function (e, n) { var r = O(e); return P(n).forEach(function (e) { M.call(n, e) && G(r, e, n[e]) }), r }, A = function (e) { var n = O(e); return n.enumerable = !1, n }, D = function () { }, F = function (e) { return e != l && !h.call(x, e) }, I = function (e) { return e != l && h.call(x, e) }, M = function (e) { var n = "" + e; return I(n) ? h.call(this, n) && this[l]["@@" + n] : m.call(this, e) }, W = function (n) { var r = { enumerable: !1, configurable: !0, get: D, set: function (e) { t(this, n, { enumerable: !1, configurable: !0, writable: !0, value: e }), T(this, n, !0) } }; try { _(y, n, r) } catch (o) { y[n] = r.value } return E(x[n] = _(e(n), "constructor", B)) }, q = function K() { var e = arguments[0]; if (this instanceof K) throw new TypeError("Symbol is not a constructor"); return W(a.concat(e || "", u, ++o)) }, x = O(null), B = { value: q }, C = function (e) { return x[e] }, G = function (e, n, r) { var o = "" + n; return I(o) ? (t(e, o, r.enumerable ? A(r) : r), T(e, o, !!r.enumerable)) : _(e, n, r), e }, H = function (e) { return function (n) { return h.call(e, l) && h.call(e[l], "@@" + n) } }, J = function (e) { return P(e).filter(e === y ? H(e) : I).map(C) }; N.value = G, _(e, i, N), N.value = J, _(e, "getOwnPropertySymbols", N), N.value = function (e) { return P(e).filter(F) }, _(e, v, N), N.value = function (e, n) { var r = J(n); return r.length ? j(n).concat(r).forEach(function (r) { M.call(n, r) && G(e, r, n[r]) }) : k(e, n), e }, _(e, f, N), N.value = M, _(y, b, N), N.value = q, _(r, "Symbol", N), N.value = function (e) { var n = a.concat(a, e, u); return n in y ? x[n] : W(n) }, _(q, "for", N), N.value = function (e) { if (F(e)) throw new TypeError(e + " is not a symbol"); return h.call(x, e) ? e.slice(2 * c, -u.length) : void 0 }, _(q, "keyFor", N), N.value = function (e, n) { var r = S(e, n); return r && I(n) && (r.enumerable = M.call(e, n)), r }, _(e, s, N), N.value = function (e, n) { return 1 === arguments.length || void 0 === n ? O(e) : z(e, n) }, _(e, "create", N), N.value = function () { var e = p.call(this); return "[object String]" === e && I(this) ? "[object Symbol]" : e }, _(y, "toString", N), t = function (e, n, r) { var t = S(y, n); delete y[n], _(e, n, r), e !== y && _(y, n, t) } }(Object, 0, this); Object.defineProperty(Symbol, "iterator", { value: Symbol("iterator") }); Object.defineProperty(Symbol, "species", { value: Symbol("species") }); !function (e) { function t(e, t) { if ("object" !== Type(e)) throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e)); if (!0 !== e._es6Map) throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e)); var r = Object.create(n); return Object.defineProperty(r, "[[Map]]", { configurable: !0, enumerable: !1, writable: !0, value: e }), Object.defineProperty(r, "[[MapNextIndex]]", { configurable: !0, enumerable: !1, writable: !0, value: 0 }), Object.defineProperty(r, "[[MapIterationKind]]", { configurable: !0, enumerable: !1, writable: !0, value: t }), r } var r = function () { try { var e = {}; return Object.defineProperty(e, "t", { configurable: !0, enumerable: !1, get: function () { return !0 }, set: undefined }), !!e.t } catch (t) { return !1 } }(), o = Symbol("undef"), a = function p() { if (!(this instanceof p)) throw new TypeError('Constructor Map requires "new"'); var e = OrdinaryCreateFromConstructor(this, p.prototype, { _keys: [], _values: [], _size: 0, _es6Map: !0 }); r || Object.defineProperty(e, "size", { configurable: !0, enumerable: !1, writable: !0, value: 0 }); var t = arguments.length > 0 ? arguments[0] : undefined; if (null === t || t === undefined) return e; var o = e.set; if (!IsCallable(o)) throw new TypeError("Map.prototype.set is not a function"); try { for (var a = GetIterator(t); ;) { var n = IteratorStep(a); if (!1 === n) return e; var i = IteratorValue(n); if ("object" !== Type(i)) try { throw new TypeError("Iterator value " + i + " is not an entry object") } catch (u) { return IteratorClose(a, u) } try { var l = i[0], c = i[1]; o.call(e, l, c) } catch (f) { return IteratorClose(a, f) } } } catch (f) { if (Array.isArray(t) || "[object Arguments]" === Object.prototype.toString.call(t) || t.callee) { var y, s = t.length; for (y = 0; y < s; y++)o.call(e, t[y][0], t[y][1]) } } return e }; Object.defineProperty(a, "prototype", { configurable: !1, enumerable: !1, writable: !1, value: {} }), r ? Object.defineProperty(a, Symbol.species, { configurable: !0, enumerable: !1, get: function () { return this }, set: undefined }) : CreateMethodProperty(a, Symbol.species, a), CreateMethodProperty(a.prototype, "clear", function () { var e = this; if ("object" !== Type(e)) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e)); if (!0 !== e._es6Map) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e)); for (var t = e._keys, a = 0; a < t.length; a++)e._keys[a] = o, e._values[a] = o; return this._size = 0, r || (this.size = this._size), undefined }), CreateMethodProperty(a.prototype, "constructor", a), CreateMethodProperty(a.prototype, "delete", function (e) { var t = this; if ("object" !== Type(t)) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t)); if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t)); for (var a = t._keys, n = 0; n < a.length; n++)if (t._keys[n] !== o && SameValueZero(t._keys[n], e)) return this._keys[n] = o, this._values[n] = o, this._size = --this._size, r || (this.size = this._size), !0; return !1 }), CreateMethodProperty(a.prototype, "entries", function () { return t(this, "key+value") }), CreateMethodProperty(a.prototype, "forEach", function (e) { var t = this; if ("object" !== Type(t)) throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t)); if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t)); if (!IsCallable(e)) throw new TypeError(Object.prototype.toString.call(e) + " is not a function."); if (arguments[1]) var r = arguments[1]; for (var a = t._keys, n = 0; n < a.length; n++)t._keys[n] !== o && t._values[n] !== o && e.call(r, t._values[n], t._keys[n], t); return undefined }), CreateMethodProperty(a.prototype, "get", function (e) { var t = this; if ("object" !== Type(t)) throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t)); if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t)); for (var r = t._keys, a = 0; a < r.length; a++)if (t._keys[a] !== o && SameValueZero(t._keys[a], e)) return t._values[a]; return undefined }), CreateMethodProperty(a.prototype, "has", function (e) { var t = this; if ("object" != typeof t) throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t)); if (!0 !== t._es6Map) throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t)); for (var r = t._keys, a = 0; a < r.length; a++)if (t._keys[a] !== o && SameValueZero(t._keys[a], e)) return !0; return !1 }), CreateMethodProperty(a.prototype, "keys", function () { return t(this, "key") }), CreateMethodProperty(a.prototype, "set", function (e, t) { var a = this; if ("object" !== Type(a)) throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(a)); if (!0 !== a._es6Map) throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(a)); for (var n = a._keys, i = 0; i < n.length; i++)if (a._keys[i] !== o && SameValueZero(a._keys[i], e)) return a._values[i] = t, a; -0 === e && (e = 0); var p = {}; return p["[[Key]]"] = e, p["[[Value]]"] = t, a._keys.push(p["[[Key]]"]), a._values.push(p["[[Value]]"]), ++a._size, r || (a.size = a._size), a }), r && Object.defineProperty(a.prototype, "size", { configurable: !0, enumerable: !1, get: function () { var e = this; if ("object" !== Type(e)) throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e)); if (!0 !== e._es6Map) throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e)); for (var t = e._keys, r = 0, a = 0; a < t.length; a++)e._keys[a] !== o && (r += 1); return r }, set: undefined }), CreateMethodProperty(a.prototype, "values", function () { return t(this, "value") }), CreateMethodProperty(a.prototype, Symbol.iterator, a.prototype.entries), "name" in a || Object.defineProperty(a, "name", { configurable: !0, enumerable: !1, writable: !1, value: "Map" }); var n = {}; Object.defineProperty(n, "isMapIterator", { configurable: !1, enumerable: !1, writable: !1, value: !0 }), CreateMethodProperty(n, "next", function () { var e = this; if ("object" !== Type(e)) throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e)); if (!e.isMapIterator) throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e)); var t = e["[[Map]]"], r = e["[[MapNextIndex]]"], a = e["[[MapIterationKind]]"]; if (t === undefined) return CreateIterResultObject(undefined, !0); if (!t._es6Map) throw new Error(Object.prototype.toString.call(t) + " has a [[MapData]] internal slot."); for (var n = t._keys, i = n.length; r < i;) { var p = Object.create(null); if (p["[[Key]]"] = t._keys[r], p["[[Value]]"] = t._values[r], r += 1, e["[[MapNextIndex]]"] = r, p["[[Key]]"] !== o) { if ("key" === a) var l = p["[[Key]]"]; else if ("value" === a) l = p["[[Value]]"]; else { if ("key+value" !== a) throw new Error; l = [p["[[Key]]"], p["[[Value]]"]] } return CreateIterResultObject(l, !1) } } return e["[[Map]]"] = undefined, CreateIterResultObject(undefined, !0) }), CreateMethodProperty(n, Symbol.iterator, function () { return this }); try { CreateMethodProperty(e, "Map", a) } catch (i) { e.Map = a } }(this); !function (e) { function t(e, t) { if ("object" != typeof e) throw new TypeError("createSetIterator called on incompatible receiver " + Object.prototype.toString.call(e)); if (!0 !== e._es6Set) throw new TypeError("createSetIterator called on incompatible receiver " + Object.prototype.toString.call(e)); var r = Object.create(i); return Object.defineProperty(r, "[[IteratedSet]]", { configurable: !0, enumerable: !1, writable: !0, value: e }), Object.defineProperty(r, "[[SetNextIndex]]", { configurable: !0, enumerable: !1, writable: !0, value: 0 }), Object.defineProperty(r, "[[SetIterationKind]]", { configurable: !0, enumerable: !1, writable: !0, value: t }), r } var r = function () { try { var e = {}; return Object.defineProperty(e, "t", { configurable: !0, enumerable: !1, get: function () { return !0 }, set: undefined }), !!e.t } catch (t) { return !1 } }(), o = Symbol("undef"), n = function c() { if (!(this instanceof c)) throw new TypeError('Constructor Set requires "new"'); var e = OrdinaryCreateFromConstructor(this, c.prototype, { _values: [], _size: 0, _es6Set: !0 }); r || Object.defineProperty(e, "size", { configurable: !0, enumerable: !1, writable: !0, value: 0 }); var t = arguments.length > 0 ? arguments[0] : undefined; if (null === t || t === undefined) return e; var o = e.add; if (!IsCallable(o)) throw new TypeError("Set.prototype.add is not a function"); try { for (var n = GetIterator(t); ;) { var a = IteratorStep(n); if (!1 === a) return e; var i = IteratorValue(a); try { o.call(e, i) } catch (y) { return IteratorClose(n, y) } } } catch (y) { if (!Array.isArray(t) && "[object Arguments]" !== Object.prototype.toString.call(t) && !t.callee) throw y; var l, p = t.length; for (l = 0; l < p; l++)o.call(e, t[l]) } return e }; Object.defineProperty(n, "prototype", { configurable: !1, enumerable: !1, writable: !1, value: {} }), r ? Object.defineProperty(n, Symbol.species, { configurable: !0, enumerable: !1, get: function () { return this }, set: undefined }) : CreateMethodProperty(n, Symbol.species, n), CreateMethodProperty(n.prototype, "add", function (e) { var t = this; if ("object" != typeof t) throw new TypeError("Method Set.prototype.add called on incompatible receiver " + Object.prototype.toString.call(t)); if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.add called on incompatible receiver " + Object.prototype.toString.call(t)); for (var n = t._values, a = 0; a < n.length; a++) { var i = n[a]; if (i !== o && SameValueZero(i, e)) return t } return 1 / e == -Infinity && (e = 0), t._values.push(e), this._size = ++this._size, r || (this.size = this._size), t }), CreateMethodProperty(n.prototype, "clear", function () { var e = this; if ("object" != typeof e) throw new TypeError("Method Set.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e)); if (!0 !== e._es6Set) throw new TypeError("Method Set.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e)); for (var t = e._values, n = 0; n < t.length; n++)t[n] = o; return this._size = 0, r || (this.size = this._size), undefined }), CreateMethodProperty(n.prototype, "constructor", n), CreateMethodProperty(n.prototype, "delete", function (e) { var t = this; if ("object" != typeof t) throw new TypeError("Method Set.prototype.delete called on incompatible receiver " + Object.prototype.toString.call(t)); if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.delete called on incompatible receiver " + Object.prototype.toString.call(t)); for (var n = t._values, a = 0; a < n.length; a++) { var i = n[a]; if (i !== o && SameValueZero(i, e)) return n[a] = o, this._size = --this._size, r || (this.size = this._size), !0 } return !1 }), CreateMethodProperty(n.prototype, "entries", function () { return t(this, "key+value") }), CreateMethodProperty(n.prototype, "forEach", function (e) { var t = this; if ("object" != typeof t) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t)); if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t)); if (!IsCallable(e)) throw new TypeError(Object.prototype.toString.call(e) + " is not a function."); if (arguments[1]) var r = arguments[1]; for (var n = t._values, a = 0; a < n.length; a++) { var i = n[a]; i !== o && e.call(r, i, i, t) } return undefined }), CreateMethodProperty(n.prototype, "has", function (e) { var t = this; if ("object" != typeof t) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t)); if (!0 !== t._es6Set) throw new TypeError("Method Set.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t)); for (var r = t._values, n = 0; n < r.length; n++) { var a = r[n]; if (a !== o && SameValueZero(a, e)) return !0 } return !1 }); var a = function () { return t(this, "value") }; CreateMethodProperty(n.prototype, "values", a), CreateMethodProperty(n.prototype, "keys", a), r && Object.defineProperty(n.prototype, "size", { configurable: !0, enumerable: !1, get: function () { var e = this; if ("object" != typeof e) throw new TypeError("Method Set.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e)); if (!0 !== e._es6Set) throw new TypeError("Method Set.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e)); for (var t = e._values, r = 0, n = 0; n < t.length; n++) { t[n] !== o && (r += 1) } return r }, set: undefined }), CreateMethodProperty(n.prototype, Symbol.iterator, a), "name" in n || Object.defineProperty(n, "name", { configurable: !0, enumerable: !1, writable: !1, value: "Set" }); var i = {}; Object.defineProperty(i, "isSetIterator", { configurable: !1, enumerable: !1, writable: !1, value: !0 }), CreateMethodProperty(i, "next", function () { var e = this; if ("object" != typeof e) throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e)); if (!e.isSetIterator) throw new TypeError("Method %SetIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e)); var t = e["[[IteratedSet]]"], r = e["[[SetNextIndex]]"], n = e["[[SetIterationKind]]"]; if (t === undefined) return CreateIterResultObject(undefined, !0); if (!t._es6Set) throw new Error(Object.prototype.toString.call(t) + " does not have [[SetData]] internal slot."); for (var a = t._values, i = a.length; r < i;) { var l = a[r]; if (r += 1, e["[[SetNextIndex]]"] = r, l !== o) return "key+value" === n ? CreateIterResultObject([l, l], !1) : CreateIterResultObject(l, !1) } return e["[[IteratedSet]]"] = undefined, CreateIterResultObject(undefined, !0) }), CreateMethodProperty(i, Symbol.iterator, function () { return this }); try { CreateMethodProperty(e, "Set", n) } catch (l) { e.Set = n } }(this); !function () { function r(r) { return "string" == typeof r || "object" == typeof r && "[object String]" === t.call(r) } var t = Object.prototype.toString, e = String.prototype.match; CreateMethodProperty(Array, "from", function (t) { var o = this, a = arguments.length > 1 ? arguments[1] : undefined; if (a === undefined) var n = !1; else { if (!1 === IsCallable(a)) throw new TypeError(Object.prototype.toString.call(a) + " is not a function."); var i = arguments.length > 2 ? arguments[2] : undefined; if (i !== undefined) var l = i; else l = undefined; n = !0 } var u = GetMethod(t, Symbol.iterator); if (u !== undefined) { if (IsConstructor(o)) var f = Construct(o); else f = ArrayCreate(0); for (var c = GetIterator(t, u), s = 0; ;) { if (s >= Math.pow(2, 53) - 1) { var h = new TypeError("Iteration count can not be greater than or equal 9007199254740991."); return IteratorClose(c, h) } var y = ToString(s), C = IteratorStep(c); if (!1 === C) return f.length = s, f; var g = IteratorValue(C); if (n) try { var p = Call(a, l, [g, s]) } catch (b) { return IteratorClose(c, b) } else p = g; try { CreateDataPropertyOrThrow(f, y, p) } catch (b) { return IteratorClose(c, b) } s += 1 } } if (r(t)) var v = e.call(t, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || []; else v = ToObject(t); var d = ToLength(Get(v, "length")); for (f = IsConstructor(o) ? Construct(o, [d]) : ArrayCreate(d), s = 0; s < d;) { y = ToString(s); var I = Get(v, y); p = !0 === n ? Call(a, l, [I, s]) : I, CreateDataPropertyOrThrow(f, y, p), s += 1 } return f.length = d, f }) }(); !function (e) { "use strict"; function t(t) { return !!t && ("Symbol" in e && "iterator" in e.Symbol && "function" == typeof t[Symbol.iterator] || !!Array.isArray(t)) } function n(e) { return "from" in Array ? Array.from(e) : Array.prototype.slice.call(e) } !function () { function r(e) { var t = "", n = !0; return e.forEach(function (e) { var r = encodeURIComponent(e.name), a = encodeURIComponent(e.value); n || (t += "&"), t += r + "=" + a, n = !1 }), t.replace(/%20/g, "+") } function a(e, t) { var n = e.split("&"); t && -1 === n[0].indexOf("=") && (n[0] = "=" + n[0]); var r = []; n.forEach(function (e) { if (0 !== e.length) { var t = e.indexOf("="); if (-1 !== t) var n = e.substring(0, t), a = e.substring(t + 1); else n = e, a = ""; n = n.replace(/\+/g, " "), a = a.replace(/\+/g, " "), r.push({ name: n, value: a }) } }); var a = []; return r.forEach(function (e) { a.push({ name: decodeURIComponent(e.name), value: decodeURIComponent(e.value) }) }), a } function i(e) { if (c) return new s(e); var t = document.createElement("a"); return t.href = e, t } function o(e) { var i = this; this._list = [], e === undefined || null === e || (e instanceof o ? this._list = a(String(e)) : "object" == typeof e && t(e) ? n(e).forEach(function (e) { if (!t(e)) throw TypeError(); var r = n(e); if (2 !== r.length) throw TypeError(); i._list.push({ name: String(r[0]), value: String(r[1]) }) }) : "object" == typeof e && e ? Object.keys(e).forEach(function (t) { i._list.push({ name: String(t), value: String(e[t]) }) }) : (e = String(e), "?" === e.substring(0, 1) && (e = e.substring(1)), this._list = a(e))), this._url_object = null, this._setList = function (e) { u || (i._list = e) }; var u = !1; this._update_steps = function () { u || (u = !0, i._url_object && ("about:" === i._url_object.protocol && -1 !== i._url_object.pathname.indexOf("?") && (i._url_object.pathname = i._url_object.pathname.split("?")[0]), i._url_object.search = r(i._list), u = !1)) } } function u(e, t) { var n = 0; this.next = function () { if (n >= e.length) return { done: !0, value: undefined }; var r = e[n++]; return { done: !1, value: "key" === t ? r.name : "value" === t ? r.value : [r.name, r.value] } } } function l(t, n) { function r() { var e = l.href.replace(/#$|\?$|\?(?=#)/g, ""); l.href !== e && (l.href = e) } function u() { m._setList(l.search ? a(l.search.substring(1)) : []), m._update_steps() } if (!(this instanceof e.URL)) throw new TypeError("Failed to construct 'URL': Please use the 'new' operator."); n && (t = function () { if (c) return new s(t, n).href; var e; try { var r; if ("[object OperaMini]" === Object.prototype.toString.call(window.operamini) ? (e = document.createElement("iframe"), e.style.display = "none", document.documentElement.appendChild(e), r = e.contentWindow.document) : document.implementation && document.implementation.createHTMLDocument ? r = document.implementation.createHTMLDocument("") : document.implementation && document.implementation.createDocument ? (r = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null), r.documentElement.appendChild(r.createElement("head")), r.documentElement.appendChild(r.createElement("body"))) : window.ActiveXObject && (r = new window.ActiveXObject("htmlfile"), r.write("<head></head><body></body>"), r.close()), !r) throw Error("base not supported"); var a = r.createElement("base"); a.href = n, r.getElementsByTagName("head")[0].appendChild(a); var i = r.createElement("a"); return i.href = t, i.href } finally { e && e.parentNode.removeChild(e) } }()); var l = i(t || ""), f = function () { if (!("defineProperties" in Object)) return !1; try { var e = {}; return Object.defineProperties(e, { prop: { get: function () { return !0 } } }), e.prop } catch (t) { return !1 } }(), h = f ? this : document.createElement("a"), m = new o(l.search ? l.search.substring(1) : null); return m._url_object = h, Object.defineProperties(h, { href: { get: function () { return l.href }, set: function (e) { l.href = e, r(), u() }, enumerable: !0, configurable: !0 }, origin: { get: function () { return "origin" in l ? l.origin : this.protocol + "//" + this.host }, enumerable: !0, configurable: !0 }, protocol: { get: function () { return l.protocol }, set: function (e) { l.protocol = e }, enumerable: !0, configurable: !0 }, username: { get: function () { return l.username }, set: function (e) { l.username = e }, enumerable: !0, configurable: !0 }, password: { get: function () { return l.password }, set: function (e) { l.password = e }, enumerable: !0, configurable: !0 }, host: { get: function () { var e = { "http:": /:80$/, "https:": /:443$/, "ftp:": /:21$/ }[l.protocol]; return e ? l.host.replace(e, "") : l.host }, set: function (e) { l.host = e }, enumerable: !0, configurable: !0 }, hostname: { get: function () { return l.hostname }, set: function (e) { l.hostname = e }, enumerable: !0, configurable: !0 }, port: { get: function () { return l.port }, set: function (e) { l.port = e }, enumerable: !0, configurable: !0 }, pathname: { get: function () { return "/" !== l.pathname.charAt(0) ? "/" + l.pathname : l.pathname }, set: function (e) { l.pathname = e }, enumerable: !0, configurable: !0 }, search: { get: function () { return l.search }, set: function (e) { l.search !== e && (l.search = e, r(), u()) }, enumerable: !0, configurable: !0 }, searchParams: { get: function () { return m }, enumerable: !0, configurable: !0 }, hash: { get: function () { return l.hash }, set: function (e) { l.hash = e, r() }, enumerable: !0, configurable: !0 }, toString: { value: function () { return l.toString() }, enumerable: !1, configurable: !0 }, valueOf: { value: function () { return l.valueOf() }, enumerable: !1, configurable: !0 } }), h } var c, s = e.URL; try { if (s) { if ("searchParams" in (c = new e.URL("http://example.com"))) { var f = new l("http://example.com"); if (f.search = "a=1&b=2", "http://example.com/?a=1&b=2" === f.href && (f.search = "", "http://example.com/" === f.href)) return } "href" in c || (c = undefined), c = undefined } } catch (m) { } if (Object.defineProperties(o.prototype, { append: { value: function (e, t) { this._list.push({ name: e, value: t }), this._update_steps() }, writable: !0, enumerable: !0, configurable: !0 }, "delete": { value: function (e) { for (var t = 0; t < this._list.length;)this._list[t].name === e ? this._list.splice(t, 1) : ++t; this._update_steps() }, writable: !0, enumerable: !0, configurable: !0 }, get: { value: function (e) { for (var t = 0; t < this._list.length; ++t)if (this._list[t].name === e) return this._list[t].value; return null }, writable: !0, enumerable: !0, configurable: !0 }, getAll: { value: function (e) { for (var t = [], n = 0; n < this._list.length; ++n)this._list[n].name === e && t.push(this._list[n].value); return t }, writable: !0, enumerable: !0, configurable: !0 }, has: { value: function (e) { for (var t = 0; t < this._list.length; ++t)if (this._list[t].name === e) return !0; return !1 }, writable: !0, enumerable: !0, configurable: !0 }, set: { value: function (e, t) { for (var n = !1, r = 0; r < this._list.length;)this._list[r].name === e ? n ? this._list.splice(r, 1) : (this._list[r].value = t, n = !0, ++r) : ++r; n || this._list.push({ name: e, value: t }), this._update_steps() }, writable: !0, enumerable: !0, configurable: !0 }, entries: { value: function () { return new u(this._list, "key+value") }, writable: !0, enumerable: !0, configurable: !0 }, keys: { value: function () { return new u(this._list, "key") }, writable: !0, enumerable: !0, configurable: !0 }, values: { value: function () { return new u(this._list, "value") }, writable: !0, enumerable: !0, configurable: !0 }, forEach: { value: function (e) { var t = arguments.length > 1 ? arguments[1] : undefined; this._list.forEach(function (n) { e.call(t, n.value, n.name) }) }, writable: !0, enumerable: !0, configurable: !0 }, toString: { value: function () { return r(this._list) }, writable: !0, enumerable: !1, configurable: !0 } }), "Symbol" in e && "iterator" in e.Symbol && (Object.defineProperty(o.prototype, e.Symbol.iterator, { value: o.prototype.entries, writable: !0, enumerable: !0, configurable: !0 }), Object.defineProperty(u.prototype, e.Symbol.iterator, { value: function () { return this }, writable: !0, enumerable: !0, configurable: !0 })), s) for (var h in s) s.hasOwnProperty(h) && "function" == typeof s[h] && (l[h] = s[h]); e.URL = l, e.URLSearchParams = o }(), function () { if ("1" !== new e.URLSearchParams([["a", 1]]).get("a") || "1" !== new e.URLSearchParams({ a: 1 }).get("a")) { var r = e.URLSearchParams; e.URLSearchParams = function (e) { if (e && "object" == typeof e && t(e)) { var a = new r; return n(e).forEach(function (e) { if (!t(e)) throw TypeError(); var r = n(e); if (2 !== r.length) throw TypeError(); a.append(r[0], r[1]) }), a } return e && "object" == typeof e ? (a = new r, Object.keys(e).forEach(function (t) { a.set(t, e[t]) }), a) : new r(e) } } }() }(self); }).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});

    (function (undefined) {
        function Call(t, l) { var n = arguments.length > 2 ? arguments[2] : []; if (!1 === IsCallable(t)) throw new TypeError(Object.prototype.toString.call(t) + "is not a function."); return t.apply(l, n) } function CreateMethodProperty(e, r, t) { var a = { value: t, writable: !0, enumerable: !1, configurable: !0 }; Object.defineProperty(e, r, a) } function Get(n, t) { return n[t] } function IsCallable(n) { return "function" == typeof n } function RequireObjectCoercible(e) { if (null === e || e === undefined) throw TypeError(); return e } function SameValueNonNumber(e, n) { return e === n } function ToBoolean(o) { return Boolean(o) } function ToInteger(n) { var i = Number(n); return isNaN(i) ? 0 : 1 / i === Infinity || 1 / i == -Infinity || i === Infinity || i === -Infinity ? i : (i < 0 ? -1 : 1) * Math.floor(Math.abs(i)) } function ToLength(n) { var t = ToInteger(n); return t <= 0 ? 0 : Math.min(t, Math.pow(2, 53) - 1) } function ToObject(e) { if (null === e || e === undefined) throw TypeError(); return Object(e) } function GetV(t, e) { return ToObject(t)[e] } function GetMethod(e, n) { var r = GetV(e, n); if (null === r || r === undefined) return undefined; if (!1 === IsCallable(r)) throw new TypeError("Method not callable: " + n); return r } function Type(e) { switch (typeof e) { case "undefined": return "undefined"; case "boolean": return "boolean"; case "number": return "number"; case "string": return "string"; case "symbol": return "symbol"; default: return null === e ? "null" : "Symbol" in this && e instanceof this.Symbol ? "symbol" : "object" } } function IsRegExp(e) { if ("object" !== Type(e)) return !1; var t = "Symbol" in this && "match" in this.Symbol ? Get(e, this.Symbol.match) : undefined; if (t !== undefined) return ToBoolean(t); try { var n = e.lastIndex; return e.lastIndex = 0, RegExp.prototype.exec.call(e), !0 } catch (r) { } finally { e.lastIndex = n } return !1 } function OrdinaryToPrimitive(r, t) { if ("string" === t) var e = ["toString", "valueOf"]; else e = ["valueOf", "toString"]; for (var i = 0; i < e.length; ++i) { var n = e[i], a = Get(r, n); if (IsCallable(a)) { var o = Call(a, r); if ("object" !== Type(o)) return o } } throw new TypeError("Cannot convert to primitive.") } function SameValueZero(n, e) { return Type(n) === Type(e) && ("number" === Type(n) ? !(!isNaN(n) || !isNaN(e)) || (1 / n === Infinity && 1 / e == -Infinity || (1 / n == -Infinity && 1 / e === Infinity || n === e)) : SameValueNonNumber(n, e)) } function ToPrimitive(e) { var t = arguments.length > 1 ? arguments[1] : undefined; if ("object" === Type(e)) { if (arguments.length < 2) var i = "default"; else t === String ? i = "string" : t === Number && (i = "number"); var r = "function" == typeof this.Symbol && "symbol" == typeof this.Symbol.toPrimitive ? GetMethod(e, this.Symbol.toPrimitive) : undefined; if (r !== undefined) { var n = Call(r, e, [i]); if ("object" !== Type(n)) return n; throw new TypeError("Cannot convert exotic object to primitive.") } return "default" === i && (i = "number"), OrdinaryToPrimitive(e, i) } return e } function ToString(t) { switch (Type(t)) { case "symbol": throw new TypeError("Cannot convert a Symbol value to a string"); case "object": return ToString(ToPrimitive(t, "string")); default: return String(t) } } if (!("find" in Array.prototype
        )) { CreateMethodProperty(Array.prototype, "find", function (e) { var r = ToObject(this), t = ToLength(Get(r, "length")); if (!1 === IsCallable(e)) throw new TypeError(e + " is not a function"); for (var n = arguments.length > 1 ? arguments[1] : undefined, o = 0; o < t;) { var a = ToString(o), i = Get(r, a); if (ToBoolean(Call(e, n, [i, o, r]))) return i; var o = o + 1 } return undefined }); } if (!("includes" in Array.prototype
        )) { CreateMethodProperty(Array.prototype, "includes", function (e) { "use strict"; var r = ToObject(this), t = ToLength(Get(r, "length")); if (0 === t) return !1; var o = ToInteger(arguments[1]); if (o >= 0) var n = o; else (n = t + o) < 0 && (n = 0); for (; n < t;) { var a = Get(r, ToString(n)); if (SameValueZero(e, a)) return !0; n += 1 } return !1 }); } if (!("startsWith" in String.prototype
        )) { CreateMethodProperty(String.prototype, "startsWith", function (t) { "use strict"; var e = arguments.length > 1 ? arguments[1] : undefined, r = RequireObjectCoercible(this), n = ToString(r); if (IsRegExp(t)) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression"); var i = ToString(t), o = ToInteger(e), s = n.length, a = Math.min(Math.max(o, 0), s); return !(i.length + a > s) && 0 === n.substr(a).indexOf(t) }); }
    }).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
}



(function () {
    'use strict';

    if (self.fetch) {
        return
    }

    function normalizeName(name) {
        if (typeof name !== 'string') {
            name = name.toString();
        }
        if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
            throw new TypeError('Invalid character in header field name')
        }
        return name.toLowerCase()
    }

    function normalizeValue(value) {
        if (typeof value !== 'string') {
            value = value.toString();
        }
        return value
    }

    function Headers(headers) {
        this.map = {}

        var self = this
        if (headers instanceof Headers) {
            headers.forEach(function (name, values) {
                values.forEach(function (value) {
                    self.append(name, value)
                })
            })

        } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function (name) {
                self.append(name, headers[name])
            })
        }
    }

    Headers.prototype.append = function (name, value) {
        name = normalizeName(name)
        value = normalizeValue(value)
        var list = this.map[name]
        if (!list) {
            list = []
            this.map[name] = list
        }
        list.push(value)
    }

    Headers.prototype['delete'] = function (name) {
        delete this.map[normalizeName(name)]
    }

    Headers.prototype.get = function (name) {
        var values = this.map[normalizeName(name)]
        return values ? values[0] : null
    }

    Headers.prototype.getAll = function (name) {
        return this.map[normalizeName(name)] || []
    }

    Headers.prototype.has = function (name) {
        return this.map.hasOwnProperty(normalizeName(name))
    }

    Headers.prototype.set = function (name, value) {
        this.map[normalizeName(name)] = [normalizeValue(value)]
    }

    // Instead of iterable for now.
    Headers.prototype.forEach = function (callback) {
        var self = this
        Object.getOwnPropertyNames(this.map).forEach(function (name) {
            callback(name, self.map[name])
        })
    }

    function consumed(body) {
        if (body.bodyUsed) {
            return fetch.Promise.reject(new TypeError('Already read'))
        }
        body.bodyUsed = true
    }

    function fileReaderReady(reader) {
        return new fetch.Promise(function (resolve, reject) {
            reader.onload = function () {
                resolve(reader.result)
            }
            reader.onerror = function () {
                reject(reader.error)
            }
        })
    }

    function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader()
        reader.readAsArrayBuffer(blob)
        return fileReaderReady(reader)
    }

    function readBlobAsText(blob) {
        var reader = new FileReader()
        reader.readAsText(blob)
        return fileReaderReady(reader)
    }

    var support = {
        blob: 'FileReader' in self && 'Blob' in self && (function () {
            try {
                new Blob();
                return true
            } catch (e) {
                return false
            }
        })(),
        formData: 'FormData' in self
    }

    function Body() {
        this.bodyUsed = false


        this._initBody = function (body) {
            this._bodyInit = body
            if (typeof body === 'string') {
                this._bodyText = body
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
                this._bodyBlob = body
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
                this._bodyFormData = body
            } else if (!body) {
                this._bodyText = ''
            } else {
                throw new Error('unsupported BodyInit type')
            }
        }

        if (support.blob) {
            this.blob = function () {
                var rejected = consumed(this)
                if (rejected) {
                    return rejected
                }

                if (this._bodyBlob) {
                    return fetch.Promise.resolve(this._bodyBlob)
                } else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as blob')
                } else {
                    return fetch.Promise.resolve(new Blob([this._bodyText]))
                }
            }

            this.arrayBuffer = function () {
                return this.blob().then(readBlobAsArrayBuffer)
            }

            this.text = function () {
                var rejected = consumed(this)
                if (rejected) {
                    return rejected
                }

                if (this._bodyBlob) {
                    return readBlobAsText(this._bodyBlob)
                } else if (this._bodyFormData) {
                    throw new Error('could not read FormData body as text')
                } else {
                    return fetch.Promise.resolve(this._bodyText)
                }
            }
        } else {
            this.text = function () {
                var rejected = consumed(this)
                return rejected ? rejected : fetch.Promise.resolve(this._bodyText)
            }
        }

        if (support.formData) {
            this.formData = function () {
                return this.text().then(decode)
            }
        }

        this.json = function () {
            return this.text().then(function (text) {
                return JSON.parse(text);
            });
        }

        return this
    }

    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

    function normalizeMethod(method) {
        var upcased = method.toUpperCase()
        return (methods.indexOf(upcased) > -1) ? upcased : method
    }

    function Request(url, options) {
        options = options || {}
        this.url = url

        this.credentials = options.credentials || 'omit'
        this.headers = new Headers(options.headers)
        this.method = normalizeMethod(options.method || 'GET')
        this.mode = options.mode || null
        this.referrer = null

        if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
            throw new TypeError('Body not allowed for GET or HEAD requests')
        }
        this._initBody(options.body)
    }

    function decode(body) {
        var form = new FormData()
        body.trim().split('&').forEach(function (bytes) {
            if (bytes) {
                var split = bytes.split('=')
                var name = split.shift().replace(/\+/g, ' ')
                var value = split.join('=').replace(/\+/g, ' ')
                form.append(decodeURIComponent(name), decodeURIComponent(value))
            }
        })
        return form
    }

    function headers(xhr) {
        var head = new Headers()
        var pairs = xhr.getAllResponseHeaders().trim().split('\n')
        pairs.forEach(function (header) {
            var split = header.trim().split(':')
            var key = split.shift().trim()
            var value = split.join(':').trim()
            head.append(key, value)
        })
        return head
    }

    var noXhrPatch =
        typeof window !== 'undefined' && !!window.ActiveXObject &&
        !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

    function getXhr() {
        // from backbone.js 1.1.2
        // https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L1181
        if (noXhrPatch && !(/^(get|post|head|put|delete|options)$/i.test(this.method))) {
            this.usingActiveXhr = true;
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        return new XMLHttpRequest();
    }

    Body.call(Request.prototype)

    function Response(bodyInit, options) {
        if (!options) {
            options = {}
        }

        this._initBody(bodyInit)
        this.type = 'default'
        this.url = null
        this.status = options.status
        this.ok = this.status >= 200 && this.status < 300
        this.statusText = options.statusText
        this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
        this.url = options.url || ''
    }

    Body.call(Response.prototype)

    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;

    self.fetch = function (input, init) {
        // TODO: Request constructor should accept input, init
        var request
        if (Request.prototype.isPrototypeOf(input) && !init) {
            request = input
        } else {
            request = new Request(input, init)
        }

        return new fetch.Promise(function (resolve, reject) {
            var xhr = getXhr();
            if (request.credentials === 'cors') {
                xhr.withCredentials = true;
            }

            function responseURL() {
                if ('responseURL' in xhr) {
                    return xhr.responseURL
                }

                // Avoid security warnings on getResponseHeader when not allowed by CORS
                if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
                    return xhr.getResponseHeader('X-Request-URL')
                }

                return;
            }

            function onload() {
                if (xhr.readyState !== 4) {
                    return
                }
                var status = (xhr.status === 1223) ? 204 : xhr.status
                if (status < 100 || status > 599) {
                    reject(new TypeError('Network request failed'))
                    return
                }
                var options = {
                    status: status,
                    statusText: xhr.statusText,
                    headers: headers(xhr),
                    url: responseURL()
                }
                var body = 'response' in xhr ? xhr.response : xhr.responseText;
                resolve(new Response(body, options))
            }

            xhr.onreadystatechange = onload;
            if (!self.usingActiveXhr) {
                xhr.onload = onload;
                xhr.onerror = function () {
                    reject(new TypeError('Network request failed'))
                }
            }

            xhr.open(request.method, request.url, true)

            if ('responseType' in xhr && support.blob) {
                xhr.responseType = 'blob'
            }

            request.headers.forEach(function (name, values) {
                values.forEach(function (value) {
                    xhr.setRequestHeader(name, value)
                })
            })

            xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
        })
    }
    fetch.Promise = self.Promise; // you could change it to your favorite alternative
    self.fetch.polyfill = true
})();



// #################################################################################################################################################################################################

if (!!document.documentMode) {
    /*!
     * css-vars-ponyfill
     * v1.17.2
     * https://github.com/jhildenbiddle/css-vars-ponyfill
     * (c) 2018-2019 John Hildenbiddle <http://hildenbiddle.com>
     * MIT license
     */
    !function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() :
            "function" == typeof define && define.amd ? define(t) :
                (e = e || self).cssVars = t()
    }
        (this, function () {
            "use strict";
            function e() {
                return (e = Object.assign || function (e) {
                    for (
                        var t = 1;
                        t < arguments.length;
                        t++) {
                        var n = arguments[t];
                        for (
                            var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    } return e
                }).apply(this, arguments)
            }
            function t(e) {
                return function (e) {
                    if (Array.isArray(e)) {
                        for (
                            var t = 0, n = new Array(e.length);
                            t < e.length;
                            t++)n[t] = e[t];
                        return n
                    }
                }
                    (e) || function (e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                            return Array.from(e)
                    }
                        (e) || function () {
                            throw new TypeError("Invalid attempt to spread non-iterable instance")
                        }()
            }
            function n(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = {
                        mimeType: t.mimeType || null, onBeforeSend: t.onBeforeSend || Function.prototype, onSuccess: t.onSuccess || Function.prototype
                        , onError: t.onError || Function.prototype
                        , onComplete: t.onComplete || Function.prototype
                    },
                    r = Array.isArray(e) ? e : [e],
                    o = Array.apply(null, Array(r.length)).map(function (e) {
                        return null
                    }
                    );
                function s() {
                    return !("<" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").trim().charAt(0))
                }
                function a(e, t) {
                    n.onError(e, r[t], t)
                }
                function c(e, t) {
                    var s = n.onSuccess(e, r[t], t);
                    e = !1 === s ? "" : s || e, o[t] = e,
                        -1 === o.indexOf(null) && n.onComplete(o)
                }
                var i = document.createElement("a");
                r.forEach(function (e, t) {
                    if (i.setAttribute("href", e),
                        i.href = String(i.href),
                        Boolean(document.all && !window.atob) && i.host.split(":")[0] !== location.host.split(":")[0]) {
                        if (i.protocol === location.protocol) {
                            var r = new XDomainRequest;
                            r.open("GET", e),
                                r.timeout = 0,
                                r.onprogress = Function.prototype,
                                r.ontimeout = Function.prototype,
                                r.onload = function () { s(r.responseText) ? c(r.responseText, t) : a(r, t) }
                                , r.onerror = function (e) { a(r, t) }
                                , setTimeout(function () {
                                    r.send()
                                }, 0)
                        } else
                            console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e, ")")),
                                a(null, t)
                    } else {
                        var o = new XMLHttpRequest;
                        o.open("GET", e),
                            n.mimeType && o.overrideMimeType && o.overrideMimeType(n.mimeType),
                            n.onBeforeSend(o, e, t),
                            o.onreadystatechange =
                            function () {
                                4 === o.readyState && (200 === o.status && s(o.responseText) ? c(o.responseText, t) : a(o, t))
                            },
                            o.send()
                    }
                })
            }
            function r(e) {
                var t = {
                    cssComments: /\/\*[\s\S]+?\*\//g,
                    cssImports: /(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g
                },
                    r = {
                        rootElement: e.rootElement || document, include: e.include || 'style,link[rel="stylesheet"]',
                        exclude: e.exclude || null, filter: e.filter || null, useCSSOM: e.useCSSOM || !1, onBeforeSend: e.onBeforeSend || Function.prototype,
                        onSuccess: e.onSuccess || Function.prototype,
                        onError: e.onError || Function.prototype,
                        onComplete: e.onComplete || Function.prototype
                    },
                    s = Array.apply(null, r.rootElement.querySelectorAll(r.include)).filter(
                        function (e) {
                            return t = e, n = r.exclude,
                                !(t.matches || t.matchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector).call(t, n);
                            var t, n
                        }),
                    a = Array.apply(null, Array(s.length)).map(
                        function (e) {
                            return null
                        });
                function c() {
                    if (-1 === a.indexOf(null)) {
                        var e = a.join("");
                        r.onComplete(e, a, s)
                    }
                }
                function i(e, t, o, s) {
                    var i = r.onSuccess(e, o, s);
                    (function e(t, o, s, a) {
                        var c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [];
                        var u = l(t, s, i); u.rules.length ? n(u.absoluteUrls, {
                            onBeforeSend: function (e, t, n) {
                                r.onBeforeSend(e, o, t)
                            },
                            onSuccess: function (e, t, n) {
                                var s = r.onSuccess(e, o, t),
                                    a = l(e = !1 === s ? "" : s || e, t, i);
                                return a.rules.forEach(function (t, n) {
                                    e = e.replace(t, a.absoluteRules[n])
                                }), e
                            },
                            onError: function (n, r, l) {
                                c.push({ xhr: n, url: r }),
                                    i.push(u.rules[l]),
                                    e(t, o, s, a, c, i)
                            },
                            onComplete: function (n) {
                                n.forEach(function (e, n) {
                                    t = t.replace(u.rules[n], e)
                                }),
                                    e(t, o, s, a, c, i)
                            }
                        }) : a(t, c)
                    })(e = void 0 !== i && !1 === Boolean(i) ? "" : i || e, o, s,
                        function (e, n) {
                            null === a[t] && (n.forEach(
                                function (e) {
                                    return r.onError(e.xhr, o, e.url)
                                }),
                                !r.filter || r.filter.test(e) ? a[t] = e : a[t] = "",
                                c())
                        })
                }
                function l(e, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        s = {};
                    return s.rules = (e.replace(t.cssComments, "").match(t.cssImports) || []).
                        filter(function (e) {
                            return -1 === r.indexOf(e)
                        }),
                        s.urls = s.rules.map(function (e) {
                            return e.replace(t.cssImports, "$1")
                        }),
                        s.absoluteUrls = s.urls.map(function (e) {
                            return o(e, n)
                        }),
                        s.absoluteRules = s.rules.map(function (e, t) {
                            var r = s.urls[t],
                                a = o(s.absoluteUrls[t], n);
                            return e.replace(r, a)
                        }), s
                } s.length ? s.forEach(function (e, t) {
                    var s = e.getAttribute("href"),
                        l = e.getAttribute("rel"),
                        u = "LINK" === e.nodeName && s && l && "stylesheet" === l.toLowerCase(),
                        f = "STYLE" === e.nodeName;
                    if (u) n(s, {
                        mimeType: "text/css",
                        onBeforeSend:
                            function (t, n, o) {
                                r.onBeforeSend(t, e, n)
                            },
                        onSuccess:
                            function (n, r, a) {
                                var c = o(s, location.href); i(n, t, e, c)
                            },
                        onError:
                            function (n, o, s) {
                                a[t] = "",
                                    r.onError(n, e, o), c()
                            }
                    }); else if (f) {
                        var p = e.textContent; r.useCSSOM && (p = Array.apply(null, e.sheet.cssRules).map(function (e) {
                            return e.cssText
                        }).join("")),
                            i(p, t, e, location.href)
                    } else
                        a[t] = "", c()
                }) : r.onComplete("", [])
            }
            function o(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.href,
                    n = document.implementation.createHTMLDocument(""),
                    r = n.createElement("base"),
                    o = n.createElement("a");
                return n.head.appendChild(r),
                    n.body.appendChild(o),
                    r.href = t,
                    o.href = e,
                    o.href
            }
            var s = a;
            function a(e, t, n) {
                e instanceof RegExp && (e = c(e, n)),
                    t instanceof RegExp && (t = c(t, n));
                var r = i(e, t, n);
                return r && {
                    start: r[0],
                    end: r[1],
                    pre: n.slice(0, r[0]),
                    body: n.slice(r[0] + e.length, r[1]),
                    post: n.slice(r[1] + t.length)
                }
            }
            function c(e, t) {
                var n = t.match(e);
                return n ? n[0] : null
            }
            function i(e, t, n) {
                var r, o, s, a, c, i = n.indexOf(e), l = n.indexOf(t, i + 1), u = i;
                if (i >= 0 && l > 0) {
                    for (r = [], s = n.length; u >= 0 && !c;)u == i ? (r.push(u), i = n.indexOf(e, u + 1)) : 1 == r.length ? c = [r.pop(), l] : ((o = r.pop()) < s && (s = o, a = l), l = n.indexOf(t, u + 1)), u = i < l && i >= 0 ? i : l; r.length && (c = [s, a])
                }
                return c
            }
            function l(t) {
                var n = e({}, { onlyVars: !1, removeComments: !1 }, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
                function r(e) {
                    throw new Error("CSS parse error: ".concat(e))
                }
                function o(e) {
                    var n = e.exec(t);
                    if (n) return t = t.slice(n[0].length), n
                }
                function a() {
                    return o(/^{\s*/)
                }
                function c() {
                    return o(/^}/)
                }
                function i() {
                    o(/^\s*/)
                }
                function l() {
                    if (i(), "/" === t[0] && "*" === t[1]) {
                        for (var e = 2; t[e] && ("*" !== t[e] || "/" !== t[e + 1]);)e++;
                        if (!t[e]) return r("end of comment is missing");
                        var n = t.slice(2, e);
                        return t = t.slice(e + 2), { type: "comment", comment: n }
                    }
                }
                function u() {
                    for (var e, t = []; e = l();)t.push(e);
                    return n.removeComments ? [] : t
                }
                function f() {
                    for (i(); "}" === t[0];)r("extra closing bracket");
                    var e = o(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);
                    if (e) return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g, "").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,
                        function (e) { return e.replace(/,/g, "â€Œ") }).split(/\s*(?![^(]*\)),\s*/).map(function (e) { return e.replace(/\u200C/g, ",") })
                }
                function p() {
                    o(/^([;\s]*)+/); var e = /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g, t = o(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
                    if (t) {
                        if (t = t[0].trim(), !o(/^:\s*/)) return r("property missing ':'");
                        var n = o(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),
                            s = { type: "declaration", property: t.replace(e, ""), value: n ? n[0].replace(e, "").trim() : "" };
                        return o(/^[;\s]*/), s
                    }
                }
                function d() { if (!a()) return r("missing '{'"); for (var e, t = u(); e = p();)t.push(e), t = t.concat(u()); return c() ? t : r("missing '}'") }
                function m() {
                    i(); for (var e, t = []; e = o(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]), o(/^,\s*/); if (t.length)
                        return { type: "keyframe", values: t, declarations: d() }
                }
                function v() {
                    if (i(), "@" === t[0]) {
                        var e = function () {
                            var e = o(/^@([-\w]+)?keyframes\s*/); if (e) {
                                var t = e[1]; if (!(e = o(/^([-\w]+)\s*/))) return r("@keyframes missing name");
                                var n, s = e[1]; if (!a()) return r("@keyframes missing '{'"); for (var i = u(); n = m();)i.push(n), i = i.concat(u());
                                return c() ? { type: "keyframes", name: s, vendor: t, keyframes: i } : r("@keyframes missing '}'")
                            }
                        }() || function () {
                            var e = o(/^@supports *([^{]+)/);
                            if (e) return {
                                type: "supports",
                                supports: e[1].trim(),
                                rules: h()
                            }
                        }() || function () {
                            if (o(/^@host\s*/))
                                return {
                                    type: "host",
                                    rules: h()
                                }
                        }() || function () {
                            var e = o(/^@media *([^{]+)/);
                            if (e) return {
                                type: "media",
                                media: e[1].trim(),
                                rules: h()
                            }
                        }() ||
                            function () {
                                var e = o(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
                                if (e) return { type: "custom-media", name: e[1].trim(), media: e[2].trim() }
                            }() ||
                            function () {
                                if (o(/^@page */)) return { type: "page", selectors: f() || [], declarations: d() }
                            }() ||
                            function () {
                                var e = o(/^@([-\w]+)?document *([^{]+)/);
                                if (e) return { type: "document", document: e[2].trim(), vendor: e[1] ? e[1].trim() : null, rules: h() }
                            }() ||
                            function () {
                                if (o(/^@font-face\s*/)) return { type: "font-face", declarations: d() }
                            }() ||
                            function () {
                                var e = o(/^@(import|charset|namespace)\s*([^;]+);/);
                                if (e) return { type: e[1], name: e[2].trim() }
                            }();
                        if (e && n.onlyVars) {
                            var s = !1;
                            if (e.declarations) s = e.declarations.some(
                                function (e) {
                                    return /var\(/.test(e.value)
                                });
                            else s = (e.keyframes || e.rules || []).some(
                                function (e) {
                                    return (e.declarations || []).some(
                                        function (e) {
                                            return /var\(/.test(e.value)
                                        })
                                });
                            return s ? e : {}
                        }
                        return e
                    }
                }
                function y() {
                    if (n.onlyVars) {
                        var e = s("{", "}", t);
                        if (e) {
                            var o = -1 !== e.pre.indexOf(":root") && /--\S*\s*:/.test(e.body),
                                a = /var\(/.test(e.body);
                            if (!o && !a)
                                return t = t.slice(e.end + 1),
                                    {}
                        }
                    } var c = f() || [],
                        i = n.onlyVars ? d().filter(function (e) {
                            var t = c.some(function (e) {
                                return -1 !== e.indexOf(":root")
                            }) && /^--\S/.test(e.property),
                                n = /var\(/.test(e.value);
                            return t || n
                        }) : d();
                    return c.length || r("selector missing"),
                    {
                        type: "rule",
                        selectors: c,
                        declarations: i
                    }
                }
                function h(e) {
                    if (!e && !a())
                        return r("missing '{'");
                    for (
                        var n, o = u();
                        t.length && (e || "}" !== t[0]) && (n = v() || y());
                    )n.type && o.push(n),
                        o = o.concat(u());
                    return e || c() ? o : r("missing '}'")
                } return
                {
                    type: "stylesheet",
                        stylesheet; {
                        rules: h(!0),
                            errors;[]
                    }
                }
            }
            a.range = i;
            var u = "--",
                f = "var",
                p = {
                    dom: {},
                    temp: {},
                    user: {}
                };
            function d(t) {
                var n, r, o = e({},
                    {
                        fixNestedCalc: !0,
                        onlyVars: !1,
                        persist: !1,
                        preserve: !1,
                        variables: {},
                        onWarning: function () { }
                    },
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}),
                    a = o.persist ? p.dom : p.temp = JSON.parse(JSON.stringify(p.dom)),
                    c = l(t, { onlyVars: o.onlyVars });
                if (c.stylesheet.rules.forEach(
                    function (e) {
                        var t = [];
                        if ("rule" === e.type && 1 === e.selectors.length && ":root" === e.selectors[0] && (e.declarations.forEach(
                            function (e, n) {
                                var r = e.property, o = e.value;
                                r && 0 === r.indexOf(u) && (a[r] = o, t.push(n))
                            }),
                            !o.preserve))
                            for (var n = t.length - 1;
                                n >= 0;
                                n--)e.declarations.splice(t[n], 1)
                    }),
                    Object.keys(p.user).forEach(
                        function (e) { a[e] = p.user[e] }),
                    Object.keys(o.variables).length) {
                    var i = {
                        declarations: [],
                        selectors: [":root"],
                        type: "rule"
                    };
                    Object.keys(o.variables).forEach(
                        function (e) {
                            var t = "--".concat(e.replace(/^-+/, "")),
                                n = o.variables[e];
                            o.persist && (p.user[t] = n),
                                a[t] !== n && (a[t] = n,
                                    i.declarations.push({
                                        type: "declaration",
                                        property: t,
                                        value: n
                                    }))
                        }),
                        o.preserve && i.declarations.length && c.stylesheet.rules.push(i)
                }
                return
                function e(t, n) {
                    t.rules.forEach(function (r) { r.rules ? e(r, n) : r.keyframes ? r.keyframes.forEach(function (e) { "keyframe" === e.type && n(e.declarations, r) }) : r.declarations && n(r.declarations, t) })
                } (c.stylesheet, function (e, t) {
                    for (var n, r, s, c = 0; c < e.length; c++)s = (n = e[c]).value,
                        "declaration" === n.type && s && -1 !== s.indexOf(f + "(") && (r = m(s, a, o)) !== n.value && (o.preserve ? (e.splice(c, 0, {
                            type: n.type,
                            property: n.property,
                            value: r
                        }), c++) : n.value = r)
                }),
                    o.fixNestedCalc && (n = c.stylesheet.rules,
                        r = /(-[a-z]+-)?calc\(/,
                        n.forEach(
                            function (e) {
                                e.declarations && e.declarations.forEach(
                                    function (e) {
                                        for (var t = e.value, n = "";
                                            r.test(t);
                                        ) {
                                            var o = s("calc(", ")", t || "");
                                            for (t = t.slice(o.end);
                                                r.test(o.body);) {
                                                var a = s(r, ")", o.body);
                                                o.body = "".concat(a.pre, "(").concat(a.body, ")").concat(a.post)
                                            } n += "".concat(o.pre, "calc(").concat(o.body),
                                                n += r.test(t) ? "" : ")".concat(o.post)
                                        } e.value = n || e.value
                                    })
                            })),
                    function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = {
                                charset:
                                    function (e) {
                                        return "@charset " + e.name + ";"
                                    },
                                comment:
                                    function (e) {
                                        return 0 === e.comment.indexOf("__CSSVARSPONYFILL") ? "/*" + e.comment + "*/" : ""
                                    },
                                "custom-media":
                                    function (e) {
                                        return "@custom-media " + e.name + " " + e.media + ";"
                                    },
                                declaration:
                                    function (e) {
                                        return e.property + ":" + e.value + ";"
                                    }, document:
                                    function (e) {
                                        return "@" + (e.vendor || "") + "document " + e.document + "{" + o(e.rules) + "}"
                                    },
                                "font-face":
                                    function (e) {
                                        return "@font-face{" + o(e.declarations) + "}"
                                    },
                                host:
                                    function (e) {
                                        return "@host{" + o(e.rules) + "}"
                                    },
                                import:
                                    function (e) {
                                        return "@import " + e.name + ";"
                                    },
                                keyframe:
                                    function (e) {
                                        return e.values.join(",") + "{" + o(e.declarations) + "}"
                                    },
                                keyframes:
                                    function (e) {
                                        return "@" + (e.vendor || "") + "keyframes " + e.name + "{" + o(e.keyframes) + "}"
                                    },
                                media:
                                    function (e) {
                                        return "@media " + e.media + "{" + o(e.rules) + "}"
                                    },
                                namespace: function (e) {
                                    return "@namespace " + e.name + ";"
                                },
                                page:
                                    function (e) {
                                        return "@page " + (e.selectors.length ? e.selectors.join(", ") : "") + "{" + o(e.declarations) + "}"
                                    },
                                rule:
                                    function (e) {
                                        var t = e.declarations;
                                        if (t.length)
                                            return e.selectors.join(",") + "{" + o(t) + "}"
                                    },
                                supports:
                                    function (e) {
                                        return "@supports " + e.supports + "{" + o(e.rules) + "}"
                                    }
                            };
                        function o(e) {
                            for (var o = "", s = 0; s < e.length; s++) {
                                var a = e[s]; n && n(a);
                                var c = r[a.type](a);
                                c && (o += c, c.length && a.selectors && (o += t))
                            } return o
                        }
                        return o(e.stylesheet.rules)
                    }(c)
            }
            function m(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 ? arguments[3] : void 0;
                if (-1 === e.indexOf("var("))
                    return e;
                var o = s("(", ")", e);
                return o ? "var" === o.pre.slice(-3) ? 0 === o.body.trim().length ? (n.onWarning("var() must contain a non-whitespace string"),
                    e) : o.pre.slice(0, -3) +
                    function (e) {
                        var o = e.split(",")[0].replace(/[\s\n\t]/g, ""),
                            s = (e.match(/(?:\s*,\s*){1}(.*)?/) || [])[1],
                            a = t.hasOwnProperty(o) ? String(t[o]) : void 0,
                            c = a || (s ? String(s) : void 0),
                            i = r || e;
                        return a || n.onWarning('variable "'.concat(o, '" is undefined')),
                            c && "undefined" !== c && c.length > 0 ? m(c, t, n, i) : "var(".concat(i, ")")
                    }(o.body) + m(o.post, t, n) : o.pre + "(".concat(m(o.body, t, n),
                        ")") + m(o.post, t, n) : (-1 !== e.indexOf("var(") && n.onWarning('missing closing ")" in the value "'.concat(e, '"')), e)
            }
            var v = "css-vars-ponyfill",
                y = "undefined" != typeof window,
                h = y && window.CSS && window.CSS.supports && window.CSS.supports("(--a: 0)"),
                g = "cssVars(): ", S = {
                    rootElement: y ? document : null,
                    shadowDOM: !1,
                    include: "style,link[rel=stylesheet]",
                    exclude: "",
                    variables: {},
                    fixNestedCalc: !0,
                    onlyLegacy: !0,
                    onlyVars: !1,
                    preserve: !1,
                    silent: !1,
                    updateDOM: !0,
                    updateURLs: !0,
                    watch: null,
                    onBeforeSend:
                        function () { },
                    onSuccess:
                        function () { },
                    onWarning:
                        function () {

                        },
                    onError:
                        function () {

                        }, onComplete:


                        function () { }
                },
                E = {
                    cssComments: /\/\*[\s\S]+?\*\//g,
                    cssKeyframes: /@(?:-\w*-)?keyframes/,
                    cssRootRules: /(?::root\s*{\s*[^}]*})/g,
                    cssUrls: /url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,
                    cssVars: /(?:(?::root\s*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/
                },
                b = null, x = null, C = !1;
            function O() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = e({}, S, n), s = v;
                function a(e, t, n, r) {
                    o.silent || console.error("".concat(g).concat(e, "\n"), t), o.onError(e, t, n, r)
                }
                function c(e) {
                    o.silent || console.warn("".concat(g).concat(e)), o.onWarning(e)
                }
                if (o.exclude = "#".concat(s) + (o.exclude ? ",".concat(o.exclude) : ""), o._benchmark = o._benchmark ? o._benchmark : k(), y)
                    if (!1 === o.watch && b && b.disconnect(), o.watch) !
                        function (e, t) {
                            if (!window.MutationObserver)
                                return;
                            var n =
                                function (e) {
                                    return "LINK" === e.tagName && -1 !== (e.getAttribute("rel") || "").indexOf("stylesheet")
                                },
                                r =
                                    function (e) {
                                        return "STYLE" === e.tagName && (!t || e.id !== t)
                                    };
                            b && b.disconnect();
                            e.watch = S.watch, (b = new MutationObserver(
                                function (t) {
                                    var o = t.some(
                                        function (e) {
                                            var t = !1;
                                            if ("attributes" === e.type) t = n(e.target) || r(e.target);
                                            else if ("childList" === e.type) {
                                                var o = Array.apply(null, e.addedNodes),
                                                    s = Array.apply(null,
                                                        e.removedNodes);
                                                t = [].concat(o, s).some(
                                                    function (e) {
                                                        var t = n(e) && !e.disabled,
                                                            o = r(e) && E.cssVars.test(e.textContent);
                                                        return t || o
                                                    })
                                            } return t
                                        }); o && w(e)
                                })).observe(document.documentElement, {
                                    attributes: !0,
                                    attributeFilter: ["disabled", "href"],
                                    childList: !0,
                                    subtree: !0
                                })
                        }(o, s), w(o);
                    else if ("loading" !== document.readyState) {
                        var i = o.shadowDOM || o.rootElement.shadowRoot || o.rootElement.host;
                        if (h && o.onlyLegacy) {
                            if (o.updateDOM) {
                                var l = o.rootElement.host || (o.rootElement === document ? document.documentElement : o.rootElement);
                                Object.keys(o.variables).forEach(
                                    function (e) {
                                        var t = "--".concat(e.replace(/^-+/, "")),
                                            n = o.variables[e]; l.style.setProperty(t, n)
                                    })
                            }
                        }
                        else r(i && !C ? {
                            rootElement: S.rootElement,
                            include: S.include,
                            exclude: o.exclude,
                            onSuccess:

                                function (e, t, n) {
                                    return (e.match(E.cssRootRules) || []).join("") || !1
                                },
                            onComplete:
                                function (e, t, n) {
                                    d(e, { persist: !0 }),
                                        C = !0, O(o)
                                }
                        } : {
                            rootElement: o.rootElement,
                            include: o.include,
                            exclude: o.exclude,
                            filter: o.onlyVars ? E.cssVars : null,
                            onBeforeSend: o.onBeforeSend,
                            onSuccess:
                                function (e, t, n) {
                                    var r = o.onSuccess(e, t, n); (e = void 0 !== r && !1 === Boolean(r) ? "" : r || e, t.setAttribute("data-cssvars", ""), o.updateURLs) && (e.replace(E.cssComments, "").match(E.cssUrls) || []).forEach(
                                        function (t) {
                                            var r = t.replace(E.cssUrls, "$1"), o = A(r, n);
                                            e = e.replace(t,
                                                t.replace(r, o))
                                        });
                                    return e
                                },
                            onError:
                                function (e, t, n) {
                                    var r = e.responseURL || A(n, location.href),
                                        o = e.statusText ? "(".concat(e.statusText, ")") : "Unspecified Error" + (0 === e.status ? " (possibly CORS related)" : "");
                                    a("CSS XHR Error: ".concat(r, " ").concat(e.status, " ").concat(o), t, e, r)
                                },
                            onComplete:
                                function (n, r, i) {
                                    var l, u = JSON.stringify({
                                        include: o.include,
                                        exclude: o.exclude,
                                        variables: o.variables,
                                        fixNestedCalc: o.fixNestedCalc,
                                        onlyVars: o.onlyVars,
                                        preserve: o.preserve,
                                        silent: o.silent,
                                        updateURLs: o.updateURLs
                                    }),
                                        f = o.rootElement.querySelector("#".concat(s)) || document.createElement("style"), m = f.__cssVars || {},
                                        v = m.cssText === n && m.settings === u;
                                    if (v) n = f.textContent, o.silent || console.info("".concat(g,
                                        "No changes"), f);
                                    else {
                                        f.__cssVars = {
                                            cssText: n,
                                            settings: u
                                        },
                                            n = r.map(
                                                function (e, t) { return E.cssVars.test(e) ? e : "/*__CSSVARSPONYFILL-".concat(t, "__*/") }).join(""); try {
                                                    n = d(n, {
                                                        fixNestedCalc: o.fixNestedCalc,
                                                        onlyVars: o.onlyVars,
                                                        persist: o.updateDOM,
                                                        preserve: o.preserve,
                                                        variables: o.variables,
                                                        onWarning: c
                                                    }),
                                                        l = E.cssKeyframes.test(n),
                                                        n = n.replace(/\/\*__CSSVARSPONYFILL-(\d+)__\*\//g,
                                                            function (e, t) {
                                                                return r[t]
                                                            })
                                                }
                                        catch (e) {
                                            var y = !1; r.forEach(
                                                function (e, t) {
                                                    try { e = d(e, o) }
                                                    catch (e) { var n = i[t - 0]; y = !0, a(e.message, n) }
                                                }),
                                                y || a(e.message || e)
                                        }
                                    }
                                    if (o.shadowDOM) for (var h, S = [o.rootElement].concat(t(o.rootElement.querySelectorAll("*"))), b = 0; h = S[b]; ++b) {
                                        if (h.shadowRoot && h.shadowRoot.querySelector("style")) O(e({},
                                            o,
                                            {
                                                rootElement: h.shadowRoot,
                                                variables: p.dom
                                            }))
                                    } if (!v && i && i.length) {
                                        var x = o.rootElement.querySelectorAll("link[data-cssvars],style[data-cssvars]") || o.rootElement.querySelectorAll('link[rel+="stylesheet"],style'),
                                            C = x ? x[x.length - 1] : null;
                                        if (C) C.parentNode.insertBefore(f, C.nextSibling);
                                        else (o.rootElement.head || o.rootElement.body || o.rootElement).appendChild(f);
                                        o.updateDOM && (f.setAttribute("id", s),
                                            f.textContent = n, l &&
                                            function (e) {
                                                var t = ["animation-name", "-moz-animation-name", "-webkit-animation-name"].filter(
                                                    function (e) {
                                                        return getComputedStyle(document.body)[e]
                                                    })[0];
                                                if (t) {
                                                    for (
                                                        var n = e.getElementsByTagName("*"),
                                                        r = [],
                                                        o = 0,
                                                        s = n.length;
                                                        o < s; o++) {
                                                        var a = n[o],
                                                            c = getComputedStyle(a)[t];
                                                        "none" !== c && (a.style[t] += "__CSSVARSPONYFILL-KEYFRAMES__",
                                                            r.push(a))
                                                    } document.body.offsetHeight;
                                                    for (
                                                        var i = 0,
                                                        l = r.length;
                                                        i < l; i++) {
                                                        var u = r[i].style; u[t] = u[t].replace("__CSSVARSPONYFILL-KEYFRAMES__", "")
                                                    }
                                                }
                                            }(o.rootElement)),
                                            o.onComplete(n, f, JSON.parse(JSON.stringify(o.updateDOM ? p.dom : p.temp)),
                                                k() - o._benchmark)
                                    }
                                }
                        })
                    } else document.addEventListener("DOMContentLoaded",
                        function e(t) { O(n), document.removeEventListener("DOMContentLoaded", e) })
            }
            function w(e) {
                clearTimeout(x), x = setTimeout(
                    function () { e._benchmark = null, O(e) },
                    100)
            }
            function A(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : location.href,
                    n = document.implementation.createHTMLDocument(""),
                    r = n.createElement("base"),
                    o = n.createElement("a");
                return n.head.appendChild(r),
                    n.body.appendChild(o),
                    r.href = t, o.href = e,
                    o.href
            }
            function k() {
                return y && (window.performance || {}).now ? window.performance.now() : (new Date).getTime()
            } return O
        });
    //# sourceMappingURL=css-vars-ponyfill.min.js.map

    cssVars({ silent: false });

}

// #################################################################################################################################################################################################

// this script checks browser compatibility.
// in case IE 11 or earlier is used, the script uses the internal loginByUrl API to obtain the store GUID and an anonymous token needed to get to the login page.
// on login page a proper message will appear and further navigation will be blocked. 

(
    function () {
        if (window.navigator.userAgent.indexOf('MSIE ') !== -1 || window.navigator.userAgent.indexOf('Trident/7.') !== -1) {
            var url = window.location.href;

            fetch('/uStoreRestAPI/v1/store/loginByUrl',
                {
                    method: 'POST',
                    body: JSON.stringify({ FullURL: url }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then(function (r) { return r.json() })
                .then(function (json) {
                    const token = json.Token.Token;
                    const storeID = json.StoreID;

                    if (token && storeID)
                        window.location.href = '/ustore/logout.aspx?SecurityToken=' + token + '&StoreGuid=' + storeID + '&forceLogin=true'
                    else
                        window.location.href = '/ustore/error.aspx'

                }).catch(function (error) {
                    console.log(error)
                    window.location.href = '/ustore/error.aspx'
                })
        }
    })()

// #################################################################################################################################################################################################

//theme customization logic (injecting cssVariables/customCss into the DOM)
var themeCustomizationController = (function () {

    /* PRIVATE METHODS */
    var variablesContainerId = 'draftVariablesContainer';
    var customCssContainerId = 'draftCustomCssContainer';

    //create containers for injecting css into DOM
    function createStyleContainers() {
        insertStyleContainerToDom(variablesContainerId);
        insertStyleContainerToDom(customCssContainerId);
    }

    //insert style tag to dom with given id (if it not exists)
    function insertStyleContainerToDom(containerId) {
        var container = document.querySelector('#' + containerId);
        if (!container) {
            container = document.createElement('style');
            container.type = 'text/css';
            container.id = containerId;
            document.getElementsByTagName("body")[0].appendChild(container);
        }
    }

    //send message to legacy iframe to apply styles there
    function sendMessageToLegacy(msg) {
        var legacyFrame = document.querySelector('iframe.iframe');

        if (legacyFrame) {
            legacyFrame.contentWindow.postMessage(msg, '*');
        }
    }


    function injectCss(containerId, cssText) {
        //ensure that custom containers are in dom in right order
        createStyleContainers();

        var styleContainer = document.querySelector('#' + containerId);
        styleContainer.innerHTML = '';
        styleContainer.appendChild(document.createTextNode(cssText));
    }

    //in case you need to delete css properties, they will be visible from custom css link, so it must be deleted
    function removeCustomCssLink() {
        var linksToRemove = document.querySelectorAll('link[href*="/Css/Custom.css" i]');
        linksToRemove.forEach(function (link) {
            link.parentNode.removeChild(link);
        })
    }
    /* END OF PRIVATE METHODS */

    //PUBLIC METHODS:
    //- reloadVariables
    //- reloadCustomCss
    return {
        reloadVariables: function (msg) {
            injectCss(variablesContainerId, msg.data.css);
            sendMessageToLegacy(msg);
        },

        reloadCustomCss: function (msg) {
            injectCss(customCssContainerId, msg.data.css);
            removeCustomCssLink();
            sendMessageToLegacy(msg);
        }
    }

}());

//listen post message from parent page
window.addEventListener('message', function (e) {
    var msg = e.data;
    if (!msg) {
        return;
    }
    if (msg.type === '@RELOAD_DRAFT_VARS') {
        themeCustomizationController.reloadVariables(msg);
    }

    if (msg.type === '@RELOAD_DRAFT_CSS') {
        themeCustomizationController.reloadCustomCss(msg);
    }
});

// #################################################################################################################################################################################################

(function () {

    var queryOrCookieStrToObj = function (str) {
        if (str && str !== '') {
            return JSON.parse('{"' +
                str
                    .replace(/^(.*)\?/, '')
                    .split(/[&;]\s?/g)
                    .map(function (keyval) {
                        return keyval.replace(/=/, '":"')
                    })
                    .join('","')
                + '"}', function (key, value) {
                    return key === "" ? value : decodeURIComponent(value)
                })
        }
        return {}
    }

    var search = location.search.substring(1);
    var queryParams = queryOrCookieStrToObj(search)

    var cookieParams = {};
    document.cookie && document.cookie.split(/\s*;\s*/).forEach(function (pair) {
        pair = pair.split(/\s*=\s*/);
        cookieParams[pair[0]] = pair.splice(1).join('=')
    });

    if (queryParams.StoreGuid) {
        cookieParams._storeID = queryParams.StoreGuid
        document.cookie = "_storeID=" + queryParams.StoreGuid + '; path=/;'
    }

    var caltureRegex = /\/([a-z]{2}-[A-Za-z]{2})/;
    var culture = location.pathname.match(caltureRegex)

    var url = window.location.href

    if (culture && url && culture.length >= 2 && url.length > 0) {

        window.onload = function () {
            // check if google analytics code exists for store
            fetch('/uStoreRestAPI/v1/store/resourceByUrl?url=' + encodeURIComponent(url) + '&type=5&cultureCode=' + culture[1] + '&isDraft=false')
                .then(function (r) {
                    return r.text()
                })
                .then(function (text) {
                    const GA_ID = /UA-[0-9]*-[0-9]/
                    const res = text.match(GA_ID)

                    // if code exists and contain an Analytics code (UA-XXXXX-Y), add the analytics.js include
                    if (res && res.length > 0) {
                        (function (i, s, o, g, r, a, m) {
                            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                                (i[r].q = i[r].q || []).push(arguments)
                            }, i[r].l = 1 * new Date(); a = s.createElement(o),
                                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
                        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

                        // initiate the analytics functionality and send a pageview,
                        window.ga('create', res[0], 'auto');
                        window.ga('send', 'pageview', window.location.asPath);
                    }
                })
        }

        // add localization
        document.writeln('<script type="application/javascript" src="/uStoreRestAPI/v1/store/resourceByUrl?url=' + encodeURIComponent(url) + '&type=1&cultureCode=' + culture[1] + '&isDraft=false"></script>')
    }
}
)()

    // #################################################################################################################################################################################################

    (async function () {

        const queryOrCookieStrToObj = function (str) {
            if (str && str !== '') {
                return JSON.parse('{"' +
                    str
                        .replace(/^(.*)\?/, '')
                        .split(/[&;]\s?/g)
                        .map(function (keyval) { return keyval.replace(/=/, '":"') })
                        .join('","')
                    + '"}', function (key, value) {
                        return key === "" ? value : decodeURIComponent(value)
                    })
            }
            return {}
        }

        var search = location.search.substring(1);
        var queryParams = queryOrCookieStrToObj(search)

        var cookieParams = {};
        document.cookie && document.cookie.split(/\s*;\s*/).forEach(function (pair) {
            pair = pair.split(/\s*=\s*/);
            cookieParams[pair[0]] = pair.splice(1).join('=');
        });

        if (queryParams.StoreGuid) {
            cookieParams._storeID = queryParams.StoreGuid
            document.cookie = "_storeID=" + queryParams.StoreGuid + '; path=/;'
        }

        //Initialize the _showThemeAsDraft only when logging to the application. This is when the 'SecurityToken' param exists
        if (queryParams.SecurityToken) {
            const isDraft = (!!queryParams.ShowThemeAsDraft).toString()
            cookieParams._showThemeAsDraft = isDraft
            document.cookie = "_showThemeAsDraft=" + isDraft + '; path=/;'
        }

        var status = cookieParams._showThemeAsDraft === 'true' ? 'true' : 'false'

        var caltureRegex = /\/([a-z]{2}-[A-Za-z]{2})/;
        var culture = location.pathname.match(caltureRegex)

        var url = window.location.href

        document.writeln('<link type="text/css" rel="stylesheet" as="style" href="/uStoreRestAPI/v1/store/resourceByUrl?url=' + encodeURIComponent(url) + '&type=2&cultureCode=' + culture[1] + '&isDraft=' + status + '"/>')
        document.writeln('<link type="text/css" rel="stylesheet" as="style" href="/uStoreRestAPI/v1/store/resourceByUrl?url=' + encodeURIComponent(url) + '&type=3&cultureCode=' + culture[1] + '&isDraft=' + status + '"/>')
        document.writeln('<link type="text/css" rel="stylesheet" as="style" href="/uStoreRestAPI/v1/store/resourceByUrl?url=' + encodeURIComponent(url) + '&type=4&cultureCode=' + culture[1] + '&isDraft=' + status + '"/>')

    }
    )()







(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2603],
  {
    3401: (e, t, r) => {
      "use strict";
      r.d(t, { E: () => l });
      var n = r(12115),
        a = r(46641),
        i = r(82396),
        o = ["axis", "item"],
        l = (0, n.forwardRef)((e, t) =>
          n.createElement(i.P, {
            chartName: "BarChart",
            defaultTooltipEventType: "axis",
            validateTooltipEventTypes: o,
            tooltipPayloadSearcher: a.uN,
            categoricalChartProps: e,
            ref: t,
          }),
        );
    },
    6654: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let n = r(12115);
      function a(e, t) {
        let r = (0, n.useRef)(null),
          a = (0, n.useRef)(null);
        return (0, n.useCallback)(
          (n) => {
            if (null === n) {
              let e = r.current;
              e && ((r.current = null), e());
              let t = a.current;
              t && ((a.current = null), t());
            } else (e && (r.current = i(e, n)), t && (a.current = i(t, n)));
          },
          [e, t],
        );
      }
      function i(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9795: (e, t, r) => {
      "use strict";
      r.d(t, { i: () => M });
      var n = r(12115);
      let a = Math.cos,
        i = Math.sin,
        o = Math.sqrt,
        l = Math.PI,
        c = 2 * l,
        u = {
          draw(e, t) {
            let r = o(t / l);
            (e.moveTo(r, 0), e.arc(0, 0, r, 0, c));
          },
        },
        s = o(1 / 3),
        f = 2 * s,
        p = i(l / 10) / i((7 * l) / 10),
        y = i(c / 10) * p,
        v = -a(c / 10) * p,
        b = o(3),
        d = o(3) / 2,
        m = 1 / o(12),
        h = (m / 2 + 1) * 3;
      var g = r(85654),
        O = r(31847);
      (o(3), o(3));
      var j = r(52596),
        P = r(70788),
        x = r(16377),
        w = ["type", "size", "sizeType"];
      function E() {
        return (E = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function S(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? S(Object(r), !0).forEach(function (t) {
                var n, a, i;
                ((n = e),
                  (a = t),
                  (i = r[t]),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(a)) in n
                    ? Object.defineProperty(n, a, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[a] = i));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : S(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var z = {
          symbolCircle: u,
          symbolCross: {
            draw(e, t) {
              let r = o(t / 5) / 2;
              (e.moveTo(-3 * r, -r),
                e.lineTo(-r, -r),
                e.lineTo(-r, -3 * r),
                e.lineTo(r, -3 * r),
                e.lineTo(r, -r),
                e.lineTo(3 * r, -r),
                e.lineTo(3 * r, r),
                e.lineTo(r, r),
                e.lineTo(r, 3 * r),
                e.lineTo(-r, 3 * r),
                e.lineTo(-r, r),
                e.lineTo(-3 * r, r),
                e.closePath());
            },
          },
          symbolDiamond: {
            draw(e, t) {
              let r = o(t / f),
                n = r * s;
              (e.moveTo(0, -r),
                e.lineTo(n, 0),
                e.lineTo(0, r),
                e.lineTo(-n, 0),
                e.closePath());
            },
          },
          symbolSquare: {
            draw(e, t) {
              let r = o(t),
                n = -r / 2;
              e.rect(n, n, r, r);
            },
          },
          symbolStar: {
            draw(e, t) {
              let r = o(0.8908130915292852 * t),
                n = y * r,
                l = v * r;
              (e.moveTo(0, -r), e.lineTo(n, l));
              for (let t = 1; t < 5; ++t) {
                let o = (c * t) / 5,
                  u = a(o),
                  s = i(o);
                (e.lineTo(s * r, -u * r),
                  e.lineTo(u * n - s * l, s * n + u * l));
              }
              e.closePath();
            },
          },
          symbolTriangle: {
            draw(e, t) {
              let r = -o(t / (3 * b));
              (e.moveTo(0, 2 * r),
                e.lineTo(-b * r, -r),
                e.lineTo(b * r, -r),
                e.closePath());
            },
          },
          symbolWye: {
            draw(e, t) {
              let r = o(t / h),
                n = r / 2,
                a = r * m,
                i = r * m + r,
                l = -n;
              (e.moveTo(n, a),
                e.lineTo(n, i),
                e.lineTo(l, i),
                e.lineTo(-0.5 * n - d * a, d * n + -0.5 * a),
                e.lineTo(-0.5 * n - d * i, d * n + -0.5 * i),
                e.lineTo(-0.5 * l - d * i, d * l + -0.5 * i),
                e.lineTo(-0.5 * n + d * a, -0.5 * a - d * n),
                e.lineTo(-0.5 * n + d * i, -0.5 * i - d * n),
                e.lineTo(-0.5 * l + d * i, -0.5 * i - d * l),
                e.closePath());
            },
          },
        },
        A = Math.PI / 180,
        k = (e) => z["symbol".concat((0, x.Zb)(e))] || u,
        I = (e, t, r) => {
          if ("area" === t) return e;
          switch (r) {
            case "cross":
              return (5 * e * e) / 9;
            case "diamond":
              return (0.5 * e * e) / Math.sqrt(3);
            case "square":
              return e * e;
            case "star":
              var n = 18 * A;
              return (
                1.25 *
                e *
                e *
                (Math.tan(n) - Math.tan(2 * n) * Math.tan(n) ** 2)
              );
            case "triangle":
              return (Math.sqrt(3) * e * e) / 4;
            case "wye":
              return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
            default:
              return (Math.PI * e * e) / 4;
          }
        },
        M = (e) => {
          var { type: t = "circle", size: r = 64, sizeType: a = "area" } = e,
            i = T(
              T(
                {},
                (function (e, t) {
                  if (null == e) return {};
                  var r,
                    n,
                    a = (function (e, t) {
                      if (null == e) return {};
                      var r = {};
                      for (var n in e)
                        if ({}.hasOwnProperty.call(e, n)) {
                          if (-1 !== t.indexOf(n)) continue;
                          r[n] = e[n];
                        }
                      return r;
                    })(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++)
                      ((r = i[n]),
                        -1 === t.indexOf(r) &&
                          {}.propertyIsEnumerable.call(e, r) &&
                          (a[r] = e[r]));
                  }
                  return a;
                })(e, w),
              ),
              {},
              { type: t, size: r, sizeType: a },
            ),
            { className: o, cx: l, cy: c } = i,
            s = (0, P.J9)(i, !0);
          return l === +l && c === +c && r === +r
            ? n.createElement(
                "path",
                E({}, s, {
                  className: (0, j.$)("recharts-symbols", o),
                  transform: "translate(".concat(l, ", ").concat(c, ")"),
                  d: (() => {
                    var e = k(t);
                    return (function (e, t) {
                      let r = null,
                        n = (0, O.i)(a);
                      function a() {
                        let a;
                        if (
                          (r || (r = a = n()),
                          e
                            .apply(this, arguments)
                            .draw(r, +t.apply(this, arguments)),
                          a)
                        )
                          return ((r = null), a + "" || null);
                      }
                      return (
                        (e = "function" == typeof e ? e : (0, g.A)(e || u)),
                        (t =
                          "function" == typeof t
                            ? t
                            : (0, g.A)(void 0 === t ? 64 : +t)),
                        (a.type = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : (0, g.A)(t)),
                              a)
                            : e;
                        }),
                        (a.size = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : (0, g.A)(+e)),
                              a)
                            : t;
                        }),
                        (a.context = function (e) {
                          return arguments.length
                            ? ((r = null == e ? null : e), a)
                            : r;
                        }),
                        a
                      );
                    })()
                      .type(e)
                      .size(I(r, a, t))();
                  })(),
                }),
              )
            : null;
        };
      M.registerSymbol = (e, t) => {
        z["symbol".concat((0, x.Zb)(e))] = t;
      };
    },
    54811: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => n });
      var n = (e) => null;
      n.displayName = "Cell";
    },
    56690: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => eO, L: () => eg });
      var n = r(12115),
        a = r(52596),
        i = r(2348),
        o = r(94011),
        l = r(54811),
        c = r(36079),
        u = r(16377),
        s = r(70788),
        f = r(41643),
        p = r(39827),
        y = r(43597),
        v = r(67790),
        b = ["x", "y"];
      function d() {
        return (d = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function m(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m(Object(r), !0).forEach(function (t) {
                var n, a, i;
                ((n = e),
                  (a = t),
                  (i = r[t]),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(a)) in n
                    ? Object.defineProperty(n, a, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[a] = i));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : m(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function g(e, t) {
        var { x: r, y: n } = e,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                ((r = i[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (a[r] = e[r]));
            }
            return a;
          })(e, b),
          i = parseInt("".concat(r), 10),
          o = parseInt("".concat(n), 10),
          l = parseInt("".concat(t.height || a.height), 10),
          c = parseInt("".concat(t.width || a.width), 10);
        return h(
          h(h(h(h({}, t), a), i ? { x: i } : {}), o ? { y: o } : {}),
          {},
          { height: l, width: c, name: t.name, radius: t.radius },
        );
      }
      function O(e) {
        return n.createElement(
          v.y,
          d(
            {
              shapeType: "rectangle",
              propTransformer: g,
              activeClassName: "recharts-active-bar",
            },
            e,
          ),
        );
      }
      var j = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return (r, n) => {
            if ((0, u.Et)(e)) return e;
            var a = (0, u.Et)(r) || (0, u.uy)(r);
            return a
              ? e(r, n)
              : (a ||
                  (function (e, t) {
                    if (!e) throw Error("Invariant failed");
                  })(!1),
                t);
          };
        },
        P = r(99129),
        x = r(56091),
        w = r(81971),
        E = r(22248),
        S = () => {
          var e = (0, w.j)();
          return (
            (0, n.useEffect)(
              () => (
                e((0, E.lm)()),
                () => {
                  e((0, E.Ch)());
                }
              ),
            ),
            null
          );
        },
        T = r(39226),
        z = r(37195),
        A = r(97238),
        k = r(68924),
        I = r(14299),
        M = r(60356),
        C = r(56124),
        D = r(18478),
        N = r(78892);
      function K(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? K(Object(r), !0).forEach(function (t) {
                var n, a, i;
                ((n = e),
                  (a = t),
                  (i = r[t]),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(a)) in n
                    ? Object.defineProperty(n, a, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[a] = i));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : K(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var L = (e, t, r, n, a) => a,
        R = (e, t, r) => {
          var n = null != r ? r : e;
          if (!(0, u.uy)(n)) return (0, u.F4)(n, t, 0);
        },
        W = (0, k.Mz)(
          [A.fz, I.ld, (e, t) => t, (e, t, r) => r, (e, t, r, n) => n],
          (e, t, r, n, a) =>
            t
              .filter((t) =>
                "horizontal" === e ? t.xAxisId === r : t.yAxisId === n,
              )
              .filter((e) => e.isPanorama === a)
              .filter((e) => !1 === e.hide)
              .filter((e) => "bar" === e.type),
        );
      function _(e) {
        return null != e.stackId && null != e.dataKey;
      }
      var G = (0, k.Mz)(
          [
            W,
            D.x3,
            (e, t, r) =>
              "horizontal" === (0, A.fz)(e)
                ? (0, I.BQ)(e, "xAxis", t)
                : (0, I.BQ)(e, "yAxis", r),
          ],
          (e, t, r) => {
            var n = e.filter(_),
              a = e.filter((e) => null == e.stackId);
            return [
              ...Object.entries(
                n.reduce(
                  (e, t) => (
                    e[t.stackId] || (e[t.stackId] = []),
                    e[t.stackId].push(t),
                    e
                  ),
                  {},
                ),
              ).map((e) => {
                var [n, a] = e;
                return {
                  stackId: n,
                  dataKeys: a.map((e) => e.dataKey),
                  barSize: R(t, r, a[0].barSize),
                };
              }),
              ...a.map((e) => ({
                stackId: void 0,
                dataKeys: [e.dataKey].filter((e) => null != e),
                barSize: R(t, r, e.barSize),
              })),
            ];
          },
        ),
        F = (e, t, r, n) => {
          var a, i;
          return (
            "horizontal" === (0, A.fz)(e)
              ? ((a = (0, I.Gx)(e, "xAxis", t, n)),
                (i = (0, I.CR)(e, "xAxis", t, n)))
              : ((a = (0, I.Gx)(e, "yAxis", r, n)),
                (i = (0, I.CR)(e, "yAxis", r, n))),
            (0, p.Hj)(a, i)
          );
        },
        J = (0, k.Mz)(
          [
            G,
            D.JN,
            D._5,
            D.gY,
            (e, t, r, n, a) => {
              var i,
                o,
                l,
                c,
                s = (0, A.fz)(e),
                f = (0, D.JN)(e),
                { maxBarSize: y } = a,
                v = (0, u.uy)(y) ? f : y;
              return (
                "horizontal" === s
                  ? ((l = (0, I.Gx)(e, "xAxis", t, n)),
                    (c = (0, I.CR)(e, "xAxis", t, n)))
                  : ((l = (0, I.Gx)(e, "yAxis", r, n)),
                    (c = (0, I.CR)(e, "yAxis", r, n))),
                null != (i = null != (o = (0, p.Hj)(l, c, !0)) ? o : v) ? i : 0
              );
            },
            F,
            (e, t, r, n, a) => a.maxBarSize,
          ],
          (e, t, r, n, a, i, o) => {
            var l = (function (e, t, r, n, a) {
              var i,
                o = n.length;
              if (!(o < 1)) {
                var l = (0, u.F4)(e, r, 0, !0),
                  c = [];
                if ((0, N.H)(n[0].barSize)) {
                  var s = !1,
                    f = r / o,
                    p = n.reduce((e, t) => e + (t.barSize || 0), 0);
                  ((p += (o - 1) * l) >= r && ((p -= (o - 1) * l), (l = 0)),
                    p >= r && f > 0 && ((s = !0), (f *= 0.9), (p = o * f)));
                  var y = { offset: (((r - p) / 2) | 0) - l, size: 0 };
                  i = n.reduce((e, t) => {
                    var r,
                      n = [
                        ...e,
                        {
                          stackId: t.stackId,
                          dataKeys: t.dataKeys,
                          position: {
                            offset: y.offset + y.size + l,
                            size: s ? f : null != (r = t.barSize) ? r : 0,
                          },
                        },
                      ];
                    return ((y = n[n.length - 1].position), n);
                  }, c);
                } else {
                  var v = (0, u.F4)(t, r, 0, !0);
                  r - 2 * v - (o - 1) * l <= 0 && (l = 0);
                  var b = (r - 2 * v - (o - 1) * l) / o;
                  b > 1 && (b >>= 0);
                  var d = (0, N.H)(a) ? Math.min(b, a) : b;
                  i = n.reduce(
                    (e, t, r) => [
                      ...e,
                      {
                        stackId: t.stackId,
                        dataKeys: t.dataKeys,
                        position: {
                          offset: v + (b + l) * r + (b - d) / 2,
                          size: d,
                        },
                      },
                    ],
                    c,
                  );
                }
                return i;
              }
            })(r, n, a !== i ? a : i, e, (0, u.uy)(o) ? t : o);
            return (
              a !== i &&
                null != l &&
                (l = l.map((e) =>
                  B(
                    B({}, e),
                    {},
                    {
                      position: B(
                        B({}, e.position),
                        {},
                        { offset: e.position.offset - a / 2 },
                      ),
                    },
                  ),
                )),
              l
            );
          },
        ),
        q = (0, k.Mz)([J, L], (e, t) => {
          if (null != e) {
            var r = e.find(
              (e) => e.stackId === t.stackId && e.dataKeys.includes(t.dataKey),
            );
            if (null != r) return r.position;
          }
        }),
        H = (0, k.Mz)([I.ld, L], (e, t) => {
          if (
            e.some(
              (e) =>
                "bar" === e.type &&
                t.dataKey === e.dataKey &&
                t.stackId === e.stackId &&
                t.stackId === e.stackId,
            )
          )
            return t;
        }),
        Z = (0, k.Mz)(
          [
            (e, t, r, n) =>
              "horizontal" === (0, A.fz)(e)
                ? (0, I.TC)(e, "yAxis", r, n)
                : (0, I.TC)(e, "xAxis", t, n),
            L,
          ],
          (e, t) => {
            if (!e || (null == t ? void 0 : t.dataKey) == null) return;
            var { stackId: r } = t;
            if (null != r) {
              var n = e[r];
              if (n) {
                var { stackedData: a } = n;
                if (a) return a.find((e) => e.key === t.dataKey);
              }
            }
          },
        ),
        $ = (0, k.Mz)(
          [
            C.HZ,
            (e, t, r, n) => (0, I.Gx)(e, "xAxis", t, n),
            (e, t, r, n) => (0, I.Gx)(e, "yAxis", r, n),
            (e, t, r, n) => (0, I.CR)(e, "xAxis", t, n),
            (e, t, r, n) => (0, I.CR)(e, "yAxis", r, n),
            q,
            A.fz,
            M.HS,
            F,
            Z,
            H,
            (e, t, r, n, a, i) => i,
          ],
          (e, t, r, n, a, i, o, l, c, u, s, f) => {
            var p,
              { chartData: y, dataStartIndex: v, dataEndIndex: b } = l;
            if (
              null != s &&
              null != i &&
              ("horizontal" === o || "vertical" === o) &&
              null != t &&
              null != r &&
              null != n &&
              null != a &&
              null != c
            ) {
              var { data: d } = s;
              if (
                null !=
                (p =
                  null != d && d.length > 0
                    ? d
                    : null == y
                      ? void 0
                      : y.slice(v, b + 1))
              )
                return eg({
                  layout: o,
                  barSettings: s,
                  pos: i,
                  bandSize: c,
                  xAxis: t,
                  yAxis: r,
                  xAxisTicks: n,
                  yAxisTicks: a,
                  stackedData: u,
                  displayedData: p,
                  offset: e,
                  cells: f,
                });
            }
          },
        ),
        U = r(71807),
        X = r(20215),
        Q = r(79020),
        V = r(39426),
        Y = r(93389),
        ee = r(74460),
        et = ["onMouseEnter", "onMouseLeave", "onClick"],
        er = ["value", "background", "tooltipPosition"],
        en = ["onMouseEnter", "onClick", "onMouseLeave"];
      function ea() {
        return (ea = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      function ei(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function eo(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ei(Object(r), !0).forEach(function (t) {
                el(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ei(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function el(e, t, r) {
        var n;
        return (
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function ec(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r = {};
            for (var n in e)
              if ({}.hasOwnProperty.call(e, n)) {
                if (-1 !== t.indexOf(n)) continue;
                r[n] = e[n];
              }
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            ((r = i[n]),
              -1 === t.indexOf(r) &&
                {}.propertyIsEnumerable.call(e, r) &&
                (a[r] = e[r]));
        }
        return a;
      }
      var eu = (e) => {
        var { dataKey: t, name: r, fill: n, legendType: a, hide: i } = e;
        return [
          {
            inactive: i,
            dataKey: t,
            type: a,
            color: n,
            value: (0, p.uM)(r, t),
            payload: e,
          },
        ];
      };
      function es(e) {
        var {
          dataKey: t,
          stroke: r,
          strokeWidth: n,
          fill: a,
          name: i,
          hide: o,
          unit: l,
        } = e;
        return {
          dataDefinedOnItem: void 0,
          positions: void 0,
          settings: {
            stroke: r,
            strokeWidth: n,
            fill: a,
            dataKey: t,
            nameKey: void 0,
            name: (0, p.uM)(i, t),
            hide: o,
            type: e.tooltipType,
            color: e.fill,
            unit: l,
          },
        };
      }
      function ef(e) {
        var t = (0, w.G)(X.A2),
          { data: r, dataKey: a, background: i, allOtherBarProps: o } = e,
          { onMouseEnter: l, onMouseLeave: c, onClick: u } = o,
          f = ec(o, et),
          p = (0, P.Cj)(l, a),
          v = (0, P.Pg)(c),
          b = (0, P.Ub)(u, a);
        if (!i || null == r) return null;
        var d = (0, s.J9)(i, !1);
        return n.createElement(
          n.Fragment,
          null,
          r.map((e, r) => {
            var { value: o, background: l, tooltipPosition: c } = e,
              u = ec(e, er);
            if (!l) return null;
            var s = p(e, r),
              m = v(e, r),
              h = b(e, r),
              g = eo(
                eo(
                  eo(
                    eo(
                      eo({ option: i, isActive: String(r) === t }, u),
                      {},
                      { fill: "#eee" },
                      l,
                    ),
                    d,
                  ),
                  (0, y.XC)(f, e, r),
                ),
                {},
                {
                  onMouseEnter: s,
                  onMouseLeave: m,
                  onClick: h,
                  dataKey: a,
                  index: r,
                  className: "recharts-bar-background-rectangle",
                },
              );
            return n.createElement(
              O,
              ea({ key: "background-bar-".concat(r) }, g),
            );
          }),
        );
      }
      function ep(e) {
        var { data: t, props: r, showLabels: a } = e,
          o = (0, s.J9)(r, !1),
          { shape: l, dataKey: u, activeBar: f } = r,
          p = (0, w.G)(X.A2),
          v = (0, w.G)(X.Xb),
          { onMouseEnter: b, onClick: d, onMouseLeave: m } = r,
          h = ec(r, en),
          g = (0, P.Cj)(b, u),
          j = (0, P.Pg)(m),
          x = (0, P.Ub)(d, u);
        return t
          ? n.createElement(
              n.Fragment,
              null,
              t.map((e, t) => {
                var r = f && String(t) === p && (null == v || u === v),
                  a = eo(
                    eo(eo({}, o), e),
                    {},
                    { isActive: r, option: r ? f : l, index: t, dataKey: u },
                  );
                return n.createElement(
                  i.W,
                  ea(
                    { className: "recharts-bar-rectangle" },
                    (0, y.XC)(h, e, t),
                    {
                      onMouseEnter: g(e, t),
                      onMouseLeave: j(e, t),
                      onClick: x(e, t),
                      key: "rectangle-"
                        .concat(null == e ? void 0 : e.x, "-")
                        .concat(null == e ? void 0 : e.y, "-")
                        .concat(null == e ? void 0 : e.value, "-")
                        .concat(t),
                    },
                  ),
                  n.createElement(O, a),
                );
              }),
              a && c.Z.renderCallByParent(r, t),
            )
          : null;
      }
      function ey(e) {
        var { props: t, previousRectanglesRef: r } = e,
          {
            data: a,
            layout: o,
            isAnimationActive: l,
            animationBegin: c,
            animationDuration: s,
            animationEasing: f,
            onAnimationEnd: p,
            onAnimationStart: y,
          } = t,
          v = r.current,
          b = (0, V.n)(t, "recharts-bar-"),
          [d, m] = (0, n.useState)(!1),
          h = (0, n.useCallback)(() => {
            ("function" == typeof p && p(), m(!1));
          }, [p]),
          g = (0, n.useCallback)(() => {
            ("function" == typeof y && y(), m(!0));
          }, [y]);
        return n.createElement(
          ee.i,
          {
            begin: c,
            duration: s,
            isActive: l,
            easing: f,
            from: { t: 0 },
            to: { t: 1 },
            onAnimationEnd: h,
            onAnimationStart: g,
            key: b,
          },
          (e) => {
            var { t: l } = e,
              c =
                1 === l
                  ? a
                  : a.map((e, t) => {
                      var r = v && v[t];
                      if (r) {
                        var n = (0, u.Dj)(r.x, e.x),
                          a = (0, u.Dj)(r.y, e.y),
                          i = (0, u.Dj)(r.width, e.width),
                          c = (0, u.Dj)(r.height, e.height);
                        return eo(
                          eo({}, e),
                          {},
                          { x: n(l), y: a(l), width: i(l), height: c(l) },
                        );
                      }
                      if ("horizontal" === o) {
                        var s = (0, u.Dj)(0, e.height)(l);
                        return eo(
                          eo({}, e),
                          {},
                          { y: e.y + e.height - s, height: s },
                        );
                      }
                      var f = (0, u.Dj)(0, e.width)(l);
                      return eo(eo({}, e), {}, { width: f });
                    });
            return (
              l > 0 && (r.current = c),
              n.createElement(
                i.W,
                null,
                n.createElement(ep, { props: t, data: c, showLabels: !d }),
              )
            );
          },
        );
      }
      function ev(e) {
        var { data: t, isAnimationActive: r } = e,
          a = (0, n.useRef)(null);
        return r && t && t.length && (null == a.current || a.current !== t)
          ? n.createElement(ey, { previousRectanglesRef: a, props: e })
          : n.createElement(ep, { props: e, data: t, showLabels: !0 });
      }
      var eb = (e, t) => {
        var r = Array.isArray(e.value) ? e.value[1] : e.value;
        return { x: e.x, y: e.y, value: r, errorVal: (0, p.kr)(e, t) };
      };
      class ed extends n.PureComponent {
        render() {
          var {
            hide: e,
            data: t,
            dataKey: r,
            className: l,
            xAxisId: c,
            yAxisId: s,
            needClip: f,
            background: p,
            id: y,
            layout: v,
          } = this.props;
          if (e) return null;
          var b = (0, a.$)("recharts-bar", l),
            d = (0, u.uy)(y) ? this.id : y;
          return n.createElement(
            i.W,
            { className: b },
            f &&
              n.createElement(
                "defs",
                null,
                n.createElement(z.Q, { clipPathId: d, xAxisId: c, yAxisId: s }),
              ),
            n.createElement(
              i.W,
              {
                className: "recharts-bar-rectangles",
                clipPath: f ? "url(#clipPath-".concat(d, ")") : null,
              },
              n.createElement(ef, {
                data: t,
                dataKey: r,
                background: p,
                allOtherBarProps: this.props,
              }),
              n.createElement(ev, this.props),
            ),
            n.createElement(
              o._,
              { direction: "horizontal" === v ? "y" : "x" },
              this.props.children,
            ),
          );
        }
        constructor() {
          (super(...arguments), el(this, "id", (0, u.NF)("recharts-bar-")));
        }
      }
      var em = {
        activeBar: !1,
        animationBegin: 0,
        animationDuration: 400,
        animationEasing: "ease",
        hide: !1,
        isAnimationActive: !f.m.isSsr,
        legendType: "rect",
        minPointSize: 0,
        xAxisId: 0,
        yAxisId: 0,
      };
      function eh(e) {
        var t,
          {
            xAxisId: r,
            yAxisId: a,
            hide: i,
            legendType: o,
            minPointSize: c,
            activeBar: u,
            animationBegin: f,
            animationDuration: y,
            animationEasing: v,
            isAnimationActive: b,
          } = (0, Y.e)(e, em),
          { needClip: d } = (0, z.l)(r, a),
          m = (0, A.WX)(),
          h = (0, U.r)(),
          g = (0, n.useMemo)(
            () => ({
              barSize: e.barSize,
              data: void 0,
              dataKey: e.dataKey,
              maxBarSize: e.maxBarSize,
              minPointSize: c,
              stackId: (0, p.$8)(e.stackId),
            }),
            [e.barSize, e.dataKey, e.maxBarSize, c, e.stackId],
          ),
          O = (0, s.aS)(e.children, l.f),
          j = (0, w.G)((e) => $(e, r, a, h, g, O));
        if ("vertical" !== m && "horizontal" !== m) return null;
        var P = null == j ? void 0 : j[0];
        return (
          (t =
            null == P || null == P.height || null == P.width
              ? 0
              : "vertical" === m
                ? P.height / 2
                : P.width / 2),
          n.createElement(
            T.zk,
            {
              xAxisId: r,
              yAxisId: a,
              data: j,
              dataPointFormatter: eb,
              errorBarOffset: t,
            },
            n.createElement(
              ed,
              ea({}, e, {
                layout: m,
                needClip: d,
                data: j,
                xAxisId: r,
                yAxisId: a,
                hide: i,
                legendType: o,
                minPointSize: c,
                activeBar: u,
                animationBegin: f,
                animationDuration: y,
                animationEasing: v,
                isAnimationActive: b,
              }),
            ),
          )
        );
      }
      function eg(e) {
        var {
            layout: t,
            barSettings: { dataKey: r, minPointSize: n },
            pos: a,
            bandSize: i,
            xAxis: o,
            yAxis: l,
            xAxisTicks: c,
            yAxisTicks: s,
            stackedData: f,
            displayedData: y,
            offset: v,
            cells: b,
          } = e,
          d = "horizontal" === t ? l : o,
          m = f ? d.scale.domain() : null,
          h = (0, p.DW)({ numericAxis: d });
        return y.map((e, y) => {
          f
            ? (g = (0, p._f)(f[y], m))
            : Array.isArray((g = (0, p.kr)(e, r))) || (g = [h, g]);
          var d = j(n, 0)(g[1], y);
          if ("horizontal" === t) {
            var g,
              O,
              P,
              x,
              w,
              E,
              S,
              [T, z] = [l.scale(g[0]), l.scale(g[1])];
            ((O = (0, p.y2)({
              axis: o,
              ticks: c,
              bandSize: i,
              offset: a.offset,
              entry: e,
              index: y,
            })),
              (P = null != (S = null != z ? z : T) ? S : void 0),
              (x = a.size));
            var A = T - z;
            if (
              ((w = (0, u.M8)(A) ? 0 : A),
              (E = { x: O, y: v.top, width: x, height: v.height }),
              Math.abs(d) > 0 && Math.abs(w) < Math.abs(d))
            ) {
              var k = (0, u.sA)(w || d) * (Math.abs(d) - Math.abs(w));
              ((P -= k), (w += k));
            }
          } else {
            var [I, M] = [o.scale(g[0]), o.scale(g[1])];
            if (
              ((O = I),
              (P = (0, p.y2)({
                axis: l,
                ticks: s,
                bandSize: i,
                offset: a.offset,
                entry: e,
                index: y,
              })),
              (x = M - I),
              (w = a.size),
              (E = { x: v.left, y: P, width: v.width, height: w }),
              Math.abs(d) > 0 && Math.abs(x) < Math.abs(d))
            ) {
              var C = (0, u.sA)(x || d) * (Math.abs(d) - Math.abs(x));
              x += C;
            }
          }
          return eo(
            eo({}, e),
            {},
            {
              x: O,
              y: P,
              width: x,
              height: w,
              value: f ? g : g[1],
              payload: e,
              background: E,
              tooltipPosition: { x: O + x / 2, y: P + w / 2 },
            },
            b && b[y] && b[y].props,
          );
        });
      }
      class eO extends n.PureComponent {
        render() {
          return n.createElement(
            T._S,
            {
              type: "bar",
              data: null,
              xAxisId: this.props.xAxisId,
              yAxisId: this.props.yAxisId,
              zAxisId: 0,
              dataKey: this.props.dataKey,
              stackId: this.props.stackId,
              hide: this.props.hide,
              barSize: this.props.barSize,
            },
            n.createElement(S, null),
            n.createElement(Q.A, { legendPayload: eu(this.props) }),
            n.createElement(x.r, { fn: es, args: this.props }),
            n.createElement(eh, this.props),
          );
        }
      }
      (el(eO, "displayName", "Bar"), el(eO, "defaultProps", em));
    },
    67790: (e, t, r) => {
      "use strict";
      r.d(t, { y: () => x });
      var n = r(12115),
        a = r(80931),
        i = r.n(a),
        o = r(44538),
        l = r(52596),
        c = r(70788),
        u = r(93389),
        s = r(74460);
      function f() {
        return (f = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(null, arguments);
      }
      var p = (e, t, r, n, a) => {
          var i,
            o = r - n;
          return (
            "M ".concat(e, ",").concat(t) +
            "L ".concat(e + r, ",").concat(t) +
            "L ".concat(e + r - o / 2, ",").concat(t + a) +
            "L ".concat(e + r - o / 2 - n, ",").concat(t + a) +
            "L ".concat(e, ",").concat(t, " Z")
          );
        },
        y = {
          x: 0,
          y: 0,
          upperWidth: 0,
          lowerWidth: 0,
          height: 0,
          isUpdateAnimationActive: !1,
          animationBegin: 0,
          animationDuration: 1500,
          animationEasing: "ease",
        },
        v = (e) => {
          var t = (0, u.e)(e, y),
            r = (0, n.useRef)(),
            [a, i] = (0, n.useState)(-1);
          (0, n.useEffect)(() => {
            if (r.current && r.current.getTotalLength)
              try {
                var e = r.current.getTotalLength();
                e && i(e);
              } catch (e) {}
          }, []);
          var {
              x: o,
              y: v,
              upperWidth: b,
              lowerWidth: d,
              height: m,
              className: h,
            } = t,
            {
              animationEasing: g,
              animationDuration: O,
              animationBegin: j,
              isUpdateAnimationActive: P,
            } = t;
          if (
            o !== +o ||
            v !== +v ||
            b !== +b ||
            d !== +d ||
            m !== +m ||
            (0 === b && 0 === d) ||
            0 === m
          )
            return null;
          var x = (0, l.$)("recharts-trapezoid", h);
          return P
            ? n.createElement(
                s.i,
                {
                  canBegin: a > 0,
                  from: { upperWidth: 0, lowerWidth: 0, height: m, x: o, y: v },
                  to: { upperWidth: b, lowerWidth: d, height: m, x: o, y: v },
                  duration: O,
                  animationEasing: g,
                  isActive: P,
                },
                (e) => {
                  var {
                    upperWidth: i,
                    lowerWidth: o,
                    height: l,
                    x: u,
                    y: y,
                  } = e;
                  return n.createElement(
                    s.i,
                    {
                      canBegin: a > 0,
                      from: "0px ".concat(-1 === a ? 1 : a, "px"),
                      to: "".concat(a, "px 0px"),
                      attributeName: "strokeDasharray",
                      begin: j,
                      duration: O,
                      easing: g,
                    },
                    n.createElement(
                      "path",
                      f({}, (0, c.J9)(t, !0), {
                        className: x,
                        d: p(u, y, i, o, l),
                        ref: r,
                      }),
                    ),
                  );
                },
              )
            : n.createElement(
                "g",
                null,
                n.createElement(
                  "path",
                  f({}, (0, c.J9)(t, !0), {
                    className: x,
                    d: p(o, v, b, d, m),
                  }),
                ),
              );
        },
        b = r(77283),
        d = r(2348),
        m = r(9795),
        h = [
          "option",
          "shapeType",
          "propTransformer",
          "activeClassName",
          "isActive",
        ];
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          (t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n));
        }
        return r;
      }
      function O(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                var n, a, i;
                ((n = e),
                  (a = t),
                  (i = r[t]),
                  (a = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value.",
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(a)) in n
                    ? Object.defineProperty(n, a, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[a] = i));
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : g(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function j(e, t) {
        return O(O({}, t), e);
      }
      function P(e) {
        var { shapeType: t, elementProps: r } = e;
        switch (t) {
          case "rectangle":
            return n.createElement(o.M, r);
          case "trapezoid":
            return n.createElement(v, r);
          case "sector":
            return n.createElement(b.h, r);
          case "symbols":
            if ("symbols" === t) return n.createElement(m.i, r);
            break;
          default:
            return null;
        }
      }
      function x(e) {
        var t,
          {
            option: r,
            shapeType: a,
            propTransformer: o = j,
            activeClassName: l = "recharts-active-shape",
            isActive: c,
          } = e,
          u = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (n = 0; n < i.length; n++)
                ((r = i[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (a[r] = e[r]));
            }
            return a;
          })(e, h);
        if ((0, n.isValidElement)(r))
          t = (0, n.cloneElement)(
            r,
            O(O({}, u), (0, n.isValidElement)(r) ? r.props : r),
          );
        else if ("function" == typeof r) t = r(u);
        else if (i()(r) && "boolean" != typeof r) {
          var s = o(r, u);
          t = n.createElement(P, { shapeType: a, elementProps: s });
        } else t = n.createElement(P, { shapeType: a, elementProps: u });
        return c ? n.createElement(d.W, { className: l }, t) : t;
      }
    },
    80931: (e, t, r) => {
      e.exports = r(86006).isPlainObject;
    },
    86006: (e, t) => {
      "use strict";
      (Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        (t.isPlainObject = function (e) {
          if ("object" != typeof e || null == e) return !1;
          if (null === Object.getPrototypeOf(e)) return !0;
          if ("[object Object]" !== Object.prototype.toString.call(e)) {
            let t = e[Symbol.toStringTag];
            return (
              null != t &&
              !!Object.getOwnPropertyDescriptor(e, Symbol.toStringTag)
                ?.writable &&
              e.toString() === `[object ${t}]`
            );
          }
          let t = e;
          for (; null !== Object.getPrototypeOf(t); )
            t = Object.getPrototypeOf(t);
          return Object.getPrototypeOf(e) === t;
        }));
    },
    99129: (e, t, r) => {
      "use strict";
      r.d(t, { Cj: () => i, Pg: () => o, Ub: () => l });
      var n = r(81971),
        a = r(34890),
        i = (e, t) => {
          var r = (0, n.j)();
          return (n, i) => (o) => {
            (null == e || e(n, i, o),
              r(
                (0, a.RD)({
                  activeIndex: String(i),
                  activeDataKey: t,
                  activeCoordinate: n.tooltipPosition,
                }),
              ));
          };
        },
        o = (e) => {
          var t = (0, n.j)();
          return (r, n) => (i) => {
            (null == e || e(r, n, i), t((0, a.oP)()));
          };
        },
        l = (e, t) => {
          var r = (0, n.j)();
          return (n, i) => (o) => {
            (null == e || e(n, i, o),
              r(
                (0, a.ML)({
                  activeIndex: String(i),
                  activeDataKey: t,
                  activeCoordinate: n.tooltipPosition,
                }),
              ));
          };
        };
    },
  },
]);

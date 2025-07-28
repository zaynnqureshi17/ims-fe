"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5],
  {
    6101: (e, r, t) => {
      t.d(r, { s: () => l, t: () => a });
      var o = t(12115);
      function n(e, r) {
        if ("function" == typeof e) return e(r);
        null != e && (e.current = r);
      }
      function a(...e) {
        return (r) => {
          let t = !1,
            o = e.map((e) => {
              let o = n(e, r);
              return (t || "function" != typeof o || (t = !0), o);
            });
          if (t)
            return () => {
              for (let r = 0; r < o.length; r++) {
                let t = o[r];
                "function" == typeof t ? t() : n(e[r], null);
              }
            };
        };
      }
      function l(...e) {
        return o.useCallback(a(...e), e);
      }
    },
    6874: (e, r, t) => {
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        !(function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          default: function () {
            return g;
          },
          useLinkStatus: function () {
            return y;
          },
        }));
      let o = t(6966),
        n = t(95155),
        a = o._(t(12115)),
        l = t(82757),
        s = t(95227),
        i = t(69818),
        c = t(6654),
        d = t(69991),
        u = t(85929);
      t(43230);
      let p = t(24930),
        f = t(92664),
        m = t(6634);
      function b(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      function g(e) {
        let r,
          t,
          o,
          [l, g] = (0, a.useOptimistic)(p.IDLE_LINK_STATUS),
          y = (0, a.useRef)(null),
          {
            href: w,
            as: k,
            children: x,
            prefetch: v = null,
            passHref: z,
            replace: j,
            shallow: P,
            scroll: E,
            onClick: C,
            onMouseEnter: N,
            onTouchStart: _,
            legacyBehavior: O = !1,
            onNavigate: S,
            ref: A,
            unstable_dynamicOnHover: T,
            ...M
          } = e;
        ((r = x),
          O &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, n.jsx)("a", { children: r })));
        let I = a.default.useContext(s.AppRouterContext),
          L = !1 !== v,
          R = null === v ? i.PrefetchKind.AUTO : i.PrefetchKind.FULL,
          { href: U, as: $ } = a.default.useMemo(() => {
            let e = b(w);
            return { href: e, as: k ? b(k) : e };
          }, [w, k]);
        O && (t = a.default.Children.only(r));
        let W = O ? t && "object" == typeof t && t.ref : A,
          D = a.default.useCallback(
            (e) => (
              null !== I &&
                (y.current = (0, p.mountLinkInstance)(e, U, I, R, L, g)),
              () => {
                (y.current &&
                  ((0, p.unmountLinkForCurrentNavigation)(y.current),
                  (y.current = null)),
                  (0, p.unmountPrefetchableInstance)(e));
              }
            ),
            [L, U, I, R, g],
          ),
          G = {
            ref: (0, c.useMergedRef)(D, W),
            onClick(e) {
              (O || "function" != typeof C || C(e),
                O &&
                  t.props &&
                  "function" == typeof t.props.onClick &&
                  t.props.onClick(e),
                I &&
                  (e.defaultPrevented ||
                    (function (e, r, t, o, n, l, s) {
                      let { nodeName: i } = e.currentTarget;
                      if (
                        !(
                          ("A" === i.toUpperCase() &&
                            (function (e) {
                              let r = e.currentTarget.getAttribute("target");
                              return (
                                (r && "_self" !== r) ||
                                e.metaKey ||
                                e.ctrlKey ||
                                e.shiftKey ||
                                e.altKey ||
                                (e.nativeEvent && 2 === e.nativeEvent.which)
                              );
                            })(e)) ||
                          e.currentTarget.hasAttribute("download")
                        )
                      ) {
                        if (!(0, f.isLocalURL)(r)) {
                          n && (e.preventDefault(), location.replace(r));
                          return;
                        }
                        (e.preventDefault(),
                          a.default.startTransition(() => {
                            if (s) {
                              let e = !1;
                              if (
                                (s({
                                  preventDefault: () => {
                                    e = !0;
                                  },
                                }),
                                e)
                              )
                                return;
                            }
                            (0, m.dispatchNavigateAction)(
                              t || r,
                              n ? "replace" : "push",
                              null == l || l,
                              o.current,
                            );
                          }));
                      }
                    })(e, U, $, y, j, E, S)));
            },
            onMouseEnter(e) {
              (O || "function" != typeof N || N(e),
                O &&
                  t.props &&
                  "function" == typeof t.props.onMouseEnter &&
                  t.props.onMouseEnter(e),
                I && L && (0, p.onNavigationIntent)(e.currentTarget, !0 === T));
            },
            onTouchStart: function (e) {
              (O || "function" != typeof _ || _(e),
                O &&
                  t.props &&
                  "function" == typeof t.props.onTouchStart &&
                  t.props.onTouchStart(e),
                I && L && (0, p.onNavigationIntent)(e.currentTarget, !0 === T));
            },
          };
        return (
          (0, d.isAbsoluteUrl)($)
            ? (G.href = $)
            : (O && !z && ("a" !== t.type || "href" in t.props)) ||
              (G.href = (0, u.addBasePath)($)),
          (o = O
            ? a.default.cloneElement(t, G)
            : (0, n.jsx)("a", { ...M, ...G, children: r })),
          (0, n.jsx)(h.Provider, { value: l, children: o })
        );
      }
      t(73180);
      let h = (0, a.createContext)(p.IDLE_LINK_STATUS),
        y = () => (0, a.useContext)(h);
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (e.exports = r.default));
    },
    19946: (e, r, t) => {
      t.d(r, { A: () => u });
      var o = t(12115);
      let n = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        a = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, r, t) =>
            t ? t.toUpperCase() : r.toLowerCase(),
          ),
        l = (e) => {
          let r = a(e);
          return r.charAt(0).toUpperCase() + r.slice(1);
        },
        s = function () {
          for (var e = arguments.length, r = Array(e), t = 0; t < e; t++)
            r[t] = arguments[t];
          return r
            .filter((e, r, t) => !!e && "" !== e.trim() && t.indexOf(e) === r)
            .join(" ")
            .trim();
        },
        i = (e) => {
          for (let r in e)
            if (r.startsWith("aria-") || "role" === r || "title" === r)
              return !0;
        };
      var c = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let d = (0, o.forwardRef)((e, r) => {
          let {
            color: t = "currentColor",
            size: n = 24,
            strokeWidth: a = 2,
            absoluteStrokeWidth: l,
            className: d = "",
            children: u,
            iconNode: p,
            ...f
          } = e;
          return (0, o.createElement)(
            "svg",
            {
              ref: r,
              ...c,
              width: n,
              height: n,
              stroke: t,
              strokeWidth: l ? (24 * Number(a)) / Number(n) : a,
              className: s("lucide", d),
              ...(!u && !i(f) && { "aria-hidden": "true" }),
              ...f,
            },
            [
              ...p.map((e) => {
                let [r, t] = e;
                return (0, o.createElement)(r, t);
              }),
              ...(Array.isArray(u) ? u : [u]),
            ],
          );
        }),
        u = (e, r) => {
          let t = (0, o.forwardRef)((t, a) => {
            let { className: i, ...c } = t;
            return (0, o.createElement)(d, {
              ref: a,
              iconNode: r,
              className: s("lucide-".concat(n(l(e))), "lucide-".concat(e), i),
              ...c,
            });
          });
          return ((t.displayName = l(e)), t);
        };
    },
    39688: (e, r, t) => {
      t.d(r, { QP: () => ec });
      let o = (e) => {
          let r = s(e),
            { conflictingClassGroups: t, conflictingClassGroupModifiers: o } =
              e;
          return {
            getClassGroupId: (e) => {
              let t = e.split("-");
              return (
                "" === t[0] && 1 !== t.length && t.shift(),
                n(t, r) || l(e)
              );
            },
            getConflictingClassGroupIds: (e, r) => {
              let n = t[e] || [];
              return r && o[e] ? [...n, ...o[e]] : n;
            },
          };
        },
        n = (e, r) => {
          if (0 === e.length) return r.classGroupId;
          let t = e[0],
            o = r.nextPart.get(t),
            a = o ? n(e.slice(1), o) : void 0;
          if (a) return a;
          if (0 === r.validators.length) return;
          let l = e.join("-");
          return r.validators.find(({ validator: e }) => e(l))?.classGroupId;
        },
        a = /^\[(.+)\]$/,
        l = (e) => {
          if (a.test(e)) {
            let r = a.exec(e)[1],
              t = r?.substring(0, r.indexOf(":"));
            if (t) return "arbitrary.." + t;
          }
        },
        s = (e) => {
          let { theme: r, classGroups: t } = e,
            o = { nextPart: new Map(), validators: [] };
          for (let e in t) i(t[e], o, e, r);
          return o;
        },
        i = (e, r, t, o) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? r : c(r, e)).classGroupId = t;
              return;
            }
            if ("function" == typeof e)
              return d(e)
                ? void i(e(o), r, t, o)
                : void r.validators.push({ validator: e, classGroupId: t });
            Object.entries(e).forEach(([e, n]) => {
              i(n, c(r, e), t, o);
            });
          });
        },
        c = (e, r) => {
          let t = e;
          return (
            r.split("-").forEach((e) => {
              (t.nextPart.has(e) ||
                t.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (t = t.nextPart.get(e)));
            }),
            t
          );
        },
        d = (e) => e.isThemeGetter,
        u = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let r = 0,
            t = new Map(),
            o = new Map(),
            n = (n, a) => {
              (t.set(n, a), ++r > e && ((r = 0), (o = t), (t = new Map())));
            };
          return {
            get(e) {
              let r = t.get(e);
              return void 0 !== r
                ? r
                : void 0 !== (r = o.get(e))
                  ? (n(e, r), r)
                  : void 0;
            },
            set(e, r) {
              t.has(e) ? t.set(e, r) : n(e, r);
            },
          };
        },
        p = (e) => {
          let { prefix: r, experimentalParseClassName: t } = e,
            o = (e) => {
              let r,
                t = [],
                o = 0,
                n = 0,
                a = 0;
              for (let l = 0; l < e.length; l++) {
                let s = e[l];
                if (0 === o && 0 === n) {
                  if (":" === s) {
                    (t.push(e.slice(a, l)), (a = l + 1));
                    continue;
                  }
                  if ("/" === s) {
                    r = l;
                    continue;
                  }
                }
                "[" === s
                  ? o++
                  : "]" === s
                    ? o--
                    : "(" === s
                      ? n++
                      : ")" === s && n--;
              }
              let l = 0 === t.length ? e : e.substring(a),
                s = f(l);
              return {
                modifiers: t,
                hasImportantModifier: s !== l,
                baseClassName: s,
                maybePostfixModifierPosition: r && r > a ? r - a : void 0,
              };
            };
          if (r) {
            let e = r + ":",
              t = o;
            o = (r) =>
              r.startsWith(e)
                ? t(r.substring(e.length))
                : {
                    isExternal: !0,
                    modifiers: [],
                    hasImportantModifier: !1,
                    baseClassName: r,
                    maybePostfixModifierPosition: void 0,
                  };
          }
          if (t) {
            let e = o;
            o = (r) => t({ className: r, parseClassName: e });
          }
          return o;
        },
        f = (e) =>
          e.endsWith("!")
            ? e.substring(0, e.length - 1)
            : e.startsWith("!")
              ? e.substring(1)
              : e,
        m = (e) => {
          let r = Object.fromEntries(
            e.orderSensitiveModifiers.map((e) => [e, !0]),
          );
          return (e) => {
            if (e.length <= 1) return e;
            let t = [],
              o = [];
            return (
              e.forEach((e) => {
                "[" === e[0] || r[e]
                  ? (t.push(...o.sort(), e), (o = []))
                  : o.push(e);
              }),
              t.push(...o.sort()),
              t
            );
          };
        },
        b = (e) => ({
          cache: u(e.cacheSize),
          parseClassName: p(e),
          sortModifiers: m(e),
          ...o(e),
        }),
        g = /\s+/,
        h = (e, r) => {
          let {
              parseClassName: t,
              getClassGroupId: o,
              getConflictingClassGroupIds: n,
              sortModifiers: a,
            } = r,
            l = [],
            s = e.trim().split(g),
            i = "";
          for (let e = s.length - 1; e >= 0; e -= 1) {
            let r = s[e],
              {
                isExternal: c,
                modifiers: d,
                hasImportantModifier: u,
                baseClassName: p,
                maybePostfixModifierPosition: f,
              } = t(r);
            if (c) {
              i = r + (i.length > 0 ? " " + i : i);
              continue;
            }
            let m = !!f,
              b = o(m ? p.substring(0, f) : p);
            if (!b) {
              if (!m || !(b = o(p))) {
                i = r + (i.length > 0 ? " " + i : i);
                continue;
              }
              m = !1;
            }
            let g = a(d).join(":"),
              h = u ? g + "!" : g,
              y = h + b;
            if (l.includes(y)) continue;
            l.push(y);
            let w = n(b, m);
            for (let e = 0; e < w.length; ++e) {
              let r = w[e];
              l.push(h + r);
            }
            i = r + (i.length > 0 ? " " + i : i);
          }
          return i;
        };
      function y() {
        let e,
          r,
          t = 0,
          o = "";
        for (; t < arguments.length; )
          (e = arguments[t++]) && (r = w(e)) && (o && (o += " "), (o += r));
        return o;
      }
      let w = (e) => {
          let r;
          if ("string" == typeof e) return e;
          let t = "";
          for (let o = 0; o < e.length; o++)
            e[o] && (r = w(e[o])) && (t && (t += " "), (t += r));
          return t;
        },
        k = (e) => {
          let r = (r) => r[e] || [];
          return ((r.isThemeGetter = !0), r);
        },
        x = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
        v = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
        z = /^\d+\/\d+$/,
        j = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        P =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        E = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
        C = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        N =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        _ = (e) => z.test(e),
        O = (e) => !!e && !Number.isNaN(Number(e)),
        S = (e) => !!e && Number.isInteger(Number(e)),
        A = (e) => e.endsWith("%") && O(e.slice(0, -1)),
        T = (e) => j.test(e),
        M = () => !0,
        I = (e) => P.test(e) && !E.test(e),
        L = () => !1,
        R = (e) => C.test(e),
        U = (e) => N.test(e),
        $ = (e) => !D(e) && !Z(e),
        W = (e) => ee(e, en, L),
        D = (e) => x.test(e),
        G = (e) => ee(e, ea, I),
        F = (e) => ee(e, el, O),
        K = (e) => ee(e, et, L),
        B = (e) => ee(e, eo, U),
        V = (e) => ee(e, ei, R),
        Z = (e) => v.test(e),
        q = (e) => er(e, ea),
        Q = (e) => er(e, es),
        X = (e) => er(e, et),
        J = (e) => er(e, en),
        H = (e) => er(e, eo),
        Y = (e) => er(e, ei, !0),
        ee = (e, r, t) => {
          let o = x.exec(e);
          return !!o && (o[1] ? r(o[1]) : t(o[2]));
        },
        er = (e, r, t = !1) => {
          let o = v.exec(e);
          return !!o && (o[1] ? r(o[1]) : t);
        },
        et = (e) => "position" === e || "percentage" === e,
        eo = (e) => "image" === e || "url" === e,
        en = (e) => "length" === e || "size" === e || "bg-size" === e,
        ea = (e) => "length" === e,
        el = (e) => "number" === e,
        es = (e) => "family-name" === e,
        ei = (e) => "shadow" === e;
      Symbol.toStringTag;
      let ec = (function (e, ...r) {
        let t,
          o,
          n,
          a = function (s) {
            return (
              (o = (t = b(r.reduce((e, r) => r(e), e()))).cache.get),
              (n = t.cache.set),
              (a = l),
              l(s)
            );
          };
        function l(e) {
          let r = o(e);
          if (r) return r;
          let a = h(e, t);
          return (n(e, a), a);
        }
        return function () {
          return a(y.apply(null, arguments));
        };
      })(() => {
        let e = k("color"),
          r = k("font"),
          t = k("text"),
          o = k("font-weight"),
          n = k("tracking"),
          a = k("leading"),
          l = k("breakpoint"),
          s = k("container"),
          i = k("spacing"),
          c = k("radius"),
          d = k("shadow"),
          u = k("inset-shadow"),
          p = k("text-shadow"),
          f = k("drop-shadow"),
          m = k("blur"),
          b = k("perspective"),
          g = k("aspect"),
          h = k("ease"),
          y = k("animate"),
          w = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          x = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
          ],
          v = () => [...x(), Z, D],
          z = () => ["auto", "hidden", "clip", "visible", "scroll"],
          j = () => ["auto", "contain", "none"],
          P = () => [Z, D, i],
          E = () => [_, "full", "auto", ...P()],
          C = () => [S, "none", "subgrid", Z, D],
          N = () => ["auto", { span: ["full", S, Z, D] }, S, Z, D],
          I = () => [S, "auto", Z, D],
          L = () => ["auto", "min", "max", "fr", Z, D],
          R = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe",
          ],
          U = () => [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe",
          ],
          ee = () => ["auto", ...P()],
          er = () => [
            _,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...P(),
          ],
          et = () => [e, Z, D],
          eo = () => [...x(), X, K, { position: [Z, D] }],
          en = () => [
            "no-repeat",
            { repeat: ["", "x", "y", "space", "round"] },
          ],
          ea = () => ["auto", "cover", "contain", J, W, { size: [Z, D] }],
          el = () => [A, q, G],
          es = () => ["", "none", "full", c, Z, D],
          ei = () => ["", O, q, G],
          ec = () => ["solid", "dashed", "dotted", "double"],
          ed = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          eu = () => [O, A, X, K],
          ep = () => ["", "none", m, Z, D],
          ef = () => ["none", O, Z, D],
          em = () => ["none", O, Z, D],
          eb = () => [O, Z, D],
          eg = () => [_, "full", ...P()];
        return {
          cacheSize: 500,
          theme: {
            "animate": ["spin", "ping", "pulse", "bounce"],
            "aspect": ["video"],
            "blur": [T],
            "breakpoint": [T],
            "color": [M],
            "container": [T],
            "drop-shadow": [T],
            "ease": ["in", "out", "in-out"],
            "font": [$],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [T],
            "leading": ["none", "tight", "snug", "normal", "relaxed", "loose"],
            "perspective": [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            "radius": [T],
            "shadow": [T],
            "spacing": ["px", O],
            "text": [T],
            "text-shadow": [T],
            "tracking": [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
            ],
          },
          classGroups: {
            "aspect": [{ aspect: ["auto", "square", _, D, Z, g] }],
            "container": ["container"],
            "columns": [{ columns: [O, D, Z, s] }],
            "break-after": [{ "break-after": w() }],
            "break-before": [{ "break-before": w() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            "box": [{ box: ["border", "content"] }],
            "display": [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            "sr": ["sr-only", "not-sr-only"],
            "float": [{ float: ["right", "left", "none", "start", "end"] }],
            "clear": [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            "isolation": ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: v() }],
            "overflow": [{ overflow: z() }],
            "overflow-x": [{ "overflow-x": z() }],
            "overflow-y": [{ "overflow-y": z() }],
            "overscroll": [{ overscroll: j() }],
            "overscroll-x": [{ "overscroll-x": j() }],
            "overscroll-y": [{ "overscroll-y": j() }],
            "position": ["static", "fixed", "absolute", "relative", "sticky"],
            "inset": [{ inset: E() }],
            "inset-x": [{ "inset-x": E() }],
            "inset-y": [{ "inset-y": E() }],
            "start": [{ start: E() }],
            "end": [{ end: E() }],
            "top": [{ top: E() }],
            "right": [{ right: E() }],
            "bottom": [{ bottom: E() }],
            "left": [{ left: E() }],
            "visibility": ["visible", "invisible", "collapse"],
            "z": [{ z: [S, "auto", Z, D] }],
            "basis": [{ basis: [_, "full", "auto", s, ...P()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            "flex": [{ flex: [O, _, "auto", "initial", "none", D] }],
            "grow": [{ grow: ["", O, Z, D] }],
            "shrink": [{ shrink: ["", O, Z, D] }],
            "order": [{ order: [S, "first", "last", "none", Z, D] }],
            "grid-cols": [{ "grid-cols": C() }],
            "col-start-end": [{ col: N() }],
            "col-start": [{ "col-start": I() }],
            "col-end": [{ "col-end": I() }],
            "grid-rows": [{ "grid-rows": C() }],
            "row-start-end": [{ row: N() }],
            "row-start": [{ "row-start": I() }],
            "row-end": [{ "row-end": I() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": L() }],
            "auto-rows": [{ "auto-rows": L() }],
            "gap": [{ gap: P() }],
            "gap-x": [{ "gap-x": P() }],
            "gap-y": [{ "gap-y": P() }],
            "justify-content": [{ justify: [...R(), "normal"] }],
            "justify-items": [{ "justify-items": [...U(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ...U()] }],
            "align-content": [{ content: ["normal", ...R()] }],
            "align-items": [{ items: [...U(), { baseline: ["", "last"] }] }],
            "align-self": [
              { self: ["auto", ...U(), { baseline: ["", "last"] }] },
            ],
            "place-content": [{ "place-content": R() }],
            "place-items": [{ "place-items": [...U(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ...U()] }],
            "p": [{ p: P() }],
            "px": [{ px: P() }],
            "py": [{ py: P() }],
            "ps": [{ ps: P() }],
            "pe": [{ pe: P() }],
            "pt": [{ pt: P() }],
            "pr": [{ pr: P() }],
            "pb": [{ pb: P() }],
            "pl": [{ pl: P() }],
            "m": [{ m: ee() }],
            "mx": [{ mx: ee() }],
            "my": [{ my: ee() }],
            "ms": [{ ms: ee() }],
            "me": [{ me: ee() }],
            "mt": [{ mt: ee() }],
            "mr": [{ mr: ee() }],
            "mb": [{ mb: ee() }],
            "ml": [{ ml: ee() }],
            "space-x": [{ "space-x": P() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": P() }],
            "space-y-reverse": ["space-y-reverse"],
            "size": [{ size: er() }],
            "w": [{ w: [s, "screen", ...er()] }],
            "min-w": [{ "min-w": [s, "screen", "none", ...er()] }],
            "max-w": [
              {
                "max-w": [
                  s,
                  "screen",
                  "none",
                  "prose",
                  { screen: [l] },
                  ...er(),
                ],
              },
            ],
            "h": [{ h: ["screen", "lh", ...er()] }],
            "min-h": [{ "min-h": ["screen", "lh", "none", ...er()] }],
            "max-h": [{ "max-h": ["screen", "lh", ...er()] }],
            "font-size": [{ text: ["base", t, q, G] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [o, Z, F] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  A,
                  D,
                ],
              },
            ],
            "font-family": [{ font: [Q, D, r] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            "tracking": [{ tracking: [n, Z, D] }],
            "line-clamp": [{ "line-clamp": [O, "none", Z, F] }],
            "leading": [{ leading: [a, ...P()] }],
            "list-image": [{ "list-image": ["none", Z, D] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", Z, D] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: et() }],
            "text-color": [{ text: et() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...ec(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: [O, "from-font", "auto", Z, G] },
            ],
            "text-decoration-color": [{ decoration: et() }],
            "underline-offset": [{ "underline-offset": [O, "auto", Z, D] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            "indent": [{ indent: P() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  Z,
                  D,
                ],
              },
            ],
            "whitespace": [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            "break": [{ break: ["normal", "words", "all", "keep"] }],
            "wrap": [{ wrap: ["break-word", "anywhere", "normal"] }],
            "hyphens": [{ hyphens: ["none", "manual", "auto"] }],
            "content": [{ content: ["none", Z, D] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: eo() }],
            "bg-repeat": [{ bg: en() }],
            "bg-size": [{ bg: ea() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      S,
                      Z,
                      D,
                    ],
                    radial: ["", Z, D],
                    conic: [S, Z, D],
                  },
                  H,
                  B,
                ],
              },
            ],
            "bg-color": [{ bg: et() }],
            "gradient-from-pos": [{ from: el() }],
            "gradient-via-pos": [{ via: el() }],
            "gradient-to-pos": [{ to: el() }],
            "gradient-from": [{ from: et() }],
            "gradient-via": [{ via: et() }],
            "gradient-to": [{ to: et() }],
            "rounded": [{ rounded: es() }],
            "rounded-s": [{ "rounded-s": es() }],
            "rounded-e": [{ "rounded-e": es() }],
            "rounded-t": [{ "rounded-t": es() }],
            "rounded-r": [{ "rounded-r": es() }],
            "rounded-b": [{ "rounded-b": es() }],
            "rounded-l": [{ "rounded-l": es() }],
            "rounded-ss": [{ "rounded-ss": es() }],
            "rounded-se": [{ "rounded-se": es() }],
            "rounded-ee": [{ "rounded-ee": es() }],
            "rounded-es": [{ "rounded-es": es() }],
            "rounded-tl": [{ "rounded-tl": es() }],
            "rounded-tr": [{ "rounded-tr": es() }],
            "rounded-br": [{ "rounded-br": es() }],
            "rounded-bl": [{ "rounded-bl": es() }],
            "border-w": [{ border: ei() }],
            "border-w-x": [{ "border-x": ei() }],
            "border-w-y": [{ "border-y": ei() }],
            "border-w-s": [{ "border-s": ei() }],
            "border-w-e": [{ "border-e": ei() }],
            "border-w-t": [{ "border-t": ei() }],
            "border-w-r": [{ "border-r": ei() }],
            "border-w-b": [{ "border-b": ei() }],
            "border-w-l": [{ "border-l": ei() }],
            "divide-x": [{ "divide-x": ei() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": ei() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...ec(), "hidden", "none"] }],
            "divide-style": [{ divide: [...ec(), "hidden", "none"] }],
            "border-color": [{ border: et() }],
            "border-color-x": [{ "border-x": et() }],
            "border-color-y": [{ "border-y": et() }],
            "border-color-s": [{ "border-s": et() }],
            "border-color-e": [{ "border-e": et() }],
            "border-color-t": [{ "border-t": et() }],
            "border-color-r": [{ "border-r": et() }],
            "border-color-b": [{ "border-b": et() }],
            "border-color-l": [{ "border-l": et() }],
            "divide-color": [{ divide: et() }],
            "outline-style": [{ outline: [...ec(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [O, Z, D] }],
            "outline-w": [{ outline: ["", O, q, G] }],
            "outline-color": [{ outline: et() }],
            "shadow": [{ shadow: ["", "none", d, Y, V] }],
            "shadow-color": [{ shadow: et() }],
            "inset-shadow": [{ "inset-shadow": ["none", u, Y, V] }],
            "inset-shadow-color": [{ "inset-shadow": et() }],
            "ring-w": [{ ring: ei() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: et() }],
            "ring-offset-w": [{ "ring-offset": [O, G] }],
            "ring-offset-color": [{ "ring-offset": et() }],
            "inset-ring-w": [{ "inset-ring": ei() }],
            "inset-ring-color": [{ "inset-ring": et() }],
            "text-shadow": [{ "text-shadow": ["none", p, Y, V] }],
            "text-shadow-color": [{ "text-shadow": et() }],
            "opacity": [{ opacity: [O, Z, D] }],
            "mix-blend": [
              { "mix-blend": [...ed(), "plus-darker", "plus-lighter"] },
            ],
            "bg-blend": [{ "bg-blend": ed() }],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [O] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": eu() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": eu() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": et() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": et() }],
            "mask-image-t-from-pos": [{ "mask-t-from": eu() }],
            "mask-image-t-to-pos": [{ "mask-t-to": eu() }],
            "mask-image-t-from-color": [{ "mask-t-from": et() }],
            "mask-image-t-to-color": [{ "mask-t-to": et() }],
            "mask-image-r-from-pos": [{ "mask-r-from": eu() }],
            "mask-image-r-to-pos": [{ "mask-r-to": eu() }],
            "mask-image-r-from-color": [{ "mask-r-from": et() }],
            "mask-image-r-to-color": [{ "mask-r-to": et() }],
            "mask-image-b-from-pos": [{ "mask-b-from": eu() }],
            "mask-image-b-to-pos": [{ "mask-b-to": eu() }],
            "mask-image-b-from-color": [{ "mask-b-from": et() }],
            "mask-image-b-to-color": [{ "mask-b-to": et() }],
            "mask-image-l-from-pos": [{ "mask-l-from": eu() }],
            "mask-image-l-to-pos": [{ "mask-l-to": eu() }],
            "mask-image-l-from-color": [{ "mask-l-from": et() }],
            "mask-image-l-to-color": [{ "mask-l-to": et() }],
            "mask-image-x-from-pos": [{ "mask-x-from": eu() }],
            "mask-image-x-to-pos": [{ "mask-x-to": eu() }],
            "mask-image-x-from-color": [{ "mask-x-from": et() }],
            "mask-image-x-to-color": [{ "mask-x-to": et() }],
            "mask-image-y-from-pos": [{ "mask-y-from": eu() }],
            "mask-image-y-to-pos": [{ "mask-y-to": eu() }],
            "mask-image-y-from-color": [{ "mask-y-from": et() }],
            "mask-image-y-to-color": [{ "mask-y-to": et() }],
            "mask-image-radial": [{ "mask-radial": [Z, D] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": eu() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": eu() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": et() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": et() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [{ "mask-radial-at": x() }],
            "mask-image-conic-pos": [{ "mask-conic": [O] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": eu() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": eu() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": et() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": et() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: eo() }],
            "mask-repeat": [{ mask: en() }],
            "mask-size": [{ mask: ea() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", Z, D] }],
            "filter": [{ filter: ["", "none", Z, D] }],
            "blur": [{ blur: ep() }],
            "brightness": [{ brightness: [O, Z, D] }],
            "contrast": [{ contrast: [O, Z, D] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", f, Y, V] }],
            "drop-shadow-color": [{ "drop-shadow": et() }],
            "grayscale": [{ grayscale: ["", O, Z, D] }],
            "hue-rotate": [{ "hue-rotate": [O, Z, D] }],
            "invert": [{ invert: ["", O, Z, D] }],
            "saturate": [{ saturate: [O, Z, D] }],
            "sepia": [{ sepia: ["", O, Z, D] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", Z, D] }],
            "backdrop-blur": [{ "backdrop-blur": ep() }],
            "backdrop-brightness": [{ "backdrop-brightness": [O, Z, D] }],
            "backdrop-contrast": [{ "backdrop-contrast": [O, Z, D] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", O, Z, D] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [O, Z, D] }],
            "backdrop-invert": [{ "backdrop-invert": ["", O, Z, D] }],
            "backdrop-opacity": [{ "backdrop-opacity": [O, Z, D] }],
            "backdrop-saturate": [{ "backdrop-saturate": [O, Z, D] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", O, Z, D] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": P() }],
            "border-spacing-x": [{ "border-spacing-x": P() }],
            "border-spacing-y": [{ "border-spacing-y": P() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            "caption": [{ caption: ["top", "bottom"] }],
            "transition": [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  Z,
                  D,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            "duration": [{ duration: [O, "initial", Z, D] }],
            "ease": [{ ease: ["linear", "initial", h, Z, D] }],
            "delay": [{ delay: [O, Z, D] }],
            "animate": [{ animate: ["none", y, Z, D] }],
            "backface": [{ backface: ["hidden", "visible"] }],
            "perspective": [{ perspective: [b, Z, D] }],
            "perspective-origin": [{ "perspective-origin": v() }],
            "rotate": [{ rotate: ef() }],
            "rotate-x": [{ "rotate-x": ef() }],
            "rotate-y": [{ "rotate-y": ef() }],
            "rotate-z": [{ "rotate-z": ef() }],
            "scale": [{ scale: em() }],
            "scale-x": [{ "scale-x": em() }],
            "scale-y": [{ "scale-y": em() }],
            "scale-z": [{ "scale-z": em() }],
            "scale-3d": ["scale-3d"],
            "skew": [{ skew: eb() }],
            "skew-x": [{ "skew-x": eb() }],
            "skew-y": [{ "skew-y": eb() }],
            "transform": [{ transform: [Z, D, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: v() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            "translate": [{ translate: eg() }],
            "translate-x": [{ "translate-x": eg() }],
            "translate-y": [{ "translate-y": eg() }],
            "translate-z": [{ "translate-z": eg() }],
            "translate-none": ["translate-none"],
            "accent": [{ accent: et() }],
            "appearance": [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: et() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            "cursor": [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  Z,
                  D,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            "resize": [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": P() }],
            "scroll-mx": [{ "scroll-mx": P() }],
            "scroll-my": [{ "scroll-my": P() }],
            "scroll-ms": [{ "scroll-ms": P() }],
            "scroll-me": [{ "scroll-me": P() }],
            "scroll-mt": [{ "scroll-mt": P() }],
            "scroll-mr": [{ "scroll-mr": P() }],
            "scroll-mb": [{ "scroll-mb": P() }],
            "scroll-ml": [{ "scroll-ml": P() }],
            "scroll-p": [{ "scroll-p": P() }],
            "scroll-px": [{ "scroll-px": P() }],
            "scroll-py": [{ "scroll-py": P() }],
            "scroll-ps": [{ "scroll-ps": P() }],
            "scroll-pe": [{ "scroll-pe": P() }],
            "scroll-pt": [{ "scroll-pt": P() }],
            "scroll-pr": [{ "scroll-pr": P() }],
            "scroll-pb": [{ "scroll-pb": P() }],
            "scroll-pl": [{ "scroll-pl": P() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            "touch": [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            "select": [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  Z,
                  D,
                ],
              },
            ],
            "fill": [{ fill: ["none", ...et()] }],
            "stroke-w": [{ stroke: [O, q, G, F] }],
            "stroke": [{ stroke: ["none", ...et()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            "overflow": ["overflow-x", "overflow-y"],
            "overscroll": ["overscroll-x", "overscroll-y"],
            "inset": [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            "flex": ["basis", "grow", "shrink"],
            "gap": ["gap-x", "gap-y"],
            "p": ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            "px": ["pr", "pl"],
            "py": ["pt", "pb"],
            "m": ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            "mx": ["mr", "ml"],
            "my": ["mt", "mb"],
            "size": ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            "rounded": [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "translate": ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            "touch": ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      });
    },
    52596: (e, r, t) => {
      t.d(r, { $: () => o });
      function o() {
        for (var e, r, t = 0, o = "", n = arguments.length; t < n; t++)
          (e = arguments[t]) &&
            (r = (function e(r) {
              var t,
                o,
                n = "";
              if ("string" == typeof r || "number" == typeof r) n += r;
              else if ("object" == typeof r)
                if (Array.isArray(r)) {
                  var a = r.length;
                  for (t = 0; t < a; t++)
                    r[t] && (o = e(r[t])) && (n && (n += " "), (n += o));
                } else for (o in r) r[o] && (n && (n += " "), (n += o));
              return n;
            })(e)) &&
            (o && (o += " "), (o += r));
        return o;
      }
    },
    63655: (e, r, t) => {
      t.d(r, { hO: () => i, sG: () => s });
      var o = t(12115),
        n = t(47650),
        a = t(99708),
        l = t(95155),
        s = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "select",
          "span",
          "svg",
          "ul",
        ].reduce((e, r) => {
          let t = (0, a.TL)(`Primitive.${r}`),
            n = o.forwardRef((e, o) => {
              let { asChild: n, ...a } = e;
              return (
                "undefined" != typeof window &&
                  (window[Symbol.for("radix-ui")] = !0),
                (0, l.jsx)(n ? t : r, { ...a, ref: o })
              );
            });
          return ((n.displayName = `Primitive.${r}`), { ...e, [r]: n });
        }, {});
      function i(e, r) {
        e && n.flushSync(() => e.dispatchEvent(r));
      }
    },
    69991: (e, r) => {
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        !(function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          DecodeError: function () {
            return m;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return h;
          },
          NormalizeError: function () {
            return b;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return p;
          },
          ST: function () {
            return f;
          },
          WEB_VITALS: function () {
            return t;
          },
          execOnce: function () {
            return o;
          },
          getDisplayName: function () {
            return i;
          },
          getLocationOrigin: function () {
            return l;
          },
          getURL: function () {
            return s;
          },
          isAbsoluteUrl: function () {
            return a;
          },
          isResSent: function () {
            return c;
          },
          loadGetInitialProps: function () {
            return u;
          },
          normalizeRepeatedSlashes: function () {
            return d;
          },
          stringifyError: function () {
            return w;
          },
        }));
      let t = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function o(e) {
        let r,
          t = !1;
        return function () {
          for (var o = arguments.length, n = Array(o), a = 0; a < o; a++)
            n[a] = arguments[a];
          return (t || ((t = !0), (r = e(...n))), r);
        };
      }
      let n = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        a = (e) => n.test(e);
      function l() {
        let { protocol: e, hostname: r, port: t } = window.location;
        return e + "//" + r + (t ? ":" + t : "");
      }
      function s() {
        let { href: e } = window.location,
          r = l();
        return e.substring(r.length);
      }
      function i(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function c(e) {
        return e.finished || e.headersSent;
      }
      function d(e) {
        let r = e.split("?");
        return (
          r[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (r[1] ? "?" + r.slice(1).join("?") : "")
        );
      }
      async function u(e, r) {
        let t = r.res || (r.ctx && r.ctx.res);
        if (!e.getInitialProps)
          return r.ctx && r.Component
            ? { pageProps: await u(r.Component, r.ctx) }
            : {};
        let o = await e.getInitialProps(r);
        if (t && c(t)) return o;
        if (!o)
          throw Object.defineProperty(
            Error(
              '"' +
                i(e) +
                '.getInitialProps()" should resolve to an object. But found "' +
                o +
                '" instead.',
            ),
            "__NEXT_ERROR_CODE",
            { value: "E394", enumerable: !1, configurable: !0 },
          );
        return o;
      }
      let p = "undefined" != typeof performance,
        f =
          p &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e],
          );
      class m extends Error {}
      class b extends Error {}
      class g extends Error {
        constructor(e) {
          (super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e));
        }
      }
      class h extends Error {
        constructor(e, r) {
          (super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + r));
        }
      }
      class y extends Error {
        constructor() {
          (super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module"));
        }
      }
      function w(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    73180: (e, r) => {
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "errorOnce", {
          enumerable: !0,
          get: function () {
            return t;
          },
        }));
      let t = (e) => {};
    },
    78859: (e, r) => {
      function t(e) {
        let r = {};
        for (let [t, o] of e.entries()) {
          let e = r[t];
          void 0 === e
            ? (r[t] = o)
            : Array.isArray(e)
              ? e.push(o)
              : (r[t] = [e, o]);
        }
        return r;
      }
      function o(e) {
        return "string" == typeof e
          ? e
          : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e
            ? ""
            : String(e);
      }
      function n(e) {
        let r = new URLSearchParams();
        for (let [t, n] of Object.entries(e))
          if (Array.isArray(n)) for (let e of n) r.append(t, o(e));
          else r.set(t, o(n));
        return r;
      }
      function a(e) {
        for (
          var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), o = 1;
          o < r;
          o++
        )
          t[o - 1] = arguments[o];
        for (let r of t) {
          for (let t of r.keys()) e.delete(t);
          for (let [t, o] of r.entries()) e.append(t, o);
        }
        return e;
      }
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        !(function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          assign: function () {
            return a;
          },
          searchParamsToUrlQuery: function () {
            return t;
          },
          urlQueryToSearchParams: function () {
            return n;
          },
        }));
    },
    82757: (e, r, t) => {
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        !(function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          formatUrl: function () {
            return a;
          },
          formatWithValidation: function () {
            return s;
          },
          urlObjectKeys: function () {
            return l;
          },
        }));
      let o = t(6966)._(t(78859)),
        n = /https?|ftp|gopher|file/;
      function a(e) {
        let { auth: r, hostname: t } = e,
          a = e.protocol || "",
          l = e.pathname || "",
          s = e.hash || "",
          i = e.query || "",
          c = !1;
        ((r = r ? encodeURIComponent(r).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (c = r + e.host)
            : t &&
              ((c = r + (~t.indexOf(":") ? "[" + t + "]" : t)),
              e.port && (c += ":" + e.port)),
          i &&
            "object" == typeof i &&
            (i = String(o.urlQueryToSearchParams(i))));
        let d = e.search || (i && "?" + i) || "";
        return (
          a && !a.endsWith(":") && (a += ":"),
          e.slashes || ((!a || n.test(a)) && !1 !== c)
            ? ((c = "//" + (c || "")), l && "/" !== l[0] && (l = "/" + l))
            : c || (c = ""),
          s && "#" !== s[0] && (s = "#" + s),
          d && "?" !== d[0] && (d = "?" + d),
          "" +
            a +
            c +
            (l = l.replace(/[?#]/g, encodeURIComponent)) +
            (d = d.replace("#", "%23")) +
            s
        );
      }
      let l = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function s(e) {
        return a(e);
      }
    },
    92664: (e, r, t) => {
      (Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let o = t(69991),
        n = t(87102);
      function a(e) {
        if (!(0, o.isAbsoluteUrl)(e)) return !0;
        try {
          let r = (0, o.getLocationOrigin)(),
            t = new URL(e, r);
          return t.origin === r && (0, n.hasBasePath)(t.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    99708: (e, r, t) => {
      t.d(r, { DX: () => s, Dc: () => c, TL: () => l });
      var o = t(12115),
        n = t(6101),
        a = t(95155);
      function l(e) {
        let r = (function (e) {
            let r = o.forwardRef((e, r) => {
              let { children: t, ...a } = e;
              if (o.isValidElement(t)) {
                var l;
                let e,
                  s,
                  i =
                    ((l = t),
                    (s =
                      (e = Object.getOwnPropertyDescriptor(
                        l.props,
                        "ref",
                      )?.get) &&
                      "isReactWarning" in e &&
                      e.isReactWarning)
                      ? l.ref
                      : (s =
                            (e = Object.getOwnPropertyDescriptor(
                              l,
                              "ref",
                            )?.get) &&
                            "isReactWarning" in e &&
                            e.isReactWarning)
                        ? l.props.ref
                        : l.props.ref || l.ref),
                  c = (function (e, r) {
                    let t = { ...r };
                    for (let o in r) {
                      let n = e[o],
                        a = r[o];
                      /^on[A-Z]/.test(o)
                        ? n && a
                          ? (t[o] = (...e) => {
                              let r = a(...e);
                              return (n(...e), r);
                            })
                          : n && (t[o] = n)
                        : "style" === o
                          ? (t[o] = { ...n, ...a })
                          : "className" === o &&
                            (t[o] = [n, a].filter(Boolean).join(" "));
                    }
                    return { ...e, ...t };
                  })(a, t.props);
                return (
                  t.type !== o.Fragment && (c.ref = r ? (0, n.t)(r, i) : i),
                  o.cloneElement(t, c)
                );
              }
              return o.Children.count(t) > 1 ? o.Children.only(null) : null;
            });
            return ((r.displayName = `${e}.SlotClone`), r);
          })(e),
          t = o.forwardRef((e, t) => {
            let { children: n, ...l } = e,
              s = o.Children.toArray(n),
              i = s.find(d);
            if (i) {
              let e = i.props.children,
                n = s.map((r) =>
                  r !== i
                    ? r
                    : o.Children.count(e) > 1
                      ? o.Children.only(null)
                      : o.isValidElement(e)
                        ? e.props.children
                        : null,
                );
              return (0, a.jsx)(r, {
                ...l,
                ref: t,
                children: o.isValidElement(e)
                  ? o.cloneElement(e, void 0, n)
                  : null,
              });
            }
            return (0, a.jsx)(r, { ...l, ref: t, children: n });
          });
        return ((t.displayName = `${e}.Slot`), t);
      }
      var s = l("Slot"),
        i = Symbol("radix.slottable");
      function c(e) {
        let r = ({ children: e }) => (0, a.jsx)(a.Fragment, { children: e });
        return ((r.displayName = `${e}.Slottable`), (r.__radixId = i), r);
      }
      function d(e) {
        return (
          o.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === i
        );
      }
    },
  },
]);

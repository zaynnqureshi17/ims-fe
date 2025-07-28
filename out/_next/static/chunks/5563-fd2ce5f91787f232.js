(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5563],
  {
    4217: (e, t, r) => {
      var n = r(36713),
        o = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e;
      };
    },
    7985: (e, t, r) => {
      e.exports = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
    },
    15452: (e, t, r) => {
      "use strict";
      r.d(t, {
        UC: () => ee,
        VY: () => er,
        ZL: () => J,
        bL: () => X,
        bm: () => en,
        hE: () => et,
        hJ: () => Q,
      });
      var n = r(12115),
        o = r(85185),
        i = r(6101),
        a = r(46081),
        s = r(61285),
        l = r(5845),
        u = r(19178),
        c = r(25519),
        d = r(34378),
        p = r(28905),
        f = r(63655),
        m = r(92293),
        g = r(93795),
        v = r(38168),
        h = r(99708),
        y = r(95155),
        b = "Dialog",
        [x, w] = (0, a.A)(b),
        [C, j] = x(b),
        R = (e) => {
          let {
              __scopeDialog: t,
              children: r,
              open: o,
              defaultOpen: i,
              onOpenChange: a,
              modal: u = !0,
            } = e,
            c = n.useRef(null),
            d = n.useRef(null),
            [p, f] = (0, l.i)({
              prop: o,
              defaultProp: null != i && i,
              onChange: a,
              caller: b,
            });
          return (0, y.jsx)(C, {
            scope: t,
            triggerRef: c,
            contentRef: d,
            contentId: (0, s.B)(),
            titleId: (0, s.B)(),
            descriptionId: (0, s.B)(),
            open: p,
            onOpenChange: f,
            onOpenToggle: n.useCallback(() => f((e) => !e), [f]),
            modal: u,
            children: r,
          });
        };
      R.displayName = b;
      var k = "DialogTrigger";
      n.forwardRef((e, t) => {
        let { __scopeDialog: r, ...n } = e,
          a = j(k, r),
          s = (0, i.s)(t, a.triggerRef);
        return (0, y.jsx)(f.sG.button, {
          "type": "button",
          "aria-haspopup": "dialog",
          "aria-expanded": a.open,
          "aria-controls": a.contentId,
          "data-state": H(a.open),
          ...n,
          "ref": s,
          "onClick": (0, o.m)(e.onClick, a.onOpenToggle),
        });
      }).displayName = k;
      var T = "DialogPortal",
        [O, E] = x(T, { forceMount: void 0 }),
        S = (e) => {
          let {
              __scopeDialog: t,
              forceMount: r,
              children: o,
              container: i,
            } = e,
            a = j(T, t);
          return (0, y.jsx)(O, {
            scope: t,
            forceMount: r,
            children: n.Children.map(o, (e) =>
              (0, y.jsx)(p.C, {
                present: r || a.open,
                children: (0, y.jsx)(d.Z, {
                  asChild: !0,
                  container: i,
                  children: e,
                }),
              }),
            ),
          });
        };
      S.displayName = T;
      var P = "DialogOverlay",
        L = n.forwardRef((e, t) => {
          let r = E(P, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            i = j(P, e.__scopeDialog);
          return i.modal
            ? (0, y.jsx)(p.C, {
                present: n || i.open,
                children: (0, y.jsx)(N, { ...o, ref: t }),
              })
            : null;
        });
      L.displayName = P;
      var D = (0, h.TL)("DialogOverlay.RemoveScroll"),
        N = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = j(P, r);
          return (0, y.jsx)(g.A, {
            as: D,
            allowPinchZoom: !0,
            shards: [o.contentRef],
            children: (0, y.jsx)(f.sG.div, {
              "data-state": H(o.open),
              ...n,
              "ref": t,
              "style": { pointerEvents: "auto", ...n.style },
            }),
          });
        }),
        _ = "DialogContent",
        I = n.forwardRef((e, t) => {
          let r = E(_, e.__scopeDialog),
            { forceMount: n = r.forceMount, ...o } = e,
            i = j(_, e.__scopeDialog);
          return (0, y.jsx)(p.C, {
            present: n || i.open,
            children: i.modal
              ? (0, y.jsx)(A, { ...o, ref: t })
              : (0, y.jsx)(M, { ...o, ref: t }),
          });
        });
      I.displayName = _;
      var A = n.forwardRef((e, t) => {
          let r = j(_, e.__scopeDialog),
            a = n.useRef(null),
            s = (0, i.s)(t, r.contentRef, a);
          return (
            n.useEffect(() => {
              let e = a.current;
              if (e) return (0, v.Eq)(e);
            }, []),
            (0, y.jsx)(F, {
              ...e,
              ref: s,
              trapFocus: r.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, o.m)(e.onCloseAutoFocus, (e) => {
                var t;
                (e.preventDefault(),
                  null == (t = r.triggerRef.current) || t.focus());
              }),
              onPointerDownOutside: (0, o.m)(e.onPointerDownOutside, (e) => {
                let t = e.detail.originalEvent,
                  r = 0 === t.button && !0 === t.ctrlKey;
                (2 === t.button || r) && e.preventDefault();
              }),
              onFocusOutside: (0, o.m)(e.onFocusOutside, (e) =>
                e.preventDefault(),
              ),
            })
          );
        }),
        M = n.forwardRef((e, t) => {
          let r = j(_, e.__scopeDialog),
            o = n.useRef(!1),
            i = n.useRef(!1);
          return (0, y.jsx)(F, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var n, a;
              (null == (n = e.onCloseAutoFocus) || n.call(e, t),
                t.defaultPrevented ||
                  (o.current || null == (a = r.triggerRef.current) || a.focus(),
                  t.preventDefault()),
                (o.current = !1),
                (i.current = !1));
            },
            onInteractOutside: (t) => {
              var n, a;
              (null == (n = e.onInteractOutside) || n.call(e, t),
                t.defaultPrevented ||
                  ((o.current = !0),
                  "pointerdown" === t.detail.originalEvent.type &&
                    (i.current = !0)));
              let s = t.target;
              ((null == (a = r.triggerRef.current) ? void 0 : a.contains(s)) &&
                t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault());
            },
          });
        }),
        F = n.forwardRef((e, t) => {
          let {
              __scopeDialog: r,
              trapFocus: o,
              onOpenAutoFocus: a,
              onCloseAutoFocus: s,
              ...l
            } = e,
            d = j(_, r),
            p = n.useRef(null),
            f = (0, i.s)(t, p);
          return (
            (0, m.Oh)(),
            (0, y.jsxs)(y.Fragment, {
              children: [
                (0, y.jsx)(c.n, {
                  asChild: !0,
                  loop: !0,
                  trapped: o,
                  onMountAutoFocus: a,
                  onUnmountAutoFocus: s,
                  children: (0, y.jsx)(u.qW, {
                    "role": "dialog",
                    "id": d.contentId,
                    "aria-describedby": d.descriptionId,
                    "aria-labelledby": d.titleId,
                    "data-state": H(d.open),
                    ...l,
                    "ref": f,
                    "onDismiss": () => d.onOpenChange(!1),
                  }),
                }),
                (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)($, { titleId: d.titleId }),
                    (0, y.jsx)(Y, {
                      contentRef: p,
                      descriptionId: d.descriptionId,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        U = "DialogTitle",
        B = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = j(U, r);
          return (0, y.jsx)(f.sG.h2, { id: o.titleId, ...n, ref: t });
        });
      B.displayName = U;
      var q = "DialogDescription",
        W = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            o = j(q, r);
          return (0, y.jsx)(f.sG.p, { id: o.descriptionId, ...n, ref: t });
        });
      W.displayName = q;
      var z = "DialogClose",
        G = n.forwardRef((e, t) => {
          let { __scopeDialog: r, ...n } = e,
            i = j(z, r);
          return (0, y.jsx)(f.sG.button, {
            type: "button",
            ...n,
            ref: t,
            onClick: (0, o.m)(e.onClick, () => i.onOpenChange(!1)),
          });
        });
      function H(e) {
        return e ? "open" : "closed";
      }
      G.displayName = z;
      var K = "DialogTitleWarning",
        [V, Z] = (0, a.q)(K, {
          contentName: _,
          titleName: U,
          docsSlug: "dialog",
        }),
        $ = (e) => {
          let { titleId: t } = e,
            r = Z(K),
            o = "`"
              .concat(r.contentName, "` requires a `")
              .concat(
                r.titleName,
                "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `",
              )
              .concat(
                r.titleName,
                "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/",
              )
              .concat(r.docsSlug);
          return (
            n.useEffect(() => {
              t && (document.getElementById(t) || console.error(o));
            }, [o, t]),
            null
          );
        },
        Y = (e) => {
          let { contentRef: t, descriptionId: r } = e,
            o = Z("DialogDescriptionWarning"),
            i =
              "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(
                o.contentName,
                "}.",
              );
          return (
            n.useEffect(() => {
              var e;
              let n =
                null == (e = t.current)
                  ? void 0
                  : e.getAttribute("aria-describedby");
              r && n && (document.getElementById(r) || console.warn(i));
            }, [i, t, r]),
            null
          );
        },
        X = R,
        J = S,
        Q = L,
        ee = I,
        et = B,
        er = W,
        en = G;
    },
    16613: (e, t, r) => {
      var n = r(24376),
        o = r(57213),
        i = r(39608),
        a = r(70771),
        s = 1 / 0,
        l = n ? n.prototype : void 0,
        u = l ? l.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (i(t)) return o(t, e) + "";
        if (a(t)) return u ? u.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -s ? "-0" : r;
      };
    },
    20570: (e, t, r) => {
      var n = r(24376),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        s = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        var t = i.call(e, s),
          r = e[s];
        try {
          e[s] = void 0;
          var n = !0;
        } catch (e) {}
        var o = a.call(e);
        return (n && (t ? (e[s] = r) : delete e[s]), o);
      };
    },
    22432: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("panel-left", [
        [
          "rect",
          { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
        ],
        ["path", { d: "M9 3v18", key: "fh3hqa" }],
      ]);
    },
    23360: (e, t, r) => {
      var n = r(42233);
      e.exports = function (e) {
        var t = n(e),
          r = t % 1;
        return t == t ? (r ? t - r : t) : 0;
      };
    },
    24376: (e, t, r) => {
      e.exports = r(82500).Symbol;
    },
    25820: (e) => {
      e.exports = function (e, t, r) {
        return (
          e == e &&
            (void 0 !== r && (e = e <= r ? e : r),
            void 0 !== t && (e = e >= t ? e : t)),
          e
        );
      };
    },
    36713: (e) => {
      var t = /\s/;
      e.exports = function (e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)); );
        return r;
      };
    },
    36815: (e, t, r) => {
      var n = r(4217),
        o = r(67460),
        i = r(70771),
        a = 0 / 0,
        s = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (i(e)) return a;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = l.test(e);
        return r || u.test(e) ? c(e.slice(2), r ? 2 : 8) : s.test(e) ? a : +e;
      };
    },
    38637: (e, t, r) => {
      e.exports = r(79399)();
    },
    39608: (e) => {
      e.exports = Array.isArray;
    },
    42233: (e, t, r) => {
      var n = r(36815),
        o = 1 / 0;
      e.exports = function (e) {
        return e
          ? (e = n(e)) === o || e === -o
            ? (e < 0 ? -1 : 1) * 17976931348623157e292
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
    },
    44638: (e, t, r) => {
      "use strict";
      var n = Object.create,
        o = Object.defineProperty,
        i = Object.getOwnPropertyDescriptor,
        a = Object.getOwnPropertyNames,
        s = Object.getPrototypeOf,
        l = Object.prototype.hasOwnProperty,
        u = (e, t) => o(e, "name", { value: t, configurable: !0 }),
        c = (e, t, r, n) => {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (let s of a(t))
              l.call(e, s) ||
                s === r ||
                o(e, s, {
                  get: () => t[s],
                  enumerable: !(n = i(t, s)) || n.enumerable,
                });
          return e;
        },
        d = (e, t, r) => (
          (r = null != e ? n(s(e)) : {}),
          c(
            !t && e && e.__esModule
              ? r
              : o(r, "default", { value: e, enumerable: !0 }),
            e,
          )
        ),
        p = {};
      (((e, t) => {
        for (var r in t) o(e, r, { get: t[r], enumerable: !0 });
      })(p, { default: () => b, useTopLoader: () => h }),
        (e.exports = c(o({}, "__esModule", { value: !0 }), p)));
      var f = d(r(38637)),
        m = d(r(12115)),
        g = d(r(76770)),
        v = d(r(76770)),
        h = u(
          () => ({
            start: () => v.start(),
            done: (e) => v.done(e),
            remove: () => v.remove(),
            setProgress: (e) => v.set(e),
            inc: (e) => v.inc(e),
            trickle: () => v.trickle(),
            isStarted: () => v.isStarted(),
            isRendered: () => v.isRendered(),
            getPositioningCSS: () => v.getPositioningCSS(),
          }),
          "useTopLoader",
        ),
        y = u((e) => {
          let {
              color: t,
              height: r,
              showSpinner: n,
              crawl: o,
              crawlSpeed: i,
              initialPosition: a,
              easing: s,
              speed: l,
              shadow: c,
              template: d,
              zIndex: p = 1600,
              showAtBottom: f = !1,
              showForHashAnchor: v = !0,
            } = e,
            h = null != t ? t : "#29d",
            y =
              c || void 0 === c
                ? c
                  ? "box-shadow:".concat(c)
                  : "box-shadow:0 0 10px ".concat(h, ",0 0 5px ").concat(h)
                : "",
            b = m.createElement(
              "style",
              null,
              "#nprogress{pointer-events:none}#nprogress .bar{background:"
                .concat(h, ";position:fixed;z-index:")
                .concat(p, ";")
                .concat(
                  f ? "bottom: 0;" : "top: 0;",
                  "left:0;width:100%;height:",
                )
                .concat(
                  null != r ? r : 3,
                  "px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;",
                )
                .concat(
                  y,
                  ";opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:",
                )
                .concat(p, ";")
                .concat(
                  f ? "bottom: 15px;" : "top: 15px;",
                  "right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:",
                )
                .concat(h, ";border-left-color:")
                .concat(
                  h,
                  ";border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
                ),
            ),
            x = u(
              (e) => new URL(e, window.location.href).href,
              "toAbsoluteURL",
            ),
            w = u((e, t) => {
              let r = new URL(x(e)),
                n = new URL(x(t));
              return r.href.split("#")[0] === n.href.split("#")[0];
            }, "isHashAnchor"),
            C = u((e, t) => {
              let r = new URL(x(e)),
                n = new URL(x(t));
              return (
                r.hostname.replace(/^www\./, "") ===
                n.hostname.replace(/^www\./, "")
              );
            }, "isSameHostName");
          return (
            m.useEffect(() => {
              function e(e, t) {
                let r = new URL(e),
                  n = new URL(t);
                if (
                  r.hostname === n.hostname &&
                  r.pathname === n.pathname &&
                  r.search === n.search
                ) {
                  let e = r.hash,
                    t = n.hash;
                  return (
                    e !== t && r.href.replace(e, "") === n.href.replace(t, "")
                  );
                }
                return !1;
              }
              (g.configure({
                showSpinner: null == n || n,
                trickle: null == o || o,
                trickleSpeed: null != i ? i : 200,
                minimum: null != a ? a : 0.08,
                easing: null != s ? s : "ease",
                speed: null != l ? l : 200,
                template:
                  null != d
                    ? d
                    : '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
              }),
                u(e, "isAnchorOfCurrentUrl"));
              var t = document.querySelectorAll("html");
              let r = u(
                () => t.forEach((e) => e.classList.remove("nprogress-busy")),
                "removeNProgressClass",
              );
              function c(e) {
                for (; e && "a" !== e.tagName.toLowerCase(); )
                  e = e.parentElement;
                return e;
              }
              function p(t) {
                try {
                  let n = t.target,
                    o = c(n),
                    i = null == o ? void 0 : o.href;
                  if (i) {
                    let n = window.location.href,
                      a = "" !== o.target,
                      s = [
                        "tel:",
                        "mailto:",
                        "sms:",
                        "blob:",
                        "download:",
                      ].some((e) => i.startsWith(e));
                    if (!C(window.location.href, o.href)) return;
                    let l = e(n, i) || w(window.location.href, o.href);
                    if (!v && l) return;
                    i === n ||
                    a ||
                    s ||
                    l ||
                    t.ctrlKey ||
                    t.metaKey ||
                    t.shiftKey ||
                    t.altKey ||
                    !x(o.href).startsWith("http")
                      ? (g.start(), g.done(), r())
                      : g.start();
                  }
                } catch (e) {
                  (g.start(), g.done());
                }
              }
              function f() {
                (g.done(), r());
              }
              function m() {
                g.done();
              }
              return (
                u(c, "findClosestAnchor"),
                u(p, "handleClick"),
                ((e) => {
                  let t = e.pushState;
                  e.pushState = function () {
                    for (
                      var n = arguments.length, o = Array(n), i = 0;
                      i < n;
                      i++
                    )
                      o[i] = arguments[i];
                    return (g.done(), r(), t.apply(e, o));
                  };
                })(window.history),
                ((e) => {
                  let t = e.replaceState;
                  e.replaceState = function () {
                    for (
                      var n = arguments.length, o = Array(n), i = 0;
                      i < n;
                      i++
                    )
                      o[i] = arguments[i];
                    return (g.done(), r(), t.apply(e, o));
                  };
                })(window.history),
                u(f, "handlePageHide"),
                u(m, "handleBackAndForth"),
                window.addEventListener("popstate", m),
                document.addEventListener("click", p),
                window.addEventListener("pagehide", f),
                () => {
                  (document.removeEventListener("click", p),
                    window.removeEventListener("pagehide", f),
                    window.removeEventListener("popstate", m));
                }
              );
            }, []),
            b
          );
        }, "NextTopLoader"),
        b = y;
      y.propTypes = {
        color: f.string,
        height: f.number,
        showSpinner: f.bool,
        crawl: f.bool,
        crawlSpeed: f.number,
        initialPosition: f.number,
        easing: f.string,
        speed: f.number,
        template: f.string,
        shadow: f.oneOfType([f.string, f.bool]),
        zIndex: f.number,
        showAtBottom: f.bool,
      };
    },
    48611: (e) => {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    54416: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("x", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
      ]);
    },
    57213: (e) => {
      e.exports = function (e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n; )
          o[r] = t(e[r], r, e);
        return o;
      };
    },
    64439: (e) => {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    66766: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => o.a });
      var n = r(71469),
        o = r.n(n);
    },
    67460: (e) => {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    70771: (e, t, r) => {
      var n = r(98233),
        o = r(48611);
      e.exports = function (e) {
        return "symbol" == typeof e || (o(e) && "[object Symbol]" == n(e));
      };
    },
    71469: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return s;
          },
        }));
      let n = r(88229),
        o = r(38883),
        i = r(33063),
        a = n._(r(51193));
      function s(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let l = i.Image;
    },
    71770: (e, t, r) => {
      var n = r(25820),
        o = r(16613),
        i = r(23360),
        a = r(85855);
      e.exports = function (e, t, r) {
        return (
          (e = a(e)),
          (r = null == r ? 0 : n(i(r), 0, e.length)),
          (t = o(t)),
          e.slice(r, r + t.length) == t
        );
      };
    },
    72948: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    74466: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => a });
      var n = r(52596);
      let o = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        i = n.$,
        a = (e, t) => (r) => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
            return i(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className,
            );
          let { variants: a, defaultVariants: s } = t,
            l = Object.keys(a).map((e) => {
              let t = null == r ? void 0 : r[e],
                n = null == s ? void 0 : s[e];
              if (null === t) return null;
              let i = o(t) || o(n);
              return a[e][i];
            }),
            u =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return (void 0 === n || (e[r] = n), e);
              }, {});
          return i(
            e,
            l,
            null == t || null == (n = t.compoundVariants)
              ? void 0
              : n.reduce((e, t) => {
                  let { class: r, className: n, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...s, ...u }[t])
                      : { ...s, ...u }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className,
          );
        };
    },
    76770: function (e, t, r) {
      var n, o;
      void 0 ===
        (o =
          "function" ==
          typeof (n = function () {
            var e,
              t,
              r,
              n = {};
            n.version = "0.2.0";
            var o = (n.settings = {
              minimum: 0.08,
              easing: "ease",
              positionUsing: "",
              speed: 200,
              trickle: !0,
              trickleRate: 0.02,
              trickleSpeed: 800,
              showSpinner: !0,
              barSelector: '[role="bar"]',
              spinnerSelector: '[role="spinner"]',
              parent: "body",
              template:
                '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
            });
            function i(e, t, r) {
              return e < t ? t : e > r ? r : e;
            }
            ((n.configure = function (e) {
              var t, r;
              for (t in e)
                void 0 !== (r = e[t]) && e.hasOwnProperty(t) && (o[t] = r);
              return this;
            }),
              (n.status = null),
              (n.set = function (e) {
                var t = n.isStarted();
                n.status = 1 === (e = i(e, o.minimum, 1)) ? null : e;
                var r = n.render(!t),
                  l = r.querySelector(o.barSelector),
                  u = o.speed,
                  c = o.easing;
                return (
                  r.offsetWidth,
                  a(function (t) {
                    var i, a, d, p;
                    ("" === o.positionUsing &&
                      (o.positionUsing = n.getPositioningCSS()),
                      s(
                        l,
                        ((i = e),
                        (a = u),
                        (d = c),
                        ((p =
                          "translate3d" === o.positionUsing
                            ? {
                                transform:
                                  "translate3d(" + (-1 + i) * 100 + "%,0,0)",
                              }
                            : "translate" === o.positionUsing
                              ? {
                                  transform:
                                    "translate(" + (-1 + i) * 100 + "%,0)",
                                }
                              : {
                                  "margin-left": (-1 + i) * 100 + "%",
                                }).transition = "all " + a + "ms " + d),
                        p),
                      ),
                      1 === e
                        ? (s(r, { transition: "none", opacity: 1 }),
                          r.offsetWidth,
                          setTimeout(function () {
                            (s(r, {
                              transition: "all " + u + "ms linear",
                              opacity: 0,
                            }),
                              setTimeout(function () {
                                (n.remove(), t());
                              }, u));
                          }, u))
                        : setTimeout(t, u));
                  }),
                  this
                );
              }),
              (n.isStarted = function () {
                return "number" == typeof n.status;
              }),
              (n.start = function () {
                n.status || n.set(0);
                var e = function () {
                  setTimeout(function () {
                    n.status && (n.trickle(), e());
                  }, o.trickleSpeed);
                };
                return (o.trickle && e(), this);
              }),
              (n.done = function (e) {
                return e || n.status
                  ? n.inc(0.3 + 0.5 * Math.random()).set(1)
                  : this;
              }),
              (n.inc = function (e) {
                var t = n.status;
                return t
                  ? ("number" != typeof e &&
                      (e = (1 - t) * i(Math.random() * t, 0.1, 0.95)),
                    (t = i(t + e, 0, 0.994)),
                    n.set(t))
                  : n.start();
              }),
              (n.trickle = function () {
                return n.inc(Math.random() * o.trickleRate);
              }),
              (e = 0),
              (t = 0),
              (n.promise = function (r) {
                return (
                  r &&
                    "resolved" !== r.state() &&
                    (0 === t && n.start(),
                    e++,
                    t++,
                    r.always(function () {
                      0 == --t ? ((e = 0), n.done()) : n.set((e - t) / e);
                    })),
                  this
                );
              }),
              (n.render = function (e) {
                if (n.isRendered()) return document.getElementById("nprogress");
                u(document.documentElement, "nprogress-busy");
                var t = document.createElement("div");
                ((t.id = "nprogress"), (t.innerHTML = o.template));
                var r,
                  i = t.querySelector(o.barSelector),
                  a = e ? "-100" : (-1 + (n.status || 0)) * 100,
                  l = document.querySelector(o.parent);
                return (
                  s(i, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + a + "%,0,0)",
                  }),
                  !o.showSpinner &&
                    (r = t.querySelector(o.spinnerSelector)) &&
                    p(r),
                  l != document.body && u(l, "nprogress-custom-parent"),
                  l.appendChild(t),
                  t
                );
              }),
              (n.remove = function () {
                (c(document.documentElement, "nprogress-busy"),
                  c(
                    document.querySelector(o.parent),
                    "nprogress-custom-parent",
                  ));
                var e = document.getElementById("nprogress");
                e && p(e);
              }),
              (n.isRendered = function () {
                return !!document.getElementById("nprogress");
              }),
              (n.getPositioningCSS = function () {
                var e = document.body.style,
                  t =
                    "WebkitTransform" in e
                      ? "Webkit"
                      : "MozTransform" in e
                        ? "Moz"
                        : "msTransform" in e
                          ? "ms"
                          : "OTransform" in e
                            ? "O"
                            : "";
                return t + "Perspective" in e
                  ? "translate3d"
                  : t + "Transform" in e
                    ? "translate"
                    : "margin";
              }));
            var a =
                ((r = []),
                function (e) {
                  (r.push(e),
                    1 == r.length &&
                      (function e() {
                        var t = r.shift();
                        t && t(e);
                      })());
                }),
              s = (function () {
                var e = ["Webkit", "O", "Moz", "ms"],
                  t = {};
                function r(r, n, o) {
                  var i;
                  ((n =
                    t[
                      (i = (i = n)
                        .replace(/^-ms-/, "ms-")
                        .replace(/-([\da-z])/gi, function (e, t) {
                          return t.toUpperCase();
                        }))
                    ] ||
                    (t[i] = (function (t) {
                      var r = document.body.style;
                      if (t in r) return t;
                      for (
                        var n,
                          o = e.length,
                          i = t.charAt(0).toUpperCase() + t.slice(1);
                        o--;

                      )
                        if ((n = e[o] + i) in r) return n;
                      return t;
                    })(i))),
                    (r.style[n] = o));
                }
                return function (e, t) {
                  var n,
                    o,
                    i = arguments;
                  if (2 == i.length)
                    for (n in t)
                      void 0 !== (o = t[n]) &&
                        t.hasOwnProperty(n) &&
                        r(e, n, o);
                  else r(e, i[1], i[2]);
                };
              })();
            function l(e, t) {
              return (
                ("string" == typeof e ? e : d(e)).indexOf(" " + t + " ") >= 0
              );
            }
            function u(e, t) {
              var r = d(e),
                n = r + t;
              l(r, t) || (e.className = n.substring(1));
            }
            function c(e, t) {
              var r,
                n = d(e);
              l(e, t) &&
                (e.className = (r = n.replace(" " + t + " ", " ")).substring(
                  1,
                  r.length - 1,
                ));
            }
            function d(e) {
              return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
            }
            function p(e) {
              e && e.parentNode && e.parentNode.removeChild(e);
            }
            return n;
          })
            ? n.call(t, r, t, e)
            : n) || (e.exports = o);
    },
    79399: (e, t, r) => {
      "use strict";
      var n = r(72948);
      function o() {}
      function i() {}
      ((i.resetWarningCache = o),
        (e.exports = function () {
          function e(e, t, r, o, i, a) {
            if (a !== n) {
              var s = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((s.name = "Invariant Violation"), s);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: o,
          };
          return ((r.PropTypes = r), r);
        }));
    },
    82500: (e, t, r) => {
      var n = r(7985),
        o = "object" == typeof self && self && self.Object === Object && self;
      e.exports = n || o || Function("return this")();
    },
    85855: (e, t, r) => {
      var n = r(16613);
      e.exports = function (e) {
        return null == e ? "" : n(e);
      };
    },
    88106: (e, t, r) => {
      "use strict";
      r.d(t, { R6: () => x, bL: () => R });
      var n = r(12115),
        o = r(85185),
        i = r(46081),
        a = r(5845),
        s = r(52712),
        l = r(6101),
        u = r(63655),
        c = r(28905),
        d = r(61285),
        p = r(95155),
        f = "Collapsible",
        [m, g] = (0, i.A)(f),
        [v, h] = m(f),
        y = n.forwardRef((e, t) => {
          let {
              __scopeCollapsible: r,
              open: o,
              defaultOpen: i,
              disabled: s,
              onOpenChange: l,
              ...c
            } = e,
            [m, g] = (0, a.i)({
              prop: o,
              defaultProp: null != i && i,
              onChange: l,
              caller: f,
            });
          return (0, p.jsx)(v, {
            scope: r,
            disabled: s,
            contentId: (0, d.B)(),
            open: m,
            onOpenToggle: n.useCallback(() => g((e) => !e), [g]),
            children: (0, p.jsx)(u.sG.div, {
              "data-state": j(m),
              "data-disabled": s ? "" : void 0,
              ...c,
              "ref": t,
            }),
          });
        });
      y.displayName = f;
      var b = "CollapsibleTrigger",
        x = n.forwardRef((e, t) => {
          let { __scopeCollapsible: r, ...n } = e,
            i = h(b, r);
          return (0, p.jsx)(u.sG.button, {
            "type": "button",
            "aria-controls": i.contentId,
            "aria-expanded": i.open || !1,
            "data-state": j(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            "disabled": i.disabled,
            ...n,
            "ref": t,
            "onClick": (0, o.m)(e.onClick, i.onOpenToggle),
          });
        });
      x.displayName = b;
      var w = "CollapsibleContent";
      n.forwardRef((e, t) => {
        let { forceMount: r, ...n } = e,
          o = h(w, e.__scopeCollapsible);
        return (0, p.jsx)(c.C, {
          present: r || o.open,
          children: (e) => {
            let { present: r } = e;
            return (0, p.jsx)(C, { ...n, ref: t, present: r });
          },
        });
      }).displayName = w;
      var C = n.forwardRef((e, t) => {
        let { __scopeCollapsible: r, present: o, children: i, ...a } = e,
          c = h(w, r),
          [d, f] = n.useState(o),
          m = n.useRef(null),
          g = (0, l.s)(t, m),
          v = n.useRef(0),
          y = v.current,
          b = n.useRef(0),
          x = b.current,
          C = c.open || d,
          R = n.useRef(C),
          k = n.useRef(void 0);
        return (
          n.useEffect(() => {
            let e = requestAnimationFrame(() => (R.current = !1));
            return () => cancelAnimationFrame(e);
          }, []),
          (0, s.N)(() => {
            let e = m.current;
            if (e) {
              ((k.current = k.current || {
                transitionDuration: e.style.transitionDuration,
                animationName: e.style.animationName,
              }),
                (e.style.transitionDuration = "0s"),
                (e.style.animationName = "none"));
              let t = e.getBoundingClientRect();
              ((v.current = t.height),
                (b.current = t.width),
                R.current ||
                  ((e.style.transitionDuration = k.current.transitionDuration),
                  (e.style.animationName = k.current.animationName)),
                f(o));
            }
          }, [c.open, o]),
          (0, p.jsx)(u.sG.div, {
            "data-state": j(c.open),
            "data-disabled": c.disabled ? "" : void 0,
            "id": c.contentId,
            "hidden": !C,
            ...a,
            "ref": g,
            "style": {
              "--radix-collapsible-content-height": y
                ? "".concat(y, "px")
                : void 0,
              "--radix-collapsible-content-width": x
                ? "".concat(x, "px")
                : void 0,
              ...e.style,
            },
            "children": C && i,
          })
        );
      });
      function j(e) {
        return e ? "open" : "closed";
      }
      var R = y;
    },
    89613: (e, t, r) => {
      "use strict";
      r.d(t, {
        Kq: () => G,
        UC: () => Z,
        ZL: () => V,
        bL: () => H,
        i3: () => $,
        l9: () => K,
      });
      var n = r(12115),
        o = r(85185),
        i = r(6101),
        a = r(46081),
        s = r(19178),
        l = r(61285),
        u = r(38795),
        c = r(34378),
        d = r(28905),
        p = r(63655),
        f = r(99708),
        m = r(5845),
        g = r(2564),
        v = r(95155),
        [h, y] = (0, a.A)("Tooltip", [u.Bk]),
        b = (0, u.Bk)(),
        x = "TooltipProvider",
        w = "tooltip.open",
        [C, j] = h(x),
        R = (e) => {
          let {
              __scopeTooltip: t,
              delayDuration: r = 700,
              skipDelayDuration: o = 300,
              disableHoverableContent: i = !1,
              children: a,
            } = e,
            s = n.useRef(!0),
            l = n.useRef(!1),
            u = n.useRef(0);
          return (
            n.useEffect(() => {
              let e = u.current;
              return () => window.clearTimeout(e);
            }, []),
            (0, v.jsx)(C, {
              scope: t,
              isOpenDelayedRef: s,
              delayDuration: r,
              onOpen: n.useCallback(() => {
                (window.clearTimeout(u.current), (s.current = !1));
              }, []),
              onClose: n.useCallback(() => {
                (window.clearTimeout(u.current),
                  (u.current = window.setTimeout(() => (s.current = !0), o)));
              }, [o]),
              isPointerInTransitRef: l,
              onPointerInTransitChange: n.useCallback((e) => {
                l.current = e;
              }, []),
              disableHoverableContent: i,
              children: a,
            })
          );
        };
      R.displayName = x;
      var k = "Tooltip",
        [T, O] = h(k),
        E = (e) => {
          let {
              __scopeTooltip: t,
              children: r,
              open: o,
              defaultOpen: i,
              onOpenChange: a,
              disableHoverableContent: s,
              delayDuration: c,
            } = e,
            d = j(k, e.__scopeTooltip),
            p = b(t),
            [f, g] = n.useState(null),
            h = (0, l.B)(),
            y = n.useRef(0),
            x = null != s ? s : d.disableHoverableContent,
            C = null != c ? c : d.delayDuration,
            R = n.useRef(!1),
            [O, E] = (0, m.i)({
              prop: o,
              defaultProp: null != i && i,
              onChange: (e) => {
                (e
                  ? (d.onOpen(), document.dispatchEvent(new CustomEvent(w)))
                  : d.onClose(),
                  null == a || a(e));
              },
              caller: k,
            }),
            S = n.useMemo(
              () =>
                O ? (R.current ? "delayed-open" : "instant-open") : "closed",
              [O],
            ),
            P = n.useCallback(() => {
              (window.clearTimeout(y.current),
                (y.current = 0),
                (R.current = !1),
                E(!0));
            }, [E]),
            L = n.useCallback(() => {
              (window.clearTimeout(y.current), (y.current = 0), E(!1));
            }, [E]),
            D = n.useCallback(() => {
              (window.clearTimeout(y.current),
                (y.current = window.setTimeout(() => {
                  ((R.current = !0), E(!0), (y.current = 0));
                }, C)));
            }, [C, E]);
          return (
            n.useEffect(
              () => () => {
                y.current && (window.clearTimeout(y.current), (y.current = 0));
              },
              [],
            ),
            (0, v.jsx)(u.bL, {
              ...p,
              children: (0, v.jsx)(T, {
                scope: t,
                contentId: h,
                open: O,
                stateAttribute: S,
                trigger: f,
                onTriggerChange: g,
                onTriggerEnter: n.useCallback(() => {
                  d.isOpenDelayedRef.current ? D() : P();
                }, [d.isOpenDelayedRef, D, P]),
                onTriggerLeave: n.useCallback(() => {
                  x ? L() : (window.clearTimeout(y.current), (y.current = 0));
                }, [L, x]),
                onOpen: P,
                onClose: L,
                disableHoverableContent: x,
                children: r,
              }),
            })
          );
        };
      E.displayName = k;
      var S = "TooltipTrigger",
        P = n.forwardRef((e, t) => {
          let { __scopeTooltip: r, ...a } = e,
            s = O(S, r),
            l = j(S, r),
            c = b(r),
            d = n.useRef(null),
            f = (0, i.s)(t, d, s.onTriggerChange),
            m = n.useRef(!1),
            g = n.useRef(!1),
            h = n.useCallback(() => (m.current = !1), []);
          return (
            n.useEffect(
              () => () => document.removeEventListener("pointerup", h),
              [h],
            ),
            (0, v.jsx)(u.Mz, {
              asChild: !0,
              ...c,
              children: (0, v.jsx)(p.sG.button, {
                "aria-describedby": s.open ? s.contentId : void 0,
                "data-state": s.stateAttribute,
                ...a,
                "ref": f,
                "onPointerMove": (0, o.m)(e.onPointerMove, (e) => {
                  "touch" !== e.pointerType &&
                    (g.current ||
                      l.isPointerInTransitRef.current ||
                      (s.onTriggerEnter(), (g.current = !0)));
                }),
                "onPointerLeave": (0, o.m)(e.onPointerLeave, () => {
                  (s.onTriggerLeave(), (g.current = !1));
                }),
                "onPointerDown": (0, o.m)(e.onPointerDown, () => {
                  (s.open && s.onClose(),
                    (m.current = !0),
                    document.addEventListener("pointerup", h, { once: !0 }));
                }),
                "onFocus": (0, o.m)(e.onFocus, () => {
                  m.current || s.onOpen();
                }),
                "onBlur": (0, o.m)(e.onBlur, s.onClose),
                "onClick": (0, o.m)(e.onClick, s.onClose),
              }),
            })
          );
        });
      P.displayName = S;
      var L = "TooltipPortal",
        [D, N] = h(L, { forceMount: void 0 }),
        _ = (e) => {
          let {
              __scopeTooltip: t,
              forceMount: r,
              children: n,
              container: o,
            } = e,
            i = O(L, t);
          return (0, v.jsx)(D, {
            scope: t,
            forceMount: r,
            children: (0, v.jsx)(d.C, {
              present: r || i.open,
              children: (0, v.jsx)(c.Z, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      _.displayName = L;
      var I = "TooltipContent",
        A = n.forwardRef((e, t) => {
          let r = N(I, e.__scopeTooltip),
            { forceMount: n = r.forceMount, side: o = "top", ...i } = e,
            a = O(I, e.__scopeTooltip);
          return (0, v.jsx)(d.C, {
            present: n || a.open,
            children: a.disableHoverableContent
              ? (0, v.jsx)(q, { side: o, ...i, ref: t })
              : (0, v.jsx)(M, { side: o, ...i, ref: t }),
          });
        }),
        M = n.forwardRef((e, t) => {
          let r = O(I, e.__scopeTooltip),
            o = j(I, e.__scopeTooltip),
            a = n.useRef(null),
            s = (0, i.s)(t, a),
            [l, u] = n.useState(null),
            { trigger: c, onClose: d } = r,
            p = a.current,
            { onPointerInTransitChange: f } = o,
            m = n.useCallback(() => {
              (u(null), f(!1));
            }, [f]),
            g = n.useCallback(
              (e, t) => {
                let r = e.currentTarget,
                  n = { x: e.clientX, y: e.clientY },
                  o = (function (e, t) {
                    let r = Math.abs(t.top - e.y),
                      n = Math.abs(t.bottom - e.y),
                      o = Math.abs(t.right - e.x),
                      i = Math.abs(t.left - e.x);
                    switch (Math.min(r, n, o, i)) {
                      case i:
                        return "left";
                      case o:
                        return "right";
                      case r:
                        return "top";
                      case n:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(n, r.getBoundingClientRect());
                (u(
                  (function (e) {
                    let t = e.slice();
                    return (
                      t.sort((e, t) =>
                        e.x < t.x
                          ? -1
                          : e.x > t.x
                            ? 1
                            : e.y < t.y
                              ? -1
                              : 1 * !!(e.y > t.y),
                      ),
                      (function (e) {
                        if (e.length <= 1) return e.slice();
                        let t = [];
                        for (let r = 0; r < e.length; r++) {
                          let n = e[r];
                          for (; t.length >= 2; ) {
                            let e = t[t.length - 1],
                              r = t[t.length - 2];
                            if (
                              (e.x - r.x) * (n.y - r.y) >=
                              (e.y - r.y) * (n.x - r.x)
                            )
                              t.pop();
                            else break;
                          }
                          t.push(n);
                        }
                        t.pop();
                        let r = [];
                        for (let t = e.length - 1; t >= 0; t--) {
                          let n = e[t];
                          for (; r.length >= 2; ) {
                            let e = r[r.length - 1],
                              t = r[r.length - 2];
                            if (
                              (e.x - t.x) * (n.y - t.y) >=
                              (e.y - t.y) * (n.x - t.x)
                            )
                              r.pop();
                            else break;
                          }
                          r.push(n);
                        }
                        return (r.pop(),
                        1 === t.length &&
                          1 === r.length &&
                          t[0].x === r[0].x &&
                          t[0].y === r[0].y)
                          ? t
                          : t.concat(r);
                      })(t)
                    );
                  })([
                    ...(function (e, t) {
                      let r =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 5,
                        n = [];
                      switch (t) {
                        case "top":
                          n.push(
                            { x: e.x - r, y: e.y + r },
                            { x: e.x + r, y: e.y + r },
                          );
                          break;
                        case "bottom":
                          n.push(
                            { x: e.x - r, y: e.y - r },
                            { x: e.x + r, y: e.y - r },
                          );
                          break;
                        case "left":
                          n.push(
                            { x: e.x + r, y: e.y - r },
                            { x: e.x + r, y: e.y + r },
                          );
                          break;
                        case "right":
                          n.push(
                            { x: e.x - r, y: e.y - r },
                            { x: e.x - r, y: e.y + r },
                          );
                      }
                      return n;
                    })(n, o),
                    ...(function (e) {
                      let { top: t, right: r, bottom: n, left: o } = e;
                      return [
                        { x: o, y: t },
                        { x: r, y: t },
                        { x: r, y: n },
                        { x: o, y: n },
                      ];
                    })(t.getBoundingClientRect()),
                  ]),
                ),
                  f(!0));
              },
              [f],
            );
          return (
            n.useEffect(() => () => m(), [m]),
            n.useEffect(() => {
              if (c && p) {
                let e = (e) => g(e, p),
                  t = (e) => g(e, c);
                return (
                  c.addEventListener("pointerleave", e),
                  p.addEventListener("pointerleave", t),
                  () => {
                    (c.removeEventListener("pointerleave", e),
                      p.removeEventListener("pointerleave", t));
                  }
                );
              }
            }, [c, p, g, m]),
            n.useEffect(() => {
              if (l) {
                let e = (e) => {
                  let t = e.target,
                    r = { x: e.clientX, y: e.clientY },
                    n =
                      (null == c ? void 0 : c.contains(t)) ||
                      (null == p ? void 0 : p.contains(t)),
                    o = !(function (e, t) {
                      let { x: r, y: n } = e,
                        o = !1;
                      for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                        let a = t[e],
                          s = t[i],
                          l = a.x,
                          u = a.y,
                          c = s.x,
                          d = s.y;
                        u > n != d > n &&
                          r < ((c - l) * (n - u)) / (d - u) + l &&
                          (o = !o);
                      }
                      return o;
                    })(r, l);
                  n ? m() : o && (m(), d());
                };
                return (
                  document.addEventListener("pointermove", e),
                  () => document.removeEventListener("pointermove", e)
                );
              }
            }, [c, p, l, d, m]),
            (0, v.jsx)(q, { ...e, ref: s })
          );
        }),
        [F, U] = h(k, { isInside: !1 }),
        B = (0, f.Dc)("TooltipContent"),
        q = n.forwardRef((e, t) => {
          let {
              "__scopeTooltip": r,
              "children": o,
              "aria-label": i,
              "onEscapeKeyDown": a,
              "onPointerDownOutside": l,
              ...c
            } = e,
            d = O(I, r),
            p = b(r),
            { onClose: f } = d;
          return (
            n.useEffect(
              () => (
                document.addEventListener(w, f),
                () => document.removeEventListener(w, f)
              ),
              [f],
            ),
            n.useEffect(() => {
              if (d.trigger) {
                let e = (e) => {
                  let t = e.target;
                  (null == t ? void 0 : t.contains(d.trigger)) && f();
                };
                return (
                  window.addEventListener("scroll", e, { capture: !0 }),
                  () => window.removeEventListener("scroll", e, { capture: !0 })
                );
              }
            }, [d.trigger, f]),
            (0, v.jsx)(s.qW, {
              asChild: !0,
              disableOutsidePointerEvents: !1,
              onEscapeKeyDown: a,
              onPointerDownOutside: l,
              onFocusOutside: (e) => e.preventDefault(),
              onDismiss: f,
              children: (0, v.jsxs)(u.UC, {
                "data-state": d.stateAttribute,
                ...p,
                ...c,
                "ref": t,
                "style": {
                  ...c.style,
                  "--radix-tooltip-content-transform-origin":
                    "var(--radix-popper-transform-origin)",
                  "--radix-tooltip-content-available-width":
                    "var(--radix-popper-available-width)",
                  "--radix-tooltip-content-available-height":
                    "var(--radix-popper-available-height)",
                  "--radix-tooltip-trigger-width":
                    "var(--radix-popper-anchor-width)",
                  "--radix-tooltip-trigger-height":
                    "var(--radix-popper-anchor-height)",
                },
                "children": [
                  (0, v.jsx)(B, { children: o }),
                  (0, v.jsx)(F, {
                    scope: r,
                    isInside: !0,
                    children: (0, v.jsx)(g.bL, {
                      id: d.contentId,
                      role: "tooltip",
                      children: i || o,
                    }),
                  }),
                ],
              }),
            })
          );
        });
      A.displayName = I;
      var W = "TooltipArrow",
        z = n.forwardRef((e, t) => {
          let { __scopeTooltip: r, ...n } = e,
            o = b(r);
          return U(W, r).isInside
            ? null
            : (0, v.jsx)(u.i3, { ...o, ...n, ref: t });
        });
      z.displayName = W;
      var G = R,
        H = E,
        K = P,
        V = _,
        Z = A,
        $ = z;
    },
    98233: (e, t, r) => {
      var n = r(24376),
        o = r(20570),
        i = r(64439),
        a = n ? n.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : a && a in Object(e)
            ? o(e)
            : i(e);
      };
    },
  },
]);

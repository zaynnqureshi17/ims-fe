"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3047],
  {
    2564: (e, t, n) => {
      n.d(t, { Qg: () => l, bL: () => u });
      var r = n(12115),
        o = n(63655),
        i = n(95155),
        l = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal",
        }),
        a = r.forwardRef((e, t) =>
          (0, i.jsx)(o.sG.span, { ...e, ref: t, style: { ...l, ...e.style } }),
        );
      a.displayName = "VisuallyHidden";
      var u = a;
    },
    5845: (e, t, n) => {
      n.d(t, { i: () => a });
      var r,
        o = n(12115),
        i = n(52712),
        l =
          (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] ||
          i.N;
      function a({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r,
      }) {
        let [i, a, u] = (function ({ defaultProp: e, onChange: t }) {
            let [n, r] = o.useState(e),
              i = o.useRef(n),
              a = o.useRef(t);
            return (
              l(() => {
                a.current = t;
              }, [t]),
              o.useEffect(() => {
                i.current !== n && (a.current?.(n), (i.current = n));
              }, [n, i]),
              [n, r, a]
            );
          })({ defaultProp: t, onChange: n }),
          c = void 0 !== e,
          s = c ? e : i;
        {
          let t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            let e = t.current;
            if (e !== c) {
              let t = c ? "controlled" : "uncontrolled";
              console.warn(
                `${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
              );
            }
            t.current = c;
          }, [c, r]);
        }
        return [
          s,
          o.useCallback(
            (t) => {
              if (c) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && u.current?.(n);
              } else a(t);
            },
            [c, e, a, u],
          ),
        ];
      }
      Symbol("RADIX:SYNC_STATE");
    },
    19178: (e, t, n) => {
      n.d(t, { qW: () => d });
      var r,
        o = n(12115),
        i = n(85185),
        l = n(63655),
        a = n(6101),
        u = n(39033),
        c = n(95155),
        s = "dismissableLayer.update",
        f = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        d = o.forwardRef((e, t) => {
          var n, d;
          let {
              disableOutsidePointerEvents: h = !1,
              onEscapeKeyDown: v,
              onPointerDownOutside: g,
              onFocusOutside: y,
              onInteractOutside: w,
              onDismiss: b,
              ...x
            } = e,
            E = o.useContext(f),
            [S, R] = o.useState(null),
            A =
              null != (d = null == S ? void 0 : S.ownerDocument)
                ? d
                : null == (n = globalThis)
                  ? void 0
                  : n.document,
            [, C] = o.useState({}),
            N = (0, a.s)(t, (e) => R(e)),
            L = Array.from(E.layers),
            [T] = [...E.layersWithOutsidePointerEventsDisabled].slice(-1),
            O = L.indexOf(T),
            P = S ? L.indexOf(S) : -1,
            M = E.layersWithOutsidePointerEventsDisabled.size > 0,
            k = P >= O,
            D = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                      ? void 0
                      : t.document,
                r = (0, u.c)(e),
                i = o.useRef(!1),
                l = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            m("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", l.current),
                            (l.current = t),
                            n.addEventListener("click", l.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", l.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    (window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", l.current));
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...E.branches].some((e) => e.contains(t));
              k &&
                !n &&
                (null == g || g(e),
                null == w || w(e),
                e.defaultPrevented || null == b || b());
            }, A),
            W = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null == (t = globalThis)
                      ? void 0
                      : t.document,
                r = (0, u.c)(e),
                i = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      m(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 },
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              ![...E.branches].some((e) => e.contains(t)) &&
                (null == y || y(e),
                null == w || w(e),
                e.defaultPrevented || null == b || b());
            }, A);
          return (
            !(function (e, t = globalThis?.document) {
              let n = (0, u.c)(e);
              o.useEffect(() => {
                let e = (e) => {
                  "Escape" === e.key && n(e);
                };
                return (
                  t.addEventListener("keydown", e, { capture: !0 }),
                  () => t.removeEventListener("keydown", e, { capture: !0 })
                );
              }, [n, t]);
            })((e) => {
              P === E.layers.size - 1 &&
                (null == v || v(e),
                !e.defaultPrevented && b && (e.preventDefault(), b()));
            }, A),
            o.useEffect(() => {
              if (S)
                return (
                  h &&
                    (0 === E.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = A.body.style.pointerEvents),
                      (A.body.style.pointerEvents = "none")),
                    E.layersWithOutsidePointerEventsDisabled.add(S)),
                  E.layers.add(S),
                  p(),
                  () => {
                    h &&
                      1 === E.layersWithOutsidePointerEventsDisabled.size &&
                      (A.body.style.pointerEvents = r);
                  }
                );
            }, [S, A, h, E]),
            o.useEffect(
              () => () => {
                S &&
                  (E.layers.delete(S),
                  E.layersWithOutsidePointerEventsDisabled.delete(S),
                  p());
              },
              [S, E],
            ),
            o.useEffect(() => {
              let e = () => C({});
              return (
                document.addEventListener(s, e),
                () => document.removeEventListener(s, e)
              );
            }, []),
            (0, c.jsx)(l.sG.div, {
              ...x,
              ref: N,
              style: {
                pointerEvents: M ? (k ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.m)(e.onFocusCapture, W.onFocusCapture),
              onBlurCapture: (0, i.m)(e.onBlurCapture, W.onBlurCapture),
              onPointerDownCapture: (0, i.m)(
                e.onPointerDownCapture,
                D.onPointerDownCapture,
              ),
            })
          );
        });
      function p() {
        let e = new CustomEvent(s);
        document.dispatchEvent(e);
      }
      function m(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        (t && i.addEventListener(e, t, { once: !0 }),
          o ? (0, l.hO)(i, a) : i.dispatchEvent(a));
      }
      ((d.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(f),
            r = o.useRef(null),
            i = (0, a.s)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, c.jsx)(l.sG.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch"));
    },
    25519: (e, t, n) => {
      n.d(t, { n: () => f });
      var r = n(12115),
        o = n(6101),
        i = n(63655),
        l = n(39033),
        a = n(95155),
        u = "focusScope.autoFocusOnMount",
        c = "focusScope.autoFocusOnUnmount",
        s = { bubbles: !1, cancelable: !0 },
        f = r.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: f = !1,
              onMountAutoFocus: v,
              onUnmountAutoFocus: g,
              ...y
            } = e,
            [w, b] = r.useState(null),
            x = (0, l.c)(v),
            E = (0, l.c)(g),
            S = r.useRef(null),
            R = (0, o.s)(t, (e) => b(e)),
            A = r.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          (r.useEffect(() => {
            if (f) {
              let e = function (e) {
                  if (A.paused || !w) return;
                  let t = e.target;
                  w.contains(t)
                    ? (S.current = t)
                    : m(S.current, { select: !0 });
                },
                t = function (e) {
                  if (A.paused || !w) return;
                  let t = e.relatedTarget;
                  null !== t && (w.contains(t) || m(S.current, { select: !0 }));
                };
              (document.addEventListener("focusin", e),
                document.addEventListener("focusout", t));
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && m(w);
              });
              return (
                w && n.observe(w, { childList: !0, subtree: !0 }),
                () => {
                  (document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect());
                }
              );
            }
          }, [f, w, A.paused]),
            r.useEffect(() => {
              if (w) {
                h.add(A);
                let e = document.activeElement;
                if (!w.contains(e)) {
                  let t = new CustomEvent(u, s);
                  (w.addEventListener(u, x),
                    w.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (m(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        d(w).filter((e) => "A" !== e.tagName),
                        { select: !0 },
                      ),
                      document.activeElement === e && m(w)));
                }
                return () => {
                  (w.removeEventListener(u, x),
                    setTimeout(() => {
                      let t = new CustomEvent(c, s);
                      (w.addEventListener(c, E),
                        w.dispatchEvent(t),
                        t.defaultPrevented ||
                          m(null != e ? e : document.body, { select: !0 }),
                        w.removeEventListener(c, E),
                        h.remove(A));
                    }, 0));
                };
              }
            }, [w, x, E, A]));
          let C = r.useCallback(
            (e) => {
              if ((!n && !f) || A.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                r = document.activeElement;
              if (t && r) {
                let t = e.currentTarget,
                  [o, i] = (function (e) {
                    let t = d(e);
                    return [p(t, e), p(t.reverse(), e)];
                  })(t);
                o && i
                  ? e.shiftKey || r !== i
                    ? e.shiftKey &&
                      r === o &&
                      (e.preventDefault(), n && m(i, { select: !0 }))
                    : (e.preventDefault(), n && m(o, { select: !0 }))
                  : r === t && e.preventDefault();
              }
            },
            [n, f, A.paused],
          );
          return (0, a.jsx)(i.sG.div, {
            tabIndex: -1,
            ...y,
            ref: R,
            onKeyDown: C,
          });
        });
      function d(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function p(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function m(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          (e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select());
        }
      }
      f.displayName = "FocusScope";
      var h = (function () {
        let e = [];
        return {
          add(t) {
            let n = e[0];
            (t !== n && (null == n || n.pause()), (e = v(e, t)).unshift(t));
          },
          remove(t) {
            var n;
            null == (n = (e = v(e, t))[0]) || n.resume();
          },
        };
      })();
      function v(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return (-1 !== r && n.splice(r, 1), n);
      }
    },
    28905: (e, t, n) => {
      n.d(t, { C: () => l });
      var r = n(12115),
        o = n(6101),
        i = n(52712),
        l = (e) => {
          let { present: t, children: n } = e,
            l = (function (e) {
              var t, n;
              let [o, l] = r.useState(),
                u = r.useRef(null),
                c = r.useRef(e),
                s = r.useRef("none"),
                [f, d] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                r.useEffect(() => {
                  let e = a(u.current);
                  s.current = "mounted" === f ? e : "none";
                }, [f]),
                (0, i.N)(() => {
                  let t = u.current,
                    n = c.current;
                  if (n !== e) {
                    let r = s.current,
                      o = a(t);
                    (e
                      ? d("MOUNT")
                      : "none" === o ||
                          (null == t ? void 0 : t.display) === "none"
                        ? d("UNMOUNT")
                        : n && r !== o
                          ? d("ANIMATION_OUT")
                          : d("UNMOUNT"),
                      (c.current = e));
                  }
                }, [e, d]),
                (0, i.N)(() => {
                  if (o) {
                    var e;
                    let t,
                      n =
                        null != (e = o.ownerDocument.defaultView) ? e : window,
                      r = (e) => {
                        let r = a(u.current).includes(e.animationName);
                        if (
                          e.target === o &&
                          r &&
                          (d("ANIMATION_END"), !c.current)
                        ) {
                          let e = o.style.animationFillMode;
                          ((o.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === o.style.animationFillMode &&
                                (o.style.animationFillMode = e);
                            })));
                        }
                      },
                      i = (e) => {
                        e.target === o && (s.current = a(u.current));
                      };
                    return (
                      o.addEventListener("animationstart", i),
                      o.addEventListener("animationcancel", r),
                      o.addEventListener("animationend", r),
                      () => {
                        (n.clearTimeout(t),
                          o.removeEventListener("animationstart", i),
                          o.removeEventListener("animationcancel", r),
                          o.removeEventListener("animationend", r));
                      }
                    );
                  }
                  d("ANIMATION_END");
                }, [o, d]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(f),
                  ref: r.useCallback((e) => {
                    ((u.current = e ? getComputedStyle(e) : null), l(e));
                  }, []),
                }
              );
            })(t),
            u =
              "function" == typeof n
                ? n({ present: l.isPresent })
                : r.Children.only(n),
            c = (0, o.s)(
              l.ref,
              (function (e) {
                var t, n;
                let r =
                    null ==
                    (t = Object.getOwnPropertyDescriptor(e.props, "ref"))
                      ? void 0
                      : t.get,
                  o = r && "isReactWarning" in r && r.isReactWarning;
                return o
                  ? e.ref
                  : (o =
                        (r =
                          null ==
                          (n = Object.getOwnPropertyDescriptor(e, "ref"))
                            ? void 0
                            : n.get) &&
                        "isReactWarning" in r &&
                        r.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref;
              })(u),
            );
          return "function" == typeof n || l.isPresent
            ? r.cloneElement(u, { ref: c })
            : null;
        };
      function a(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      l.displayName = "Presence";
    },
    34378: (e, t, n) => {
      n.d(t, { Z: () => u });
      var r = n(12115),
        o = n(47650),
        i = n(63655),
        l = n(52712),
        a = n(95155),
        u = r.forwardRef((e, t) => {
          var n, u;
          let { container: c, ...s } = e,
            [f, d] = r.useState(!1);
          (0, l.N)(() => d(!0), []);
          let p =
            c ||
            (f &&
              (null == (u = globalThis) || null == (n = u.document)
                ? void 0
                : n.body));
          return p
            ? o.createPortal((0, a.jsx)(i.sG.div, { ...s, ref: t }), p)
            : null;
        });
      u.displayName = "Portal";
    },
    35695: (e, t, n) => {
      var r = n(18999);
      (n.o(r, "usePathname") &&
        n.d(t, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        n.o(r, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          }),
        n.o(r, "useSearchParams") &&
          n.d(t, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          }));
    },
    38168: (e, t, n) => {
      n.d(t, { Eq: () => s });
      var r = function (e) {
          return "undefined" == typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        o = new WeakMap(),
        i = new WeakMap(),
        l = {},
        a = 0,
        u = function (e) {
          return e && (e.host || u(e.parentNode));
        },
        c = function (e, t, n, r) {
          var c = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = u(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing",
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          l[n] || (l[n] = new WeakMap());
          var s = l[n],
            f = [],
            d = new Set(),
            p = new Set(c),
            m = function (e) {
              !e || d.has(e) || (d.add(e), m(e.parentNode));
            };
          c.forEach(m);
          var h = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (d.has(e)) h(e);
                else
                  try {
                    var t = e.getAttribute(r),
                      l = null !== t && "false" !== t,
                      a = (o.get(e) || 0) + 1,
                      u = (s.get(e) || 0) + 1;
                    (o.set(e, a),
                      s.set(e, u),
                      f.push(e),
                      1 === a && l && i.set(e, !0),
                      1 === u && e.setAttribute(n, "true"),
                      l || e.setAttribute(r, "true"));
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            h(t),
            d.clear(),
            a++,
            function () {
              (f.forEach(function (e) {
                var t = o.get(e) - 1,
                  l = s.get(e) - 1;
                (o.set(e, t),
                  s.set(e, l),
                  t || (i.has(e) || e.removeAttribute(r), i.delete(e)),
                  l || e.removeAttribute(n));
              }),
                --a ||
                  ((o = new WeakMap()),
                  (o = new WeakMap()),
                  (i = new WeakMap()),
                  (l = {})));
            }
          );
        },
        s = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var o = Array.from(Array.isArray(e) ? e : [e]),
            i = t || r(e);
          return i
            ? (o.push.apply(
                o,
                Array.from(i.querySelectorAll("[aria-live], script")),
              ),
              c(o, i, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    38795: (e, t, n) => {
      n.d(t, {
        Mz: () => e4,
        i3: () => tt,
        UC: () => te,
        bL: () => e7,
        Bk: () => eV,
      });
      var r = n(12115);
      let o = ["top", "right", "bottom", "left"],
        i = Math.min,
        l = Math.max,
        a = Math.round,
        u = Math.floor,
        c = (e) => ({ x: e, y: e }),
        s = { left: "right", right: "left", bottom: "top", top: "bottom" },
        f = { start: "end", end: "start" };
      function d(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function p(e) {
        return e.split("-")[0];
      }
      function m(e) {
        return e.split("-")[1];
      }
      function h(e) {
        return "x" === e ? "y" : "x";
      }
      function v(e) {
        return "y" === e ? "height" : "width";
      }
      let g = new Set(["top", "bottom"]);
      function y(e) {
        return g.has(p(e)) ? "y" : "x";
      }
      function w(e) {
        return e.replace(/start|end/g, (e) => f[e]);
      }
      let b = ["left", "right"],
        x = ["right", "left"],
        E = ["top", "bottom"],
        S = ["bottom", "top"];
      function R(e) {
        return e.replace(/left|right|bottom|top/g, (e) => s[e]);
      }
      function A(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function C(e) {
        let { x: t, y: n, width: r, height: o } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n,
        };
      }
      function N(e, t, n) {
        let r,
          { reference: o, floating: i } = e,
          l = y(t),
          a = h(y(t)),
          u = v(a),
          c = p(t),
          s = "y" === l,
          f = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          g = o[u] / 2 - i[u] / 2;
        switch (c) {
          case "top":
            r = { x: f, y: o.y - i.height };
            break;
          case "bottom":
            r = { x: f, y: o.y + o.height };
            break;
          case "right":
            r = { x: o.x + o.width, y: d };
            break;
          case "left":
            r = { x: o.x - i.width, y: d };
            break;
          default:
            r = { x: o.x, y: o.y };
        }
        switch (m(t)) {
          case "start":
            r[a] -= g * (n && s ? -1 : 1);
            break;
          case "end":
            r[a] += g * (n && s ? -1 : 1);
        }
        return r;
      }
      let L = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: o = "absolute",
            middleware: i = [],
            platform: l,
          } = n,
          a = i.filter(Boolean),
          u = await (null == l.isRTL ? void 0 : l.isRTL(t)),
          c = await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o,
          }),
          { x: s, y: f } = N(c, r, u),
          d = r,
          p = {},
          m = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: i, fn: h } = a[n],
            {
              x: v,
              y: g,
              data: y,
              reset: w,
            } = await h({
              x: s,
              y: f,
              initialPlacement: r,
              placement: d,
              strategy: o,
              middlewareData: p,
              rects: c,
              platform: l,
              elements: { reference: e, floating: t },
            });
          ((s = null != v ? v : s),
            (f = null != g ? g : f),
            (p = { ...p, [i]: { ...p[i], ...y } }),
            w &&
              m <= 50 &&
              (m++,
              "object" == typeof w &&
                (w.placement && (d = w.placement),
                w.rects &&
                  (c =
                    !0 === w.rects
                      ? await l.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: o,
                        })
                      : w.rects),
                ({ x: s, y: f } = N(c, d, u))),
              (n = -1)));
        }
        return { x: s, y: f, placement: d, strategy: o, middlewareData: p };
      };
      async function T(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: o, platform: i, rects: l, elements: a, strategy: u } = e,
          {
            boundary: c = "clippingAncestors",
            rootBoundary: s = "viewport",
            elementContext: f = "floating",
            altBoundary: p = !1,
            padding: m = 0,
          } = d(t, e),
          h = A(m),
          v = a[p ? ("floating" === f ? "reference" : "floating") : f],
          g = C(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(v))) ||
                n
                  ? v
                  : v.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: c,
              rootBoundary: s,
              strategy: u,
            }),
          ),
          y =
            "floating" === f
              ? {
                  x: r,
                  y: o,
                  width: l.floating.width,
                  height: l.floating.height,
                }
              : l.reference,
          w = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          b = ((await (null == i.isElement ? void 0 : i.isElement(w))) &&
            (await (null == i.getScale ? void 0 : i.getScale(w)))) || {
            x: 1,
            y: 1,
          },
          x = C(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: a,
                  rect: y,
                  offsetParent: w,
                  strategy: u,
                })
              : y,
          );
        return {
          top: (g.top - x.top + h.top) / b.y,
          bottom: (x.bottom - g.bottom + h.bottom) / b.y,
          left: (g.left - x.left + h.left) / b.x,
          right: (x.right - g.right + h.right) / b.x,
        };
      }
      function O(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width,
        };
      }
      function P(e) {
        return o.some((t) => e[t] >= 0);
      }
      let M = new Set(["left", "top"]);
      async function k(e, t) {
        let { placement: n, platform: r, elements: o } = e,
          i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)),
          l = p(n),
          a = m(n),
          u = "y" === y(n),
          c = M.has(l) ? -1 : 1,
          s = i && u ? -1 : 1,
          f = d(t, e),
          {
            mainAxis: h,
            crossAxis: v,
            alignmentAxis: g,
          } = "number" == typeof f
            ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
            : {
                mainAxis: f.mainAxis || 0,
                crossAxis: f.crossAxis || 0,
                alignmentAxis: f.alignmentAxis,
              };
        return (
          a && "number" == typeof g && (v = "end" === a ? -1 * g : g),
          u ? { x: v * s, y: h * c } : { x: h * c, y: v * s }
        );
      }
      function D() {
        return "undefined" != typeof window;
      }
      function W(e) {
        return I(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function F(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function j(e) {
        var t;
        return null ==
          (t = (I(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function I(e) {
        return !!D() && (e instanceof Node || e instanceof F(e).Node);
      }
      function B(e) {
        return !!D() && (e instanceof Element || e instanceof F(e).Element);
      }
      function H(e) {
        return (
          !!D() && (e instanceof HTMLElement || e instanceof F(e).HTMLElement)
        );
      }
      function _(e) {
        return (
          !!D() &&
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof F(e).ShadowRoot)
        );
      }
      let z = new Set(["inline", "contents"]);
      function U(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = ee(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !z.has(o);
      }
      let $ = new Set(["table", "td", "th"]),
        Y = [":popover-open", ":modal"];
      function V(e) {
        return Y.some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      let X = ["transform", "translate", "scale", "rotate", "perspective"],
        G = [
          "transform",
          "translate",
          "scale",
          "rotate",
          "perspective",
          "filter",
        ],
        K = ["paint", "layout", "strict", "content"];
      function q(e) {
        let t = Z(),
          n = B(e) ? ee(e) : e;
        return (
          X.some((e) => !!n[e] && "none" !== n[e]) ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          G.some((e) => (n.willChange || "").includes(e)) ||
          K.some((e) => (n.contain || "").includes(e))
        );
      }
      function Z() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      let Q = new Set(["html", "body", "#document"]);
      function J(e) {
        return Q.has(W(e));
      }
      function ee(e) {
        return F(e).getComputedStyle(e);
      }
      function et(e) {
        return B(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function en(e) {
        if ("html" === W(e)) return e;
        let t = e.assignedSlot || e.parentNode || (_(e) && e.host) || j(e);
        return _(t) ? t.host : t;
      }
      function er(e, t, n) {
        var r;
        (void 0 === t && (t = []), void 0 === n && (n = !0));
        let o = (function e(t) {
            let n = en(t);
            return J(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : H(n) && U(n)
                ? n
                : e(n);
          })(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          l = F(o);
        if (i) {
          let e = eo(l);
          return t.concat(
            l,
            l.visualViewport || [],
            U(o) ? o : [],
            e && n ? er(e) : [],
          );
        }
        return t.concat(o, er(o, [], n));
      }
      function eo(e) {
        return e.parent && Object.getPrototypeOf(e.parent)
          ? e.frameElement
          : null;
      }
      function ei(e) {
        let t = ee(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          o = H(e),
          i = o ? e.offsetWidth : n,
          l = o ? e.offsetHeight : r,
          u = a(n) !== i || a(r) !== l;
        return (u && ((n = i), (r = l)), { width: n, height: r, $: u });
      }
      function el(e) {
        return B(e) ? e : e.contextElement;
      }
      function ea(e) {
        let t = el(e);
        if (!H(t)) return c(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: o, $: i } = ei(t),
          l = (i ? a(n.width) : n.width) / r,
          u = (i ? a(n.height) : n.height) / o;
        return (
          (l && Number.isFinite(l)) || (l = 1),
          (u && Number.isFinite(u)) || (u = 1),
          { x: l, y: u }
        );
      }
      let eu = c(0);
      function ec(e) {
        let t = F(e);
        return Z() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : eu;
      }
      function es(e, t, n, r) {
        var o;
        (void 0 === t && (t = !1), void 0 === n && (n = !1));
        let i = e.getBoundingClientRect(),
          l = el(e),
          a = c(1);
        t && (r ? B(r) && (a = ea(r)) : (a = ea(e)));
        let u = (void 0 === (o = n) && (o = !1), r && (!o || r === F(l)) && o)
            ? ec(l)
            : c(0),
          s = (i.left + u.x) / a.x,
          f = (i.top + u.y) / a.y,
          d = i.width / a.x,
          p = i.height / a.y;
        if (l) {
          let e = F(l),
            t = r && B(r) ? F(r) : r,
            n = e,
            o = eo(n);
          for (; o && r && t !== n; ) {
            let e = ea(o),
              t = o.getBoundingClientRect(),
              r = ee(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              l = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            ((s *= e.x),
              (f *= e.y),
              (d *= e.x),
              (p *= e.y),
              (s += i),
              (f += l),
              (o = eo((n = F(o)))));
          }
        }
        return C({ width: d, height: p, x: s, y: f });
      }
      function ef(e, t) {
        let n = et(e).scrollLeft;
        return t ? t.left + n : es(j(e)).left + n;
      }
      function ed(e, t, n) {
        void 0 === n && (n = !1);
        let r = e.getBoundingClientRect();
        return {
          x: r.left + t.scrollLeft - (n ? 0 : ef(e, r)),
          y: r.top + t.scrollTop,
        };
      }
      let ep = new Set(["absolute", "fixed"]);
      function em(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = F(e),
              r = j(e),
              o = n.visualViewport,
              i = r.clientWidth,
              l = r.clientHeight,
              a = 0,
              u = 0;
            if (o) {
              ((i = o.width), (l = o.height));
              let e = Z();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (u = o.offsetTop));
            }
            return { width: i, height: l, x: a, y: u };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = j(e),
              n = et(e),
              r = e.ownerDocument.body,
              o = l(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              i = l(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight,
              ),
              a = -n.scrollLeft + ef(e),
              u = -n.scrollTop;
            return (
              "rtl" === ee(r).direction &&
                (a += l(t.clientWidth, r.clientWidth) - o),
              { width: o, height: i, x: a, y: u }
            );
          })(j(e));
        else if (B(t))
          r = (function (e, t) {
            let n = es(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              o = n.left + e.clientLeft,
              i = H(e) ? ea(e) : c(1),
              l = e.clientWidth * i.x,
              a = e.clientHeight * i.y;
            return { width: l, height: a, x: o * i.x, y: r * i.y };
          })(t, n);
        else {
          let n = ec(e);
          r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
        }
        return C(r);
      }
      function eh(e) {
        return "static" === ee(e).position;
      }
      function ev(e, t) {
        if (!H(e) || "fixed" === ee(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return (j(e) === n && (n = n.ownerDocument.body), n);
      }
      function eg(e, t) {
        var n;
        let r = F(e);
        if (V(e)) return r;
        if (!H(e)) {
          let t = en(e);
          for (; t && !J(t); ) {
            if (B(t) && !eh(t)) return t;
            t = en(t);
          }
          return r;
        }
        let o = ev(e, t);
        for (; o && ((n = o), $.has(W(n))) && eh(o); ) o = ev(o, t);
        return o && J(o) && eh(o) && !q(o)
          ? r
          : o ||
              (function (e) {
                let t = en(e);
                for (; H(t) && !J(t); ) {
                  if (q(t)) return t;
                  if (V(t)) break;
                  t = en(t);
                }
                return null;
              })(e) ||
              r;
      }
      let ey = async function (e) {
          let t = this.getOffsetParent || eg,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = H(t),
                o = j(t),
                i = "fixed" === n,
                l = es(e, !0, i, t),
                a = { scrollLeft: 0, scrollTop: 0 },
                u = c(0);
              if (r || (!r && !i))
                if ((("body" !== W(t) || U(o)) && (a = et(t)), r)) {
                  let e = es(t, !0, i, t);
                  ((u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop));
                } else o && (u.x = ef(o));
              i && !r && o && (u.x = ef(o));
              let s = !o || r || i ? c(0) : ed(o, a);
              return {
                x: l.left + a.scrollLeft - u.x - s.x,
                y: l.top + a.scrollTop - u.y - s.y,
                width: l.width,
                height: l.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        ew = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
              i = "fixed" === o,
              l = j(r),
              a = !!t && V(t.floating);
            if (r === l || (a && i)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              s = c(1),
              f = c(0),
              d = H(r);
            if (
              (d || (!d && !i)) &&
              (("body" !== W(r) || U(l)) && (u = et(r)), H(r))
            ) {
              let e = es(r);
              ((s = ea(r)),
                (f.x = e.x + r.clientLeft),
                (f.y = e.y + r.clientTop));
            }
            let p = !l || d || i ? c(0) : ed(l, u, !0);
            return {
              width: n.width * s.x,
              height: n.height * s.y,
              x: n.x * s.x - u.scrollLeft * s.x + f.x + p.x,
              y: n.y * s.y - u.scrollTop * s.y + f.y + p.y,
            };
          },
          getDocumentElement: j,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
              a = [
                ...("clippingAncestors" === n
                  ? V(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = er(e, [], !1).filter(
                            (e) => B(e) && "body" !== W(e),
                          ),
                          o = null,
                          i = "fixed" === ee(e).position,
                          l = i ? en(e) : e;
                        for (; B(l) && !J(l); ) {
                          let t = ee(l),
                            n = q(l);
                          (n || "fixed" !== t.position || (o = null),
                            (
                              i
                                ? !n && !o
                                : (!n &&
                                    "static" === t.position &&
                                    !!o &&
                                    ep.has(o.position)) ||
                                  (U(l) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = en(t);
                                      return (
                                        !(r === n || !B(r) || J(r)) &&
                                        ("fixed" === ee(r).position || e(r, n))
                                      );
                                    })(e, l))
                            )
                              ? (r = r.filter((e) => e !== l))
                              : (o = t),
                            (l = en(l)));
                        }
                        return (t.set(e, r), r);
                      })(t, this._c)
                  : [].concat(n)),
                r,
              ],
              u = a[0],
              c = a.reduce(
                (e, n) => {
                  let r = em(t, n, o);
                  return (
                    (e.top = l(r.top, e.top)),
                    (e.right = i(r.right, e.right)),
                    (e.bottom = i(r.bottom, e.bottom)),
                    (e.left = l(r.left, e.left)),
                    e
                  );
                },
                em(t, u, o),
              );
            return {
              width: c.right - c.left,
              height: c.bottom - c.top,
              x: c.left,
              y: c.top,
            };
          },
          getOffsetParent: eg,
          getElementRects: ey,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = ei(e);
            return { width: t, height: n };
          },
          getScale: ea,
          isElement: B,
          isRTL: function (e) {
            return "rtl" === ee(e).direction;
          },
        };
      function eb(e, t) {
        return (
          e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height
        );
      }
      let ex = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: r,
                placement: o,
                rects: a,
                platform: u,
                elements: c,
                middlewareData: s,
              } = t,
              { element: f, padding: p = 0 } = d(e, t) || {};
            if (null == f) return {};
            let g = A(p),
              w = { x: n, y: r },
              b = h(y(o)),
              x = v(b),
              E = await u.getDimensions(f),
              S = "y" === b,
              R = S ? "clientHeight" : "clientWidth",
              C = a.reference[x] + a.reference[b] - w[b] - a.floating[x],
              N = w[b] - a.reference[b],
              L = await (null == u.getOffsetParent
                ? void 0
                : u.getOffsetParent(f)),
              T = L ? L[R] : 0;
            (T && (await (null == u.isElement ? void 0 : u.isElement(L)))) ||
              (T = c.floating[R] || a.floating[x]);
            let O = T / 2 - E[x] / 2 - 1,
              P = i(g[S ? "top" : "left"], O),
              M = i(g[S ? "bottom" : "right"], O),
              k = T - E[x] - M,
              D = T / 2 - E[x] / 2 + (C / 2 - N / 2),
              W = l(P, i(D, k)),
              F =
                !s.arrow &&
                null != m(o) &&
                D !== W &&
                a.reference[x] / 2 - (D < P ? P : M) - E[x] / 2 < 0,
              j = F ? (D < P ? D - P : D - k) : 0;
            return {
              [b]: w[b] + j,
              data: {
                [b]: W,
                centerOffset: D - W - j,
                ...(F && { alignmentOffset: j }),
              },
              reset: F,
            };
          },
        }),
        eE = (e, t, n) => {
          let r = new Map(),
            o = { platform: ew, ...n },
            i = { ...o.platform, _c: r };
          return L(e, t, { ...o, platform: i });
        };
      var eS = n(47650),
        eR =
          "undefined" != typeof document ? r.useLayoutEffect : function () {};
      function eA(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!eA(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !eA(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function eC(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function eN(e, t) {
        let n = eC(e);
        return Math.round(t * n) / n;
      }
      function eL(e) {
        let t = r.useRef(e);
        return (
          eR(() => {
            t.current = e;
          }),
          t
        );
      }
      let eT = (e) => ({
          name: "arrow",
          options: e,
          fn(t) {
            let { element: n, padding: r } = "function" == typeof e ? e(t) : e;
            return n && {}.hasOwnProperty.call(n, "current")
              ? null != n.current
                ? ex({ element: n.current, padding: r }).fn(t)
                : {}
              : n
                ? ex({ element: n, padding: r }).fn(t)
                : {};
          },
        }),
        eO = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = 0),
              {
                name: "offset",
                options: e,
                async fn(t) {
                  var n, r;
                  let { x: o, y: i, placement: l, middlewareData: a } = t,
                    u = await k(t, e);
                  return l ===
                    (null == (n = a.offset) ? void 0 : n.placement) &&
                    null != (r = a.arrow) &&
                    r.alignmentOffset
                    ? {}
                    : { x: o + u.x, y: i + u.y, data: { ...u, placement: l } };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eP = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "shift",
                options: e,
                async fn(t) {
                  let { x: n, y: r, placement: o } = t,
                    {
                      mainAxis: a = !0,
                      crossAxis: u = !1,
                      limiter: c = {
                        fn: (e) => {
                          let { x: t, y: n } = e;
                          return { x: t, y: n };
                        },
                      },
                      ...s
                    } = d(e, t),
                    f = { x: n, y: r },
                    m = await T(t, s),
                    v = y(p(o)),
                    g = h(v),
                    w = f[g],
                    b = f[v];
                  if (a) {
                    let e = "y" === g ? "top" : "left",
                      t = "y" === g ? "bottom" : "right",
                      n = w + m[e],
                      r = w - m[t];
                    w = l(n, i(w, r));
                  }
                  if (u) {
                    let e = "y" === v ? "top" : "left",
                      t = "y" === v ? "bottom" : "right",
                      n = b + m[e],
                      r = b - m[t];
                    b = l(n, i(b, r));
                  }
                  let x = c.fn({ ...t, [g]: w, [v]: b });
                  return {
                    ...x,
                    data: {
                      x: x.x - n,
                      y: x.y - r,
                      enabled: { [g]: a, [v]: u },
                    },
                  };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eM = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                options: e,
                fn(t) {
                  let {
                      x: n,
                      y: r,
                      placement: o,
                      rects: i,
                      middlewareData: l,
                    } = t,
                    {
                      offset: a = 0,
                      mainAxis: u = !0,
                      crossAxis: c = !0,
                    } = d(e, t),
                    s = { x: n, y: r },
                    f = y(o),
                    m = h(f),
                    v = s[m],
                    g = s[f],
                    w = d(a, t),
                    b =
                      "number" == typeof w
                        ? { mainAxis: w, crossAxis: 0 }
                        : { mainAxis: 0, crossAxis: 0, ...w };
                  if (u) {
                    let e = "y" === m ? "height" : "width",
                      t = i.reference[m] - i.floating[e] + b.mainAxis,
                      n = i.reference[m] + i.reference[e] - b.mainAxis;
                    v < t ? (v = t) : v > n && (v = n);
                  }
                  if (c) {
                    var x, E;
                    let e = "y" === m ? "width" : "height",
                      t = M.has(p(o)),
                      n =
                        i.reference[f] -
                        i.floating[e] +
                        ((t && (null == (x = l.offset) ? void 0 : x[f])) || 0) +
                        (t ? 0 : b.crossAxis),
                      r =
                        i.reference[f] +
                        i.reference[e] +
                        (t
                          ? 0
                          : (null == (E = l.offset) ? void 0 : E[f]) || 0) -
                        (t ? b.crossAxis : 0);
                    g < n ? (g = n) : g > r && (g = r);
                  }
                  return { [m]: v, [f]: g };
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        ek = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "flip",
                options: e,
                async fn(t) {
                  var n, r, o, i, l;
                  let {
                      placement: a,
                      middlewareData: u,
                      rects: c,
                      initialPlacement: s,
                      platform: f,
                      elements: g,
                    } = t,
                    {
                      mainAxis: A = !0,
                      crossAxis: C = !0,
                      fallbackPlacements: N,
                      fallbackStrategy: L = "bestFit",
                      fallbackAxisSideDirection: O = "none",
                      flipAlignment: P = !0,
                      ...M
                    } = d(e, t);
                  if (null != (n = u.arrow) && n.alignmentOffset) return {};
                  let k = p(a),
                    D = y(s),
                    W = p(s) === s,
                    F = await (null == f.isRTL ? void 0 : f.isRTL(g.floating)),
                    j =
                      N ||
                      (W || !P
                        ? [R(s)]
                        : (function (e) {
                            let t = R(e);
                            return [w(e), t, w(t)];
                          })(s)),
                    I = "none" !== O;
                  !N &&
                    I &&
                    j.push(
                      ...(function (e, t, n, r) {
                        let o = m(e),
                          i = (function (e, t, n) {
                            switch (e) {
                              case "top":
                              case "bottom":
                                if (n) return t ? x : b;
                                return t ? b : x;
                              case "left":
                              case "right":
                                return t ? E : S;
                              default:
                                return [];
                            }
                          })(p(e), "start" === n, r);
                        return (
                          o &&
                            ((i = i.map((e) => e + "-" + o)),
                            t && (i = i.concat(i.map(w)))),
                          i
                        );
                      })(s, P, O, F),
                    );
                  let B = [s, ...j],
                    H = await T(t, M),
                    _ = [],
                    z = (null == (r = u.flip) ? void 0 : r.overflows) || [];
                  if ((A && _.push(H[k]), C)) {
                    let e = (function (e, t, n) {
                      void 0 === n && (n = !1);
                      let r = m(e),
                        o = h(y(e)),
                        i = v(o),
                        l =
                          "x" === o
                            ? r === (n ? "end" : "start")
                              ? "right"
                              : "left"
                            : "start" === r
                              ? "bottom"
                              : "top";
                      return (
                        t.reference[i] > t.floating[i] && (l = R(l)),
                        [l, R(l)]
                      );
                    })(a, c, F);
                    _.push(H[e[0]], H[e[1]]);
                  }
                  if (
                    ((z = [...z, { placement: a, overflows: _ }]),
                    !_.every((e) => e <= 0))
                  ) {
                    let e =
                        ((null == (o = u.flip) ? void 0 : o.index) || 0) + 1,
                      t = B[e];
                    if (
                      t &&
                      ("alignment" !== C ||
                        D === y(t) ||
                        z.every(
                          (e) => e.overflows[0] > 0 && y(e.placement) === D,
                        ))
                    )
                      return {
                        data: { index: e, overflows: z },
                        reset: { placement: t },
                      };
                    let n =
                      null ==
                      (i = z
                        .filter((e) => e.overflows[0] <= 0)
                        .sort((e, t) => e.overflows[1] - t.overflows[1])[0])
                        ? void 0
                        : i.placement;
                    if (!n)
                      switch (L) {
                        case "bestFit": {
                          let e =
                            null ==
                            (l = z
                              .filter((e) => {
                                if (I) {
                                  let t = y(e.placement);
                                  return t === D || "y" === t;
                                }
                                return !0;
                              })
                              .map((e) => [
                                e.placement,
                                e.overflows
                                  .filter((e) => e > 0)
                                  .reduce((e, t) => e + t, 0),
                              ])
                              .sort((e, t) => e[1] - t[1])[0])
                              ? void 0
                              : l[0];
                          e && (n = e);
                          break;
                        }
                        case "initialPlacement":
                          n = s;
                      }
                    if (a !== n) return { reset: { placement: n } };
                  }
                  return {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eD = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "size",
                options: e,
                async fn(t) {
                  var n, r;
                  let o,
                    a,
                    { placement: u, rects: c, platform: s, elements: f } = t,
                    { apply: h = () => {}, ...v } = d(e, t),
                    g = await T(t, v),
                    w = p(u),
                    b = m(u),
                    x = "y" === y(u),
                    { width: E, height: S } = c.floating;
                  "top" === w || "bottom" === w
                    ? ((o = w),
                      (a =
                        b ===
                        ((await (null == s.isRTL
                          ? void 0
                          : s.isRTL(f.floating)))
                          ? "start"
                          : "end")
                          ? "left"
                          : "right"))
                    : ((a = w), (o = "end" === b ? "top" : "bottom"));
                  let R = S - g.top - g.bottom,
                    A = E - g.left - g.right,
                    C = i(S - g[o], R),
                    N = i(E - g[a], A),
                    L = !t.middlewareData.shift,
                    O = C,
                    P = N;
                  if (
                    (null != (n = t.middlewareData.shift) &&
                      n.enabled.x &&
                      (P = A),
                    null != (r = t.middlewareData.shift) &&
                      r.enabled.y &&
                      (O = R),
                    L && !b)
                  ) {
                    let e = l(g.left, 0),
                      t = l(g.right, 0),
                      n = l(g.top, 0),
                      r = l(g.bottom, 0);
                    x
                      ? (P =
                          E -
                          2 * (0 !== e || 0 !== t ? e + t : l(g.left, g.right)))
                      : (O =
                          S -
                          2 *
                            (0 !== n || 0 !== r ? n + r : l(g.top, g.bottom)));
                  }
                  await h({ ...t, availableWidth: P, availableHeight: O });
                  let M = await s.getDimensions(f.floating);
                  return E !== M.width || S !== M.height
                    ? { reset: { rects: !0 } }
                    : {};
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eW = (e, t) => ({
          ...(function (e) {
            return (
              void 0 === e && (e = {}),
              {
                name: "hide",
                options: e,
                async fn(t) {
                  let { rects: n } = t,
                    { strategy: r = "referenceHidden", ...o } = d(e, t);
                  switch (r) {
                    case "referenceHidden": {
                      let e = O(
                        await T(t, { ...o, elementContext: "reference" }),
                        n.reference,
                      );
                      return {
                        data: {
                          referenceHiddenOffsets: e,
                          referenceHidden: P(e),
                        },
                      };
                    }
                    case "escaped": {
                      let e = O(
                        await T(t, { ...o, altBoundary: !0 }),
                        n.floating,
                      );
                      return { data: { escapedOffsets: e, escaped: P(e) } };
                    }
                    default:
                      return {};
                  }
                },
              }
            );
          })(e),
          options: [e, t],
        }),
        eF = (e, t) => ({ ...eT(e), options: [e, t] });
      var ej = n(63655),
        eI = n(95155),
        eB = r.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...i } = e;
          return (0, eI.jsx)(ej.sG.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, eI.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      eB.displayName = "Arrow";
      var eH = n(6101),
        e_ = n(46081),
        ez = n(39033),
        eU = n(52712),
        e$ = "Popper",
        [eY, eV] = (0, e_.A)(e$),
        [eX, eG] = eY(e$),
        eK = (e) => {
          let { __scopePopper: t, children: n } = e,
            [o, i] = r.useState(null);
          return (0, eI.jsx)(eX, {
            scope: t,
            anchor: o,
            onAnchorChange: i,
            children: n,
          });
        };
      eK.displayName = e$;
      var eq = "PopperAnchor",
        eZ = r.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: o, ...i } = e,
            l = eG(eq, n),
            a = r.useRef(null),
            u = (0, eH.s)(t, a);
          return (
            r.useEffect(() => {
              l.onAnchorChange((null == o ? void 0 : o.current) || a.current);
            }),
            o ? null : (0, eI.jsx)(ej.sG.div, { ...i, ref: u })
          );
        });
      eZ.displayName = eq;
      var eQ = "PopperContent",
        [eJ, e0] = eY(eQ),
        e1 = r.forwardRef((e, t) => {
          var n, o, a, c, s, f, d, p;
          let {
              __scopePopper: m,
              side: h = "bottom",
              sideOffset: v = 0,
              align: g = "center",
              alignOffset: y = 0,
              arrowPadding: w = 0,
              avoidCollisions: b = !0,
              collisionBoundary: x = [],
              collisionPadding: E = 0,
              sticky: S = "partial",
              hideWhenDetached: R = !1,
              updatePositionStrategy: A = "optimized",
              onPlaced: C,
              ...N
            } = e,
            L = eG(eQ, m),
            [T, O] = r.useState(null),
            P = (0, eH.s)(t, (e) => O(e)),
            [M, k] = r.useState(null),
            D = (function (e) {
              let [t, n] = r.useState(void 0);
              return (
                (0, eU.N)(() => {
                  if (e) {
                    n({ width: e.offsetWidth, height: e.offsetHeight });
                    let t = new ResizeObserver((t) => {
                      let r, o;
                      if (!Array.isArray(t) || !t.length) return;
                      let i = t[0];
                      if ("borderBoxSize" in i) {
                        let e = i.borderBoxSize,
                          t = Array.isArray(e) ? e[0] : e;
                        ((r = t.inlineSize), (o = t.blockSize));
                      } else ((r = e.offsetWidth), (o = e.offsetHeight));
                      n({ width: r, height: o });
                    });
                    return (
                      t.observe(e, { box: "border-box" }),
                      () => t.unobserve(e)
                    );
                  }
                  n(void 0);
                }, [e]),
                t
              );
            })(M),
            W = null != (d = null == D ? void 0 : D.width) ? d : 0,
            F = null != (p = null == D ? void 0 : D.height) ? p : 0,
            I =
              "number" == typeof E
                ? E
                : { top: 0, right: 0, bottom: 0, left: 0, ...E },
            B = Array.isArray(x) ? x : [x],
            H = B.length > 0,
            _ = { padding: I, boundary: B.filter(e9), altBoundary: H },
            {
              refs: z,
              floatingStyles: U,
              placement: $,
              isPositioned: Y,
              middlewareData: V,
            } = (function (e) {
              void 0 === e && (e = {});
              let {
                  placement: t = "bottom",
                  strategy: n = "absolute",
                  middleware: o = [],
                  platform: i,
                  elements: { reference: l, floating: a } = {},
                  transform: u = !0,
                  whileElementsMounted: c,
                  open: s,
                } = e,
                [f, d] = r.useState({
                  x: 0,
                  y: 0,
                  strategy: n,
                  placement: t,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [p, m] = r.useState(o);
              eA(p, o) || m(o);
              let [h, v] = r.useState(null),
                [g, y] = r.useState(null),
                w = r.useCallback((e) => {
                  e !== S.current && ((S.current = e), v(e));
                }, []),
                b = r.useCallback((e) => {
                  e !== R.current && ((R.current = e), y(e));
                }, []),
                x = l || h,
                E = a || g,
                S = r.useRef(null),
                R = r.useRef(null),
                A = r.useRef(f),
                C = null != c,
                N = eL(c),
                L = eL(i),
                T = eL(s),
                O = r.useCallback(() => {
                  if (!S.current || !R.current) return;
                  let e = { placement: t, strategy: n, middleware: p };
                  (L.current && (e.platform = L.current),
                    eE(S.current, R.current, e).then((e) => {
                      let t = { ...e, isPositioned: !1 !== T.current };
                      P.current &&
                        !eA(A.current, t) &&
                        ((A.current = t),
                        eS.flushSync(() => {
                          d(t);
                        }));
                    }));
                }, [p, t, n, L, T]);
              eR(() => {
                !1 === s &&
                  A.current.isPositioned &&
                  ((A.current.isPositioned = !1),
                  d((e) => ({ ...e, isPositioned: !1 })));
              }, [s]);
              let P = r.useRef(!1);
              (eR(
                () => (
                  (P.current = !0),
                  () => {
                    P.current = !1;
                  }
                ),
                [],
              ),
                eR(() => {
                  if ((x && (S.current = x), E && (R.current = E), x && E)) {
                    if (N.current) return N.current(x, E, O);
                    O();
                  }
                }, [x, E, O, N, C]));
              let M = r.useMemo(
                  () => ({
                    reference: S,
                    floating: R,
                    setReference: w,
                    setFloating: b,
                  }),
                  [w, b],
                ),
                k = r.useMemo(() => ({ reference: x, floating: E }), [x, E]),
                D = r.useMemo(() => {
                  let e = { position: n, left: 0, top: 0 };
                  if (!k.floating) return e;
                  let t = eN(k.floating, f.x),
                    r = eN(k.floating, f.y);
                  return u
                    ? {
                        ...e,
                        transform: "translate(" + t + "px, " + r + "px)",
                        ...(eC(k.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: n, left: t, top: r };
                }, [n, u, k.floating, f.x, f.y]);
              return r.useMemo(
                () => ({
                  ...f,
                  update: O,
                  refs: M,
                  elements: k,
                  floatingStyles: D,
                }),
                [f, O, M, k, D],
              );
            })({
              strategy: "fixed",
              placement: h + ("center" !== g ? "-" + g : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (function (e, t, n, r) {
                  let o;
                  void 0 === r && (r = {});
                  let {
                      ancestorScroll: a = !0,
                      ancestorResize: c = !0,
                      elementResize: s = "function" == typeof ResizeObserver,
                      layoutShift: f = "function" ==
                        typeof IntersectionObserver,
                      animationFrame: d = !1,
                    } = r,
                    p = el(e),
                    m = a || c ? [...(p ? er(p) : []), ...er(t)] : [];
                  m.forEach((e) => {
                    (a && e.addEventListener("scroll", n, { passive: !0 }),
                      c && e.addEventListener("resize", n));
                  });
                  let h =
                      p && f
                        ? (function (e, t) {
                            let n,
                              r = null,
                              o = j(e);
                            function a() {
                              var e;
                              (clearTimeout(n),
                                null == (e = r) || e.disconnect(),
                                (r = null));
                            }
                            return (
                              !(function c(s, f) {
                                (void 0 === s && (s = !1),
                                  void 0 === f && (f = 1),
                                  a());
                                let d = e.getBoundingClientRect(),
                                  { left: p, top: m, width: h, height: v } = d;
                                if ((s || t(), !h || !v)) return;
                                let g = u(m),
                                  y = u(o.clientWidth - (p + h)),
                                  w = {
                                    rootMargin:
                                      -g +
                                      "px " +
                                      -y +
                                      "px " +
                                      -u(o.clientHeight - (m + v)) +
                                      "px " +
                                      -u(p) +
                                      "px",
                                    threshold: l(0, i(1, f)) || 1,
                                  },
                                  b = !0;
                                function x(t) {
                                  let r = t[0].intersectionRatio;
                                  if (r !== f) {
                                    if (!b) return c();
                                    r
                                      ? c(!1, r)
                                      : (n = setTimeout(() => {
                                          c(!1, 1e-7);
                                        }, 1e3));
                                  }
                                  (1 !== r ||
                                    eb(d, e.getBoundingClientRect()) ||
                                    c(),
                                    (b = !1));
                                }
                                try {
                                  r = new IntersectionObserver(x, {
                                    ...w,
                                    root: o.ownerDocument,
                                  });
                                } catch (e) {
                                  r = new IntersectionObserver(x, w);
                                }
                                r.observe(e);
                              })(!0),
                              a
                            );
                          })(p, n)
                        : null,
                    v = -1,
                    g = null;
                  s &&
                    ((g = new ResizeObserver((e) => {
                      let [r] = e;
                      (r &&
                        r.target === p &&
                        g &&
                        (g.unobserve(t),
                        cancelAnimationFrame(v),
                        (v = requestAnimationFrame(() => {
                          var e;
                          null == (e = g) || e.observe(t);
                        }))),
                        n());
                    })),
                    p && !d && g.observe(p),
                    g.observe(t));
                  let y = d ? es(e) : null;
                  return (
                    d &&
                      (function t() {
                        let r = es(e);
                        (y && !eb(y, r) && n(),
                          (y = r),
                          (o = requestAnimationFrame(t)));
                      })(),
                    n(),
                    () => {
                      var e;
                      (m.forEach((e) => {
                        (a && e.removeEventListener("scroll", n),
                          c && e.removeEventListener("resize", n));
                      }),
                        null == h || h(),
                        null == (e = g) || e.disconnect(),
                        (g = null),
                        d && cancelAnimationFrame(o));
                    }
                  );
                })(...t, { animationFrame: "always" === A });
              },
              elements: { reference: L.anchor },
              middleware: [
                eO({ mainAxis: v + F, alignmentAxis: y }),
                b &&
                  eP({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === S ? eM() : void 0,
                    ..._,
                  }),
                b && ek({ ..._ }),
                eD({
                  ..._,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: i, height: l } = n.reference,
                      a = t.floating.style;
                    (a.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px"),
                    ),
                      a.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px"),
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(i, "px"),
                      ),
                      a.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(l, "px"),
                      ));
                  },
                }),
                M && eF({ element: M, padding: w }),
                e6({ arrowWidth: W, arrowHeight: F }),
                R && eW({ strategy: "referenceHidden", ..._ }),
              ],
            }),
            [X, G] = e8($),
            K = (0, ez.c)(C);
          (0, eU.N)(() => {
            Y && (null == K || K());
          }, [Y, K]);
          let q = null == (n = V.arrow) ? void 0 : n.x,
            Z = null == (o = V.arrow) ? void 0 : o.y,
            Q = (null == (a = V.arrow) ? void 0 : a.centerOffset) !== 0,
            [J, ee] = r.useState();
          return (
            (0, eU.N)(() => {
              T && ee(window.getComputedStyle(T).zIndex);
            }, [T]),
            (0, eI.jsx)("div", {
              "ref": z.setFloating,
              "data-radix-popper-content-wrapper": "",
              "style": {
                ...U,
                "transform": Y ? U.transform : "translate(0, -200%)",
                "minWidth": "max-content",
                "zIndex": J,
                "--radix-popper-transform-origin": [
                  null == (c = V.transformOrigin) ? void 0 : c.x,
                  null == (s = V.transformOrigin) ? void 0 : s.y,
                ].join(" "),
                ...((null == (f = V.hide) ? void 0 : f.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              "dir": e.dir,
              "children": (0, eI.jsx)(eJ, {
                scope: m,
                placedSide: X,
                onArrowChange: k,
                arrowX: q,
                arrowY: Z,
                shouldHideArrow: Q,
                children: (0, eI.jsx)(ej.sG.div, {
                  "data-side": X,
                  "data-align": G,
                  ...N,
                  "ref": P,
                  "style": { ...N.style, animation: Y ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      e1.displayName = eQ;
      var e5 = "PopperArrow",
        e2 = { top: "bottom", right: "left", bottom: "top", left: "right" },
        e3 = r.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = e0(e5, n),
            i = e2[o.placedSide];
          return (0, eI.jsx)("span", {
            ref: o.onArrowChange,
            style: {
              position: "absolute",
              left: o.arrowX,
              top: o.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0",
              }[o.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)",
              }[o.placedSide],
              visibility: o.shouldHideArrow ? "hidden" : void 0,
            },
            children: (0, eI.jsx)(eB, {
              ...r,
              ref: t,
              style: { ...r.style, display: "block" },
            }),
          });
        });
      function e9(e) {
        return null !== e;
      }
      e3.displayName = e5;
      var e6 = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, l;
          let { placement: a, rects: u, middlewareData: c } = t,
            s = (null == (n = c.arrow) ? void 0 : n.centerOffset) !== 0,
            f = s ? 0 : e.arrowWidth,
            d = s ? 0 : e.arrowHeight,
            [p, m] = e8(a),
            h = { start: "0%", center: "50%", end: "100%" }[m],
            v =
              (null != (i = null == (r = c.arrow) ? void 0 : r.x) ? i : 0) +
              f / 2,
            g =
              (null != (l = null == (o = c.arrow) ? void 0 : o.y) ? l : 0) +
              d / 2,
            y = "",
            w = "";
          return (
            "bottom" === p
              ? ((y = s ? h : "".concat(v, "px")), (w = "".concat(-d, "px")))
              : "top" === p
                ? ((y = s ? h : "".concat(v, "px")),
                  (w = "".concat(u.floating.height + d, "px")))
                : "right" === p
                  ? ((y = "".concat(-d, "px")),
                    (w = s ? h : "".concat(g, "px")))
                  : "left" === p &&
                    ((y = "".concat(u.floating.width + d, "px")),
                    (w = s ? h : "".concat(g, "px"))),
            { data: { x: y, y: w } }
          );
        },
      });
      function e8(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var e7 = eK,
        e4 = eZ,
        te = e1,
        tt = e3;
    },
    39033: (e, t, n) => {
      n.d(t, { c: () => o });
      var r = n(12115);
      function o(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            [],
          )
        );
      }
    },
    46081: (e, t, n) => {
      n.d(t, { A: () => l, q: () => i });
      var r = n(12115),
        o = n(95155);
      function i(e, t) {
        let n = r.createContext(t),
          i = (e) => {
            let { children: t, ...i } = e,
              l = r.useMemo(() => i, Object.values(i));
            return (0, o.jsx)(n.Provider, { value: l, children: t });
          };
        return (
          (i.displayName = e + "Provider"),
          [
            i,
            function (o) {
              let i = r.useContext(n);
              if (i) return i;
              if (void 0 !== t) return t;
              throw Error(`\`${o}\` must be used within \`${e}\``);
            },
          ]
        );
      }
      function l(e, t = []) {
        let n = [],
          i = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let o = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: o } }),
                [n, o],
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, i) {
              let l = r.createContext(i),
                a = n.length;
              n = [...n, i];
              let u = (t) => {
                let { scope: n, children: i, ...u } = t,
                  c = n?.[e]?.[a] || l,
                  s = r.useMemo(() => u, Object.values(u));
                return (0, o.jsx)(c.Provider, { value: s, children: i });
              };
              return (
                (u.displayName = t + "Provider"),
                [
                  u,
                  function (n, o) {
                    let u = o?.[e]?.[a] || l,
                      c = r.useContext(u);
                    if (c) return c;
                    if (void 0 !== i) return i;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let o = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let o = n(e)[`__scope${r}`];
                    return { ...t, ...o };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: o }),
                    [o],
                  );
                };
              };
              return ((n.scopeName = t.scopeName), n);
            })(i, ...t),
          ]
        );
      }
    },
    52712: (e, t, n) => {
      n.d(t, { N: () => o });
      var r = n(12115),
        o = globalThis?.document ? r.useLayoutEffect : () => {};
    },
    61285: (e, t, n) => {
      n.d(t, { B: () => u });
      var r,
        o = n(12115),
        i = n(52712),
        l =
          (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => void 0),
        a = 0;
      function u(e) {
        let [t, n] = o.useState(l());
        return (
          (0, i.N)(() => {
            e || n((e) => e ?? String(a++));
          }, [e]),
          e || (t ? `radix-${t}` : "")
        );
      }
    },
    85185: (e, t, n) => {
      n.d(t, { m: () => r });
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
    },
    92293: (e, t, n) => {
      n.d(t, { Oh: () => i });
      var r = n(12115),
        o = 0;
      function i() {
        r.useEffect(() => {
          var e, t;
          let n = document.querySelectorAll("[data-radix-focus-guard]");
          return (
            document.body.insertAdjacentElement(
              "afterbegin",
              null != (e = n[0]) ? e : l(),
            ),
            document.body.insertAdjacentElement(
              "beforeend",
              null != (t = n[1]) ? t : l(),
            ),
            o++,
            () => {
              (1 === o &&
                document
                  .querySelectorAll("[data-radix-focus-guard]")
                  .forEach((e) => e.remove()),
                o--);
            }
          );
        }, []);
      }
      function l() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
    },
    93795: (e, t, n) => {
      n.d(t, { A: () => V });
      var r,
        o,
        i = function () {
          return (i =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var o in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              return e;
            }).apply(this, arguments);
        };
      function l(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      Object.create;
      Object.create;
      var a =
          ("function" == typeof SuppressedError && SuppressedError, n(12115)),
        u = "right-scroll-bar-position",
        c = "width-before-scroll-bar";
      function s(e, t) {
        return ("function" == typeof e ? e(t) : e && (e.current = t), e);
      }
      var f = "undefined" != typeof window ? a.useLayoutEffect : a.useEffect,
        d = new WeakMap();
      function p(e) {
        return e;
      }
      var m = (function (e) {
          void 0 === e && (e = {});
          var t,
            n,
            r,
            o,
            l =
              ((t = null),
              void 0 === n && (n = p),
              (r = []),
              (o = !1),
              {
                read: function () {
                  if (o)
                    throw Error(
                      "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
                    );
                  return r.length ? r[r.length - 1] : null;
                },
                useMedium: function (e) {
                  var t = n(e, o);
                  return (
                    r.push(t),
                    function () {
                      r = r.filter(function (e) {
                        return e !== t;
                      });
                    }
                  );
                },
                assignSyncMedium: function (e) {
                  for (o = !0; r.length; ) {
                    var t = r;
                    ((r = []), t.forEach(e));
                  }
                  r = {
                    push: function (t) {
                      return e(t);
                    },
                    filter: function () {
                      return r;
                    },
                  };
                },
                assignMedium: function (e) {
                  o = !0;
                  var t = [];
                  if (r.length) {
                    var n = r;
                    ((r = []), n.forEach(e), (t = r));
                  }
                  var i = function () {
                      var n = t;
                      ((t = []), n.forEach(e));
                    },
                    l = function () {
                      return Promise.resolve().then(i);
                    };
                  (l(),
                    (r = {
                      push: function (e) {
                        (t.push(e), l());
                      },
                      filter: function (e) {
                        return ((t = t.filter(e)), r);
                      },
                    }));
                },
              });
          return ((l.options = i({ async: !0, ssr: !1 }, e)), l);
        })(),
        h = function () {},
        v = a.forwardRef(function (e, t) {
          var n,
            r,
            o,
            u,
            c = a.useRef(null),
            p = a.useState({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: h,
            }),
            v = p[0],
            g = p[1],
            y = e.forwardProps,
            w = e.children,
            b = e.className,
            x = e.removeScrollBar,
            E = e.enabled,
            S = e.shards,
            R = e.sideCar,
            A = e.noRelative,
            C = e.noIsolation,
            N = e.inert,
            L = e.allowPinchZoom,
            T = e.as,
            O = e.gapMode,
            P = l(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noRelative",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            M =
              ((n = [c, t]),
              (r = function (e) {
                return n.forEach(function (t) {
                  return s(t, e);
                });
              }),
              ((o = (0, a.useState)(function () {
                return {
                  value: null,
                  callback: r,
                  facade: {
                    get current() {
                      return o.value;
                    },
                    set current(value) {
                      var e = o.value;
                      e !== value && ((o.value = value), o.callback(value, e));
                    },
                  },
                };
              })[0]).callback = r),
              (u = o.facade),
              f(
                function () {
                  var e = d.get(u);
                  if (e) {
                    var t = new Set(e),
                      r = new Set(n),
                      o = u.current;
                    (t.forEach(function (e) {
                      r.has(e) || s(e, null);
                    }),
                      r.forEach(function (e) {
                        t.has(e) || s(e, o);
                      }));
                  }
                  d.set(u, n);
                },
                [n],
              ),
              u),
            k = i(i({}, P), v);
          return a.createElement(
            a.Fragment,
            null,
            E &&
              a.createElement(R, {
                sideCar: m,
                removeScrollBar: x,
                shards: S,
                noRelative: A,
                noIsolation: C,
                inert: N,
                setCallbacks: g,
                allowPinchZoom: !!L,
                lockRef: c,
                gapMode: O,
              }),
            y
              ? a.cloneElement(a.Children.only(w), i(i({}, k), { ref: M }))
              : a.createElement(
                  void 0 === T ? "div" : T,
                  i({}, k, { className: b, ref: M }),
                  w,
                ),
          );
        });
      ((v.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (v.classNames = { fullWidth: c, zeroRight: u }));
      var g = function (e) {
        var t = e.sideCar,
          n = l(e, ["sideCar"]);
        if (!t)
          throw Error(
            "Sidecar: please provide `sideCar` property to import the right car",
          );
        var r = t.read();
        if (!r) throw Error("Sidecar medium not found");
        return a.createElement(r, i({}, n));
      };
      g.isSideCarExport = !0;
      var y = function () {
          var e = 0,
            t = null;
          return {
            add: function (r) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = o || n.nc;
                  return (t && e.setAttribute("nonce", t), e);
                })())
              ) {
                var i, l;
                ((i = t).styleSheet
                  ? (i.styleSheet.cssText = r)
                  : i.appendChild(document.createTextNode(r)),
                  (l = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(l));
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        w = function () {
          var e = y();
          return function (t, n) {
            a.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n],
            );
          };
        },
        b = function () {
          var e = w();
          return function (t) {
            return (e(t.styles, t.dynamic), null);
          };
        },
        x = { left: 0, top: 0, right: 0, gap: 0 },
        E = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        S = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [E(n), E(r), E(o)];
        },
        R = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return x;
          var t = S(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        A = b(),
        C = "data-scroll-locked",
        N = function (e, t, n, r) {
          var o = e.left,
            i = e.top,
            l = e.right,
            a = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(C, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(i, "px;\n    padding-right: ")
                      .concat(
                        l,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ",
                      )
                      .concat(a, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(a, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  .",
              )
              .concat(u, " {\n    right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " {\n    margin-right: ")
              .concat(a, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(u, " .")
              .concat(u, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(c, " .")
              .concat(c, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(C, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(a, "px;\n  }\n")
          );
        },
        L = function () {
          var e = parseInt(document.body.getAttribute(C) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        T = function () {
          a.useEffect(function () {
            return (
              document.body.setAttribute(C, (L() + 1).toString()),
              function () {
                var e = L() - 1;
                e <= 0
                  ? document.body.removeAttribute(C)
                  : document.body.setAttribute(C, e.toString());
              }
            );
          }, []);
        },
        O = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          T();
          var i = a.useMemo(
            function () {
              return R(o);
            },
            [o],
          );
          return a.createElement(A, {
            styles: N(i, !t, o, n ? "" : "!important"),
          });
        },
        P = !1;
      if ("undefined" != typeof window)
        try {
          var M = Object.defineProperty({}, "passive", {
            get: function () {
              return ((P = !0), !0);
            },
          });
          (window.addEventListener("test", M, M),
            window.removeEventListener("test", M, M));
        } catch (e) {
          P = !1;
        }
      var k = !!P && { passive: !1 },
        D = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            (n.overflowY !== n.overflowX ||
              "TEXTAREA" === e.tagName ||
              "visible" !== n[t])
          );
        },
        W = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              F(e, r))
            ) {
              var o = j(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        F = function (e, t) {
          return "v" === e ? D(t, "overflowY") : D(t, "overflowX");
        },
        j = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        I = function (e, t, n, r, o) {
          var i,
            l =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            a = l * r,
            u = n.target,
            c = t.contains(u),
            s = !1,
            f = a > 0,
            d = 0,
            p = 0;
          do {
            if (!u) break;
            var m = j(e, u),
              h = m[0],
              v = m[1] - m[2] - l * h;
            (h || v) && F(e, u) && ((d += v), (p += h));
            var g = u.parentNode;
            u = g && g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? g.host : g;
          } while (
            (!c && u !== document.body) ||
            (c && (t.contains(u) || t === u))
          );
          return (
            f && ((o && 1 > Math.abs(d)) || (!o && a > d))
              ? (s = !0)
              : !f && ((o && 1 > Math.abs(p)) || (!o && -a > p)) && (s = !0),
            s
          );
        },
        B = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        H = function (e) {
          return [e.deltaX, e.deltaY];
        },
        _ = function (e) {
          return e && "current" in e ? e.current : e;
        },
        z = 0,
        U = [];
      let $ =
        ((r = function (e) {
          var t = a.useRef([]),
            n = a.useRef([0, 0]),
            r = a.useRef(),
            o = a.useState(z++)[0],
            i = a.useState(b)[0],
            l = a.useRef(e);
          (a.useEffect(
            function () {
              l.current = e;
            },
            [e],
          ),
            a.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(o));
                  var t = (function (e, t, n) {
                    if (n || 2 == arguments.length)
                      for (var r, o = 0, i = t.length; o < i; o++)
                        (!r && o in t) ||
                          (r || (r = Array.prototype.slice.call(t, 0, o)),
                          (r[o] = t[o]));
                    return e.concat(r || Array.prototype.slice.call(t));
                  })([e.lockRef.current], (e.shards || []).map(_), !0).filter(
                    Boolean,
                  );
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(o));
                    }),
                    function () {
                      (document.body.classList.remove(
                        "block-interactivity-".concat(o),
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(o),
                          );
                        }));
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards],
            ));
          var u = a.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !l.current.allowPinchZoom;
              var o,
                i = B(e),
                a = n.current,
                u = "deltaX" in e ? e.deltaX : a[0] - i[0],
                c = "deltaY" in e ? e.deltaY : a[1] - i[1],
                s = e.target,
                f = Math.abs(u) > Math.abs(c) ? "h" : "v";
              if ("touches" in e && "h" === f && "range" === s.type) return !1;
              var d = W(f, s);
              if (!d) return !0;
              if (
                (d ? (o = f) : ((o = "v" === f ? "h" : "v"), (d = W(f, s))), !d)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (u || c) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return I(p, t, e, "h" === p ? u : c, !0);
            }, []),
            c = a.useCallback(function (e) {
              if (U.length && U[U.length - 1] === i) {
                var n = "deltaY" in e ? H(e) : B(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      ((r = t.delta), r[0] === n[0] && r[1] === n[1])
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (l.current.shards || [])
                    .map(_)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? u(e, o[0]) : !l.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            s = a.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    (e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode));
                  return t;
                })(r),
              };
              (t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1));
            }, []),
            f = a.useCallback(function (e) {
              ((n.current = B(e)), (r.current = void 0));
            }, []),
            d = a.useCallback(function (t) {
              s(t.type, H(t), t.target, u(t, e.lockRef.current));
            }, []),
            p = a.useCallback(function (t) {
              s(t.type, B(t), t.target, u(t, e.lockRef.current));
            }, []);
          a.useEffect(function () {
            return (
              U.push(i),
              e.setCallbacks({
                onScrollCapture: d,
                onWheelCapture: d,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", c, k),
              document.addEventListener("touchmove", c, k),
              document.addEventListener("touchstart", f, k),
              function () {
                ((U = U.filter(function (e) {
                  return e !== i;
                })),
                  document.removeEventListener("wheel", c, k),
                  document.removeEventListener("touchmove", c, k),
                  document.removeEventListener("touchstart", f, k));
              }
            );
          }, []);
          var m = e.removeScrollBar,
            h = e.inert;
          return a.createElement(
            a.Fragment,
            null,
            h
              ? a.createElement(i, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      o,
                      " {pointer-events: none;}\n  .allow-interactivity-",
                    )
                    .concat(o, " {pointer-events: all;}\n"),
                })
              : null,
            m
              ? a.createElement(O, {
                  noRelative: e.noRelative,
                  gapMode: e.gapMode,
                })
              : null,
          );
        }),
        m.useMedium(r),
        g);
      var Y = a.forwardRef(function (e, t) {
        return a.createElement(v, i({}, e, { ref: t, sideCar: $ }));
      });
      Y.classNames = v.classNames;
      let V = Y;
    },
  },
]);

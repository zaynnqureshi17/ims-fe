"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6052],
  {
    5196: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    22436: (e, t, r) => {
      var n = r(12115),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        l = n.useState,
        a = n.useEffect,
        i = n.useLayoutEffect,
        u = n.useDebugValue;
      function s(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r);
        } catch (e) {
          return !0;
        }
      }
      var d =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = l({ inst: { value: r, getSnapshot: t } }),
                o = n[0].inst,
                d = n[1];
              return (
                i(
                  function () {
                    ((o.value = r),
                      (o.getSnapshot = t),
                      s(o) && d({ inst: o }));
                  },
                  [e, r, t],
                ),
                a(
                  function () {
                    return (
                      s(o) && d({ inst: o }),
                      e(function () {
                        s(o) && d({ inst: o });
                      })
                    );
                  },
                  [e],
                ),
                u(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : d;
    },
    23861: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("bell", [
        ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
        [
          "path",
          {
            d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
            key: "11g9vi",
          },
        ],
      ]);
    },
    37328: (e, t, r) => {
      function n(e, t, r) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + r + " private field on non-instance",
          );
        return t.get(e);
      }
      function o(e, t) {
        var r = n(e, t, "get");
        return r.get ? r.get.call(e) : r.value;
      }
      function l(e, t, r) {
        var o = n(e, t, "set");
        if (o.set) o.set.call(e, r);
        else {
          if (!o.writable)
            throw TypeError("attempted to set read only private field");
          o.value = r;
        }
        return r;
      }
      r.d(t, { N: () => p });
      var a,
        i = r(12115),
        u = r(46081),
        s = r(6101),
        d = r(99708),
        c = r(95155);
      function p(e) {
        let t = e + "CollectionProvider",
          [r, n] = (0, u.A)(t),
          [o, l] = r(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          a = (e) => {
            let { scope: t, children: r } = e,
              n = i.useRef(null),
              l = i.useRef(new Map()).current;
            return (0, c.jsx)(o, {
              scope: t,
              itemMap: l,
              collectionRef: n,
              children: r,
            });
          };
        a.displayName = t;
        let p = e + "CollectionSlot",
          f = (0, d.TL)(p),
          v = i.forwardRef((e, t) => {
            let { scope: r, children: n } = e,
              o = l(p, r),
              a = (0, s.s)(t, o.collectionRef);
            return (0, c.jsx)(f, { ref: a, children: n });
          });
        v.displayName = p;
        let m = e + "CollectionItemSlot",
          h = "data-radix-collection-item",
          w = (0, d.TL)(m),
          g = i.forwardRef((e, t) => {
            let { scope: r, children: n, ...o } = e,
              a = i.useRef(null),
              u = (0, s.s)(t, a),
              d = l(m, r);
            return (
              i.useEffect(
                () => (
                  d.itemMap.set(a, { ref: a, ...o }),
                  () => void d.itemMap.delete(a)
                ),
              ),
              (0, c.jsx)(w, { ...{ [h]: "" }, ref: u, children: n })
            );
          });
        return (
          (g.displayName = m),
          [
            { Provider: a, Slot: v, ItemSlot: g },
            function (t) {
              let r = l(e + "CollectionConsumer", t);
              return i.useCallback(() => {
                let e = r.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll("[".concat(h, "]")));
                return Array.from(r.itemMap.values()).sort(
                  (e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current),
                );
              }, [r.collectionRef, r.itemMap]);
            },
            n,
          ]
        );
      }
      var f = new WeakMap();
      function v(e, t) {
        if ("at" in Array.prototype) return Array.prototype.at.call(e, t);
        let r = (function (e, t) {
          let r = e.length,
            n = m(t),
            o = n >= 0 ? n : r + n;
          return o < 0 || o >= r ? -1 : o;
        })(e, t);
        return -1 === r ? void 0 : e[r];
      }
      function m(e) {
        return e != e || 0 === e ? 0 : Math.trunc(e);
      }
      a = new WeakMap();
    },
    47863: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("chevron-up", [
        ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
      ]);
    },
    48698: (e, t, r) => {
      r.d(t, {
        UC: () => eq,
        q7: () => ez,
        ZL: () => eW,
        bL: () => eV,
        l9: () => eU,
      });
      var n = r(12115),
        o = r(85185),
        l = r(6101),
        a = r(46081),
        i = r(5845),
        u = r(63655),
        s = r(37328),
        d = r(94315),
        c = r(19178),
        p = r(92293),
        f = r(25519),
        v = r(61285),
        m = r(38795),
        h = r(34378),
        w = r(28905),
        g = r(89196),
        x = r(99708),
        y = r(39033),
        b = r(38168),
        C = r(93795),
        S = r(95155),
        R = ["Enter", " "],
        j = ["ArrowUp", "PageDown", "End"],
        M = ["ArrowDown", "PageUp", "Home", ...j],
        k = { ltr: [...R, "ArrowRight"], rtl: [...R, "ArrowLeft"] },
        D = { ltr: ["ArrowLeft"], rtl: ["ArrowRight"] },
        E = "Menu",
        [T, I, P] = (0, s.N)(E),
        [N, L] = (0, a.A)(E, [P, m.Bk, g.RG]),
        A = (0, m.Bk)(),
        _ = (0, g.RG)(),
        [F, O] = N(E),
        [G, K] = N(E),
        B = (e) => {
          let {
              __scopeMenu: t,
              open: r = !1,
              children: o,
              dir: l,
              onOpenChange: a,
              modal: i = !0,
            } = e,
            u = A(t),
            [s, c] = n.useState(null),
            p = n.useRef(!1),
            f = (0, y.c)(a),
            v = (0, d.jH)(l);
          return (
            n.useEffect(() => {
              let e = () => {
                  ((p.current = !0),
                    document.addEventListener("pointerdown", t, {
                      capture: !0,
                      once: !0,
                    }),
                    document.addEventListener("pointermove", t, {
                      capture: !0,
                      once: !0,
                    }));
                },
                t = () => (p.current = !1);
              return (
                document.addEventListener("keydown", e, { capture: !0 }),
                () => {
                  (document.removeEventListener("keydown", e, { capture: !0 }),
                    document.removeEventListener("pointerdown", t, {
                      capture: !0,
                    }),
                    document.removeEventListener("pointermove", t, {
                      capture: !0,
                    }));
                }
              );
            }, []),
            (0, S.jsx)(m.bL, {
              ...u,
              children: (0, S.jsx)(F, {
                scope: t,
                open: r,
                onOpenChange: f,
                content: s,
                onContentChange: c,
                children: (0, S.jsx)(G, {
                  scope: t,
                  onClose: n.useCallback(() => f(!1), [f]),
                  isUsingKeyboardRef: p,
                  dir: v,
                  modal: i,
                  children: o,
                }),
              }),
            })
          );
        };
      B.displayName = E;
      var H = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e,
          o = A(r);
        return (0, S.jsx)(m.Mz, { ...o, ...n, ref: t });
      });
      H.displayName = "MenuAnchor";
      var V = "MenuPortal",
        [U, W] = N(V, { forceMount: void 0 }),
        q = (e) => {
          let { __scopeMenu: t, forceMount: r, children: n, container: o } = e,
            l = O(V, t);
          return (0, S.jsx)(U, {
            scope: t,
            forceMount: r,
            children: (0, S.jsx)(w.C, {
              present: r || l.open,
              children: (0, S.jsx)(h.Z, {
                asChild: !0,
                container: o,
                children: n,
              }),
            }),
          });
        };
      q.displayName = V;
      var z = "MenuContent",
        [X, Z] = N(z),
        Y = n.forwardRef((e, t) => {
          let r = W(z, e.__scopeMenu),
            { forceMount: n = r.forceMount, ...o } = e,
            l = O(z, e.__scopeMenu),
            a = K(z, e.__scopeMenu);
          return (0, S.jsx)(T.Provider, {
            scope: e.__scopeMenu,
            children: (0, S.jsx)(w.C, {
              present: n || l.open,
              children: (0, S.jsx)(T.Slot, {
                scope: e.__scopeMenu,
                children: a.modal
                  ? (0, S.jsx)(Q, { ...o, ref: t })
                  : (0, S.jsx)(J, { ...o, ref: t }),
              }),
            }),
          });
        }),
        Q = n.forwardRef((e, t) => {
          let r = O(z, e.__scopeMenu),
            a = n.useRef(null),
            i = (0, l.s)(t, a);
          return (
            n.useEffect(() => {
              let e = a.current;
              if (e) return (0, b.Eq)(e);
            }, []),
            (0, S.jsx)(ee, {
              ...e,
              ref: i,
              trapFocus: r.open,
              disableOutsidePointerEvents: r.open,
              disableOutsideScroll: !0,
              onFocusOutside: (0, o.m)(
                e.onFocusOutside,
                (e) => e.preventDefault(),
                { checkForDefaultPrevented: !1 },
              ),
              onDismiss: () => r.onOpenChange(!1),
            })
          );
        }),
        J = n.forwardRef((e, t) => {
          let r = O(z, e.__scopeMenu);
          return (0, S.jsx)(ee, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            disableOutsideScroll: !1,
            onDismiss: () => r.onOpenChange(!1),
          });
        }),
        $ = (0, x.TL)("MenuContent.ScrollLock"),
        ee = n.forwardRef((e, t) => {
          let {
              __scopeMenu: r,
              loop: a = !1,
              trapFocus: i,
              onOpenAutoFocus: u,
              onCloseAutoFocus: s,
              disableOutsidePointerEvents: d,
              onEntryFocus: v,
              onEscapeKeyDown: h,
              onPointerDownOutside: w,
              onFocusOutside: x,
              onInteractOutside: y,
              onDismiss: b,
              disableOutsideScroll: R,
              ...k
            } = e,
            D = O(z, r),
            E = K(z, r),
            T = A(r),
            P = _(r),
            N = I(r),
            [L, F] = n.useState(null),
            G = n.useRef(null),
            B = (0, l.s)(t, G, D.onContentChange),
            H = n.useRef(0),
            V = n.useRef(""),
            U = n.useRef(0),
            W = n.useRef(null),
            q = n.useRef("right"),
            Z = n.useRef(0),
            Y = R ? C.A : n.Fragment,
            Q = (e) => {
              var t, r;
              let n = V.current + e,
                o = N().filter((e) => !e.disabled),
                l = document.activeElement,
                a =
                  null == (t = o.find((e) => e.ref.current === l))
                    ? void 0
                    : t.textValue,
                i = (function (e, t, r) {
                  var n;
                  let o =
                      t.length > 1 && Array.from(t).every((e) => e === t[0])
                        ? t[0]
                        : t,
                    l = r ? e.indexOf(r) : -1,
                    a =
                      ((n = Math.max(l, 0)),
                      e.map((t, r) => e[(n + r) % e.length]));
                  1 === o.length && (a = a.filter((e) => e !== r));
                  let i = a.find((e) =>
                    e.toLowerCase().startsWith(o.toLowerCase()),
                  );
                  return i !== r ? i : void 0;
                })(
                  o.map((e) => e.textValue),
                  n,
                  a,
                ),
                u =
                  null == (r = o.find((e) => e.textValue === i))
                    ? void 0
                    : r.ref.current;
              (!(function e(t) {
                ((V.current = t),
                  window.clearTimeout(H.current),
                  "" !== t &&
                    (H.current = window.setTimeout(() => e(""), 1e3)));
              })(n),
                u && setTimeout(() => u.focus()));
            };
          (n.useEffect(() => () => window.clearTimeout(H.current), []),
            (0, p.Oh)());
          let J = n.useCallback((e) => {
            var t, r;
            return (
              q.current === (null == (t = W.current) ? void 0 : t.side) &&
              (function (e, t) {
                return (
                  !!t &&
                  (function (e, t) {
                    let { x: r, y: n } = e,
                      o = !1;
                    for (let e = 0, l = t.length - 1; e < t.length; l = e++) {
                      let a = t[e],
                        i = t[l],
                        u = a.x,
                        s = a.y,
                        d = i.x,
                        c = i.y;
                      s > n != c > n &&
                        r < ((d - u) * (n - s)) / (c - s) + u &&
                        (o = !o);
                    }
                    return o;
                  })({ x: e.clientX, y: e.clientY }, t)
                );
              })(e, null == (r = W.current) ? void 0 : r.area)
            );
          }, []);
          return (0, S.jsx)(X, {
            scope: r,
            searchRef: V,
            onItemEnter: n.useCallback(
              (e) => {
                J(e) && e.preventDefault();
              },
              [J],
            ),
            onItemLeave: n.useCallback(
              (e) => {
                var t;
                J(e) || (null == (t = G.current) || t.focus(), F(null));
              },
              [J],
            ),
            onTriggerLeave: n.useCallback(
              (e) => {
                J(e) && e.preventDefault();
              },
              [J],
            ),
            pointerGraceTimerRef: U,
            onPointerGraceIntentChange: n.useCallback((e) => {
              W.current = e;
            }, []),
            children: (0, S.jsx)(Y, {
              ...(R ? { as: $, allowPinchZoom: !0 } : void 0),
              children: (0, S.jsx)(f.n, {
                asChild: !0,
                trapped: i,
                onMountAutoFocus: (0, o.m)(u, (e) => {
                  var t;
                  (e.preventDefault(),
                    null == (t = G.current) || t.focus({ preventScroll: !0 }));
                }),
                onUnmountAutoFocus: s,
                children: (0, S.jsx)(c.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: d,
                  onEscapeKeyDown: h,
                  onPointerDownOutside: w,
                  onFocusOutside: x,
                  onInteractOutside: y,
                  onDismiss: b,
                  children: (0, S.jsx)(g.bL, {
                    asChild: !0,
                    ...P,
                    dir: E.dir,
                    orientation: "vertical",
                    loop: a,
                    currentTabStopId: L,
                    onCurrentTabStopIdChange: F,
                    onEntryFocus: (0, o.m)(v, (e) => {
                      E.isUsingKeyboardRef.current || e.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: (0, S.jsx)(m.UC, {
                      "role": "menu",
                      "aria-orientation": "vertical",
                      "data-state": eM(D.open),
                      "data-radix-menu-content": "",
                      "dir": E.dir,
                      ...T,
                      ...k,
                      "ref": B,
                      "style": { outline: "none", ...k.style },
                      "onKeyDown": (0, o.m)(k.onKeyDown, (e) => {
                        let t =
                            e.target.closest("[data-radix-menu-content]") ===
                            e.currentTarget,
                          r = e.ctrlKey || e.altKey || e.metaKey,
                          n = 1 === e.key.length;
                        t &&
                          ("Tab" === e.key && e.preventDefault(),
                          !r && n && Q(e.key));
                        let o = G.current;
                        if (e.target !== o || !M.includes(e.key)) return;
                        e.preventDefault();
                        let l = N()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        (j.includes(e.key) && l.reverse(),
                          (function (e) {
                            let t = document.activeElement;
                            for (let r of e)
                              if (
                                r === t ||
                                (r.focus(), document.activeElement !== t)
                              )
                                return;
                          })(l));
                      }),
                      "onBlur": (0, o.m)(e.onBlur, (e) => {
                        e.currentTarget.contains(e.target) ||
                          (window.clearTimeout(H.current), (V.current = ""));
                      }),
                      "onPointerMove": (0, o.m)(
                        e.onPointerMove,
                        eE((e) => {
                          let t = e.target,
                            r = Z.current !== e.clientX;
                          e.currentTarget.contains(t) &&
                            r &&
                            ((q.current =
                              e.clientX > Z.current ? "right" : "left"),
                            (Z.current = e.clientX));
                        }),
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      Y.displayName = z;
      var et = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e;
        return (0, S.jsx)(u.sG.div, { role: "group", ...n, ref: t });
      });
      et.displayName = "MenuGroup";
      var er = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e;
        return (0, S.jsx)(u.sG.div, { ...n, ref: t });
      });
      er.displayName = "MenuLabel";
      var en = "MenuItem",
        eo = "menu.itemSelect",
        el = n.forwardRef((e, t) => {
          let { disabled: r = !1, onSelect: a, ...i } = e,
            s = n.useRef(null),
            d = K(en, e.__scopeMenu),
            c = Z(en, e.__scopeMenu),
            p = (0, l.s)(t, s),
            f = n.useRef(!1);
          return (0, S.jsx)(ea, {
            ...i,
            ref: p,
            disabled: r,
            onClick: (0, o.m)(e.onClick, () => {
              let e = s.current;
              if (!r && e) {
                let t = new CustomEvent(eo, { bubbles: !0, cancelable: !0 });
                (e.addEventListener(eo, (e) => (null == a ? void 0 : a(e)), {
                  once: !0,
                }),
                  (0, u.hO)(e, t),
                  t.defaultPrevented ? (f.current = !1) : d.onClose());
              }
            }),
            onPointerDown: (t) => {
              var r;
              (null == (r = e.onPointerDown) || r.call(e, t), (f.current = !0));
            },
            onPointerUp: (0, o.m)(e.onPointerUp, (e) => {
              var t;
              f.current || null == (t = e.currentTarget) || t.click();
            }),
            onKeyDown: (0, o.m)(e.onKeyDown, (e) => {
              let t = "" !== c.searchRef.current;
              r ||
                (t && " " === e.key) ||
                (R.includes(e.key) &&
                  (e.currentTarget.click(), e.preventDefault()));
            }),
          });
        });
      el.displayName = en;
      var ea = n.forwardRef((e, t) => {
          let { __scopeMenu: r, disabled: a = !1, textValue: i, ...s } = e,
            d = Z(en, r),
            c = _(r),
            p = n.useRef(null),
            f = (0, l.s)(t, p),
            [v, m] = n.useState(!1),
            [h, w] = n.useState("");
          return (
            n.useEffect(() => {
              let e = p.current;
              if (e) {
                var t;
                w((null != (t = e.textContent) ? t : "").trim());
              }
            }, [s.children]),
            (0, S.jsx)(T.ItemSlot, {
              scope: r,
              disabled: a,
              textValue: null != i ? i : h,
              children: (0, S.jsx)(g.q7, {
                asChild: !0,
                ...c,
                focusable: !a,
                children: (0, S.jsx)(u.sG.div, {
                  "role": "menuitem",
                  "data-highlighted": v ? "" : void 0,
                  "aria-disabled": a || void 0,
                  "data-disabled": a ? "" : void 0,
                  ...s,
                  "ref": f,
                  "onPointerMove": (0, o.m)(
                    e.onPointerMove,
                    eE((e) => {
                      a
                        ? d.onItemLeave(e)
                        : (d.onItemEnter(e),
                          e.defaultPrevented ||
                            e.currentTarget.focus({ preventScroll: !0 }));
                    }),
                  ),
                  "onPointerLeave": (0, o.m)(
                    e.onPointerLeave,
                    eE((e) => d.onItemLeave(e)),
                  ),
                  "onFocus": (0, o.m)(e.onFocus, () => m(!0)),
                  "onBlur": (0, o.m)(e.onBlur, () => m(!1)),
                }),
              }),
            })
          );
        }),
        ei = n.forwardRef((e, t) => {
          let { checked: r = !1, onCheckedChange: n, ...l } = e;
          return (0, S.jsx)(em, {
            scope: e.__scopeMenu,
            checked: r,
            children: (0, S.jsx)(el, {
              "role": "menuitemcheckbox",
              "aria-checked": ek(r) ? "mixed" : r,
              ...l,
              "ref": t,
              "data-state": eD(r),
              "onSelect": (0, o.m)(
                l.onSelect,
                () => (null == n ? void 0 : n(!!ek(r) || !r)),
                { checkForDefaultPrevented: !1 },
              ),
            }),
          });
        });
      ei.displayName = "MenuCheckboxItem";
      var eu = "MenuRadioGroup",
        [es, ed] = N(eu, { value: void 0, onValueChange: () => {} }),
        ec = n.forwardRef((e, t) => {
          let { value: r, onValueChange: n, ...o } = e,
            l = (0, y.c)(n);
          return (0, S.jsx)(es, {
            scope: e.__scopeMenu,
            value: r,
            onValueChange: l,
            children: (0, S.jsx)(et, { ...o, ref: t }),
          });
        });
      ec.displayName = eu;
      var ep = "MenuRadioItem",
        ef = n.forwardRef((e, t) => {
          let { value: r, ...n } = e,
            l = ed(ep, e.__scopeMenu),
            a = r === l.value;
          return (0, S.jsx)(em, {
            scope: e.__scopeMenu,
            checked: a,
            children: (0, S.jsx)(el, {
              "role": "menuitemradio",
              "aria-checked": a,
              ...n,
              "ref": t,
              "data-state": eD(a),
              "onSelect": (0, o.m)(
                n.onSelect,
                () => {
                  var e;
                  return null == (e = l.onValueChange) ? void 0 : e.call(l, r);
                },
                { checkForDefaultPrevented: !1 },
              ),
            }),
          });
        });
      ef.displayName = ep;
      var ev = "MenuItemIndicator",
        [em, eh] = N(ev, { checked: !1 }),
        ew = n.forwardRef((e, t) => {
          let { __scopeMenu: r, forceMount: n, ...o } = e,
            l = eh(ev, r);
          return (0, S.jsx)(w.C, {
            present: n || ek(l.checked) || !0 === l.checked,
            children: (0, S.jsx)(u.sG.span, {
              ...o,
              "ref": t,
              "data-state": eD(l.checked),
            }),
          });
        });
      ew.displayName = ev;
      var eg = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e;
        return (0, S.jsx)(u.sG.div, {
          "role": "separator",
          "aria-orientation": "horizontal",
          ...n,
          "ref": t,
        });
      });
      eg.displayName = "MenuSeparator";
      var ex = n.forwardRef((e, t) => {
        let { __scopeMenu: r, ...n } = e,
          o = A(r);
        return (0, S.jsx)(m.i3, { ...o, ...n, ref: t });
      });
      ex.displayName = "MenuArrow";
      var [ey, eb] = N("MenuSub"),
        eC = "MenuSubTrigger",
        eS = n.forwardRef((e, t) => {
          let r = O(eC, e.__scopeMenu),
            a = K(eC, e.__scopeMenu),
            i = eb(eC, e.__scopeMenu),
            u = Z(eC, e.__scopeMenu),
            s = n.useRef(null),
            { pointerGraceTimerRef: d, onPointerGraceIntentChange: c } = u,
            p = { __scopeMenu: e.__scopeMenu },
            f = n.useCallback(() => {
              (s.current && window.clearTimeout(s.current), (s.current = null));
            }, []);
          return (
            n.useEffect(() => f, [f]),
            n.useEffect(() => {
              let e = d.current;
              return () => {
                (window.clearTimeout(e), c(null));
              };
            }, [d, c]),
            (0, S.jsx)(H, {
              asChild: !0,
              ...p,
              children: (0, S.jsx)(ea, {
                "id": i.triggerId,
                "aria-haspopup": "menu",
                "aria-expanded": r.open,
                "aria-controls": i.contentId,
                "data-state": eM(r.open),
                ...e,
                "ref": (0, l.t)(t, i.onTriggerChange),
                "onClick": (t) => {
                  var n;
                  (null == (n = e.onClick) || n.call(e, t),
                    e.disabled ||
                      t.defaultPrevented ||
                      (t.currentTarget.focus(), r.open || r.onOpenChange(!0)));
                },
                "onPointerMove": (0, o.m)(
                  e.onPointerMove,
                  eE((t) => {
                    (u.onItemEnter(t),
                      !t.defaultPrevented &&
                        (e.disabled ||
                          r.open ||
                          s.current ||
                          (u.onPointerGraceIntentChange(null),
                          (s.current = window.setTimeout(() => {
                            (r.onOpenChange(!0), f());
                          }, 100)))));
                  }),
                ),
                "onPointerLeave": (0, o.m)(
                  e.onPointerLeave,
                  eE((e) => {
                    var t, n;
                    f();
                    let o =
                      null == (t = r.content)
                        ? void 0
                        : t.getBoundingClientRect();
                    if (o) {
                      let t = null == (n = r.content) ? void 0 : n.dataset.side,
                        l = "right" === t,
                        a = o[l ? "left" : "right"],
                        i = o[l ? "right" : "left"];
                      (u.onPointerGraceIntentChange({
                        area: [
                          { x: e.clientX + (l ? -5 : 5), y: e.clientY },
                          { x: a, y: o.top },
                          { x: i, y: o.top },
                          { x: i, y: o.bottom },
                          { x: a, y: o.bottom },
                        ],
                        side: t,
                      }),
                        window.clearTimeout(d.current),
                        (d.current = window.setTimeout(
                          () => u.onPointerGraceIntentChange(null),
                          300,
                        )));
                    } else {
                      if ((u.onTriggerLeave(e), e.defaultPrevented)) return;
                      u.onPointerGraceIntentChange(null);
                    }
                  }),
                ),
                "onKeyDown": (0, o.m)(e.onKeyDown, (t) => {
                  let n = "" !== u.searchRef.current;
                  if (
                    !e.disabled &&
                    (!n || " " !== t.key) &&
                    k[a.dir].includes(t.key)
                  ) {
                    var o;
                    (r.onOpenChange(!0),
                      null == (o = r.content) || o.focus(),
                      t.preventDefault());
                  }
                }),
              }),
            })
          );
        });
      eS.displayName = eC;
      var eR = "MenuSubContent",
        ej = n.forwardRef((e, t) => {
          let r = W(z, e.__scopeMenu),
            { forceMount: a = r.forceMount, ...i } = e,
            u = O(z, e.__scopeMenu),
            s = K(z, e.__scopeMenu),
            d = eb(eR, e.__scopeMenu),
            c = n.useRef(null),
            p = (0, l.s)(t, c);
          return (0, S.jsx)(T.Provider, {
            scope: e.__scopeMenu,
            children: (0, S.jsx)(w.C, {
              present: a || u.open,
              children: (0, S.jsx)(T.Slot, {
                scope: e.__scopeMenu,
                children: (0, S.jsx)(ee, {
                  "id": d.contentId,
                  "aria-labelledby": d.triggerId,
                  ...i,
                  "ref": p,
                  "align": "start",
                  "side": "rtl" === s.dir ? "left" : "right",
                  "disableOutsidePointerEvents": !1,
                  "disableOutsideScroll": !1,
                  "trapFocus": !1,
                  "onOpenAutoFocus": (e) => {
                    var t;
                    (s.isUsingKeyboardRef.current &&
                      (null == (t = c.current) || t.focus()),
                      e.preventDefault());
                  },
                  "onCloseAutoFocus": (e) => e.preventDefault(),
                  "onFocusOutside": (0, o.m)(e.onFocusOutside, (e) => {
                    e.target !== d.trigger && u.onOpenChange(!1);
                  }),
                  "onEscapeKeyDown": (0, o.m)(e.onEscapeKeyDown, (e) => {
                    (s.onClose(), e.preventDefault());
                  }),
                  "onKeyDown": (0, o.m)(e.onKeyDown, (e) => {
                    let t = e.currentTarget.contains(e.target),
                      r = D[s.dir].includes(e.key);
                    if (t && r) {
                      var n;
                      (u.onOpenChange(!1),
                        null == (n = d.trigger) || n.focus(),
                        e.preventDefault());
                    }
                  }),
                }),
              }),
            }),
          });
        });
      function eM(e) {
        return e ? "open" : "closed";
      }
      function ek(e) {
        return "indeterminate" === e;
      }
      function eD(e) {
        return ek(e) ? "indeterminate" : e ? "checked" : "unchecked";
      }
      function eE(e) {
        return (t) => ("mouse" === t.pointerType ? e(t) : void 0);
      }
      ej.displayName = eR;
      var eT = "DropdownMenu",
        [eI, eP] = (0, a.A)(eT, [L]),
        eN = L(),
        [eL, eA] = eI(eT),
        e_ = (e) => {
          let {
              __scopeDropdownMenu: t,
              children: r,
              dir: o,
              open: l,
              defaultOpen: a,
              onOpenChange: u,
              modal: s = !0,
            } = e,
            d = eN(t),
            c = n.useRef(null),
            [p, f] = (0, i.i)({
              prop: l,
              defaultProp: null != a && a,
              onChange: u,
              caller: eT,
            });
          return (0, S.jsx)(eL, {
            scope: t,
            triggerId: (0, v.B)(),
            triggerRef: c,
            contentId: (0, v.B)(),
            open: p,
            onOpenChange: f,
            onOpenToggle: n.useCallback(() => f((e) => !e), [f]),
            modal: s,
            children: (0, S.jsx)(B, {
              ...d,
              open: p,
              onOpenChange: f,
              dir: o,
              modal: s,
              children: r,
            }),
          });
        };
      e_.displayName = eT;
      var eF = "DropdownMenuTrigger",
        eO = n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, disabled: n = !1, ...a } = e,
            i = eA(eF, r),
            s = eN(r);
          return (0, S.jsx)(H, {
            asChild: !0,
            ...s,
            children: (0, S.jsx)(u.sG.button, {
              "type": "button",
              "id": i.triggerId,
              "aria-haspopup": "menu",
              "aria-expanded": i.open,
              "aria-controls": i.open ? i.contentId : void 0,
              "data-state": i.open ? "open" : "closed",
              "data-disabled": n ? "" : void 0,
              "disabled": n,
              ...a,
              "ref": (0, l.t)(t, i.triggerRef),
              "onPointerDown": (0, o.m)(e.onPointerDown, (e) => {
                !n &&
                  0 === e.button &&
                  !1 === e.ctrlKey &&
                  (i.onOpenToggle(), i.open || e.preventDefault());
              }),
              "onKeyDown": (0, o.m)(e.onKeyDown, (e) => {
                !n &&
                  (["Enter", " "].includes(e.key) && i.onOpenToggle(),
                  "ArrowDown" === e.key && i.onOpenChange(!0),
                  ["Enter", " ", "ArrowDown"].includes(e.key) &&
                    e.preventDefault());
              }),
            }),
          });
        });
      eO.displayName = eF;
      var eG = (e) => {
        let { __scopeDropdownMenu: t, ...r } = e,
          n = eN(t);
        return (0, S.jsx)(q, { ...n, ...r });
      };
      eG.displayName = "DropdownMenuPortal";
      var eK = "DropdownMenuContent",
        eB = n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...l } = e,
            a = eA(eK, r),
            i = eN(r),
            u = n.useRef(!1);
          return (0, S.jsx)(Y, {
            "id": a.contentId,
            "aria-labelledby": a.triggerId,
            ...i,
            ...l,
            "ref": t,
            "onCloseAutoFocus": (0, o.m)(e.onCloseAutoFocus, (e) => {
              var t;
              (u.current || null == (t = a.triggerRef.current) || t.focus(),
                (u.current = !1),
                e.preventDefault());
            }),
            "onInteractOutside": (0, o.m)(e.onInteractOutside, (e) => {
              let t = e.detail.originalEvent,
                r = 0 === t.button && !0 === t.ctrlKey,
                n = 2 === t.button || r;
              (!a.modal || n) && (u.current = !0);
            }),
            "style": {
              ...e.style,
              "--radix-dropdown-menu-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-dropdown-menu-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-dropdown-menu-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-dropdown-menu-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-dropdown-menu-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          });
        });
      ((eB.displayName = eK),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eN(r);
          return (0, S.jsx)(et, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuGroup"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eN(r);
          return (0, S.jsx)(er, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuLabel"));
      var eH = n.forwardRef((e, t) => {
        let { __scopeDropdownMenu: r, ...n } = e,
          o = eN(r);
        return (0, S.jsx)(el, { ...o, ...n, ref: t });
      });
      ((eH.displayName = "DropdownMenuItem"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eN(r);
          return (0, S.jsx)(ei, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuCheckboxItem"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eN(r);
          return (0, S.jsx)(ec, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuRadioGroup"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eN(r);
          return (0, S.jsx)(ef, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuRadioItem"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eN(r);
          return (0, S.jsx)(ew, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuItemIndicator"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eN(r);
          return (0, S.jsx)(eg, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuSeparator"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eN(r);
          return (0, S.jsx)(ex, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuArrow"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eN(r);
          return (0, S.jsx)(eS, { ...o, ...n, ref: t });
        }).displayName = "DropdownMenuSubTrigger"),
        (n.forwardRef((e, t) => {
          let { __scopeDropdownMenu: r, ...n } = e,
            o = eN(r);
          return (0, S.jsx)(ej, {
            ...o,
            ...n,
            ref: t,
            style: {
              ...e.style,
              "--radix-dropdown-menu-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-dropdown-menu-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-dropdown-menu-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-dropdown-menu-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-dropdown-menu-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          });
        }).displayName = "DropdownMenuSubContent"));
      var eV = e_,
        eU = eO,
        eW = eG,
        eq = eB,
        ez = eH;
    },
    49033: (e, t, r) => {
      e.exports = r(22436);
    },
    54011: (e, t, r) => {
      r.d(t, { H4: () => C, bL: () => b });
      var n = r(12115),
        o = r(46081),
        l = r(39033),
        a = r(52712),
        i = r(63655),
        u = r(49033);
      function s() {
        return () => {};
      }
      var d = r(95155),
        c = "Avatar",
        [p, f] = (0, o.A)(c),
        [v, m] = p(c),
        h = n.forwardRef((e, t) => {
          let { __scopeAvatar: r, ...o } = e,
            [l, a] = n.useState("idle");
          return (0, d.jsx)(v, {
            scope: r,
            imageLoadingStatus: l,
            onImageLoadingStatusChange: a,
            children: (0, d.jsx)(i.sG.span, { ...o, ref: t }),
          });
        });
      h.displayName = c;
      var w = "AvatarImage";
      n.forwardRef((e, t) => {
        let {
            __scopeAvatar: r,
            src: o,
            onLoadingStatusChange: c = () => {},
            ...p
          } = e,
          f = m(w, r),
          v = (function (e, t) {
            let { referrerPolicy: r, crossOrigin: o } = t,
              l = (0, u.useSyncExternalStore)(
                s,
                () => !0,
                () => !1,
              ),
              i = n.useRef(null),
              d = l
                ? (i.current || (i.current = new window.Image()), i.current)
                : null,
              [c, p] = n.useState(() => y(d, e));
            return (
              (0, a.N)(() => {
                p(y(d, e));
              }, [d, e]),
              (0, a.N)(() => {
                let e = (e) => () => {
                  p(e);
                };
                if (!d) return;
                let t = e("loaded"),
                  n = e("error");
                return (
                  d.addEventListener("load", t),
                  d.addEventListener("error", n),
                  r && (d.referrerPolicy = r),
                  "string" == typeof o && (d.crossOrigin = o),
                  () => {
                    (d.removeEventListener("load", t),
                      d.removeEventListener("error", n));
                  }
                );
              }, [d, o, r]),
              c
            );
          })(o, p),
          h = (0, l.c)((e) => {
            (c(e), f.onImageLoadingStatusChange(e));
          });
        return (
          (0, a.N)(() => {
            "idle" !== v && h(v);
          }, [v, h]),
          "loaded" === v ? (0, d.jsx)(i.sG.img, { ...p, ref: t, src: o }) : null
        );
      }).displayName = w;
      var g = "AvatarFallback",
        x = n.forwardRef((e, t) => {
          let { __scopeAvatar: r, delayMs: o, ...l } = e,
            a = m(g, r),
            [u, s] = n.useState(void 0 === o);
          return (
            n.useEffect(() => {
              if (void 0 !== o) {
                let e = window.setTimeout(() => s(!0), o);
                return () => window.clearTimeout(e);
              }
            }, [o]),
            u && "loaded" !== a.imageLoadingStatus
              ? (0, d.jsx)(i.sG.span, { ...l, ref: t })
              : null
          );
        });
      function y(e, t) {
        return e
          ? t
            ? (e.src !== t && (e.src = t),
              e.complete && e.naturalWidth > 0 ? "loaded" : "loading")
            : "error"
          : "idle";
      }
      x.displayName = g;
      var b = h,
        C = x;
    },
    66474: (e, t, r) => {
      r.d(t, { A: () => n });
      let n = (0, r(19946).A)("chevron-down", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    89196: (e, t, r) => {
      r.d(t, { RG: () => b, bL: () => T, q7: () => I });
      var n = r(12115),
        o = r(85185),
        l = r(37328),
        a = r(6101),
        i = r(46081),
        u = r(61285),
        s = r(63655),
        d = r(39033),
        c = r(5845),
        p = r(94315),
        f = r(95155),
        v = "rovingFocusGroup.onEntryFocus",
        m = { bubbles: !1, cancelable: !0 },
        h = "RovingFocusGroup",
        [w, g, x] = (0, l.N)(h),
        [y, b] = (0, i.A)(h, [x]),
        [C, S] = y(h),
        R = n.forwardRef((e, t) =>
          (0, f.jsx)(w.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: (0, f.jsx)(w.Slot, {
              scope: e.__scopeRovingFocusGroup,
              children: (0, f.jsx)(j, { ...e, ref: t }),
            }),
          }),
        );
      R.displayName = h;
      var j = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              orientation: l,
              loop: i = !1,
              dir: u,
              currentTabStopId: w,
              defaultCurrentTabStopId: x,
              onCurrentTabStopIdChange: y,
              onEntryFocus: b,
              preventScrollOnEntryFocus: S = !1,
              ...R
            } = e,
            j = n.useRef(null),
            M = (0, a.s)(t, j),
            k = (0, p.jH)(u),
            [D, T] = (0, c.i)({
              prop: w,
              defaultProp: null != x ? x : null,
              onChange: y,
              caller: h,
            }),
            [I, P] = n.useState(!1),
            N = (0, d.c)(b),
            L = g(r),
            A = n.useRef(!1),
            [_, F] = n.useState(0);
          return (
            n.useEffect(() => {
              let e = j.current;
              if (e)
                return (
                  e.addEventListener(v, N),
                  () => e.removeEventListener(v, N)
                );
            }, [N]),
            (0, f.jsx)(C, {
              scope: r,
              orientation: l,
              dir: k,
              loop: i,
              currentTabStopId: D,
              onItemFocus: n.useCallback((e) => T(e), [T]),
              onItemShiftTab: n.useCallback(() => P(!0), []),
              onFocusableItemAdd: n.useCallback(() => F((e) => e + 1), []),
              onFocusableItemRemove: n.useCallback(() => F((e) => e - 1), []),
              children: (0, f.jsx)(s.sG.div, {
                "tabIndex": I || 0 === _ ? -1 : 0,
                "data-orientation": l,
                ...R,
                "ref": M,
                "style": { outline: "none", ...e.style },
                "onMouseDown": (0, o.m)(e.onMouseDown, () => {
                  A.current = !0;
                }),
                "onFocus": (0, o.m)(e.onFocus, (e) => {
                  let t = !A.current;
                  if (e.target === e.currentTarget && t && !I) {
                    let t = new CustomEvent(v, m);
                    if (
                      (e.currentTarget.dispatchEvent(t), !t.defaultPrevented)
                    ) {
                      let e = L().filter((e) => e.focusable);
                      E(
                        [
                          e.find((e) => e.active),
                          e.find((e) => e.id === D),
                          ...e,
                        ]
                          .filter(Boolean)
                          .map((e) => e.ref.current),
                        S,
                      );
                    }
                  }
                  A.current = !1;
                }),
                "onBlur": (0, o.m)(e.onBlur, () => P(!1)),
              }),
            })
          );
        }),
        M = "RovingFocusGroupItem",
        k = n.forwardRef((e, t) => {
          let {
              __scopeRovingFocusGroup: r,
              focusable: l = !0,
              active: a = !1,
              tabStopId: i,
              children: d,
              ...c
            } = e,
            p = (0, u.B)(),
            v = i || p,
            m = S(M, r),
            h = m.currentTabStopId === v,
            x = g(r),
            {
              onFocusableItemAdd: y,
              onFocusableItemRemove: b,
              currentTabStopId: C,
            } = m;
          return (
            n.useEffect(() => {
              if (l) return (y(), () => b());
            }, [l, y, b]),
            (0, f.jsx)(w.ItemSlot, {
              scope: r,
              id: v,
              focusable: l,
              active: a,
              children: (0, f.jsx)(s.sG.span, {
                "tabIndex": h ? 0 : -1,
                "data-orientation": m.orientation,
                ...c,
                "ref": t,
                "onMouseDown": (0, o.m)(e.onMouseDown, (e) => {
                  l ? m.onItemFocus(v) : e.preventDefault();
                }),
                "onFocus": (0, o.m)(e.onFocus, () => m.onItemFocus(v)),
                "onKeyDown": (0, o.m)(e.onKeyDown, (e) => {
                  if ("Tab" === e.key && e.shiftKey)
                    return void m.onItemShiftTab();
                  if (e.target !== e.currentTarget) return;
                  let t = (function (e, t, r) {
                    var n;
                    let o =
                      ((n = e.key),
                      "rtl" !== r
                        ? n
                        : "ArrowLeft" === n
                          ? "ArrowRight"
                          : "ArrowRight" === n
                            ? "ArrowLeft"
                            : n);
                    if (
                      !(
                        "vertical" === t &&
                        ["ArrowLeft", "ArrowRight"].includes(o)
                      ) &&
                      !(
                        "horizontal" === t &&
                        ["ArrowUp", "ArrowDown"].includes(o)
                      )
                    )
                      return D[o];
                  })(e, m.orientation, m.dir);
                  if (void 0 !== t) {
                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey)
                      return;
                    e.preventDefault();
                    let r = x()
                      .filter((e) => e.focusable)
                      .map((e) => e.ref.current);
                    if ("last" === t) r.reverse();
                    else if ("prev" === t || "next" === t) {
                      "prev" === t && r.reverse();
                      let n = r.indexOf(e.currentTarget);
                      r = m.loop
                        ? (function (e, t) {
                            return e.map((r, n) => e[(t + n) % e.length]);
                          })(r, n + 1)
                        : r.slice(n + 1);
                    }
                    setTimeout(() => E(r));
                  }
                }),
                "children":
                  "function" == typeof d
                    ? d({ isCurrentTabStop: h, hasTabStop: null != C })
                    : d,
              }),
            })
          );
        });
      k.displayName = M;
      var D = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function E(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = document.activeElement;
        for (let n of e)
          if (
            n === r ||
            (n.focus({ preventScroll: t }), document.activeElement !== r)
          )
            return;
      }
      var T = R,
        I = k;
    },
    93081: (e, t, r) => {
      r.d(t, {
        UC: () => eI,
        In: () => eE,
        q7: () => eN,
        VF: () => eA,
        p4: () => eL,
        ZL: () => eT,
        bL: () => eM,
        wn: () => eF,
        PP: () => e_,
        l9: () => ek,
        WT: () => eD,
        LM: () => eP,
      });
      var n = r(12115),
        o = r(47650);
      function l(e, [t, r]) {
        return Math.min(r, Math.max(t, e));
      }
      var a = r(85185),
        i = r(37328),
        u = r(6101),
        s = r(46081),
        d = r(94315),
        c = r(19178),
        p = r(92293),
        f = r(25519),
        v = r(61285),
        m = r(38795),
        h = r(34378),
        w = r(63655),
        g = r(99708),
        x = r(39033),
        y = r(5845),
        b = r(52712),
        C = r(2564),
        S = r(38168),
        R = r(93795),
        j = r(95155),
        M = [" ", "Enter", "ArrowUp", "ArrowDown"],
        k = [" ", "Enter"],
        D = "Select",
        [E, T, I] = (0, i.N)(D),
        [P, N] = (0, s.A)(D, [I, m.Bk]),
        L = (0, m.Bk)(),
        [A, _] = P(D),
        [F, O] = P(D),
        G = (e) => {
          let {
              __scopeSelect: t,
              children: r,
              open: o,
              defaultOpen: l,
              onOpenChange: a,
              value: i,
              defaultValue: u,
              onValueChange: s,
              dir: c,
              name: p,
              autoComplete: f,
              disabled: h,
              required: w,
              form: g,
            } = e,
            x = L(t),
            [b, C] = n.useState(null),
            [S, R] = n.useState(null),
            [M, k] = n.useState(!1),
            T = (0, d.jH)(c),
            [I, P] = (0, y.i)({
              prop: o,
              defaultProp: null != l && l,
              onChange: a,
              caller: D,
            }),
            [N, _] = (0, y.i)({
              prop: i,
              defaultProp: u,
              onChange: s,
              caller: D,
            }),
            O = n.useRef(null),
            G = !b || g || !!b.closest("form"),
            [K, B] = n.useState(new Set()),
            H = Array.from(K)
              .map((e) => e.props.value)
              .join(";");
          return (0, j.jsx)(m.bL, {
            ...x,
            children: (0, j.jsxs)(A, {
              required: w,
              scope: t,
              trigger: b,
              onTriggerChange: C,
              valueNode: S,
              onValueNodeChange: R,
              valueNodeHasChildren: M,
              onValueNodeHasChildrenChange: k,
              contentId: (0, v.B)(),
              value: N,
              onValueChange: _,
              open: I,
              onOpenChange: P,
              dir: T,
              triggerPointerDownPosRef: O,
              disabled: h,
              children: [
                (0, j.jsx)(E.Provider, {
                  scope: t,
                  children: (0, j.jsx)(F, {
                    scope: e.__scopeSelect,
                    onNativeOptionAdd: n.useCallback((e) => {
                      B((t) => new Set(t).add(e));
                    }, []),
                    onNativeOptionRemove: n.useCallback((e) => {
                      B((t) => {
                        let r = new Set(t);
                        return (r.delete(e), r);
                      });
                    }, []),
                    children: r,
                  }),
                }),
                G
                  ? (0, j.jsxs)(
                      eC,
                      {
                        "aria-hidden": !0,
                        "required": w,
                        "tabIndex": -1,
                        "name": p,
                        "autoComplete": f,
                        "value": N,
                        "onChange": (e) => _(e.target.value),
                        "disabled": h,
                        "form": g,
                        "children": [
                          void 0 === N
                            ? (0, j.jsx)("option", { value: "" })
                            : null,
                          Array.from(K),
                        ],
                      },
                      H,
                    )
                  : null,
              ],
            }),
          });
        };
      G.displayName = D;
      var K = "SelectTrigger",
        B = n.forwardRef((e, t) => {
          let { __scopeSelect: r, disabled: o = !1, ...l } = e,
            i = L(r),
            s = _(K, r),
            d = s.disabled || o,
            c = (0, u.s)(t, s.onTriggerChange),
            p = T(r),
            f = n.useRef("touch"),
            [v, h, g] = eR((e) => {
              let t = p().filter((e) => !e.disabled),
                r = t.find((e) => e.value === s.value),
                n = ej(t, e, r);
              void 0 !== n && s.onValueChange(n.value);
            }),
            x = (e) => {
              (d || (s.onOpenChange(!0), g()),
                e &&
                  (s.triggerPointerDownPosRef.current = {
                    x: Math.round(e.pageX),
                    y: Math.round(e.pageY),
                  }));
            };
          return (0, j.jsx)(m.Mz, {
            asChild: !0,
            ...i,
            children: (0, j.jsx)(w.sG.button, {
              "type": "button",
              "role": "combobox",
              "aria-controls": s.contentId,
              "aria-expanded": s.open,
              "aria-required": s.required,
              "aria-autocomplete": "none",
              "dir": s.dir,
              "data-state": s.open ? "open" : "closed",
              "disabled": d,
              "data-disabled": d ? "" : void 0,
              "data-placeholder": eS(s.value) ? "" : void 0,
              ...l,
              "ref": c,
              "onClick": (0, a.m)(l.onClick, (e) => {
                (e.currentTarget.focus(), "mouse" !== f.current && x(e));
              }),
              "onPointerDown": (0, a.m)(l.onPointerDown, (e) => {
                f.current = e.pointerType;
                let t = e.target;
                (t.hasPointerCapture(e.pointerId) &&
                  t.releasePointerCapture(e.pointerId),
                  0 === e.button &&
                    !1 === e.ctrlKey &&
                    "mouse" === e.pointerType &&
                    (x(e), e.preventDefault()));
              }),
              "onKeyDown": (0, a.m)(l.onKeyDown, (e) => {
                let t = "" !== v.current;
                (e.ctrlKey ||
                  e.altKey ||
                  e.metaKey ||
                  1 !== e.key.length ||
                  h(e.key),
                  (!t || " " !== e.key) &&
                    M.includes(e.key) &&
                    (x(), e.preventDefault()));
              }),
            }),
          });
        });
      B.displayName = K;
      var H = "SelectValue",
        V = n.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              className: n,
              style: o,
              children: l,
              placeholder: a = "",
              ...i
            } = e,
            s = _(H, r),
            { onValueNodeHasChildrenChange: d } = s,
            c = void 0 !== l,
            p = (0, u.s)(t, s.onValueNodeChange);
          return (
            (0, b.N)(() => {
              d(c);
            }, [d, c]),
            (0, j.jsx)(w.sG.span, {
              ...i,
              ref: p,
              style: { pointerEvents: "none" },
              children: eS(s.value)
                ? (0, j.jsx)(j.Fragment, { children: a })
                : l,
            })
          );
        });
      V.displayName = H;
      var U = n.forwardRef((e, t) => {
        let { __scopeSelect: r, children: n, ...o } = e;
        return (0, j.jsx)(w.sG.span, {
          "aria-hidden": !0,
          ...o,
          "ref": t,
          "children": n || "▼",
        });
      });
      U.displayName = "SelectIcon";
      var W = (e) => (0, j.jsx)(h.Z, { asChild: !0, ...e });
      W.displayName = "SelectPortal";
      var q = "SelectContent",
        z = n.forwardRef((e, t) => {
          let r = _(q, e.__scopeSelect),
            [l, a] = n.useState();
          return ((0, b.N)(() => {
            a(new DocumentFragment());
          }, []),
          r.open)
            ? (0, j.jsx)(Q, { ...e, ref: t })
            : l
              ? o.createPortal(
                  (0, j.jsx)(X, {
                    scope: e.__scopeSelect,
                    children: (0, j.jsx)(E.Slot, {
                      scope: e.__scopeSelect,
                      children: (0, j.jsx)("div", { children: e.children }),
                    }),
                  }),
                  l,
                )
              : null;
        });
      z.displayName = q;
      var [X, Z] = P(q),
        Y = (0, g.TL)("SelectContent.RemoveScroll"),
        Q = n.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              position: o = "item-aligned",
              onCloseAutoFocus: l,
              onEscapeKeyDown: i,
              onPointerDownOutside: s,
              side: d,
              sideOffset: v,
              align: m,
              alignOffset: h,
              arrowPadding: w,
              collisionBoundary: g,
              collisionPadding: x,
              sticky: y,
              hideWhenDetached: b,
              avoidCollisions: C,
              ...M
            } = e,
            k = _(q, r),
            [D, E] = n.useState(null),
            [I, P] = n.useState(null),
            N = (0, u.s)(t, (e) => E(e)),
            [L, A] = n.useState(null),
            [F, O] = n.useState(null),
            G = T(r),
            [K, B] = n.useState(!1),
            H = n.useRef(!1);
          (n.useEffect(() => {
            if (D) return (0, S.Eq)(D);
          }, [D]),
            (0, p.Oh)());
          let V = n.useCallback(
              (e) => {
                let [t, ...r] = G().map((e) => e.ref.current),
                  [n] = r.slice(-1),
                  o = document.activeElement;
                for (let r of e)
                  if (
                    r === o ||
                    (null == r || r.scrollIntoView({ block: "nearest" }),
                    r === t && I && (I.scrollTop = 0),
                    r === n && I && (I.scrollTop = I.scrollHeight),
                    null == r || r.focus(),
                    document.activeElement !== o)
                  )
                    return;
              },
              [G, I],
            ),
            U = n.useCallback(() => V([L, D]), [V, L, D]);
          n.useEffect(() => {
            K && U();
          }, [K, U]);
          let { onOpenChange: W, triggerPointerDownPosRef: z } = k;
          (n.useEffect(() => {
            if (D) {
              let e = { x: 0, y: 0 },
                t = (t) => {
                  var r, n, o, l;
                  e = {
                    x: Math.abs(
                      Math.round(t.pageX) -
                        (null != (o = null == (r = z.current) ? void 0 : r.x)
                          ? o
                          : 0),
                    ),
                    y: Math.abs(
                      Math.round(t.pageY) -
                        (null != (l = null == (n = z.current) ? void 0 : n.y)
                          ? l
                          : 0),
                    ),
                  };
                },
                r = (r) => {
                  (e.x <= 10 && e.y <= 10
                    ? r.preventDefault()
                    : D.contains(r.target) || W(!1),
                    document.removeEventListener("pointermove", t),
                    (z.current = null));
                };
              return (
                null !== z.current &&
                  (document.addEventListener("pointermove", t),
                  document.addEventListener("pointerup", r, {
                    capture: !0,
                    once: !0,
                  })),
                () => {
                  (document.removeEventListener("pointermove", t),
                    document.removeEventListener("pointerup", r, {
                      capture: !0,
                    }));
                }
              );
            }
          }, [D, W, z]),
            n.useEffect(() => {
              let e = () => W(!1);
              return (
                window.addEventListener("blur", e),
                window.addEventListener("resize", e),
                () => {
                  (window.removeEventListener("blur", e),
                    window.removeEventListener("resize", e));
                }
              );
            }, [W]));
          let [Z, Q] = eR((e) => {
              let t = G().filter((e) => !e.disabled),
                r = t.find((e) => e.ref.current === document.activeElement),
                n = ej(t, e, r);
              n && setTimeout(() => n.ref.current.focus());
            }),
            ee = n.useCallback(
              (e, t, r) => {
                let n = !H.current && !r;
                ((void 0 !== k.value && k.value === t) || n) &&
                  (A(e), n && (H.current = !0));
              },
              [k.value],
            ),
            et = n.useCallback(() => (null == D ? void 0 : D.focus()), [D]),
            er = n.useCallback(
              (e, t, r) => {
                let n = !H.current && !r;
                ((void 0 !== k.value && k.value === t) || n) && O(e);
              },
              [k.value],
            ),
            en = "popper" === o ? $ : J,
            eo =
              en === $
                ? {
                    side: d,
                    sideOffset: v,
                    align: m,
                    alignOffset: h,
                    arrowPadding: w,
                    collisionBoundary: g,
                    collisionPadding: x,
                    sticky: y,
                    hideWhenDetached: b,
                    avoidCollisions: C,
                  }
                : {};
          return (0, j.jsx)(X, {
            scope: r,
            content: D,
            viewport: I,
            onViewportChange: P,
            itemRefCallback: ee,
            selectedItem: L,
            onItemLeave: et,
            itemTextRefCallback: er,
            focusSelectedItem: U,
            selectedItemText: F,
            position: o,
            isPositioned: K,
            searchRef: Z,
            children: (0, j.jsx)(R.A, {
              as: Y,
              allowPinchZoom: !0,
              children: (0, j.jsx)(f.n, {
                asChild: !0,
                trapped: k.open,
                onMountAutoFocus: (e) => {
                  e.preventDefault();
                },
                onUnmountAutoFocus: (0, a.m)(l, (e) => {
                  var t;
                  (null == (t = k.trigger) || t.focus({ preventScroll: !0 }),
                    e.preventDefault());
                }),
                children: (0, j.jsx)(c.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: s,
                  onFocusOutside: (e) => e.preventDefault(),
                  onDismiss: () => k.onOpenChange(!1),
                  children: (0, j.jsx)(en, {
                    "role": "listbox",
                    "id": k.contentId,
                    "data-state": k.open ? "open" : "closed",
                    "dir": k.dir,
                    "onContextMenu": (e) => e.preventDefault(),
                    ...M,
                    ...eo,
                    "onPlaced": () => B(!0),
                    "ref": N,
                    "style": {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...M.style,
                    },
                    "onKeyDown": (0, a.m)(M.onKeyDown, (e) => {
                      let t = e.ctrlKey || e.altKey || e.metaKey;
                      if (
                        ("Tab" === e.key && e.preventDefault(),
                        t || 1 !== e.key.length || Q(e.key),
                        ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key))
                      ) {
                        let t = G()
                          .filter((e) => !e.disabled)
                          .map((e) => e.ref.current);
                        if (
                          (["ArrowUp", "End"].includes(e.key) &&
                            (t = t.slice().reverse()),
                          ["ArrowUp", "ArrowDown"].includes(e.key))
                        ) {
                          let r = e.target,
                            n = t.indexOf(r);
                          t = t.slice(n + 1);
                        }
                        (setTimeout(() => V(t)), e.preventDefault());
                      }
                    }),
                  }),
                }),
              }),
            }),
          });
        });
      Q.displayName = "SelectContentImpl";
      var J = n.forwardRef((e, t) => {
        let { __scopeSelect: r, onPlaced: o, ...a } = e,
          i = _(q, r),
          s = Z(q, r),
          [d, c] = n.useState(null),
          [p, f] = n.useState(null),
          v = (0, u.s)(t, (e) => f(e)),
          m = T(r),
          h = n.useRef(!1),
          g = n.useRef(!0),
          {
            viewport: x,
            selectedItem: y,
            selectedItemText: C,
            focusSelectedItem: S,
          } = s,
          R = n.useCallback(() => {
            if (i.trigger && i.valueNode && d && p && x && y && C) {
              let e = i.trigger.getBoundingClientRect(),
                t = p.getBoundingClientRect(),
                r = i.valueNode.getBoundingClientRect(),
                n = C.getBoundingClientRect();
              if ("rtl" !== i.dir) {
                let o = n.left - t.left,
                  a = r.left - o,
                  i = e.left - a,
                  u = e.width + i,
                  s = Math.max(u, t.width),
                  c = l(a, [10, Math.max(10, window.innerWidth - 10 - s)]);
                ((d.style.minWidth = u + "px"), (d.style.left = c + "px"));
              } else {
                let o = t.right - n.right,
                  a = window.innerWidth - r.right - o,
                  i = window.innerWidth - e.right - a,
                  u = e.width + i,
                  s = Math.max(u, t.width),
                  c = l(a, [10, Math.max(10, window.innerWidth - 10 - s)]);
                ((d.style.minWidth = u + "px"), (d.style.right = c + "px"));
              }
              let a = m(),
                u = window.innerHeight - 20,
                s = x.scrollHeight,
                c = window.getComputedStyle(p),
                f = parseInt(c.borderTopWidth, 10),
                v = parseInt(c.paddingTop, 10),
                w = parseInt(c.borderBottomWidth, 10),
                g = f + v + s + parseInt(c.paddingBottom, 10) + w,
                b = Math.min(5 * y.offsetHeight, g),
                S = window.getComputedStyle(x),
                R = parseInt(S.paddingTop, 10),
                j = parseInt(S.paddingBottom, 10),
                M = e.top + e.height / 2 - 10,
                k = y.offsetHeight / 2,
                D = f + v + (y.offsetTop + k);
              if (D <= M) {
                let e = a.length > 0 && y === a[a.length - 1].ref.current;
                d.style.bottom = "0px";
                let t = Math.max(
                  u - M,
                  k +
                    (e ? j : 0) +
                    (p.clientHeight - x.offsetTop - x.offsetHeight) +
                    w,
                );
                d.style.height = D + t + "px";
              } else {
                let e = a.length > 0 && y === a[0].ref.current;
                d.style.top = "0px";
                let t = Math.max(M, f + x.offsetTop + (e ? R : 0) + k);
                ((d.style.height = t + (g - D) + "px"),
                  (x.scrollTop = D - M + x.offsetTop));
              }
              ((d.style.margin = "".concat(10, "px 0")),
                (d.style.minHeight = b + "px"),
                (d.style.maxHeight = u + "px"),
                null == o || o(),
                requestAnimationFrame(() => (h.current = !0)));
            }
          }, [m, i.trigger, i.valueNode, d, p, x, y, C, i.dir, o]);
        (0, b.N)(() => R(), [R]);
        let [M, k] = n.useState();
        (0, b.N)(() => {
          p && k(window.getComputedStyle(p).zIndex);
        }, [p]);
        let D = n.useCallback(
          (e) => {
            e && !0 === g.current && (R(), null == S || S(), (g.current = !1));
          },
          [R, S],
        );
        return (0, j.jsx)(ee, {
          scope: r,
          contentWrapper: d,
          shouldExpandOnScrollRef: h,
          onScrollButtonChange: D,
          children: (0, j.jsx)("div", {
            ref: c,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: M,
            },
            children: (0, j.jsx)(w.sG.div, {
              ...a,
              ref: v,
              style: { boxSizing: "border-box", maxHeight: "100%", ...a.style },
            }),
          }),
        });
      });
      J.displayName = "SelectItemAlignedPosition";
      var $ = n.forwardRef((e, t) => {
        let {
            __scopeSelect: r,
            align: n = "start",
            collisionPadding: o = 10,
            ...l
          } = e,
          a = L(r);
        return (0, j.jsx)(m.UC, {
          ...a,
          ...l,
          ref: t,
          align: n,
          collisionPadding: o,
          style: {
            "boxSizing": "border-box",
            ...l.style,
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
        });
      });
      $.displayName = "SelectPopperPosition";
      var [ee, et] = P(q, {}),
        er = "SelectViewport",
        en = n.forwardRef((e, t) => {
          let { __scopeSelect: r, nonce: o, ...l } = e,
            i = Z(er, r),
            s = et(er, r),
            d = (0, u.s)(t, i.onViewportChange),
            c = n.useRef(0);
          return (0, j.jsxs)(j.Fragment, {
            children: [
              (0, j.jsx)("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                },
                nonce: o,
              }),
              (0, j.jsx)(E.Slot, {
                scope: r,
                children: (0, j.jsx)(w.sG.div, {
                  "data-radix-select-viewport": "",
                  "role": "presentation",
                  ...l,
                  "ref": d,
                  "style": {
                    position: "relative",
                    flex: 1,
                    overflow: "hidden auto",
                    ...l.style,
                  },
                  "onScroll": (0, a.m)(l.onScroll, (e) => {
                    let t = e.currentTarget,
                      { contentWrapper: r, shouldExpandOnScrollRef: n } = s;
                    if ((null == n ? void 0 : n.current) && r) {
                      let e = Math.abs(c.current - t.scrollTop);
                      if (e > 0) {
                        let n = window.innerHeight - 20,
                          o = Math.max(
                            parseFloat(r.style.minHeight),
                            parseFloat(r.style.height),
                          );
                        if (o < n) {
                          let l = o + e,
                            a = Math.min(n, l),
                            i = l - a;
                          ((r.style.height = a + "px"),
                            "0px" === r.style.bottom &&
                              ((t.scrollTop = i > 0 ? i : 0),
                              (r.style.justifyContent = "flex-end")));
                        }
                      }
                    }
                    c.current = t.scrollTop;
                  }),
                }),
              }),
            ],
          });
        });
      en.displayName = er;
      var eo = "SelectGroup",
        [el, ea] = P(eo);
      n.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e,
          o = (0, v.B)();
        return (0, j.jsx)(el, {
          scope: r,
          id: o,
          children: (0, j.jsx)(w.sG.div, {
            "role": "group",
            "aria-labelledby": o,
            ...n,
            "ref": t,
          }),
        });
      }).displayName = eo;
      var ei = "SelectLabel";
      n.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e,
          o = ea(ei, r);
        return (0, j.jsx)(w.sG.div, { id: o.id, ...n, ref: t });
      }).displayName = ei;
      var eu = "SelectItem",
        [es, ed] = P(eu),
        ec = n.forwardRef((e, t) => {
          let {
              __scopeSelect: r,
              value: o,
              disabled: l = !1,
              textValue: i,
              ...s
            } = e,
            d = _(eu, r),
            c = Z(eu, r),
            p = d.value === o,
            [f, m] = n.useState(null != i ? i : ""),
            [h, g] = n.useState(!1),
            x = (0, u.s)(t, (e) => {
              var t;
              return null == (t = c.itemRefCallback)
                ? void 0
                : t.call(c, e, o, l);
            }),
            y = (0, v.B)(),
            b = n.useRef("touch"),
            C = () => {
              l || (d.onValueChange(o), d.onOpenChange(!1));
            };
          if ("" === o)
            throw Error(
              "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.",
            );
          return (0, j.jsx)(es, {
            scope: r,
            value: o,
            disabled: l,
            textId: y,
            isSelected: p,
            onItemTextChange: n.useCallback((e) => {
              m((t) => {
                var r;
                return (
                  t ||
                  (null != (r = null == e ? void 0 : e.textContent)
                    ? r
                    : ""
                  ).trim()
                );
              });
            }, []),
            children: (0, j.jsx)(E.ItemSlot, {
              scope: r,
              value: o,
              disabled: l,
              textValue: f,
              children: (0, j.jsx)(w.sG.div, {
                "role": "option",
                "aria-labelledby": y,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": p && h,
                "data-state": p ? "checked" : "unchecked",
                "aria-disabled": l || void 0,
                "data-disabled": l ? "" : void 0,
                "tabIndex": l ? void 0 : -1,
                ...s,
                "ref": x,
                "onFocus": (0, a.m)(s.onFocus, () => g(!0)),
                "onBlur": (0, a.m)(s.onBlur, () => g(!1)),
                "onClick": (0, a.m)(s.onClick, () => {
                  "mouse" !== b.current && C();
                }),
                "onPointerUp": (0, a.m)(s.onPointerUp, () => {
                  "mouse" === b.current && C();
                }),
                "onPointerDown": (0, a.m)(s.onPointerDown, (e) => {
                  b.current = e.pointerType;
                }),
                "onPointerMove": (0, a.m)(s.onPointerMove, (e) => {
                  if (((b.current = e.pointerType), l)) {
                    var t;
                    null == (t = c.onItemLeave) || t.call(c);
                  } else
                    "mouse" === b.current &&
                      e.currentTarget.focus({ preventScroll: !0 });
                }),
                "onPointerLeave": (0, a.m)(s.onPointerLeave, (e) => {
                  if (e.currentTarget === document.activeElement) {
                    var t;
                    null == (t = c.onItemLeave) || t.call(c);
                  }
                }),
                "onKeyDown": (0, a.m)(s.onKeyDown, (e) => {
                  var t;
                  ((null == (t = c.searchRef) ? void 0 : t.current) === "" ||
                    " " !== e.key) &&
                    (k.includes(e.key) && C(),
                    " " === e.key && e.preventDefault());
                }),
              }),
            }),
          });
        });
      ec.displayName = eu;
      var ep = "SelectItemText",
        ef = n.forwardRef((e, t) => {
          let { __scopeSelect: r, className: l, style: a, ...i } = e,
            s = _(ep, r),
            d = Z(ep, r),
            c = ed(ep, r),
            p = O(ep, r),
            [f, v] = n.useState(null),
            m = (0, u.s)(
              t,
              (e) => v(e),
              c.onItemTextChange,
              (e) => {
                var t;
                return null == (t = d.itemTextRefCallback)
                  ? void 0
                  : t.call(d, e, c.value, c.disabled);
              },
            ),
            h = null == f ? void 0 : f.textContent,
            g = n.useMemo(
              () =>
                (0, j.jsx)(
                  "option",
                  { value: c.value, disabled: c.disabled, children: h },
                  c.value,
                ),
              [c.disabled, c.value, h],
            ),
            { onNativeOptionAdd: x, onNativeOptionRemove: y } = p;
          return (
            (0, b.N)(() => (x(g), () => y(g)), [x, y, g]),
            (0, j.jsxs)(j.Fragment, {
              children: [
                (0, j.jsx)(w.sG.span, { id: c.textId, ...i, ref: m }),
                c.isSelected && s.valueNode && !s.valueNodeHasChildren
                  ? o.createPortal(i.children, s.valueNode)
                  : null,
              ],
            })
          );
        });
      ef.displayName = ep;
      var ev = "SelectItemIndicator",
        em = n.forwardRef((e, t) => {
          let { __scopeSelect: r, ...n } = e;
          return ed(ev, r).isSelected
            ? (0, j.jsx)(w.sG.span, { "aria-hidden": !0, ...n, "ref": t })
            : null;
        });
      em.displayName = ev;
      var eh = "SelectScrollUpButton",
        ew = n.forwardRef((e, t) => {
          let r = Z(eh, e.__scopeSelect),
            o = et(eh, e.__scopeSelect),
            [l, a] = n.useState(!1),
            i = (0, u.s)(t, o.onScrollButtonChange);
          return (
            (0, b.N)(() => {
              if (r.viewport && r.isPositioned) {
                let e = function () {
                    a(t.scrollTop > 0);
                  },
                  t = r.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [r.viewport, r.isPositioned]),
            l
              ? (0, j.jsx)(ey, {
                  ...e,
                  ref: i,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = r;
                    e && t && (e.scrollTop = e.scrollTop - t.offsetHeight);
                  },
                })
              : null
          );
        });
      ew.displayName = eh;
      var eg = "SelectScrollDownButton",
        ex = n.forwardRef((e, t) => {
          let r = Z(eg, e.__scopeSelect),
            o = et(eg, e.__scopeSelect),
            [l, a] = n.useState(!1),
            i = (0, u.s)(t, o.onScrollButtonChange);
          return (
            (0, b.N)(() => {
              if (r.viewport && r.isPositioned) {
                let e = function () {
                    let e = t.scrollHeight - t.clientHeight;
                    a(Math.ceil(t.scrollTop) < e);
                  },
                  t = r.viewport;
                return (
                  e(),
                  t.addEventListener("scroll", e),
                  () => t.removeEventListener("scroll", e)
                );
              }
            }, [r.viewport, r.isPositioned]),
            l
              ? (0, j.jsx)(ey, {
                  ...e,
                  ref: i,
                  onAutoScroll: () => {
                    let { viewport: e, selectedItem: t } = r;
                    e && t && (e.scrollTop = e.scrollTop + t.offsetHeight);
                  },
                })
              : null
          );
        });
      ex.displayName = eg;
      var ey = n.forwardRef((e, t) => {
        let { __scopeSelect: r, onAutoScroll: o, ...l } = e,
          i = Z("SelectScrollButton", r),
          u = n.useRef(null),
          s = T(r),
          d = n.useCallback(() => {
            null !== u.current &&
              (window.clearInterval(u.current), (u.current = null));
          }, []);
        return (
          n.useEffect(() => () => d(), [d]),
          (0, b.N)(() => {
            var e;
            let t = s().find((e) => e.ref.current === document.activeElement);
            null == t ||
              null == (e = t.ref.current) ||
              e.scrollIntoView({ block: "nearest" });
          }, [s]),
          (0, j.jsx)(w.sG.div, {
            "aria-hidden": !0,
            ...l,
            "ref": t,
            "style": { flexShrink: 0, ...l.style },
            "onPointerDown": (0, a.m)(l.onPointerDown, () => {
              null === u.current && (u.current = window.setInterval(o, 50));
            }),
            "onPointerMove": (0, a.m)(l.onPointerMove, () => {
              var e;
              (null == (e = i.onItemLeave) || e.call(i),
                null === u.current && (u.current = window.setInterval(o, 50)));
            }),
            "onPointerLeave": (0, a.m)(l.onPointerLeave, () => {
              d();
            }),
          })
        );
      });
      n.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e;
        return (0, j.jsx)(w.sG.div, { "aria-hidden": !0, ...n, "ref": t });
      }).displayName = "SelectSeparator";
      var eb = "SelectArrow";
      n.forwardRef((e, t) => {
        let { __scopeSelect: r, ...n } = e,
          o = L(r),
          l = _(eb, r),
          a = Z(eb, r);
        return l.open && "popper" === a.position
          ? (0, j.jsx)(m.i3, { ...o, ...n, ref: t })
          : null;
      }).displayName = eb;
      var eC = n.forwardRef((e, t) => {
        let { __scopeSelect: r, value: o, ...l } = e,
          a = n.useRef(null),
          i = (0, u.s)(t, a),
          s = (function (e) {
            let t = n.useRef({ value: e, previous: e });
            return n.useMemo(
              () => (
                t.current.value !== e &&
                  ((t.current.previous = t.current.value),
                  (t.current.value = e)),
                t.current.previous
              ),
              [e],
            );
          })(o);
        return (
          n.useEffect(() => {
            let e = a.current;
            if (!e) return;
            let t = Object.getOwnPropertyDescriptor(
              window.HTMLSelectElement.prototype,
              "value",
            ).set;
            if (s !== o && t) {
              let r = new Event("change", { bubbles: !0 });
              (t.call(e, o), e.dispatchEvent(r));
            }
          }, [s, o]),
          (0, j.jsx)(w.sG.select, {
            ...l,
            style: { ...C.Qg, ...l.style },
            ref: i,
            defaultValue: o,
          })
        );
      });
      function eS(e) {
        return "" === e || void 0 === e;
      }
      function eR(e) {
        let t = (0, x.c)(e),
          r = n.useRef(""),
          o = n.useRef(0),
          l = n.useCallback(
            (e) => {
              let n = r.current + e;
              (t(n),
                (function e(t) {
                  ((r.current = t),
                    window.clearTimeout(o.current),
                    "" !== t &&
                      (o.current = window.setTimeout(() => e(""), 1e3)));
                })(n));
            },
            [t],
          ),
          a = n.useCallback(() => {
            ((r.current = ""), window.clearTimeout(o.current));
          }, []);
        return (
          n.useEffect(() => () => window.clearTimeout(o.current), []),
          [r, l, a]
        );
      }
      function ej(e, t, r) {
        var n, o;
        let l =
            t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t,
          a = r ? e.indexOf(r) : -1,
          i =
            ((n = e),
            (o = Math.max(a, 0)),
            n.map((e, t) => n[(o + t) % n.length]));
        1 === l.length && (i = i.filter((e) => e !== r));
        let u = i.find((e) =>
          e.textValue.toLowerCase().startsWith(l.toLowerCase()),
        );
        return u !== r ? u : void 0;
      }
      eC.displayName = "SelectBubbleInput";
      var eM = G,
        ek = B,
        eD = V,
        eE = U,
        eT = W,
        eI = z,
        eP = en,
        eN = ec,
        eL = ef,
        eA = em,
        e_ = ew,
        eF = ex;
    },
    94315: (e, t, r) => {
      r.d(t, { jH: () => l });
      var n = r(12115);
      r(95155);
      var o = n.createContext(void 0);
      function l(e) {
        let t = n.useContext(o);
        return e || t || "ltr";
      }
    },
  },
]);

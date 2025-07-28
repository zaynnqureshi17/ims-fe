(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [578],
  {
    6654: (e, t, n) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let r = n(12115);
      function a(e, t) {
        let n = (0, r.useRef)(null),
          a = (0, r.useRef)(null);
        return (0, r.useCallback)(
          (r) => {
            if (null === r) {
              let e = n.current;
              e && ((n.current = null), e());
              let t = a.current;
              t && ((a.current = null), t());
            } else (e && (n.current = l(e, r)), t && (a.current = l(t, r)));
          },
          [e, t],
        );
      }
      function l(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let n = e(t);
          return "function" == typeof n ? n : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    7765: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => D });
      var r = n(95155),
        a = n(68008),
        l = n(12115),
        i = Object.defineProperty,
        o = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        p = (e, t, n) =>
          t in e
            ? i(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        g = (e, t) => {
          for (var n in t || (t = {})) d.call(t, n) && p(e, n, t[n]);
          if (u) for (var n of u(t)) c.call(t, n) && p(e, n, t[n]);
          return e;
        },
        m = (e, t) => o(e, s(t)),
        f = (e, t) => {
          var n = {};
          for (var r in e) d.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
          if (null != e && u)
            for (var r of u(e))
              0 > t.indexOf(r) && c.call(e, r) && (n[r] = e[r]);
          return n;
        },
        v = l.createContext({}),
        h = l.forwardRef((e, t) => {
          var n,
            r,
            a,
            i,
            o,
            {
              value: s,
              onChange: u,
              maxLength: d,
              textAlign: c = "left",
              pattern: p,
              placeholder: h,
              inputMode: w = "numeric",
              onComplete: y,
              pushPasswordManagerStrategy: j = "increase-width",
              pasteTransformer: k,
              containerClassName: S,
              noScriptCSSFallback: E = x,
              render: P,
              children: C,
            } = e,
            M = f(e, [
              "value",
              "onChange",
              "maxLength",
              "textAlign",
              "pattern",
              "placeholder",
              "inputMode",
              "onComplete",
              "pushPasswordManagerStrategy",
              "pasteTransformer",
              "containerClassName",
              "noScriptCSSFallback",
              "render",
              "children",
            ]);
          let [N, O] = l.useState(
              "string" == typeof M.defaultValue ? M.defaultValue : "",
            ),
            R = null != s ? s : N,
            _ = (function (e) {
              let t = l.useRef();
              return (
                l.useEffect(() => {
                  t.current = e;
                }),
                t.current
              );
            })(R),
            D = l.useCallback(
              (e) => {
                (null == u || u(e), O(e));
              },
              [u],
            ),
            B = l.useMemo(
              () => (p ? ("string" == typeof p ? new RegExp(p) : p) : null),
              [p],
            ),
            T = l.useRef(null),
            A = l.useRef(null),
            W = l.useRef({
              value: R,
              onChange: D,
              isIOS:
                "undefined" != typeof window &&
                (null ==
                (r =
                  null == (n = null == window ? void 0 : window.CSS)
                    ? void 0
                    : n.supports)
                  ? void 0
                  : r.call(n, "-webkit-touch-callout", "none")),
            }),
            I = l.useRef({
              prev: [
                null == (a = T.current) ? void 0 : a.selectionStart,
                null == (i = T.current) ? void 0 : i.selectionEnd,
                null == (o = T.current) ? void 0 : o.selectionDirection,
              ],
            });
          (l.useImperativeHandle(t, () => T.current, []),
            l.useEffect(() => {
              let e = T.current,
                t = A.current;
              if (!e || !t) return;
              function n() {
                if (document.activeElement !== e) {
                  (V(null), Z(null));
                  return;
                }
                let t = e.selectionStart,
                  n = e.selectionEnd,
                  r = e.selectionDirection,
                  a = e.maxLength,
                  l = e.value,
                  i = I.current.prev,
                  o = -1,
                  s = -1,
                  u;
                if (0 !== l.length && null !== t && null !== n) {
                  let e = t === n,
                    r = t === l.length && l.length < a;
                  if (e && !r) {
                    if (0 === t) ((o = 0), (s = 1), (u = "forward"));
                    else if (t === a) ((o = t - 1), (s = t), (u = "backward"));
                    else if (a > 1 && l.length > 1) {
                      let e = 0;
                      if (null !== i[0] && null !== i[1]) {
                        u = t < i[1] ? "backward" : "forward";
                        let n = i[0] === i[1] && i[0] < a;
                        "backward" !== u || n || (e = -1);
                      }
                      ((o = e + t), (s = e + t + 1));
                    }
                  }
                  -1 !== o &&
                    -1 !== s &&
                    o !== s &&
                    T.current.setSelectionRange(o, s, u);
                }
                let d = -1 !== o ? o : t,
                  c = -1 !== s ? s : n,
                  p = null != u ? u : r;
                (V(d), Z(c), (I.current.prev = [d, c, p]));
              }
              if (
                (W.current.value !== e.value && W.current.onChange(e.value),
                (I.current.prev = [
                  e.selectionStart,
                  e.selectionEnd,
                  e.selectionDirection,
                ]),
                document.addEventListener("selectionchange", n, {
                  capture: !0,
                }),
                n(),
                document.activeElement === e && H(!0),
                !document.getElementById("input-otp-style"))
              ) {
                let e = document.createElement("style");
                if (
                  ((e.id = "input-otp-style"),
                  document.head.appendChild(e),
                  e.sheet)
                ) {
                  let t =
                    "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
                  (b(
                    e.sheet,
                    "[data-input-otp]::selection { background: transparent !important; color: transparent !important; }",
                  ),
                    b(e.sheet, `[data-input-otp]:autofill { ${t} }`),
                    b(e.sheet, `[data-input-otp]:-webkit-autofill { ${t} }`),
                    b(
                      e.sheet,
                      "@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }",
                    ),
                    b(
                      e.sheet,
                      "[data-input-otp] + * { pointer-events: all !important; }",
                    ));
                }
              }
              let r = () => {
                t &&
                  t.style.setProperty("--root-height", `${e.clientHeight}px`);
              };
              r();
              let a = new ResizeObserver(r);
              return (
                a.observe(e),
                () => {
                  (document.removeEventListener("selectionchange", n, {
                    capture: !0,
                  }),
                    a.disconnect());
                }
              );
            }, []));
          let [F, L] = l.useState(!1),
            [z, H] = l.useState(!1),
            [$, V] = l.useState(null),
            [G, Z] = l.useState(null);
          (l.useEffect(() => {
            !(function (e) {
              (setTimeout(e, 0), setTimeout(e, 10), setTimeout(e, 50));
            })(() => {
              var e, t, n, r;
              null == (e = T.current) || e.dispatchEvent(new Event("input"));
              let a = null == (t = T.current) ? void 0 : t.selectionStart,
                l = null == (n = T.current) ? void 0 : n.selectionEnd,
                i = null == (r = T.current) ? void 0 : r.selectionDirection;
              null !== a &&
                null !== l &&
                (V(a), Z(l), (I.current.prev = [a, l, i]));
            });
          }, [R, z]),
            l.useEffect(() => {
              void 0 !== _ &&
                R !== _ &&
                _.length < d &&
                R.length === d &&
                (null == y || y(R));
            }, [d, y, _, R]));
          let U = (function ({
              containerRef: e,
              inputRef: t,
              pushPasswordManagerStrategy: n,
              isFocused: r,
            }) {
              let [a, i] = l.useState(!1),
                [o, s] = l.useState(!1),
                [u, d] = l.useState(!1),
                c = l.useMemo(
                  () =>
                    "none" !== n &&
                    ("increase-width" === n ||
                      "experimental-no-flickering" === n) &&
                    a &&
                    o,
                  [a, o, n],
                ),
                p = l.useCallback(() => {
                  let r = e.current,
                    a = t.current;
                  if (!r || !a || u || "none" === n) return;
                  let l = r.getBoundingClientRect().left + r.offsetWidth,
                    o = r.getBoundingClientRect().top + r.offsetHeight / 2;
                  (0 ===
                    document.querySelectorAll(
                      '[data-lastpass-icon-root],com-1password-button,[data-dashlanecreated],[style$="2147483647 !important;"]',
                    ).length &&
                    document.elementFromPoint(l - 18, o) === r) ||
                    (i(!0), d(!0));
                }, [e, t, u, n]);
              return (
                l.useEffect(() => {
                  let t = e.current;
                  if (!t || "none" === n) return;
                  function r() {
                    s(
                      window.innerWidth - t.getBoundingClientRect().right >= 40,
                    );
                  }
                  r();
                  let a = setInterval(r, 1e3);
                  return () => {
                    clearInterval(a);
                  };
                }, [e, n]),
                l.useEffect(() => {
                  let e = r || document.activeElement === t.current;
                  if ("none" === n || !e) return;
                  let a = setTimeout(p, 0),
                    l = setTimeout(p, 2e3),
                    i = setTimeout(p, 5e3),
                    o = setTimeout(() => {
                      d(!0);
                    }, 6e3);
                  return () => {
                    (clearTimeout(a),
                      clearTimeout(l),
                      clearTimeout(i),
                      clearTimeout(o));
                  };
                }, [t, r, n, p]),
                {
                  hasPWMBadge: a,
                  willPushPWMBadge: c,
                  PWM_BADGE_SPACE_WIDTH: "40px",
                }
              );
            })({
              containerRef: A,
              inputRef: T,
              pushPasswordManagerStrategy: j,
              isFocused: z,
            }),
            q = l.useCallback(
              (e) => {
                let t = e.currentTarget.value.slice(0, d);
                if (t.length > 0 && B && !B.test(t))
                  return void e.preventDefault();
                ("string" == typeof _ &&
                  t.length < _.length &&
                  document.dispatchEvent(new Event("selectionchange")),
                  D(t));
              },
              [d, D, _, B],
            ),
            Q = l.useCallback(() => {
              var e;
              if (T.current) {
                let t = Math.min(T.current.value.length, d - 1),
                  n = T.current.value.length;
                (null == (e = T.current) || e.setSelectionRange(t, n),
                  V(t),
                  Z(n));
              }
              H(!0);
            }, [d]),
            X = l.useCallback(
              (e) => {
                var t, n;
                let r = T.current;
                if (!k && (!W.current.isIOS || !e.clipboardData || !r)) return;
                let a = e.clipboardData.getData("text/plain"),
                  l = k ? k(a) : a;
                e.preventDefault();
                let i = null == (t = T.current) ? void 0 : t.selectionStart,
                  o = null == (n = T.current) ? void 0 : n.selectionEnd,
                  s = (
                    i !== o
                      ? R.slice(0, i) + l + R.slice(o)
                      : R.slice(0, i) + l + R.slice(i)
                  ).slice(0, d);
                if (s.length > 0 && B && !B.test(s)) return;
                ((r.value = s), D(s));
                let u = Math.min(s.length, d - 1),
                  c = s.length;
                (r.setSelectionRange(u, c), V(u), Z(c));
              },
              [d, D, B, R],
            ),
            Y = l.useMemo(
              () => ({
                position: "relative",
                cursor: M.disabled ? "default" : "text",
                userSelect: "none",
                WebkitUserSelect: "none",
                pointerEvents: "none",
              }),
              [M.disabled],
            ),
            J = l.useMemo(
              () => ({
                position: "absolute",
                inset: 0,
                width: U.willPushPWMBadge
                  ? `calc(100% + ${U.PWM_BADGE_SPACE_WIDTH})`
                  : "100%",
                clipPath: U.willPushPWMBadge
                  ? `inset(0 ${U.PWM_BADGE_SPACE_WIDTH} 0 0)`
                  : void 0,
                height: "100%",
                display: "flex",
                textAlign: c,
                opacity: "1",
                color: "transparent",
                pointerEvents: "all",
                background: "transparent",
                caretColor: "transparent",
                border: "0 solid transparent",
                outline: "0 solid transparent",
                boxShadow: "none",
                lineHeight: "1",
                letterSpacing: "-.5em",
                fontSize: "var(--root-height)",
                fontFamily: "monospace",
                fontVariantNumeric: "tabular-nums",
              }),
              [U.PWM_BADGE_SPACE_WIDTH, U.willPushPWMBadge, c],
            ),
            K = l.useMemo(
              () =>
                l.createElement(
                  "input",
                  m(g({ autoComplete: M.autoComplete || "one-time-code" }, M), {
                    "data-input-otp": !0,
                    "data-input-otp-placeholder-shown":
                      0 === R.length || void 0,
                    "data-input-otp-mss": $,
                    "data-input-otp-mse": G,
                    "inputMode": w,
                    "pattern": null == B ? void 0 : B.source,
                    "aria-placeholder": h,
                    "style": J,
                    "maxLength": d,
                    "value": R,
                    "ref": T,
                    "onPaste": (e) => {
                      var t;
                      (X(e), null == (t = M.onPaste) || t.call(M, e));
                    },
                    "onChange": q,
                    "onMouseOver": (e) => {
                      var t;
                      (L(!0), null == (t = M.onMouseOver) || t.call(M, e));
                    },
                    "onMouseLeave": (e) => {
                      var t;
                      (L(!1), null == (t = M.onMouseLeave) || t.call(M, e));
                    },
                    "onFocus": (e) => {
                      var t;
                      (Q(), null == (t = M.onFocus) || t.call(M, e));
                    },
                    "onBlur": (e) => {
                      var t;
                      (H(!1), null == (t = M.onBlur) || t.call(M, e));
                    },
                  }),
                ),
              [q, Q, X, w, J, d, G, $, M, null == B ? void 0 : B.source, R],
            ),
            ee = l.useMemo(
              () => ({
                slots: Array.from({ length: d }).map((e, t) => {
                  var n;
                  let r =
                      z &&
                      null !== $ &&
                      null !== G &&
                      (($ === G && t === $) || (t >= $ && t < G)),
                    a = void 0 !== R[t] ? R[t] : null;
                  return {
                    char: a,
                    placeholderChar:
                      void 0 !== R[0]
                        ? null
                        : null != (n = null == h ? void 0 : h[t])
                          ? n
                          : null,
                    isActive: r,
                    hasFakeCaret: r && null === a,
                  };
                }),
                isFocused: z,
                isHovering: !M.disabled && F,
              }),
              [z, F, d, G, $, M.disabled, R],
            ),
            et = l.useMemo(
              () => (P ? P(ee) : l.createElement(v.Provider, { value: ee }, C)),
              [C, ee, P],
            );
          return l.createElement(
            l.Fragment,
            null,
            null !== E &&
              l.createElement(
                "noscript",
                null,
                l.createElement("style", null, E),
              ),
            l.createElement(
              "div",
              {
                "ref": A,
                "data-input-otp-container": !0,
                "style": Y,
                "className": S,
              },
              et,
              l.createElement(
                "div",
                {
                  style: {
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                  },
                },
                K,
              ),
            ),
          );
        });
      function b(e, t) {
        try {
          e.insertRule(t);
        } catch (e) {
          console.error("input-otp could not insert CSS rule:", t);
        }
      }
      h.displayName = "Input";
      var x = `
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`,
        w = n(59434);
      function y(e) {
        let { className: t, containerClassName: n, ...a } = e;
        return (0, r.jsx)(h, {
          "data-slot": "input-otp",
          "containerClassName": (0, w.cn)(
            "flex justify-center  items-center gap-4 has-disabled:opacity-50 my-4",
            n,
          ),
          "className": (0, w.cn)("disabled:cursor-not-allowed", t),
          ...a,
        });
      }
      function j(e) {
        let { className: t, ...n } = e;
        return (0, r.jsx)("div", {
          "data-slot": "input-otp-group",
          "className": (0, w.cn)("flex items-center gap-4", t),
          ...n,
        });
      }
      function k(e) {
        var t;
        let { index: n, className: a, ...i } = e,
          o = l.useContext(v),
          {
            char: s,
            hasFakeCaret: u,
            isActive: d,
          } = null != (t = null == o ? void 0 : o.slots[n]) ? t : {};
        return (0, r.jsxs)("div", {
          "data-slot": "input-otp-slot",
          "data-active": d,
          "className": (0, w.cn)(
            "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-10 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none rounded-md first:border-l data-[active=true]:z-10 data-[active=true]:ring-[3px]",
            a,
          ),
          ...i,
          "children": [
            s,
            u &&
              (0, r.jsx)("div", {
                className:
                  "pointer-events-none absolute inset-0 flex items-center justify-center",
                children: (0, r.jsx)("div", {
                  className:
                    "animate-caret-blink bg-foreground h-4 w-px duration-1000",
                }),
              }),
          ],
        });
      }
      var S = n(85057);
      let E = () =>
        (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(S.Label, {
              className: "mt-4",
              children: "Verification OTP",
            }),
            (0, r.jsx)(y, {
              maxLength: 6,
              children: (0, r.jsxs)(j, {
                children: [
                  (0, r.jsx)(k, { index: 0 }),
                  (0, r.jsx)(k, { index: 1 }),
                  (0, r.jsx)(k, { index: 2 }),
                  (0, r.jsx)(k, { index: 3 }),
                  (0, r.jsx)(k, { index: 4 }),
                  (0, r.jsx)(k, { index: 5 }),
                ],
              }),
            }),
          ],
        });
      var P = n(30285),
        C = n(76707),
        M = n(70964),
        N = n(35169),
        O = n(6874),
        R = n.n(O),
        _ = n(62177);
      let D = () => {
        let e = (0, _.mN)({
          mode: "onChange",
          defaultValues: { email: "", password: "" },
        });
        return (0, r.jsx)(C.A, {
          children: (0, r.jsx)(_.Op, {
            ...e,
            children: (0, r.jsx)(a.A, {
              title: "Verify Your Email",
              description: "Enter the 6-digit OTP sent to your email address.",
              footerChildren: (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(P.$, {
                    className:
                      "w-full hover:bg-orange-400/90 bg-orange-400/80 rounded ",
                    children: "Verify",
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "flex justify-center items-center w-full py-4 gap-2",
                    children: [
                      (0, r.jsx)("p", { children: "Didn't receive Otp? " }),
                      (0, r.jsx)(R(), {
                        href: M.d.forgotPassword,
                        className:
                          "text-sm text-primary font-bold hover:underline",
                        children: "Resend",
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className:
                      "p-4 gap-2 flex justify-between items-center text-sm text-muted-foreground",
                    children: [
                      (0, r.jsx)(N.A, { className: "w-5 h-5" }),
                      (0, r.jsx)(R(), {
                        href: M.d.signIn,
                        className: "text-sm text-primary hover:underline ",
                        children: "Back to Login",
                      }),
                    ],
                  }),
                ],
              }),
              children: (0, r.jsx)(E, {}),
            }),
          }),
        });
      };
    },
    27261: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 7765));
    },
    30285: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => s });
      var r = n(95155),
        a = n(99708),
        l = n(74466);
      n(12115);
      var i = n(59434);
      let o = (0, l.F)(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        {
          variants: {
            variant: {
              default:
                "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
              destructive:
                "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              secondary:
                "bg-orange-400/70 text-white shadow-xs hover:bg-orange-400/80 w-full cursor-pointer",
              ghost:
                "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary underline-offset-4 hover:underline",
              cancel: "bg-pagination-gray text-gray shadow-xs hover:bg-red-600",
            },
            size: {
              default: "h-9 px-4 py-2 has-[>svg]:px-3",
              sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
              lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
              icon: "size-9",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        },
      );
      function s(e) {
        let { className: t, variant: n, size: l, asChild: s = !1, ...u } = e,
          d = s ? a.DX : "button";
        return (0, r.jsx)(d, {
          "data-slot": "button",
          "className": (0, i.cn)(o({ variant: n, size: l, className: t })),
          ...u,
        });
      }
    },
    35169: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      let r = (0, n(19946).A)("arrow-left", [
        ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
        ["path", { d: "M19 12H5", key: "x3x0zl" }],
      ]);
    },
    59434: (e, t, n) => {
      "use strict";
      n.d(t, { cn: () => l });
      var r = n(52596),
        a = n(39688);
      function l() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, a.QP)((0, r.$)(t));
      }
    },
    66695: (e, t, n) => {
      "use strict";
      n.d(t, {
        BT: () => s,
        Wu: () => u,
        ZB: () => o,
        Zp: () => l,
        aR: () => i,
        wL: () => d,
      });
      var r = n(95155);
      n(12115);
      var a = n(59434);
      function l(e) {
        let { className: t, ...n } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card",
          "className": (0, a.cn)(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-md border py-6 ",
            t,
          ),
          ...n,
        });
      }
      function i(e) {
        let { className: t, ...n } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-header",
          "className": (0, a.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            t,
          ),
          ...n,
        });
      }
      function o(e) {
        let { className: t, ...n } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-title",
          "className": (0, a.cn)("leading-none font-semibold", t),
          ...n,
        });
      }
      function s(e) {
        let { className: t, ...n } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-description",
          "className": (0, a.cn)("text-muted-foreground text-sm", t),
          ...n,
        });
      }
      function u(e) {
        let { className: t, ...n } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-content",
          "className": (0, a.cn)("px-6", t),
          ...n,
        });
      }
      function d(e) {
        let { className: t, ...n } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-footer",
          "className": (0, a.cn)("flex items-center px-6 [.border-t]:pt-6", t),
          ...n,
        });
      }
    },
    68008: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => l });
      var r = n(95155),
        a = n(66695);
      n(12115);
      let l = (e) => {
        let { title: t, description: n, children: l, footerChildren: i } = e;
        return (0, r.jsxs)(a.Zp, {
          className: "w-full max-w-sm gap-0 rounded-sm px-4 py-6",
          children: [
            (0, r.jsxs)(a.aR, {
              className: "text-center mb-6",
              children: [
                (0, r.jsx)(a.ZB, {
                  className: "text-2xl font-light ",
                  children: t,
                }),
                (0, r.jsx)(a.BT, { children: n }),
              ],
            }),
            (0, r.jsx)(a.Wu, { children: l }),
            i && (0, r.jsx)(a.wL, { className: "flex-col gap-2", children: i }),
          ],
        });
      };
    },
    70964: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => a, d: () => r });
      let r = { signIn: "/sign-in", forgotPassword: "/forgot-password" },
        a = {
          admin: {
            manageDashboard: "/admin/dashboard",
            manageBrands: "/brands",
            addBrand: "/brands/add-brand",
            editBrand: "/brands/edit-brand",
            viewBrand: "/brands/view-brand",
            manageOutlets: "/outlets",
            addOutlet: "/outlets/add-outlet",
            editOutlet: "/outlets/edit-outlet",
            viewOutlet: "/outlets/view-outlet",
            manageSuppliers: "/suppliers",
            manageSettings: "/settings",
            manageIngredients: "/ingredients",
          },
          brandManager: { manageDashboard: "/brand-manager/dashboard" },
          outletManager: { manageDashboard: "/outlet-manager/dashboard" },
          finance: { manageDashboard: "/dashboard" },
          staff: { manageDashboard: "/stuff/dashboard" },
          common: {
            manageSalesReport: "/sales-report",
            manageFinancialReports: "/financial-reports",
            manageCatalogue: "/catalogue",
            manageSettings: "/settings",
            manageProduction: "/production",
            manageStockCount: "/stock-count",
            manageTransfers: "/transfers",
            manageWaste: "/waste",
            managePurchaseOrder: "/purchase-order",
            manageItemReceiving: "/item-receiving",
            manageRecipes: "/recipes",
            manageTransfer: "/transfers",
            managePurchaseReport: "/reports",
            manageUsers: "/users",
          },
        };
    },
    76707: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      var r = n(95155);
      n(12115);
      let a = (e) => {
        let { children: t } = e;
        return (0, r.jsx)("div", {
          className:
            "flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
          children: t,
        });
      };
    },
    85057: (e, t, n) => {
      "use strict";
      n.d(t, { Label: () => i });
      var r = n(95155);
      n(12115);
      var a = n(40968),
        l = n(59434);
      function i(e) {
        let { className: t, ...n } = e;
        return (0, r.jsx)(a.b, {
          "data-slot": "label",
          "className": (0, l.cn)(
            "flex items-center gap-2 text-sm leading-none  select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            t,
          ),
          ...n,
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [5, 9317, 8441, 1684, 7358], () => t(27261)), (_N_E = e.O()));
  },
]);

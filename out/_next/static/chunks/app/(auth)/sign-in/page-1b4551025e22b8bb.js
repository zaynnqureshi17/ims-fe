(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6006],
  {
    6654: (e, a, t) => {
      "use strict";
      (Object.defineProperty(a, "__esModule", { value: !0 }),
        Object.defineProperty(a, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }));
      let r = t(12115);
      function s(e, a) {
        let t = (0, r.useRef)(null),
          s = (0, r.useRef)(null);
        return (0, r.useCallback)(
          (r) => {
            if (null === r) {
              let e = t.current;
              e && ((t.current = null), e());
              let a = s.current;
              a && ((s.current = null), a());
            } else (e && (t.current = n(e, r)), a && (s.current = n(a, r)));
          },
          [e, a],
        );
      }
      function n(e, a) {
        if ("function" != typeof e)
          return (
            (e.current = a),
            () => {
              e.current = null;
            }
          );
        {
          let t = e(a);
          return "function" == typeof t ? t : () => e(null);
        }
      }
      ("function" == typeof a.default ||
        ("object" == typeof a.default && null !== a.default)) &&
        void 0 === a.default.__esModule &&
        (Object.defineProperty(a.default, "__esModule", { value: !0 }),
        Object.assign(a.default, a),
        (e.exports = a.default));
    },
    10305: (e, a, t) => {
      "use strict";
      t.d(a, { default: () => h });
      var r = t(95155),
        s = t(68008),
        n = t(76431),
        i = t(21865),
        d = t(30285),
        l = t(76707),
        o = t(82507),
        c = t(70964);
      let u = (0, t(19946).A)("loader-circle", [
        ["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }],
      ]);
      var m = t(6874),
        g = t.n(m),
        f = t(12115),
        p = t(62177);
      let h = () => {
        let [e, a] = (0, f.useState)(!1),
          t = (0, o.y)(),
          m = (0, p.mN)({
            mode: "onChange",
            defaultValues: { email: "", password: "" },
          }),
          { handleSubmit: h } = m,
          x = async (e) => {
            a(!0);
            let r = e.email,
              s = "";
            if ("admin@example.com" === r) s = "/admin/dashboard";
            else if ("finance@example.com" === r)
              s = "/finance-manager/dashboard";
            else if ("outlet@example.com" === r)
              s = "/outlet-manager/dashboard";
            else if ("staff@example.com" === r) s = "/stuff/dashboard";
            else if ("brand@example.com" === r) s = "/brand-manager/dashboard";
            else {
              (console.warn("Unknown email. Please re-enter your credentials."),
                a(!1));
              return;
            }
            t(s);
          };
        return (0, r.jsx)(l.A, {
          children: (0, r.jsx)(p.Op, {
            ...m,
            children: (0, r.jsxs)(s.A, {
              title: "Welcome Back",
              description: "Sign in to your account",
              footerChildren: (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("div", {
                    className: "flex justify-end w-full py-4",
                    children: (0, r.jsx)(g(), {
                      href: c.d.forgotPassword,
                      className: "text-sm text-primary hover:underline",
                      children: "Forgot Password?",
                    }),
                  }),
                  (0, r.jsx)(d.$, {
                    type: "submit",
                    disabled: e,
                    variant: "secondary",
                    onClick: h(x),
                    children: e
                      ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)(u, {
                              className: "animate-spin w-4 h-4",
                            }),
                            "Signing in...",
                          ],
                        })
                      : "Sign in",
                  }),
                  (0, r.jsxs)("p", {
                    className: "text-sm text-muted-foreground text-center mt-4",
                    children: [
                      "Don't have an account?",
                      " ",
                      (0, r.jsx)(g(), {
                        href: "/auth/sign-up",
                        className: "text-primary hover:underline",
                        children: "Sign Up",
                      }),
                    ],
                  }),
                ],
              }),
              children: [
                (0, r.jsx)(n.A, {
                  name: "email",
                  label: "Email Address",
                  placeholder: "Enter your Email",
                  type: "email",
                }),
                (0, r.jsx)(i.A, {
                  name: "password",
                  label: "Password",
                  placeholder: "Enter your password",
                }),
              ],
            }),
          }),
        });
      };
    },
    21865: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => u });
      var r = t(95155),
        s = t(12115),
        n = t(62523),
        i = t(85057),
        d = t(19946);
      let l = (0, d.A)("eye-off", [
          [
            "path",
            {
              d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
              key: "ct8e1f",
            },
          ],
          [
            "path",
            { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" },
          ],
          [
            "path",
            {
              d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
              key: "13bj9a",
            },
          ],
          ["path", { d: "m2 2 20 20", key: "1ooewy" }],
        ]),
        o = (0, d.A)("eye", [
          [
            "path",
            {
              d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
              key: "1nclc0",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
        ]);
      var c = t(62177);
      let u = (e) => {
        let { name: a, label: t, placeholder: d, ...u } = e,
          [m, g] = (0, s.useState)(!1),
          { register: f } = (0, c.xW)();
        return (0, r.jsxs)("div", {
          className: "space-y-1 relative mb-4",
          children: [
            (0, r.jsx)(i.Label, { children: t }),
            (0, r.jsxs)("div", {
              className: "relative",
              children: [
                (0, r.jsx)(n.p, {
                  ...f(a),
                  type: m ? "text" : "password",
                  placeholder: d,
                  className: "pr-10",
                  ...u,
                }),
                (0, r.jsx)("button", {
                  type: "button",
                  onClick: () => g(!m),
                  className:
                    "absolute inset-y-0 right-2 flex items-center text-muted-foreground",
                  children: m
                    ? (0, r.jsx)(l, { className: "w-5 h-5" })
                    : (0, r.jsx)(o, { className: "w-5 h-5" }),
                }),
              ],
            }),
          ],
        });
      };
    },
    30285: (e, a, t) => {
      "use strict";
      t.d(a, { $: () => l });
      var r = t(95155),
        s = t(99708),
        n = t(74466);
      t(12115);
      var i = t(59434);
      let d = (0, n.F)(
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
      function l(e) {
        let { className: a, variant: t, size: n, asChild: l = !1, ...o } = e,
          c = l ? s.DX : "button";
        return (0, r.jsx)(c, {
          "data-slot": "button",
          "className": (0, i.cn)(d({ variant: t, size: n, className: a })),
          ...o,
        });
      }
    },
    35695: (e, a, t) => {
      "use strict";
      var r = t(18999);
      (t.o(r, "usePathname") &&
        t.d(a, {
          usePathname: function () {
            return r.usePathname;
          },
        }),
        t.o(r, "useRouter") &&
          t.d(a, {
            useRouter: function () {
              return r.useRouter;
            },
          }),
        t.o(r, "useSearchParams") &&
          t.d(a, {
            useSearchParams: function () {
              return r.useSearchParams;
            },
          }));
    },
    59434: (e, a, t) => {
      "use strict";
      t.d(a, { cn: () => n });
      var r = t(52596),
        s = t(39688);
      function n() {
        for (var e = arguments.length, a = Array(e), t = 0; t < e; t++)
          a[t] = arguments[t];
        return (0, s.QP)((0, r.$)(a));
      }
    },
    62523: (e, a, t) => {
      "use strict";
      t.d(a, { p: () => n });
      var r = t(95155);
      t(12115);
      var s = t(59434);
      function n(e) {
        let { className: a, type: t, ...n } = e;
        return (0, r.jsx)("input", {
          "type": t,
          "data-slot": "input",
          "className": (0, s.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            a,
          ),
          ...n,
        });
      }
    },
    65505: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 10305));
    },
    66695: (e, a, t) => {
      "use strict";
      t.d(a, {
        BT: () => l,
        Wu: () => o,
        ZB: () => d,
        Zp: () => n,
        aR: () => i,
        wL: () => c,
      });
      var r = t(95155);
      t(12115);
      var s = t(59434);
      function n(e) {
        let { className: a, ...t } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card",
          "className": (0, s.cn)(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-md border py-6 ",
            a,
          ),
          ...t,
        });
      }
      function i(e) {
        let { className: a, ...t } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-header",
          "className": (0, s.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            a,
          ),
          ...t,
        });
      }
      function d(e) {
        let { className: a, ...t } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-title",
          "className": (0, s.cn)("leading-none font-semibold", a),
          ...t,
        });
      }
      function l(e) {
        let { className: a, ...t } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-description",
          "className": (0, s.cn)("text-muted-foreground text-sm", a),
          ...t,
        });
      }
      function o(e) {
        let { className: a, ...t } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-content",
          "className": (0, s.cn)("px-6", a),
          ...t,
        });
      }
      function c(e) {
        let { className: a, ...t } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-footer",
          "className": (0, s.cn)("flex items-center px-6 [.border-t]:pt-6", a),
          ...t,
        });
      }
    },
    68008: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => n });
      var r = t(95155),
        s = t(66695);
      t(12115);
      let n = (e) => {
        let { title: a, description: t, children: n, footerChildren: i } = e;
        return (0, r.jsxs)(s.Zp, {
          className: "w-full max-w-sm gap-0 rounded-sm px-4 py-6",
          children: [
            (0, r.jsxs)(s.aR, {
              className: "text-center mb-6",
              children: [
                (0, r.jsx)(s.ZB, {
                  className: "text-2xl font-light ",
                  children: a,
                }),
                (0, r.jsx)(s.BT, { children: t }),
              ],
            }),
            (0, r.jsx)(s.Wu, { children: n }),
            i && (0, r.jsx)(s.wL, { className: "flex-col gap-2", children: i }),
          ],
        });
      };
    },
    70964: (e, a, t) => {
      "use strict";
      t.d(a, { N: () => s, d: () => r });
      let r = { signIn: "/sign-in", forgotPassword: "/forgot-password" },
        s = {
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
    76431: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => d });
      var r = t(95155);
      t(12115);
      var s = t(62177),
        n = t(62523),
        i = t(85057);
      let d = (e) => {
        let {
            label: a,
            placeholder: t,
            type: d,
            rightIcon: l,
            name: o,
            className: c,
            ...u
          } = e,
          { register: m } = (0, s.xW)();
        return (0, r.jsxs)("div", {
          className: "mb-4 w-full space-y-3 ".concat(c),
          children: [
            (0, r.jsx)(i.Label, { className: "", children: a }),
            (0, r.jsxs)("div", {
              className: "relative",
              children: [
                (0, r.jsx)(n.p, {
                  ...m(o),
                  type: d,
                  placeholder: t,
                  className: " bg-white ".concat(l ? "pr-10" : ""),
                  ...u,
                }),
                l &&
                  (0, r.jsx)("div", {
                    className:
                      "absolute inset-y-0 right-3 flex items-center text-muted-foreground cursor-pointer",
                    children: l,
                  }),
              ],
            }),
          ],
        });
      };
    },
    76707: (e, a, t) => {
      "use strict";
      t.d(a, { A: () => s });
      var r = t(95155);
      t(12115);
      let s = (e) => {
        let { children: a } = e;
        return (0, r.jsx)("div", {
          className:
            "flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
          children: a,
        });
      };
    },
    82507: (e, a, t) => {
      "use strict";
      t.d(a, { y: () => n });
      var r = t(35695),
        s = t(12115);
      let n = () => {
        let e = (0, r.useRouter)();
        return (0, s.useCallback)(
          (a) => {
            try {
              (e.prefetch(a), e.push(a));
            } catch (e) {
              console.error("Navigation error:", e);
            }
          },
          [e],
        );
      };
    },
    85057: (e, a, t) => {
      "use strict";
      t.d(a, { Label: () => i });
      var r = t(95155);
      t(12115);
      var s = t(40968),
        n = t(59434);
      function i(e) {
        let { className: a, ...t } = e;
        return (0, r.jsx)(s.b, {
          "data-slot": "label",
          "className": (0, n.cn)(
            "flex items-center gap-2 text-sm leading-none  select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            a,
          ),
          ...t,
        });
      }
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    (e.O(0, [5, 9317, 8441, 1684, 7358], () => a(65505)), (_N_E = e.O()));
  },
]);

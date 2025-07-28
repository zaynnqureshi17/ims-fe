(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3180],
  {
    6654: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }));
      let a = r(12115);
      function n(e, t) {
        let r = (0, a.useRef)(null),
          n = (0, a.useRef)(null);
        return (0, a.useCallback)(
          (a) => {
            if (null === a) {
              let e = r.current;
              e && ((r.current = null), e());
              let t = n.current;
              t && ((n.current = null), t());
            } else (e && (r.current = s(e, a)), t && (n.current = s(t, a)));
          },
          [e, t],
        );
      }
      function s(e, t) {
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
    17307: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => p });
      var a = r(95155),
        n = r(68008),
        s = r(21865),
        d = r(30285),
        i = r(76707),
        o = r(70964),
        l = r(35169),
        c = r(6874),
        u = r.n(c),
        g = r(62177);
      let p = () => {
        let e = (0, g.mN)({
          mode: "onChange",
          defaultValues: { email: "", password: "" },
        });
        return (0, a.jsx)(i.A, {
          children: (0, a.jsx)(g.Op, {
            ...e,
            children: (0, a.jsxs)(n.A, {
              title: "Reset Your Password",
              description: "Enter your new password and verification code.",
              footerChildren: (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(d.$, {
                    className:
                      "w-full hover:bg-orange-400/90 bg-orange-400/80 rounded ",
                    children: "Reset Password",
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "p-4 gap-2 flex justify-between items-center text-sm text-muted-foreground",
                    children: [
                      (0, a.jsx)(l.A, { className: "w-5 h-5" }),
                      (0, a.jsx)(u(), {
                        href: o.d.signIn,
                        className: "text-sm text-primary hover:underline ",
                        children: "Back to Login",
                      }),
                    ],
                  }),
                ],
              }),
              children: [
                (0, a.jsx)(s.A, {
                  label: "New Password",
                  placeholder: "Enter new password",
                  name: "password",
                }),
                (0, a.jsx)(s.A, {
                  label: "Confirm Password",
                  placeholder: "Confirm new password",
                  name: "password",
                }),
              ],
            }),
          }),
        });
      };
    },
    21865: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => u });
      var a = r(95155),
        n = r(12115),
        s = r(62523),
        d = r(85057),
        i = r(19946);
      let o = (0, i.A)("eye-off", [
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
        l = (0, i.A)("eye", [
          [
            "path",
            {
              d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
              key: "1nclc0",
            },
          ],
          ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
        ]);
      var c = r(62177);
      let u = (e) => {
        let { name: t, label: r, placeholder: i, ...u } = e,
          [g, p] = (0, n.useState)(!1),
          { register: f } = (0, c.xW)();
        return (0, a.jsxs)("div", {
          className: "space-y-1 relative mb-4",
          children: [
            (0, a.jsx)(d.Label, { children: r }),
            (0, a.jsxs)("div", {
              className: "relative",
              children: [
                (0, a.jsx)(s.p, {
                  ...f(t),
                  type: g ? "text" : "password",
                  placeholder: i,
                  className: "pr-10",
                  ...u,
                }),
                (0, a.jsx)("button", {
                  type: "button",
                  onClick: () => p(!g),
                  className:
                    "absolute inset-y-0 right-2 flex items-center text-muted-foreground",
                  children: g
                    ? (0, a.jsx)(o, { className: "w-5 h-5" })
                    : (0, a.jsx)(l, { className: "w-5 h-5" }),
                }),
              ],
            }),
          ],
        });
      };
    },
    30285: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => o });
      var a = r(95155),
        n = r(99708),
        s = r(74466);
      r(12115);
      var d = r(59434);
      let i = (0, s.F)(
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
      function o(e) {
        let { className: t, variant: r, size: s, asChild: o = !1, ...l } = e,
          c = o ? n.DX : "button";
        return (0, a.jsx)(c, {
          "data-slot": "button",
          "className": (0, d.cn)(i({ variant: r, size: s, className: t })),
          ...l,
        });
      }
    },
    35169: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => a });
      let a = (0, r(19946).A)("arrow-left", [
        ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
        ["path", { d: "M19 12H5", key: "x3x0zl" }],
      ]);
    },
    59434: (e, t, r) => {
      "use strict";
      r.d(t, { cn: () => s });
      var a = r(52596),
        n = r(39688);
      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, n.QP)((0, a.$)(t));
      }
    },
    62523: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => s });
      var a = r(95155);
      r(12115);
      var n = r(59434);
      function s(e) {
        let { className: t, type: r, ...s } = e;
        return (0, a.jsx)("input", {
          "type": r,
          "data-slot": "input",
          "className": (0, n.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t,
          ),
          ...s,
        });
      }
    },
    66695: (e, t, r) => {
      "use strict";
      r.d(t, {
        BT: () => o,
        Wu: () => l,
        ZB: () => i,
        Zp: () => s,
        aR: () => d,
        wL: () => c,
      });
      var a = r(95155);
      r(12115);
      var n = r(59434);
      function s(e) {
        let { className: t, ...r } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card",
          "className": (0, n.cn)(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-md border py-6 ",
            t,
          ),
          ...r,
        });
      }
      function d(e) {
        let { className: t, ...r } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-header",
          "className": (0, n.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            t,
          ),
          ...r,
        });
      }
      function i(e) {
        let { className: t, ...r } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-title",
          "className": (0, n.cn)("leading-none font-semibold", t),
          ...r,
        });
      }
      function o(e) {
        let { className: t, ...r } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-description",
          "className": (0, n.cn)("text-muted-foreground text-sm", t),
          ...r,
        });
      }
      function l(e) {
        let { className: t, ...r } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-content",
          "className": (0, n.cn)("px-6", t),
          ...r,
        });
      }
      function c(e) {
        let { className: t, ...r } = e;
        return (0, a.jsx)("div", {
          "data-slot": "card-footer",
          "className": (0, n.cn)("flex items-center px-6 [.border-t]:pt-6", t),
          ...r,
        });
      }
    },
    68008: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var a = r(95155),
        n = r(66695);
      r(12115);
      let s = (e) => {
        let { title: t, description: r, children: s, footerChildren: d } = e;
        return (0, a.jsxs)(n.Zp, {
          className: "w-full max-w-sm gap-0 rounded-sm px-4 py-6",
          children: [
            (0, a.jsxs)(n.aR, {
              className: "text-center mb-6",
              children: [
                (0, a.jsx)(n.ZB, {
                  className: "text-2xl font-light ",
                  children: t,
                }),
                (0, a.jsx)(n.BT, { children: r }),
              ],
            }),
            (0, a.jsx)(n.Wu, { children: s }),
            d && (0, a.jsx)(n.wL, { className: "flex-col gap-2", children: d }),
          ],
        });
      };
    },
    70964: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => n, d: () => a });
      let a = { signIn: "/sign-in", forgotPassword: "/forgot-password" },
        n = {
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
    76707: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      var a = r(95155);
      r(12115);
      let n = (e) => {
        let { children: t } = e;
        return (0, a.jsx)("div", {
          className:
            "flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
          children: t,
        });
      };
    },
    85057: (e, t, r) => {
      "use strict";
      r.d(t, { Label: () => d });
      var a = r(95155);
      r(12115);
      var n = r(40968),
        s = r(59434);
      function d(e) {
        let { className: t, ...r } = e;
        return (0, a.jsx)(n.b, {
          "data-slot": "label",
          "className": (0, s.cn)(
            "flex items-center gap-2 text-sm leading-none  select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            t,
          ),
          ...r,
        });
      }
    },
    88217: (e, t, r) => {
      Promise.resolve().then(r.bind(r, 17307));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [5, 9317, 8441, 1684, 7358], () => t(88217)), (_N_E = e.O()));
  },
]);

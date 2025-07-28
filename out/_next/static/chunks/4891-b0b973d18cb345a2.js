"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4891],
  {
    59409: (e, t, a) => {
      a.d(t, {
        Select: () => o,
        SelectContent: () => m,
        SelectItem: () => g,
        SelectTrigger: () => u,
        SelectValue: () => c,
      });
      var s = a(95155);
      a(12115);
      var n = a(93081),
        r = a(66474),
        d = a(5196),
        l = a(47863),
        i = a(59434);
      function o(e) {
        let { ...t } = e;
        return (0, s.jsx)(n.bL, { "data-slot": "select", ...t });
      }
      function c(e) {
        let { ...t } = e;
        return (0, s.jsx)(n.WT, { "data-slot": "select-value", ...t });
      }
      function u(e) {
        let { className: t, size: a = "default", children: d, ...l } = e;
        return (0, s.jsxs)(n.l9, {
          "data-slot": "select-trigger",
          "data-size": a,
          "className": (0, i.cn)(
            "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            t,
          ),
          ...l,
          "children": [
            d,
            (0, s.jsx)(n.In, {
              asChild: !0,
              children: (0, s.jsx)(r.A, { className: "size-4 opacity-50" }),
            }),
          ],
        });
      }
      function m(e) {
        let { className: t, children: a, position: r = "popper", ...d } = e;
        return (0, s.jsx)(n.ZL, {
          children: (0, s.jsxs)(n.UC, {
            "data-slot": "select-content",
            "className": (0, i.cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
              "popper" === r &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
              t,
            ),
            "position": r,
            ...d,
            "children": [
              (0, s.jsx)(x, {}),
              (0, s.jsx)(n.LM, {
                className: (0, i.cn)(
                  "p-1",
                  "popper" === r &&
                    "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1",
                ),
                children: a,
              }),
              (0, s.jsx)(f, {}),
            ],
          }),
        });
      }
      function g(e) {
        let { className: t, children: a, ...r } = e;
        return (0, s.jsxs)(n.q7, {
          "data-slot": "select-item",
          "className": (0, i.cn)(
            "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
            t,
          ),
          ...r,
          "children": [
            (0, s.jsx)("span", {
              className:
                "absolute right-2 flex size-3.5 items-center justify-center",
              children: (0, s.jsx)(n.VF, {
                children: (0, s.jsx)(d.A, { className: "size-4" }),
              }),
            }),
            (0, s.jsx)(n.p4, { children: a }),
          ],
        });
      }
      function x(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(n.PP, {
          "data-slot": "select-scroll-up-button",
          "className": (0, i.cn)(
            "flex cursor-default items-center justify-center py-1",
            t,
          ),
          ...a,
          "children": (0, s.jsx)(l.A, { className: "size-4" }),
        });
      }
      function f(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(n.wn, {
          "data-slot": "select-scroll-down-button",
          "className": (0, i.cn)(
            "flex cursor-default items-center justify-center py-1",
            t,
          ),
          ...a,
          "children": (0, s.jsx)(r.A, { className: "size-4" }),
        });
      }
    },
    59434: (e, t, a) => {
      a.d(t, { cn: () => r });
      var s = a(52596),
        n = a(39688);
      function r() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, n.QP)((0, s.$)(t));
      }
    },
    70964: (e, t, a) => {
      a.d(t, { N: () => n, d: () => s });
      let s = { signIn: "/sign-in", forgotPassword: "/forgot-password" },
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
    82507: (e, t, a) => {
      a.d(t, { y: () => r });
      var s = a(35695),
        n = a(12115);
      let r = () => {
        let e = (0, s.useRouter)();
        return (0, n.useCallback)(
          (t) => {
            try {
              (e.prefetch(t), e.push(t));
            } catch (e) {
              console.error("Navigation error:", e);
            }
          },
          [e],
        );
      };
    },
    94891: (e, t, a) => {
      a.d(t, { default: () => N });
      var s = a(95155);
      a(12115);
      var n = a(6874),
        r = a.n(n);
      let d = (e) => {
        let { items: t } = e;
        return (0, s.jsx)("div", {
          className: "flex items-center space-x-2",
          children: t.map((e, a) =>
            (0, s.jsxs)(
              "div",
              {
                className: "flex items-center space-x-1",
                children: [
                  e.href && !e.active
                    ? (0, s.jsx)(r(), {
                        href: e.href,
                        className: "cursor-pointer",
                        prefetch: !0,
                        children: e.label,
                      })
                    : (0, s.jsx)("span", {
                        className: "text-xl cursor-default ".concat(
                          e.active
                            ? "text-accent-orange font-medium"
                            : "text-black font-light",
                        ),
                        children: e.label,
                      }),
                  a < t.length - 1 &&
                    (0, s.jsx)("span", {
                      className: "text-accent-orange text-2xl",
                      children: "/",
                    }),
                ],
              },
              a,
            ),
          ),
        });
      };
      var l = a(54011),
        i = a(59434);
      function o(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(l.bL, {
          "data-slot": "avatar",
          "className": (0, i.cn)(
            "relative flex size-8 shrink-0 overflow-hidden rounded-full",
            t,
          ),
          ...a,
        });
      }
      function c(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(l.H4, {
          "data-slot": "avatar-fallback",
          "className": (0, i.cn)(
            "bg-muted flex size-full items-center justify-center rounded-full",
            t,
          ),
          ...a,
        });
      }
      var u = a(59409),
        m = a(82507),
        g = a(23861),
        x = a(66474),
        f = a(48698);
      function p(e) {
        let { ...t } = e;
        return (0, s.jsx)(f.bL, { "data-slot": "dropdown-menu", ...t });
      }
      function h(e) {
        let { ...t } = e;
        return (0, s.jsx)(f.l9, { "data-slot": "dropdown-menu-trigger", ...t });
      }
      function v(e) {
        let { className: t, sideOffset: a = 4, ...n } = e;
        return (0, s.jsx)(f.ZL, {
          children: (0, s.jsx)(f.UC, {
            "data-slot": "dropdown-menu-content",
            "sideOffset": a,
            "className": (0, i.cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
              t,
            ),
            ...n,
          }),
        });
      }
      function b(e) {
        let { className: t, inset: a, variant: n = "default", ...r } = e;
        return (0, s.jsx)(f.q7, {
          "data-slot": "dropdown-menu-item",
          "data-inset": a,
          "data-variant": n,
          "className": (0, i.cn)(
            "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            t,
          ),
          ...r,
        });
      }
      var j = a(70964);
      let w = () => {
          let e = (0, m.y)();
          return (0, s.jsxs)("div", {
            className: "flex items-center space-x-6",
            children: [
              (0, s.jsxs)(u.Select, {
                children: [
                  (0, s.jsx)(u.SelectTrigger, {
                    className: "w-[140px] h-9 text-sm",
                    children: (0, s.jsx)(u.SelectValue, {
                      placeholder: "Select Outlet",
                    }),
                  }),
                  (0, s.jsxs)(u.SelectContent, {
                    children: [
                      (0, s.jsx)(u.SelectItem, {
                        value: "outlet1",
                        children: "Outlet 1",
                      }),
                      (0, s.jsx)(u.SelectItem, {
                        value: "outlet2",
                        children: "Outlet 2",
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "relative",
                children: [
                  (0, s.jsx)(g.A, { className: "w-5 h-5 text-gray-600" }),
                  (0, s.jsx)("span", {
                    className:
                      "absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full",
                  }),
                ],
              }),
              (0, s.jsxs)(p, {
                children: [
                  (0, s.jsx)(h, {
                    asChild: !0,
                    children: (0, s.jsxs)("div", {
                      className: "flex items-center space-x-2 cursor-pointer",
                      children: [
                        (0, s.jsx)(o, {
                          className: "h-8 w-8",
                          children: (0, s.jsx)(c, { children: "AU" }),
                        }),
                        (0, s.jsxs)("div", {
                          className: "flex items-center space-x-1",
                          children: [
                            (0, s.jsx)("span", {
                              className: "text-sm font-medium text-gray-800",
                              children: "Admin User",
                            }),
                            (0, s.jsx)(x.A, {
                              className: "w-4 h-4 text-gray-500",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(v, {
                    className: "w-32",
                    children: (0, s.jsx)(b, {
                      onClick: () => {
                        e(j.d.signIn);
                      },
                      children: "Logout",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        N = (e) => {
          let { breadcrumbs: t } = e;
          return (0, s.jsxs)("div", {
            className:
              "flex justify-between items-center px-6 py-3 bg-white border-b w-full",
            children: [(0, s.jsx)(d, { items: t }), (0, s.jsx)(w, {})],
          });
        };
    },
  },
]);

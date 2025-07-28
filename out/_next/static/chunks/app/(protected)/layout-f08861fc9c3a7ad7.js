(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4163],
  {
    30285: (e, a, t) => {
      "use strict";
      t.d(a, { $: () => c });
      var n = t(95155),
        s = t(99708),
        o = t(74466);
      t(12115);
      var r = t(59434);
      let i = (0, o.F)(
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
      function c(e) {
        let { className: a, variant: t, size: o, asChild: c = !1, ...d } = e,
          l = c ? s.DX : "button";
        return (0, n.jsx)(l, {
          "data-slot": "button",
          "className": (0, r.cn)(i({ variant: t, size: o, className: a })),
          ...d,
        });
      }
    },
    41109: (e, a, t) => {
      "use strict";
      (t.r(a), t.d(a, { default: () => ee }));
      var n = t(95155),
        s = t(44638),
        o = t.n(s);
      let r = () =>
        (0, n.jsx)(o(), {
          color: "#FBAF3F",
          initialPosition: 0.08,
          crawlSpeed: 200,
          height: 4,
          crawl: !1,
          showSpinner: !1,
          easing: "ease",
          speed: 10,
          zIndex: 1600,
          showAtBottom: !1,
        });
      var i = t(71770),
        c = t.n(i),
        d = t(88106);
      function l(e) {
        let { ...a } = e;
        return (0, n.jsx)(d.bL, { "data-slot": "collapsible", ...a });
      }
      function g(e) {
        let { ...a } = e;
        return (0, n.jsx)(d.R6, { "data-slot": "collapsible-trigger", ...a });
      }
      var u = t(99708),
        m = t(74466),
        h = t(22432),
        p = t(12115),
        f = t(30285);
      t(62523);
      var v = t(15452),
        b = t(54416),
        x = t(59434);
      function w(e) {
        let { ...a } = e;
        return (0, n.jsx)(v.bL, { "data-slot": "sheet", ...a });
      }
      function R(e) {
        let { ...a } = e;
        return (0, n.jsx)(v.ZL, { "data-slot": "sheet-portal", ...a });
      }
      function N(e) {
        let { className: a, ...t } = e;
        return (0, n.jsx)(v.hJ, {
          "data-slot": "sheet-overlay",
          "className": (0, x.cn)(
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
            a,
          ),
          ...t,
        });
      }
      function j(e) {
        let { className: a, children: t, side: s = "right", ...o } = e;
        return (0, n.jsxs)(R, {
          children: [
            (0, n.jsx)(N, {}),
            (0, n.jsxs)(v.UC, {
              "data-slot": "sheet-content",
              "className": (0, x.cn)(
                "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
                "right" === s &&
                  "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
                "left" === s &&
                  "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
                "top" === s &&
                  "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
                "bottom" === s &&
                  "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
                a,
              ),
              ...o,
              "children": [
                t,
                (0, n.jsxs)(v.bm, {
                  className:
                    "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                  children: [
                    (0, n.jsx)(b.A, { className: "size-4" }),
                    (0, n.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function P(e) {
        let { className: a, ...t } = e;
        return (0, n.jsx)("div", {
          "data-slot": "sheet-header",
          "className": (0, x.cn)("flex flex-col gap-1.5 p-4", a),
          ...t,
        });
      }
      function y(e) {
        let { className: a, ...t } = e;
        return (0, n.jsx)(v.hE, {
          "data-slot": "sheet-title",
          "className": (0, x.cn)("text-foreground font-semibold", a),
          ...t,
        });
      }
      function k(e) {
        let { className: a, ...t } = e;
        return (0, n.jsx)(v.VY, {
          "data-slot": "sheet-description",
          "className": (0, x.cn)("text-muted-foreground text-sm", a),
          ...t,
        });
      }
      var S = t(89613);
      function C(e) {
        let { delayDuration: a = 0, ...t } = e;
        return (0, n.jsx)(S.Kq, {
          "data-slot": "tooltip-provider",
          "delayDuration": a,
          ...t,
        });
      }
      function O(e) {
        let { ...a } = e;
        return (0, n.jsx)(C, {
          children: (0, n.jsx)(S.bL, { "data-slot": "tooltip", ...a }),
        });
      }
      function D(e) {
        let { ...a } = e;
        return (0, n.jsx)(S.l9, { "data-slot": "tooltip-trigger", ...a });
      }
      function z(e) {
        let { className: a, sideOffset: t = 0, children: s, ...o } = e;
        return (0, n.jsx)(S.ZL, {
          children: (0, n.jsxs)(S.UC, {
            "data-slot": "tooltip-content",
            "sideOffset": t,
            "className": (0, x.cn)(
              "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
              a,
            ),
            ...o,
            "children": [
              s,
              (0, n.jsx)(S.i3, {
                className:
                  "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]",
              }),
            ],
          }),
        });
      }
      let T = p.createContext(null);
      function _() {
        let e = p.useContext(T);
        if (!e)
          throw Error("useSidebar must be used within a SidebarProvider.");
        return e;
      }
      function I(e) {
        let {
            defaultOpen: a = !0,
            open: t,
            onOpenChange: s,
            className: o,
            style: r,
            children: i,
            ...c
          } = e,
          d = (function () {
            let [e, a] = (0, p.useState)(!1);
            return (
              (0, p.useEffect)(() => {
                let e = () => a(window.innerWidth < 768);
                return (
                  e(),
                  window.addEventListener("resize", e),
                  () => window.removeEventListener("resize", e)
                );
              }, []),
              e
            );
          })(),
          [l, g] = p.useState(!1),
          [u, m] = p.useState(a),
          h = null != t ? t : u,
          f = p.useCallback(
            (e) => {
              let a = "function" == typeof e ? e(h) : e;
              (s ? s(a) : m(a),
                (document.cookie = ""
                  .concat("sidebar_state", "=")
                  .concat(a, "; path=/; max-age=")
                  .concat(604800)));
            },
            [s, h],
          ),
          v = p.useCallback(() => (d ? g((e) => !e) : f((e) => !e)), [d, f, g]);
        p.useEffect(() => {
          let e = (e) => {
            "b" === e.key &&
              (e.metaKey || e.ctrlKey) &&
              (e.preventDefault(), v());
          };
          return (
            window.addEventListener("keydown", e),
            () => window.removeEventListener("keydown", e)
          );
        }, [v]);
        let b = h ? "expanded" : "collapsed",
          w = p.useMemo(
            () => ({
              state: b,
              open: h,
              setOpen: f,
              isMobile: d,
              openMobile: l,
              setOpenMobile: g,
              toggleSidebar: v,
            }),
            [b, h, f, d, l, g, v],
          );
        return (0, n.jsx)(T.Provider, {
          value: w,
          children: (0, n.jsx)(C, {
            delayDuration: 0,
            children: (0, n.jsx)("div", {
              "data-slot": "sidebar-wrapper",
              "style": {
                "--sidebar-width": "16rem",
                "--sidebar-width-icon": "3rem",
                ...r,
              },
              "className": (0, x.cn)(
                "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
                o,
              ),
              ...c,
              "children": i,
            }),
          }),
        });
      }
      function W(e) {
        let {
            side: a = "left",
            variant: t = "sidebar",
            collapsible: s = "offcanvas",
            className: o,
            children: r,
            ...i
          } = e,
          { isMobile: c, state: d, openMobile: l, setOpenMobile: g } = _();
        return "none" === s
          ? (0, n.jsx)("div", {
              "data-slot": "sidebar",
              "className": (0, x.cn)(
                "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
                o,
              ),
              ...i,
              "children": r,
            })
          : c
            ? (0, n.jsx)(w, {
                open: l,
                onOpenChange: g,
                ...i,
                children: (0, n.jsxs)(j, {
                  "data-sidebar": "sidebar",
                  "data-slot": "sidebar",
                  "data-mobile": "true",
                  "className":
                    "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
                  "style": { "--sidebar-width": "18rem" },
                  "side": a,
                  "children": [
                    (0, n.jsxs)(P, {
                      className: "sr-only",
                      children: [
                        (0, n.jsx)(y, { children: "Sidebar" }),
                        (0, n.jsx)(k, {
                          children: "Displays the mobile sidebar.",
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "flex h-full w-full flex-col",
                      children: r,
                    }),
                  ],
                }),
              })
            : (0, n.jsxs)("div", {
                "className":
                  "group peer text-sidebar-foreground hidden md:block",
                "data-state": d,
                "data-collapsible": "collapsed" === d ? s : "",
                "data-variant": t,
                "data-side": a,
                "data-slot": "sidebar",
                "children": [
                  (0, n.jsx)("div", {
                    "data-slot": "sidebar-gap",
                    "className": (0, x.cn)(
                      "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
                      "group-data-[collapsible=offcanvas]:w-0",
                      "group-data-[side=right]:rotate-180",
                      "floating" === t || "inset" === t
                        ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
                        : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
                    ),
                  }),
                  (0, n.jsx)("div", {
                    "data-slot": "sidebar-container",
                    "className": (0, x.cn)(
                      "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
                      "left" === a
                        ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                        : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
                      "floating" === t || "inset" === t
                        ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
                        : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
                      o,
                    ),
                    ...i,
                    "children": (0, n.jsx)("div", {
                      "data-sidebar": "sidebar",
                      "data-slot": "sidebar-inner",
                      "className":
                        " group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                      "children": r,
                    }),
                  }),
                ],
              });
      }
      function L(e) {
        let { className: a, onClick: t, ...s } = e,
          { toggleSidebar: o } = _();
        return (0, n.jsxs)(f.$, {
          "data-sidebar": "trigger",
          "data-slot": "sidebar-trigger",
          "variant": "ghost",
          "size": "icon",
          "className": (0, x.cn)("size-7 ", a),
          "onClick": (e) => {
            (null == t || t(e), o());
          },
          ...s,
          "children": [
            (0, n.jsx)(h.A, {}),
            (0, n.jsx)("span", {
              className: "sr-only",
              children: "Toggle Sidebar",
            }),
          ],
        });
      }
      function E(e) {
        let { className: a, ...t } = e;
        return (0, n.jsx)("div", {
          "data-slot": "sidebar-header",
          "data-sidebar": "header",
          "className": (0, x.cn)("flex flex-col gap-2 p-2", a),
          ...t,
        });
      }
      function U(e) {
        let { className: a, ...t } = e;
        return (0, n.jsx)("div", {
          "data-slot": "sidebar-content",
          "data-sidebar": "content",
          "className": (0, x.cn)(
            "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
            a,
          ),
          ...t,
        });
      }
      function B(e) {
        let { className: a, ...t } = e;
        return (0, n.jsx)("div", {
          "data-slot": "sidebar-group",
          "data-sidebar": "group",
          "className": (0, x.cn)(
            "relative flex w-full min-w-0 flex-col p-2",
            a,
          ),
          ...t,
        });
      }
      function F(e) {
        let { className: a, ...t } = e;
        return (0, n.jsx)("ul", {
          "data-slot": "sidebar-menu",
          "data-sidebar": "menu",
          "className": (0, x.cn)("flex w-full min-w-0 flex-col gap-1", a),
          ...t,
        });
      }
      function M(e) {
        let { className: a, ...t } = e;
        return (0, n.jsx)("li", {
          "data-slot": "sidebar-menu-item",
          "data-sidebar": "menu-item",
          "className": (0, x.cn)("group/menu-item relative", a),
          ...t,
        });
      }
      let A = (0, m.F)("", {
        variants: {
          variant: {
            default: "",
            outline:
              "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
          },
          size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
          },
        },
        defaultVariants: { variant: "default", size: "default" },
      });
      function K(e) {
        let {
            asChild: a = !1,
            isActive: t = !1,
            variant: s = "default",
            size: o = "default",
            tooltip: r,
            className: i,
            ...c
          } = e,
          d = a ? u.DX : "button",
          { isMobile: l, state: g } = _(),
          m = (0, n.jsx)(d, {
            "data-slot": "sidebar-menu-button",
            "data-sidebar": "menu-button",
            "data-size": o,
            "data-active": t,
            "className": (0, x.cn)(A({ variant: s, size: o }), i),
            ...c,
          });
        return r
          ? ("string" == typeof r && (r = { children: r }),
            (0, n.jsxs)(O, {
              children: [
                (0, n.jsx)(D, { asChild: !0, children: m }),
                (0, n.jsx)(z, {
                  side: "right",
                  align: "center",
                  hidden: "collapsed" !== g || l,
                  ...r,
                }),
              ],
            }))
          : m;
      }
      var V = t(66766),
        $ = t(6874),
        X = t.n($),
        Z = t(35695);
      function q(e) {
        var a;
        let { roleRoutes: t } = e,
          { state: s } = _(),
          o = (0, Z.usePathname)().split("/").slice(2).join("/"),
          r = c()(o, null == t || null == (a = t[o]) ? void 0 : a.activeRoute);
        return (0, n.jsx)(B, {
          children: (0, n.jsx)(F, {
            className: "flex flex-col gap-2",
            children: Object.entries(t).map((e) => {
              let [a, t] = e;
              return (0, n.jsxs)(
                l,
                {
                  defaultOpen: r,
                  className:
                    "group/collapsible flex justify-start items-center gap-1 text-white ".concat(
                      "collapsed" === s
                        ? ""
                        : "hover:bg-orange-200/10 rounded-md",
                      " ",
                    ),
                  children: [
                    (0, n.jsx)(g, {
                      asChild: !0,
                      className: "w-auto px-2",
                      children: (0, n.jsx)(K, {
                        tooltip: t.title,
                        size: "collapsed" === s ? "lg" : "default",
                        variant: "default",
                        children: (0, n.jsx)(V.default, {
                          className: "transition-all duration-300 ",
                          src: t.icon,
                          alt: t.title,
                          width: 24,
                          height: 24,
                        }),
                      }),
                    }),
                    "collapsed" !== s &&
                      (0, n.jsx)(X(), {
                        href: t.path,
                        className: "w-full",
                        children: (0, n.jsx)(M, {
                          children: (0, n.jsx)("span", {
                            className: "text-sm",
                            children: t.title,
                          }),
                        }),
                      }),
                  ],
                },
                a,
              );
            }),
          }),
        });
      }
      var J = t(83415),
        Q = t(70964);
      let Y = {
          admin: {
            dashboard: {
              path: Q.N.admin.manageDashboard,
              title: "Dashboard",
              icon: "".concat(J.w7, "dashboard.svg"),
              activeRoute: "dashboard",
            },
            manageCatalogue: {
              path: Q.N.common.manageCatalogue,
              title: "Catalogue",
              icon: "".concat(J.w7, "catalogue.svg"),
              activeRoute: "manageCatalogue",
            },
            manageStockCount: {
              path: Q.N.common.manageStockCount,
              title: "Stock Count",
              icon: "".concat(J.w7, "stock-count.svg"),
              activeRoute: "manageStockCount",
            },
            manageItemReceiving: {
              path: Q.N.common.manageItemReceiving,
              title: "Item Receiving",
              icon: "".concat(J.w7, "item-receiving.svg"),
              activeRoute: "manageItemReceiving",
            },
            manageUsers: {
              path: Q.N.common.manageUsers,
              title: "Users",
              icon: "".concat(J.w7, "users.svg"),
              activeRoute: "manageUsers",
            },
            manageBrands: {
              path: Q.N.admin.manageBrands,
              title: "Brands",
              icon: "".concat(J.w7, "brands.svg"),
              activeRoute: "manageBrands",
            },
            manageOutlets: {
              path: Q.N.admin.manageOutlets,
              title: "Outlets",
              icon: "".concat(J.w7, "outlets.svg"),
              activeRoute: "manageOutlets",
            },
            managePurchaseReport: {
              path: Q.N.common.managePurchaseReport,
              title: "Reports",
              icon: "".concat(J.w7, "reports.svg"),
              activeRoute: "managePurchaseReport",
            },
            settings: {
              path: Q.N.common.manageSettings,
              title: "Settings",
              icon: "".concat(J.w7, "settings.svg"),
              activeRoute: "manageSettings",
            },
            manageWaste: {
              path: Q.N.common.manageWaste,
              title: "Waste",
              icon: "".concat(J.w7, "waste-restore.svg"),
              activeRoute: "manageWaste",
            },
            managePurchaseOrder: {
              path: Q.N.common.managePurchaseOrder,
              title: "Purchase Order",
              icon: "".concat(J.w7, "cart.svg"),
              activeRoute: "managePurchaseOrder",
            },
            manageRecipes: {
              path: Q.N.common.manageRecipes,
              title: "Recipes",
              icon: "".concat(J.w7, "recipes.svg"),
              activeRoute: "manageRecipes",
            },
            manageSettings: {
              path: Q.N.admin.manageSettings,
              title: "Settings",
              icon: "".concat(J.w7, "settings.svg"),
              activeRoute: "manageSettings",
            },
            manageTransfers: {
              path: Q.N.common.manageTransfers,
              title: "Transfer",
              icon: "".concat(J.w7, "transfers.svg"),
              activeRoute: "manageTransfers",
            },
            manageProduction: {
              path: Q.N.common.manageProduction,
              title: "Production",
              icon: "".concat(J.w7, "production.svg"),
              activeRoute: "manageProduction",
            },
            salesReport: {
              path: Q.N.common.manageSalesReport,
              title: "Sales Report",
              icon: "".concat(J.w7, "sales-report.svg"),
              activeRoute: "salesReport",
            },
            manageSuppliers: {
              path: Q.N.admin.manageSuppliers,
              title: "Suppliers",
              icon: "".concat(J.w7, "suppliers.svg"),
              activeRoute: "manageSuppliers",
            },
            ingredients: {
              path: Q.N.admin.manageIngredients,
              title: "Ingredients",
              icon: "".concat(J.w7, "ingredients.svg"),
              activeRoute: "ingredients",
            },
          },
          brandManager: {
            dashboard: {
              path: Q.N.brandManager.manageDashboard,
              title: "Dashboard",
              icon: "".concat(J.w7, "dashboard.svg"),
              activeRoute: "dashboard",
            },
            manageItemReceiving: {
              path: Q.N.common.manageItemReceiving,
              title: "Item Receiving",
              icon: "".concat(J.w7, "item-receiving.svg"),
              activeRoute: "manageItemReceiving",
            },
            manageCatalogue: {
              path: Q.N.common.manageCatalogue,
              title: "Catalogue",
              icon: "".concat(J.w7, "catalogue.svg"),
              activeRoute: "manageCatalogue",
            },
            managePurchaseOrder: {
              path: Q.N.common.managePurchaseOrder,
              title: "Purchase Order",
              icon: "".concat(J.w7, "cart.svg"),
              activeRoute: "managePurchaseOrder",
            },
            manageUsers: {
              path: Q.N.common.manageUsers,
              title: "Users",
              icon: "".concat(J.w7, "users.svg"),
              activeRoute: "manageUsers",
            },
            manageWaste: {
              path: Q.N.common.manageWaste,
              title: "Waste",
              icon: "".concat(J.w7, "waste-restore.svg"),
              activeRoute: "manageWaste",
            },
            managePurchaseReport: {
              path: Q.N.common.managePurchaseReport,
              title: "Reports",
              icon: "".concat(J.w7, "reports.svg"),
              activeRoute: "managePurchaseReport",
            },
            manageTransfers: {
              path: Q.N.common.manageTransfers,
              title: "Transfer",
              icon: "".concat(J.w7, "transfers.svg"),
              activeRoute: "manageTransfers",
            },
            manageTransfer: {
              path: Q.N.common.manageTransfer,
              title: "Transfer",
              icon: "".concat(J.w7, "transfers.svg"),
              activeRoute: "manageTransfer",
            },
          },
          outletManager: {
            manageDashboard: {
              path: Q.N.outletManager.manageDashboard,
              title: "Dashboard",
              icon: "".concat(J.w7, "dashboard.svg"),
              activeRoute: "manageDashboard",
            },
            manageTransfers: {
              path: Q.N.common.manageTransfers,
              title: "Transfer",
              icon: "".concat(J.w7, "transfers.svg"),
              activeRoute: "manageTransfers",
            },
            manageCatalogue: {
              path: Q.N.common.manageCatalogue,
              title: "Catalogue",
              icon: "".concat(J.w7, "catalogue.svg"),
              activeRoute: "manageCatalogue",
            },
            manageStockCount: {
              path: Q.N.common.manageStockCount,
              title: "Stock Count",
              icon: "".concat(J.w7, "stock-count.svg"),
              activeRoute: "manageStockCount",
            },
            manageProduction: {
              path: Q.N.common.manageProduction,
              title: "Production",
              icon: "".concat(J.w7, "production.svg"),
              activeRoute: "manageProduction",
            },
            manageItemReceiving: {
              path: Q.N.common.manageItemReceiving,
              title: "Item Receiving",
              icon: "".concat(J.w7, "item-receiving.svg"),
              activeRoute: "manageItemReceiving",
            },
            manageWaste: {
              path: Q.N.common.manageWaste,
              title: "Waste",
              icon: "".concat(J.w7, "waste-restore.svg"),
              activeRoute: "manageWaste",
            },
            managePurchaseOrder: {
              path: Q.N.common.managePurchaseOrder,
              title: "Purchase Order",
              icon: "".concat(J.w7, "cart.svg"),
              activeRoute: "managePurchaseOrder",
            },
            managePurchaseReport: {
              path: Q.N.common.managePurchaseReport,
              title: "Reports",
              icon: "".concat(J.w7, "reports.svg"),
              activeRoute: "managePurchaseReport",
            },
            manageTransfer: {
              path: Q.N.common.manageTransfer,
              title: "Transfer",
              icon: "".concat(J.w7, "transfers.svg"),
              activeRoute: "manageTransfer",
            },
          },
          finance: {
            manageDashboard: {
              path: Q.N.finance.manageDashboard,
              title: "Dashboard",
              icon: "".concat(J.w7, "dashboard.svg"),
              activeRoute: "manageDashboard",
            },
            managePurchaseReport: {
              path: Q.N.common.managePurchaseReport,
              title: "Purchase Report",
              icon: "".concat(J.w7, "reports.svg"),
              activeRoute: "managePurchaseReport",
            },
          },
          staff: {
            manageDashboard: {
              path: Q.N.staff.manageDashboard,
              title: "Dashboard",
              icon: "".concat(J.w7, "dashboard.svg"),
              activeRoute: "manageDashboard",
            },
            manageStockCount: {
              path: Q.N.common.manageStockCount,
              title: "Stock Count",
              icon: "".concat(J.w7, "stock-count.svg"),
              activeRoute: "manageStockCount",
            },
            managePurchaseOrder: {
              path: Q.N.common.managePurchaseOrder,
              title: "Purchase Order",
              icon: "/side-bar-icon/cart.svg",
              activeRoute: "managePurchaseOrder",
            },
            manageProduction: {
              path: Q.N.common.manageProduction,
              title: "Production",
              icon: "".concat(J.w7, "production.svg"),
              activeRoute: "manageProduction",
            },
            manageSalesReport: {
              path: Q.N.common.manageSalesReport,
              title: "Sales Report",
              icon: "".concat(J.w7, "sales-report.svg"),
              activeRoute: "manageSalesReport",
            },
          },
        },
        G = () => {
          let { state: e } = _();
          return (0, n.jsx)(n.Fragment, {
            children:
              "collapsed" === e
                ? (0, n.jsxs)(X(), {
                    href: "/",
                    className:
                      "flex items-center justify-center cursor-pointer",
                    children: [
                      (0, n.jsx)(V.default, {
                        src: "/svg-logo/right-logo.svg",
                        alt: "Rhombus Logo",
                        width: 10,
                        height: 10,
                        className: "block",
                      }),
                      (0, n.jsx)(V.default, {
                        src: "/svg-logo/left-logo.svg",
                        alt: "Rhombus Logo",
                        width: 10,
                        height: 10,
                        className: "block",
                      }),
                    ],
                  })
                : (0, n.jsx)(X(), {
                    href: "/",
                    className:
                      "flex items-center justify-center cursor-pointer",
                    children: (0, n.jsx)(V.default, {
                      src: "/svg-logo/rhombus-logo-sidebar.svg",
                      alt: "Rhombus Logo",
                      width: 1e3,
                      height: 1e3,
                      className: "block",
                    }),
                  }),
          });
        };
      function H(e) {
        var a;
        let { role: t, ...s } = e,
          o = null != (a = Y[t]) ? a : {};
        return (0, n.jsxs)(W, {
          collapsible: "icon",
          ...s,
          className: " p-1 bg-[#302253] m-0 selectscroll ",
          children: [
            (0, n.jsxs)(E, {
              children: [
                (0, n.jsx)(G, {}),
                (0, n.jsx)("div", {
                  className: "absolute top-4 -right-6 z-50 ",
                  children: (0, n.jsx)(L, {
                    className:
                      "bg-[#302253] hover:bg-[#302253] hover:text-white text-white p-2 rounded-full cursor-pointer",
                  }),
                }),
              ],
            }),
            (0, n.jsx)(U, { children: (0, n.jsx)(q, { roleRoutes: o }) }),
          ],
        });
      }
      let ee = (e) => {
        let { children: a } = e;
        return (0, n.jsxs)(I, {
          children: [
            (0, n.jsx)(H, { role: "admin" }),
            (0, n.jsxs)("main", {
              className: "flex-1 overflow-y-auto min-h-screeen",
              children: [(0, n.jsx)(r, {}), a],
            }),
          ],
        });
      };
    },
    59434: (e, a, t) => {
      "use strict";
      t.d(a, { cn: () => o });
      var n = t(52596),
        s = t(39688);
      function o() {
        for (var e = arguments.length, a = Array(e), t = 0; t < e; t++)
          a[t] = arguments[t];
        return (0, s.QP)((0, n.$)(a));
      }
    },
    62523: (e, a, t) => {
      "use strict";
      t.d(a, { p: () => o });
      var n = t(95155);
      t(12115);
      var s = t(59434);
      function o(e) {
        let { className: a, type: t, ...o } = e;
        return (0, n.jsx)("input", {
          "type": t,
          "data-slot": "input",
          "className": (0, s.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            a,
          ),
          ...o,
        });
      }
    },
    69353: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 41109));
    },
    70964: (e, a, t) => {
      "use strict";
      t.d(a, { N: () => s, d: () => n });
      let n = { signIn: "/sign-in", forgotPassword: "/forgot-password" },
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
    83415: (e, a, t) => {
      "use strict";
      t.d(a, { lg: () => s, w7: () => n, xt: () => r, yD: () => o });
      let n = "/icons/side-bar-icon/",
        s = "/icons/brands-icon/",
        o = "/icons/actions/",
        r = "/icons/outlets-icon/tabs";
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    (e.O(0, [3063, 5, 3047, 5563, 8441, 1684, 7358], () => a(69353)),
      (_N_E = e.O()));
  },
]);

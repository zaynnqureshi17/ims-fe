(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [171],
  {
    293: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => m });
      var s = a(95155),
        n = a(30285),
        r = a(66695);
      a(12115);
      let i = (e) => {
        let {
          title: t,
          value: a,
          icon: n,
          classNameTitle: i = "text-sm font-light text-supporting-black",
          classNameValue: l = "text-2xl font-medium text-gray-900",
        } = e;
        return (0, s.jsx)(r.Zp, {
          className: "w-full gap-0",
          children: (0, s.jsx)(r.Wu, {
            children: (0, s.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsxs)(r.ZB, { className: i, children: [t, " "] }),
                    (0, s.jsx)("p", { className: l, children: a }),
                  ],
                }),
                n,
              ],
            }),
          }),
        });
      };
      var l = a(35841),
        o = a(83415),
        c = a(66766);
      let d = () =>
          (0, s.jsx)(l.A, {
            className: " sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
            children: u.map((e, t) =>
              (0, s.jsx)(
                i,
                {
                  ...e,
                  classNameTitle: "text-lg font-medium text-supporting-black",
                  classNameValue: "text-sm text-gray",
                },
                t,
              ),
            ),
          }),
        u = [
          {
            title: "Kitchen",
            value: "jan 15, 2023",
            icon: (0, s.jsx)(c.default, {
              src: "".concat(o.xt, "/kitchen.svg"),
              alt: "Kitchen",
              width: 24,
              height: 24,
            }),
          },
          {
            title: "Bar",
            value: "jan 14, 2023",
            icon: (0, s.jsx)(c.default, {
              src: "".concat(o.xt, "/bar.svg"),
              alt: "Bar",
              width: 24,
              height: 24,
            }),
          },
          {
            title: "Floor",
            value: "jan 12, 2023",
            icon: (0, s.jsx)(c.default, {
              src: "".concat(o.xt, "/floor.svg"),
              alt: "Floor",
              width: 24,
              height: 24,
            }),
          },
        ];
      var x = a(82507),
        g = a(70964);
      let h = () => {
          (0, x.y)()(g.N.admin.manageOutlets);
        },
        m = () =>
          (0, s.jsxs)(r.Zp, {
            className: "p-6",
            children: [
              (0, s.jsxs)("div", {
                className: "flex justify-between items-baseline",
                children: [
                  (0, s.jsx)(r.ZB, { children: "Department" }),
                  (0, s.jsx)(n.$, {
                    variant: "secondary",
                    className: "w-fit",
                    onClick: h,
                    children: "Add Department",
                  }),
                ],
              }),
              (0, s.jsx)(r.Wu, {
                className: "p-0",
                children: (0, s.jsx)(d, {}),
              }),
            ],
          });
    },
    24185: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => o });
      var s = a(95155),
        n = a(37628),
        r = a(85127),
        i = a(83415),
        l = a(66766);
      let o = (e) => {
        let {
          brandData: t,
          headtable: a,
          onEdit: o,
          onDelete: c,
          onView: d,
        } = e;
        return (0, s.jsxs)(r.Table, {
          children: [
            (0, s.jsx)(r.TableHeader, {
              children: (0, s.jsx)(r.TableRow, {
                children:
                  a &&
                  a.map((e, t) => (0, s.jsx)(r.TableHead, { children: e }, t)),
              }),
            }),
            (0, s.jsx)(r.TableBody, {
              children: t.map((e, t) =>
                (0, s.jsxs)(
                  r.TableRow,
                  {
                    className: "hover:bg-white  my-4",
                    children: [
                      (0, s.jsx)(r.TableCell, {
                        className: "text-gray",
                        children: e.id,
                      }),
                      (0, s.jsx)(r.TableCell, { children: e.outlets }),
                      (0, s.jsx)(r.TableCell, {
                        className: "text-left text-gray",
                        children: e.location,
                      }),
                      (0, s.jsx)(r.TableCell, {
                        children: (0, s.jsxs)("div", {
                          className: "flex justify-start gap-x-2",
                          children: [
                            (0, s.jsx)(l.default, {
                              src: "".concat(i.lg, "/user.svg"),
                              alt: "Manager",
                              width: 24,
                              height: 24,
                              className:
                                "border size-10 rounded-full object-cover",
                            }),
                            (0, s.jsxs)("div", {
                              className: "flex flex-col ",
                              children: [
                                (0, s.jsx)("span", { children: e.manager }),
                                (0, s.jsx)("span", {
                                  className: "text-gray",
                                  children: e.email,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsxs)(r.TableCell, {
                        className: "text-left flex flex-col ",
                        children: [
                          (0, s.jsxs)("span", {
                            children: ["$", e.performance],
                          }),
                          (0, s.jsx)("span", {
                            className: "text-gray",
                            children: "This Month",
                          }),
                        ],
                      }),
                      (0, s.jsx)(r.TableCell, {
                        className: "text-left",
                        children: (0, s.jsx)("span", {
                          className: "font-medium text-sm ".concat(
                            "Active" === e.status
                              ? "text-accent-green bg-accent-green-light rounded-full px-2 py-0.5"
                              : "text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5",
                          ),
                          children: e.status,
                        }),
                      }),
                      (0, s.jsxs)(r.TableCell, {
                        className:
                          "text-center flex justify-start items-center !py-4 gap-x-3",
                        children: [
                          (0, s.jsx)(n.A, {
                            icon: "".concat(i.yD, "edit.svg"),
                            title: "Edit",
                            width: 16,
                            height: 16,
                            className: "!p-0 cursor-pointer",
                            onClick: () => o(e.id),
                          }),
                          (0, s.jsx)(n.A, {
                            icon: "".concat(i.yD, "delete.svg"),
                            title: "Delete",
                            width: 16,
                            height: 16,
                            className: "!p-0 cursor-pointer",
                            onClick: () => c(e.id),
                          }),
                          (0, s.jsx)(n.A, {
                            icon: "".concat(i.yD, "view.svg"),
                            title: "View",
                            width: 16,
                            height: 16,
                            className: "!p-0 cursor-pointer",
                            onClick: () => d(e.id),
                          }),
                        ],
                      }),
                    ],
                  },
                  t,
                ),
              ),
            }),
          ],
        });
      };
    },
    30285: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => o });
      var s = a(95155),
        n = a(99708),
        r = a(74466);
      a(12115);
      var i = a(59434);
      let l = (0, r.F)(
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
        let { className: t, variant: a, size: r, asChild: o = !1, ...c } = e,
          d = o ? n.DX : "button";
        return (0, s.jsx)(d, {
          "data-slot": "button",
          "className": (0, i.cn)(l({ variant: a, size: r, className: t })),
          ...c,
        });
      }
    },
    35841: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      var s = a(95155);
      a(12115);
      let n = (e) => {
        let { children: t, className: a = "" } = e;
        return (0, s.jsx)("div", {
          className: "grid gap-6  ".concat(a),
          children: t,
        });
      };
    },
    37628: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      var s = a(95155),
        n = a(66766);
      let r = (e) => {
        let {
          icon: t,
          title: a,
          className: r,
          width: i = 24,
          height: l = 24,
          onClick: o,
        } = e;
        return (0, s.jsx)("div", {
          className: "flex items-center justify-between p-4 rounded-lg ".concat(
            r,
          ),
          onClick: o,
          children: (0, s.jsx)(n.default, {
            src: t,
            alt: a,
            width: i,
            height: l,
          }),
        });
      };
    },
    45967: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => c });
      var s = a(95155),
        n = a(37628),
        r = a(66695),
        i = a(83415),
        l = a(66766);
      let o = (e) => {
          let {
            title: t,
            outletCode: a,
            status: o,
            brand: c,
            onEdit: d,
            onDelete: u,
          } = e;
          return (0, s.jsxs)(r.Zp, {
            className: "w-full gap-4",
            children: [
              (0, s.jsxs)(r.aR, {
                className: "flex justify-between items-start",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [
                      (0, s.jsx)(r.ZB, {
                        className: "text-3xl font-semibold",
                        children: t,
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "px-3 py-1 font-semibold rounded-full text-sm flex justify-center items-center gap-x-2 ".concat(
                            "Active" === o
                              ? "text-accent-green bg-accent-green-light rounded-full px-2 py-0.5"
                              : "text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5",
                          ),
                        children: [
                          (0, s.jsx)(l.default, {
                            src: "".concat(i.lg, "/active.svg"),
                            alt: "active",
                            width: 16,
                            height: 16,
                          }),
                          (0, s.jsx)("span", { children: o }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "text-center flex justify-start gap-x-3",
                    children: [
                      (0, s.jsx)(n.A, {
                        icon: "".concat(i.yD, "edit.svg"),
                        title: "Edit",
                        width: 16,
                        height: 16,
                        className: "!p-0 cursor-pointer",
                        onClick: d,
                      }),
                      (0, s.jsx)(n.A, {
                        icon: "".concat(i.yD, "delete.svg"),
                        title: "Delete",
                        width: 16,
                        height: 16,
                        className: "!p-0 cursor-pointer",
                        onClick: u,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(r.wL, {
                children: (0, s.jsxs)("div", {
                  className:
                    " w-full flex justify-start gap-4 items-center text-sm font-medium",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        " text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5 ",
                      children: (0, s.jsxs)("p", { children: ["Code ", a] }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        " text-blue-700 bg-accent-green-light rounded-full px-2 py-0.5 capitalize",
                      children: (0, s.jsxs)("span", {
                        children: ["Brand: ", c],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        c = () =>
          (0, s.jsx)(o, {
            title: "Karahi Express – D Ground",
            outletCode: "OUT-FSD-001",
            status: "Active",
            brand: "karachi express",
            onEdit: () => console.log("Edit brand action triggered"),
            onDelete: () => console.log("Delete brand action triggered"),
          });
    },
    66695: (e, t, a) => {
      "use strict";
      a.d(t, {
        BT: () => o,
        Wu: () => c,
        ZB: () => l,
        Zp: () => r,
        aR: () => i,
        wL: () => d,
      });
      var s = a(95155);
      a(12115);
      var n = a(59434);
      function r(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card",
          "className": (0, n.cn)(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-md border py-6 ",
            t,
          ),
          ...a,
        });
      }
      function i(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-header",
          "className": (0, n.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            t,
          ),
          ...a,
        });
      }
      function l(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-title",
          "className": (0, n.cn)("leading-none font-semibold", t),
          ...a,
        });
      }
      function o(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-description",
          "className": (0, n.cn)("text-muted-foreground text-sm", t),
          ...a,
        });
      }
      function c(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-content",
          "className": (0, n.cn)("px-6", t),
          ...a,
        });
      }
      function d(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "card-footer",
          "className": (0, n.cn)("flex items-center px-6 [.border-t]:pt-6", t),
          ...a,
        });
      }
    },
    66766: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => n.a });
      var s = a(71469),
        n = a.n(s);
    },
    71469: (e, t, a) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          default: function () {
            return o;
          },
          getImageProps: function () {
            return l;
          },
        }));
      let s = a(88229),
        n = a(38883),
        r = a(33063),
        i = s._(a(51193));
      function l(e) {
        let { props: t } = (0, n.getImgProps)(e, {
          defaultLoader: i.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, a] of Object.entries(t)) void 0 === a && delete t[e];
        return { props: t };
      }
      let o = r.Image;
    },
    74466: (e, t, a) => {
      "use strict";
      a.d(t, { F: () => i });
      var s = a(52596);
      let n = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        r = s.$,
        i = (e, t) => (a) => {
          var s;
          if ((null == t ? void 0 : t.variants) == null)
            return r(
              e,
              null == a ? void 0 : a.class,
              null == a ? void 0 : a.className,
            );
          let { variants: i, defaultVariants: l } = t,
            o = Object.keys(i).map((e) => {
              let t = null == a ? void 0 : a[e],
                s = null == l ? void 0 : l[e];
              if (null === t) return null;
              let r = n(t) || n(s);
              return i[e][r];
            }),
            c =
              a &&
              Object.entries(a).reduce((e, t) => {
                let [a, s] = t;
                return (void 0 === s || (e[a] = s), e);
              }, {});
          return r(
            e,
            o,
            null == t || null == (s = t.compoundVariants)
              ? void 0
              : s.reduce((e, t) => {
                  let { class: a, className: s, ...n } = t;
                  return Object.entries(n).every((e) => {
                    let [t, a] = e;
                    return Array.isArray(a)
                      ? a.includes({ ...l, ...c }[t])
                      : { ...l, ...c }[t] === a;
                  })
                    ? [...e, a, s]
                    : e;
                }, []),
            null == a ? void 0 : a.class,
            null == a ? void 0 : a.className,
          );
        };
    },
    75757: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      var s = a(95155),
        n = a(30285);
      a(12115);
      let r = (e) => {
        let {
            children: t,
            totalItems: a,
            currentPage: r,
            itemsPerPage: i,
            onPageChange: l,
          } = e,
          o = Math.ceil(a / i),
          c = (r - 1) * i + 1,
          d = Math.min(c + i - 1, a);
        return (0, s.jsxs)("div", {
          className: "space-y-4 bg-white border rounded-sm",
          children: [
            (0, s.jsx)("div", { className: "border-b", children: t }),
            (0, s.jsxs)("div", {
              className: "flex items-center justify-between px-2 mb-2 ",
              children: [
                (0, s.jsxs)("div", {
                  className: "text-sm text-black",
                  children: ["Showing ", c, " to ", d, " of ", a],
                }),
                (0, s.jsxs)("div", {
                  className: "flex items-center gap-1 ",
                  children: [
                    (0, s.jsx)(n.$, {
                      variant: "ghost",
                      size: "sm",
                      className:
                        "rounded-full bg-pagination-gray text-pagination-icon-gray",
                      onClick: () => {
                        r > 1 && l(r - 1);
                      },
                      disabled: 1 === r,
                      children: "<",
                    }),
                    Array.from({ length: o }, (e, t) => {
                      let a = t + 1,
                        i = r === a;
                      return (0, s.jsx)(
                        n.$,
                        {
                          variant: "ghost",
                          size: "sm",
                          className: "w-8 rounded-full px-2 py-0.5 ".concat(
                            i
                              ? "text-accent-orange bg-accent-orange-light hover:text-accent-orange hover:bg-accent-orange-light"
                              : "text-gray-500 cursor-pointer",
                          ),
                          onClick: () => l(a),
                          children: String(a).padStart(2, "0"),
                        },
                        a,
                      );
                    }),
                    (0, s.jsx)(n.$, {
                      variant: "ghost",
                      size: "sm",
                      className:
                        "rounded-full bg-pagination-gray text-pagination-icon-gray",
                      onClick: () => {
                        r < o && l(r + 1);
                      },
                      disabled: r === o,
                      children: ">",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    77687: (e, t, a) => {
      (Promise.resolve().then(a.t.bind(a, 33063, 23)),
        Promise.resolve().then(a.bind(a, 293)),
        Promise.resolve().then(a.bind(a, 95883)),
        Promise.resolve().then(a.bind(a, 45967)),
        Promise.resolve().then(a.bind(a, 94891)),
        Promise.resolve().then(a.bind(a, 97413)));
    },
    83415: (e, t, a) => {
      "use strict";
      a.d(t, { lg: () => n, w7: () => s, xt: () => i, yD: () => r });
      let s = "/icons/side-bar-icon/",
        n = "/icons/brands-icon/",
        r = "/icons/actions/",
        i = "/icons/outlets-icon/tabs";
    },
    85127: (e, t, a) => {
      "use strict";
      a.d(t, {
        Table: () => r,
        TableBody: () => l,
        TableCell: () => d,
        TableHead: () => c,
        TableHeader: () => i,
        TableRow: () => o,
      });
      var s = a(95155);
      a(12115);
      var n = a(59434);
      function r(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "table-container",
          "className": "relative w-full overflow-x-auto",
          "children": (0, s.jsx)("table", {
            "data-slot": "table",
            "className": (0, n.cn)("w-full caption-bottom text-sm", t),
            ...a,
          }),
        });
      }
      function i(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("thead", {
          "data-slot": "table-header",
          "className": (0, n.cn)("[&_tr]:border-b", t),
          ...a,
        });
      }
      function l(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("tbody", {
          "data-slot": "table-body",
          "className": (0, n.cn)("[&_tr:last-child]:border-0", t),
          ...a,
        });
      }
      function o(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("tr", {
          "data-slot": "table-row",
          "className": (0, n.cn)(
            "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors ",
            t,
          ),
          ...a,
        });
      }
      function c(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("th", {
          "data-slot": "table-head",
          "className": (0, n.cn)(
            "text-foreground h-10 p-4 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            t,
          ),
          ...a,
        });
      }
      function d(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("td", {
          "data-slot": "table-cell",
          "className": (0, n.cn)(
            "p-4 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            t,
          ),
          ...a,
        });
      }
    },
    95883: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => x });
      var s = a(95155),
        n = a(82507),
        r = a(70964),
        i = a(24185),
        l = a(75757),
        o = a(12115);
      let c = (e) => {
          let { onEdit: t, onDelete: a, onView: n } = e,
            [r, c] = (0, o.useState)(1);
          return (0, s.jsx)(l.A, {
            totalItems: 12,
            currentPage: r,
            itemsPerPage: 3,
            onPageChange: (e) => c(e),
            children: (0, s.jsx)(i.A, {
              headtable: d,
              brandData: u,
              onEdit: t,
              onDelete: a,
              onView: n,
            }),
          });
        },
        d = [
          "ID",
          "Outlet",
          "Location",
          "Manager",
          "Performance",
          "Status",
          "Actions",
        ],
        u = [
          {
            id: 1,
            outlets: "Downtown Branch",
            location: "123 Main Street New York, NY 10001",
            manager: "John Doe",
            email: "john.doe@example.com",
            performance: "45230",
            status: "Active",
            createdDate: "2023-01-01",
          },
          {
            id: 2,
            outlets: "Downtown Branch",
            location: "123 Main Street New York, NY 10001",
            manager: "Jane Smith",
            email: "jane.smith@example.com",
            performance: "45230",
            status: "Active",
            createdDate: "2023-01-01",
          },
          {
            id: 3,
            outlets: "Downtown Branch",
            location: "123 Main Street New York, NY 10001",
            manager: "Alice Johnson",
            email: "alice.johnson@example.com",
            performance: "45230",
            status: "Active",
            createdDate: "2023-01-01",
          },
        ],
        x = () => {
          let e = (0, n.y)();
          return (0, s.jsx)(c, {
            onEdit: (t) => {
              e(r.N.admin.editOutlet);
            },
            onDelete: () => {
              console.log("Delete outlet action triggered");
            },
            onView: (t) => {
              e(r.N.admin.viewOutlet);
            },
          });
        };
    },
    97413: (e, t, a) => {
      "use strict";
      a.d(t, {
        Tabs: () => _,
        TabsContent: () => B,
        TabsList: () => z,
        TabsTrigger: () => P,
      });
      var s = a(95155),
        n = a(12115),
        r = a(85185),
        i = a(46081),
        l = a(89196),
        o = a(28905),
        c = a(63655),
        d = a(94315),
        u = a(5845),
        x = a(61285),
        g = "Tabs",
        [h, m] = (0, i.A)(g, [l.RG]),
        b = (0, l.RG)(),
        [f, v] = h(g),
        p = n.forwardRef((e, t) => {
          let {
              __scopeTabs: a,
              value: n,
              onValueChange: r,
              defaultValue: i,
              orientation: l = "horizontal",
              dir: o,
              activationMode: h = "automatic",
              ...m
            } = e,
            b = (0, d.jH)(o),
            [v, p] = (0, u.i)({
              prop: n,
              onChange: r,
              defaultProp: null != i ? i : "",
              caller: g,
            });
          return (0, s.jsx)(f, {
            scope: a,
            baseId: (0, x.B)(),
            value: v,
            onValueChange: p,
            orientation: l,
            dir: b,
            activationMode: h,
            children: (0, s.jsx)(c.sG.div, {
              "dir": b,
              "data-orientation": l,
              ...m,
              "ref": t,
            }),
          });
        });
      p.displayName = g;
      var j = "TabsList",
        N = n.forwardRef((e, t) => {
          let { __scopeTabs: a, loop: n = !0, ...r } = e,
            i = v(j, a),
            o = b(a);
          return (0, s.jsx)(l.bL, {
            asChild: !0,
            ...o,
            orientation: i.orientation,
            dir: i.dir,
            loop: n,
            children: (0, s.jsx)(c.sG.div, {
              "role": "tablist",
              "aria-orientation": i.orientation,
              ...r,
              "ref": t,
            }),
          });
        });
      N.displayName = j;
      var y = "TabsTrigger",
        w = n.forwardRef((e, t) => {
          let { __scopeTabs: a, value: n, disabled: i = !1, ...o } = e,
            d = v(y, a),
            u = b(a),
            x = D(d.baseId, n),
            g = T(d.baseId, n),
            h = n === d.value;
          return (0, s.jsx)(l.q7, {
            asChild: !0,
            ...u,
            focusable: !i,
            active: h,
            children: (0, s.jsx)(c.sG.button, {
              "type": "button",
              "role": "tab",
              "aria-selected": h,
              "aria-controls": g,
              "data-state": h ? "active" : "inactive",
              "data-disabled": i ? "" : void 0,
              "disabled": i,
              "id": x,
              ...o,
              "ref": t,
              "onMouseDown": (0, r.m)(e.onMouseDown, (e) => {
                i || 0 !== e.button || !1 !== e.ctrlKey
                  ? e.preventDefault()
                  : d.onValueChange(n);
              }),
              "onKeyDown": (0, r.m)(e.onKeyDown, (e) => {
                [" ", "Enter"].includes(e.key) && d.onValueChange(n);
              }),
              "onFocus": (0, r.m)(e.onFocus, () => {
                let e = "manual" !== d.activationMode;
                h || i || !e || d.onValueChange(n);
              }),
            }),
          });
        });
      w.displayName = y;
      var k = "TabsContent",
        C = n.forwardRef((e, t) => {
          let {
              __scopeTabs: a,
              value: r,
              forceMount: i,
              children: l,
              ...d
            } = e,
            u = v(k, a),
            x = D(u.baseId, r),
            g = T(u.baseId, r),
            h = r === u.value,
            m = n.useRef(h);
          return (
            n.useEffect(() => {
              let e = requestAnimationFrame(() => (m.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            (0, s.jsx)(o.C, {
              present: i || h,
              children: (a) => {
                let { present: n } = a;
                return (0, s.jsx)(c.sG.div, {
                  "data-state": h ? "active" : "inactive",
                  "data-orientation": u.orientation,
                  "role": "tabpanel",
                  "aria-labelledby": x,
                  "hidden": !n,
                  "id": g,
                  "tabIndex": 0,
                  ...d,
                  "ref": t,
                  "style": {
                    ...e.style,
                    animationDuration: m.current ? "0s" : void 0,
                  },
                  "children": n && l,
                });
              },
            })
          );
        });
      function D(e, t) {
        return "".concat(e, "-trigger-").concat(t);
      }
      function T(e, t) {
        return "".concat(e, "-content-").concat(t);
      }
      C.displayName = k;
      var A = a(59434);
      function _(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(p, {
          "data-slot": "tabs",
          "className": (0, A.cn)("flex flex-col gap-2", t),
          ...a,
        });
      }
      function z(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(N, {
          "data-slot": "tabs-list",
          "className": (0, A.cn)(
            "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center gap-2 rounded-lg p-[3px]",
            t,
          ),
          ...a,
        });
      }
      function P(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(w, {
          "data-slot": "tabs-trigger",
          "className": (0, A.cn)(
            "data-[state=active]:bg-[#302253] cursor-pointer data-[state=active]:cursor-default dark:data-[state=active]:text-foreground data-[state=active]:font-semibold data-[state=active]:text-white bg-white border focus-visible:border-ring focus-visible:ring-ring/50 font-light focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md  px-2 py-1 text-sm  whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
            t,
          ),
          ...a,
        });
      }
      function B(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(C, {
          "data-slot": "tabs-content",
          "className": (0, A.cn)("flex-1 outline-none", t),
          ...a,
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [3063, 5, 3047, 6052, 4891, 8441, 1684, 7358], () => t(77687)),
      (_N_E = e.O()));
  },
]);

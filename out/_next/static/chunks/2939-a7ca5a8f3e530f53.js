"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2939],
  {
    26388: (e, t, a) => {
      a.d(t, { e: () => r });
      let r = (e) => {
        let { router: t, basePath: a, queryParams: r } = e,
          l = new URLSearchParams();
        (Object.entries(r).forEach((e) => {
          let [t, a] = e;
          a && l.set(t, a);
        }),
          t.push(
            "".concat(a).concat(l.toString() ? "?".concat(l.toString()) : ""),
          ));
      };
    },
    30285: (e, t, a) => {
      a.d(t, { $: () => o });
      var r = a(95155),
        l = a(99708),
        s = a(74466);
      a(12115);
      var n = a(59434);
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
        let { className: t, variant: a, size: s, asChild: o = !1, ...c } = e,
          d = o ? l.DX : "button";
        return (0, r.jsx)(d, {
          "data-slot": "button",
          "className": (0, n.cn)(i({ variant: a, size: s, className: t })),
          ...c,
        });
      }
    },
    37628: (e, t, a) => {
      a.d(t, { A: () => s });
      var r = a(95155),
        l = a(66766);
      let s = (e) => {
        let {
          icon: t,
          title: a,
          className: s,
          width: n = 24,
          height: i = 24,
          onClick: o,
        } = e;
        return (0, r.jsx)("div", {
          className: "flex items-center justify-between p-4 rounded-lg ".concat(
            s,
          ),
          onClick: o,
          children: (0, r.jsx)(l.default, {
            src: t,
            alt: a,
            width: n,
            height: i,
          }),
        });
      };
    },
    40099: (e, t, a) => {
      a.d(t, { default: () => p });
      var r = a(95155),
        l = a(26388),
        s = a(70964),
        n = a(35695),
        i = a(12115),
        o = a(62523),
        c = a(47924);
      let d = (e) => {
        let { searchText: t, setSearchText: a, onSearch: l } = e;
        return (0, r.jsxs)("div", {
          className: "relative w-full ",
          children: [
            (0, r.jsx)(c.A, {
              className:
                "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 rounded-sm",
            }),
            (0, r.jsx)(o.p, {
              placeholder: "Search Brands..",
              className: "pl-10 bg-white",
              onKeyDown: (e) => {
                "Enter" === e.key && l(e.currentTarget.value);
              },
              value: t,
              onChange: (e) => a(e.target.value),
            }),
          ],
        });
      };
      var u = a(37628),
        g = a(47457),
        v = a(83415);
      let b = (e) => {
          let {
            selectedStatus: t,
            selectedRegion: a,
            collapsed: l,
            setCollapsed: s,
            setSelectedStatus: n,
            setSelectedRegion: i,
            handleUpdateQuery: o,
          } = e;
          return (0, r.jsxs)("div", {
            className: "inline-flex gap-6",
            children: [
              (0, r.jsx)(g.A, {
                placeholder: "All Status",
                options: x,
                value: t,
                onValueChange: (e) => {
                  (n(e), o(e, a, l));
                },
              }),
              (0, r.jsx)(g.A, {
                placeholder: "All Regions",
                options: h,
                value: a,
                onValueChange: (e) => {
                  (i(e), o(t, e, l));
                },
              }),
              (0, r.jsx)("div", {
                onClick: () => {
                  let e = "list" === l ? "grid" : "list";
                  (s(e), o(t, a, e));
                },
                className: "cursor-pointer h-9 w-8",
                children:
                  "list" == l
                    ? (0, r.jsx)(u.A, {
                        icon: "".concat(v.lg, "/collapsed-card.svg"),
                        title: "collapsed-card",
                        className: "bg-primary-dark-indigo !p-1",
                      })
                    : (0, r.jsx)(u.A, {
                        icon: "".concat(v.lg, "/collapsed-list.svg"),
                        title: "collapsed-card",
                        className: "bg-primary-dark-indigo !p-1",
                      }),
              }),
            ],
          });
        },
        x = [
          { value: "all-status", label: "All Status" },
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
        ],
        h = [
          { value: "all-regions", label: "All Regions" },
          { value: "asia", label: "Asia" },
          { value: "europe", label: "Europe" },
          { value: "north-america", label: "North America" },
          { value: "south-america", label: "South America" },
          { value: "africa", label: "Africa" },
          { value: "oceania", label: "Oceania" },
          { value: "antarctica", label: "Antarctica" },
        ],
        p = (0, i.memo)(() => {
          let e = (0, n.useRouter)(),
            t = (0, n.useSearchParams)(),
            [a, o] = (0, i.useState)(""),
            [c, u] = (0, i.useState)(""),
            [g, v] = (0, i.useState)(""),
            [x, h] = (0, i.useState)("list");
          (0, i.useEffect)(() => {
            let e = t.get("status") || "",
              a = t.get("region") || "",
              r = t.get("search") || "",
              l = t.get("collapsed") || "list";
            (o(e), u(a), v(r), h(l));
          }, [t]);
          let p = (t, a, r, n) => {
            (0, l.e)({
              router: e,
              basePath: s.N.admin.manageBrands,
              queryParams: {
                status: "all-status" === t ? "" : t,
                region: "all-regions" === a ? "" : a,
                search: r,
                collapsed: n || "list",
              },
            });
          };
          return (0, r.jsxs)("div", {
            className: "flex gap-6",
            children: [
              (0, r.jsx)(d, {
                searchText: g,
                setSearchText: v,
                onSearch: (e) => p(a, c, e),
              }),
              (0, r.jsx)(b, {
                selectedStatus: a,
                selectedRegion: c,
                setSelectedStatus: o,
                setSelectedRegion: u,
                collapsed: x,
                setCollapsed: h,
                handleUpdateQuery: (e, t, a) => p(e, t, g, a),
              }),
            ],
          });
        });
    },
    47457: (e, t, a) => {
      a.d(t, { A: () => s });
      var r = a(95155),
        l = a(59409);
      a(12115);
      let s = (e) => {
        let {
          placeholder: t = "Select",
          options: a,
          onValueChange: s,
          className: n = "w-[240px] h-9 text-sm bg-white",
          value: i,
          label: o,
        } = e;
        return (0, r.jsxs)("div", {
          className: "flex flex-col space-y-1.5",
          children: [
            o && (0, r.jsx)("label", { className: " text-sm ", children: o }),
            (0, r.jsxs)(l.Select, {
              value: i,
              onValueChange: s,
              children: [
                (0, r.jsx)(l.SelectTrigger, {
                  className: n,
                  children: (0, r.jsx)(l.SelectValue, { placeholder: t }),
                }),
                (0, r.jsx)(l.SelectContent, {
                  children: a.map((e) =>
                    (0, r.jsx)(
                      l.SelectItem,
                      { value: e.value, children: e.label },
                      e.value,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      };
    },
    47924: (e, t, a) => {
      a.d(t, { A: () => r });
      let r = (0, a(19946).A)("search", [
        ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ]);
    },
    62523: (e, t, a) => {
      a.d(t, { p: () => s });
      var r = a(95155);
      a(12115);
      var l = a(59434);
      function s(e) {
        let { className: t, type: a, ...s } = e;
        return (0, r.jsx)("input", {
          "type": a,
          "data-slot": "input",
          "className": (0, l.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t,
          ),
          ...s,
        });
      }
    },
    66695: (e, t, a) => {
      a.d(t, {
        BT: () => o,
        Wu: () => c,
        ZB: () => i,
        Zp: () => s,
        aR: () => n,
        wL: () => d,
      });
      var r = a(95155);
      a(12115);
      var l = a(59434);
      function s(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card",
          "className": (0, l.cn)(
            "bg-card text-card-foreground flex flex-col gap-6 rounded-md border py-6 ",
            t,
          ),
          ...a,
        });
      }
      function n(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-header",
          "className": (0, l.cn)(
            "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
            t,
          ),
          ...a,
        });
      }
      function i(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-title",
          "className": (0, l.cn)("leading-none font-semibold", t),
          ...a,
        });
      }
      function o(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-description",
          "className": (0, l.cn)("text-muted-foreground text-sm", t),
          ...a,
        });
      }
      function c(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-content",
          "className": (0, l.cn)("px-6", t),
          ...a,
        });
      }
      function d(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "card-footer",
          "className": (0, l.cn)("flex items-center px-6 [.border-t]:pt-6", t),
          ...a,
        });
      }
    },
    66766: (e, t, a) => {
      a.d(t, { default: () => l.a });
      var r = a(71469),
        l = a.n(r);
    },
    71469: (e, t, a) => {
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          default: function () {
            return o;
          },
          getImageProps: function () {
            return i;
          },
        }));
      let r = a(88229),
        l = a(38883),
        s = a(33063),
        n = r._(a(51193));
      function i(e) {
        let { props: t } = (0, l.getImgProps)(e, {
          defaultLoader: n.default,
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
      let o = s.Image;
    },
    74466: (e, t, a) => {
      a.d(t, { F: () => n });
      var r = a(52596);
      let l = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        s = r.$,
        n = (e, t) => (a) => {
          var r;
          if ((null == t ? void 0 : t.variants) == null)
            return s(
              e,
              null == a ? void 0 : a.class,
              null == a ? void 0 : a.className,
            );
          let { variants: n, defaultVariants: i } = t,
            o = Object.keys(n).map((e) => {
              let t = null == a ? void 0 : a[e],
                r = null == i ? void 0 : i[e];
              if (null === t) return null;
              let s = l(t) || l(r);
              return n[e][s];
            }),
            c =
              a &&
              Object.entries(a).reduce((e, t) => {
                let [a, r] = t;
                return (void 0 === r || (e[a] = r), e);
              }, {});
          return s(
            e,
            o,
            null == t || null == (r = t.compoundVariants)
              ? void 0
              : r.reduce((e, t) => {
                  let { class: a, className: r, ...l } = t;
                  return Object.entries(l).every((e) => {
                    let [t, a] = e;
                    return Array.isArray(a)
                      ? a.includes({ ...i, ...c }[t])
                      : { ...i, ...c }[t] === a;
                  })
                    ? [...e, a, r]
                    : e;
                }, []),
            null == a ? void 0 : a.class,
            null == a ? void 0 : a.className,
          );
        };
    },
    75757: (e, t, a) => {
      a.d(t, { A: () => s });
      var r = a(95155),
        l = a(30285);
      a(12115);
      let s = (e) => {
        let {
            children: t,
            totalItems: a,
            currentPage: s,
            itemsPerPage: n,
            onPageChange: i,
          } = e,
          o = Math.ceil(a / n),
          c = (s - 1) * n + 1,
          d = Math.min(c + n - 1, a);
        return (0, r.jsxs)("div", {
          className: "space-y-4 bg-white border rounded-sm",
          children: [
            (0, r.jsx)("div", { className: "border-b", children: t }),
            (0, r.jsxs)("div", {
              className: "flex items-center justify-between px-2 mb-2 ",
              children: [
                (0, r.jsxs)("div", {
                  className: "text-sm text-black",
                  children: ["Showing ", c, " to ", d, " of ", a],
                }),
                (0, r.jsxs)("div", {
                  className: "flex items-center gap-1 ",
                  children: [
                    (0, r.jsx)(l.$, {
                      variant: "ghost",
                      size: "sm",
                      className:
                        "rounded-full bg-pagination-gray text-pagination-icon-gray",
                      onClick: () => {
                        s > 1 && i(s - 1);
                      },
                      disabled: 1 === s,
                      children: "<",
                    }),
                    Array.from({ length: o }, (e, t) => {
                      let a = t + 1,
                        n = s === a;
                      return (0, r.jsx)(
                        l.$,
                        {
                          variant: "ghost",
                          size: "sm",
                          className: "w-8 rounded-full px-2 py-0.5 ".concat(
                            n
                              ? "text-accent-orange bg-accent-orange-light hover:text-accent-orange hover:bg-accent-orange-light"
                              : "text-gray-500 cursor-pointer",
                          ),
                          onClick: () => i(a),
                          children: String(a).padStart(2, "0"),
                        },
                        a,
                      );
                    }),
                    (0, r.jsx)(l.$, {
                      variant: "ghost",
                      size: "sm",
                      className:
                        "rounded-full bg-pagination-gray text-pagination-icon-gray",
                      onClick: () => {
                        s < o && i(s + 1);
                      },
                      disabled: s === o,
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
    83415: (e, t, a) => {
      a.d(t, { lg: () => l, w7: () => r, xt: () => n, yD: () => s });
      let r = "/icons/side-bar-icon/",
        l = "/icons/brands-icon/",
        s = "/icons/actions/",
        n = "/icons/outlets-icon/tabs";
    },
    85127: (e, t, a) => {
      a.d(t, {
        Table: () => s,
        TableBody: () => i,
        TableCell: () => d,
        TableHead: () => c,
        TableHeader: () => n,
        TableRow: () => o,
      });
      var r = a(95155);
      a(12115);
      var l = a(59434);
      function s(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("div", {
          "data-slot": "table-container",
          "className": "relative w-full overflow-x-auto",
          "children": (0, r.jsx)("table", {
            "data-slot": "table",
            "className": (0, l.cn)("w-full caption-bottom text-sm", t),
            ...a,
          }),
        });
      }
      function n(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("thead", {
          "data-slot": "table-header",
          "className": (0, l.cn)("[&_tr]:border-b", t),
          ...a,
        });
      }
      function i(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("tbody", {
          "data-slot": "table-body",
          "className": (0, l.cn)("[&_tr:last-child]:border-0", t),
          ...a,
        });
      }
      function o(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("tr", {
          "data-slot": "table-row",
          "className": (0, l.cn)(
            "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors ",
            t,
          ),
          ...a,
        });
      }
      function c(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("th", {
          "data-slot": "table-head",
          "className": (0, l.cn)(
            "text-foreground h-10 p-4 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            t,
          ),
          ...a,
        });
      }
      function d(e) {
        let { className: t, ...a } = e;
        return (0, r.jsx)("td", {
          "data-slot": "table-cell",
          "className": (0, l.cn)(
            "p-4 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            t,
          ),
          ...a,
        });
      }
    },
  },
]);

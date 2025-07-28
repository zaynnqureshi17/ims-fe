(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [157],
  {
    4515: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => v });
      var l = a(95155),
        r = a(26388),
        s = a(70964),
        n = a(35695),
        i = a(12115),
        c = a(47457);
      let o = (e) => {
          let {
            selectedStatus: t,
            selectedRegion: a,
            selectedBrand: r,
            setSelectedBrand: s,
            setSelectedStatus: n,
            setSelectedRegion: i,
            handleUpdateQuery: o,
          } = e;
          return (0, l.jsxs)("div", {
            className: "inline-flex gap-6",
            children: [
              (0, l.jsx)(c.A, {
                placeholder: "All Status",
                options: d,
                value: t,
                onValueChange: (e) => {
                  (n(e), o(e, r, a));
                },
              }),
              (0, l.jsx)(c.A, {
                placeholder: "All Brands",
                options: g,
                value: r,
                onValueChange: (e) => {
                  (s(e), o(t, e, a));
                },
              }),
              (0, l.jsx)(c.A, {
                placeholder: "All Regions",
                options: u,
                value: a,
                onValueChange: (e) => {
                  (i(e), o(t, a, e));
                },
              }),
            ],
          });
        },
        d = [
          { value: "all-status", label: "All Status" },
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
        ],
        u = [
          { value: "all-regions", label: "All Regions" },
          { value: "asia", label: "Asia" },
          { value: "europe", label: "Europe" },
          { value: "north-america", label: "North America" },
          { value: "south-america", label: "South America" },
          { value: "africa", label: "Africa" },
          { value: "oceania", label: "Oceania" },
          { value: "antarctica", label: "Antarctica" },
        ],
        g = [
          { value: "all-brands", label: "All Brands" },
          { value: "brand-a", label: "Brand A" },
          { value: "brand-b", label: "Brand B" },
          { value: "brand-c", label: "Brand C" },
          { value: "brand-d", label: "Brand D" },
        ];
      var h = a(62523),
        b = a(47924);
      let x = (e) => {
          let { searchText: t, setSearchText: a, onSearch: r } = e;
          return (0, l.jsxs)("div", {
            className: "relative w-full ",
            children: [
              (0, l.jsx)(b.A, {
                className:
                  "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 rounded-sm",
              }),
              (0, l.jsx)(h.p, {
                placeholder: "Search Outlets..",
                className: "pl-10 bg-white",
                onKeyDown: (e) => {
                  "Enter" === e.key && r(e.currentTarget.value);
                },
                value: t,
                onChange: (e) => a(e.target.value),
              }),
            ],
          });
        },
        v = (0, i.memo)(() => {
          let e = (0, n.useRouter)(),
            t = (0, n.useSearchParams)(),
            [a, c] = (0, i.useState)(""),
            [d, u] = (0, i.useState)(""),
            [g, h] = (0, i.useState)(""),
            [b, v] = (0, i.useState)("");
          (0, i.useEffect)(() => {
            let e = t.get("search") || "",
              a = t.get("status") || "",
              l = t.get("brand") || "",
              r = t.get("region") || "";
            (h(e), c(a), v(l), u(r));
          }, [t]);
          let m = (t, a, l, n) => {
            (0, r.e)({
              router: e,
              basePath: s.N.admin.manageOutlets,
              queryParams: {
                status: "all-status" === t ? "" : t,
                brand: "all-brands" === a ? "" : a,
                region: "all-regions" === l ? "" : l,
                search: n,
              },
            });
          };
          return (0, l.jsxs)("div", {
            className: "flex gap-6",
            children: [
              (0, l.jsx)(x, {
                searchText: g,
                setSearchText: h,
                onSearch: (e) => m(a, b, d, e),
              }),
              (0, l.jsx)(o, {
                selectedStatus: a,
                selectedRegion: d,
                setSelectedStatus: c,
                setSelectedRegion: u,
                selectedBrand: b,
                setSelectedBrand: v,
                handleUpdateQuery: (e, t, a) => m(e, t, a, g),
              }),
            ],
          });
        });
    },
    26388: (e, t, a) => {
      "use strict";
      a.d(t, { e: () => l });
      let l = (e) => {
        let { router: t, basePath: a, queryParams: l } = e,
          r = new URLSearchParams();
        (Object.entries(l).forEach((e) => {
          let [t, a] = e;
          a && r.set(t, a);
        }),
          t.push(
            "".concat(a).concat(r.toString() ? "?".concat(r.toString()) : ""),
          ));
      };
    },
    30285: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => c });
      var l = a(95155),
        r = a(99708),
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
      function c(e) {
        let { className: t, variant: a, size: s, asChild: c = !1, ...o } = e,
          d = c ? r.DX : "button";
        return (0, l.jsx)(d, {
          "data-slot": "button",
          "className": (0, n.cn)(i({ variant: a, size: s, className: t })),
          ...o,
        });
      }
    },
    31299: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => o });
      var l = a(95155),
        r = a(45022),
        s = a(30285),
        n = a(35841),
        i = a(82507),
        c = a(70964);
      let o = (0, a(12115).memo)(() => {
        let e = (0, i.y)();
        return (0, l.jsxs)(n.A, {
          className: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 ",
          children: [
            (0, l.jsx)(r.A, {
              heading: "Outlets",
              description:
                "Manage all your restaurant outlets and their assignments ",
            }),
            (0, l.jsx)("div", {
              className: "flex justify-end items-end",
              children: (0, l.jsx)(s.$, {
                variant: "secondary",
                className: "w-auto",
                onClick: () => {
                  e(c.N.admin.addOutlet);
                },
                children: "Add Outlet",
              }),
            }),
          ],
        });
      });
    },
    35841: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      var l = a(95155);
      a(12115);
      let r = (e) => {
        let { children: t, className: a = "" } = e;
        return (0, l.jsx)("div", {
          className: "grid gap-6  ".concat(a),
          children: t,
        });
      };
    },
    37628: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      var l = a(95155),
        r = a(66766);
      let s = (e) => {
        let {
          icon: t,
          title: a,
          className: s,
          width: n = 24,
          height: i = 24,
          onClick: c,
        } = e;
        return (0, l.jsx)("div", {
          className: "flex items-center justify-between p-4 rounded-lg ".concat(
            s,
          ),
          onClick: c,
          children: (0, l.jsx)(r.default, {
            src: t,
            alt: a,
            width: n,
            height: i,
          }),
        });
      };
    },
    45022: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      var l = a(95155),
        r = a(59434);
      let s = (e) => {
          let { text: t, className: a } = e;
          return (0, l.jsx)("p", {
            className: (0, r.cn)(
              "leading-7 [&:not(:first-child)]:mt-2 text-base text-supporting-light-grey",
              a,
            ),
            children: t,
          });
        },
        n = (e) => {
          let { heading: t, description: a } = e;
          return (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)("h1", {
                className: "text-2xl font-medium text-gray-900",
                children: t,
              }),
              a && (0, l.jsx)(s, { className: "text-gray", text: a }),
            ],
          });
        };
    },
    47457: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      var l = a(95155),
        r = a(59409);
      a(12115);
      let s = (e) => {
        let {
          placeholder: t = "Select",
          options: a,
          onValueChange: s,
          className: n = "w-[240px] h-9 text-sm bg-white",
          value: i,
          label: c,
        } = e;
        return (0, l.jsxs)("div", {
          className: "flex flex-col space-y-1.5",
          children: [
            c && (0, l.jsx)("label", { className: " text-sm ", children: c }),
            (0, l.jsxs)(r.Select, {
              value: i,
              onValueChange: s,
              children: [
                (0, l.jsx)(r.SelectTrigger, {
                  className: n,
                  children: (0, l.jsx)(r.SelectValue, { placeholder: t }),
                }),
                (0, l.jsx)(r.SelectContent, {
                  children: a.map((e) =>
                    (0, l.jsx)(
                      r.SelectItem,
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
      "use strict";
      a.d(t, { A: () => l });
      let l = (0, a(19946).A)("search", [
        ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
        ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
      ]);
    },
    62523: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => s });
      var l = a(95155);
      a(12115);
      var r = a(59434);
      function s(e) {
        let { className: t, type: a, ...s } = e;
        return (0, l.jsx)("input", {
          "type": a,
          "data-slot": "input",
          "className": (0, r.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t,
          ),
          ...s,
        });
      }
    },
    66766: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => r.a });
      var l = a(71469),
        r = a.n(l);
    },
    71469: (e, t, a) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var a in t)
            Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
        })(t, {
          default: function () {
            return c;
          },
          getImageProps: function () {
            return i;
          },
        }));
      let l = a(88229),
        r = a(38883),
        s = a(33063),
        n = l._(a(51193));
      function i(e) {
        let { props: t } = (0, r.getImgProps)(e, {
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
      let c = s.Image;
    },
    74466: (e, t, a) => {
      "use strict";
      a.d(t, { F: () => n });
      var l = a(52596);
      let r = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        s = l.$,
        n = (e, t) => (a) => {
          var l;
          if ((null == t ? void 0 : t.variants) == null)
            return s(
              e,
              null == a ? void 0 : a.class,
              null == a ? void 0 : a.className,
            );
          let { variants: n, defaultVariants: i } = t,
            c = Object.keys(n).map((e) => {
              let t = null == a ? void 0 : a[e],
                l = null == i ? void 0 : i[e];
              if (null === t) return null;
              let s = r(t) || r(l);
              return n[e][s];
            }),
            o =
              a &&
              Object.entries(a).reduce((e, t) => {
                let [a, l] = t;
                return (void 0 === l || (e[a] = l), e);
              }, {});
          return s(
            e,
            c,
            null == t || null == (l = t.compoundVariants)
              ? void 0
              : l.reduce((e, t) => {
                  let { class: a, className: l, ...r } = t;
                  return Object.entries(r).every((e) => {
                    let [t, a] = e;
                    return Array.isArray(a)
                      ? a.includes({ ...i, ...o }[t])
                      : { ...i, ...o }[t] === a;
                  })
                    ? [...e, a, l]
                    : e;
                }, []),
            null == a ? void 0 : a.class,
            null == a ? void 0 : a.className,
          );
        };
    },
    75757: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      var l = a(95155),
        r = a(30285);
      a(12115);
      let s = (e) => {
        let {
            children: t,
            totalItems: a,
            currentPage: s,
            itemsPerPage: n,
            onPageChange: i,
          } = e,
          c = Math.ceil(a / n),
          o = (s - 1) * n + 1,
          d = Math.min(o + n - 1, a);
        return (0, l.jsxs)("div", {
          className: "space-y-4 bg-white border rounded-sm",
          children: [
            (0, l.jsx)("div", { className: "border-b", children: t }),
            (0, l.jsxs)("div", {
              className: "flex items-center justify-between px-2 mb-2 ",
              children: [
                (0, l.jsxs)("div", {
                  className: "text-sm text-black",
                  children: ["Showing ", o, " to ", d, " of ", a],
                }),
                (0, l.jsxs)("div", {
                  className: "flex items-center gap-1 ",
                  children: [
                    (0, l.jsx)(r.$, {
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
                    Array.from({ length: c }, (e, t) => {
                      let a = t + 1,
                        n = s === a;
                      return (0, l.jsx)(
                        r.$,
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
                    (0, l.jsx)(r.$, {
                      variant: "ghost",
                      size: "sm",
                      className:
                        "rounded-full bg-pagination-gray text-pagination-icon-gray",
                      onClick: () => {
                        s < c && i(s + 1);
                      },
                      disabled: s === c,
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
    81202: (e, t, a) => {
      (Promise.resolve().then(a.bind(a, 84449)),
        Promise.resolve().then(a.bind(a, 4515)),
        Promise.resolve().then(a.bind(a, 31299)),
        Promise.resolve().then(a.bind(a, 94891)));
    },
    83415: (e, t, a) => {
      "use strict";
      a.d(t, { lg: () => r, w7: () => l, xt: () => n, yD: () => s });
      let l = "/icons/side-bar-icon/",
        r = "/icons/brands-icon/",
        s = "/icons/actions/",
        n = "/icons/outlets-icon/tabs";
    },
    84449: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => x });
      var l = a(95155),
        r = a(82507),
        s = a(70964),
        n = a(12115),
        i = a(37628),
        c = a(85127),
        o = a(83415);
      let d = (e) => {
        let {
          outletData: t,
          headtable: a,
          onEdit: r,
          onDelete: s,
          onView: n,
        } = e;
        return (0, l.jsxs)(c.Table, {
          children: [
            (0, l.jsx)(c.TableHeader, {
              children: (0, l.jsx)(c.TableRow, {
                children:
                  a &&
                  a.map((e, t) => (0, l.jsx)(c.TableHead, { children: e }, t)),
              }),
            }),
            (0, l.jsx)(c.TableBody, {
              children: t.map((e, t) =>
                (0, l.jsxs)(
                  c.TableRow,
                  {
                    className: "hover:bg-white  my-4",
                    children: [
                      (0, l.jsx)(c.TableCell, {
                        className: "text-gray",
                        children: e.id,
                      }),
                      (0, l.jsx)(c.TableCell, {
                        className: "font-medium",
                        children: e.outlets,
                      }),
                      (0, l.jsx)(c.TableCell, {
                        className: "text-left text-gray",
                        children: e.location,
                      }),
                      (0, l.jsx)(c.TableCell, {
                        children: (0, l.jsx)("div", {
                          className: "font-medium",
                          children: e.brand_name,
                        }),
                      }),
                      (0, l.jsx)(c.TableCell, {
                        className: "text-left text-gray",
                        children: e.created_date,
                      }),
                      (0, l.jsx)(c.TableCell, {
                        className: "text-left",
                        children: (0, l.jsx)("span", {
                          className: "font-semibold ".concat(
                            "Active" === e.status
                              ? "text-accent-green bg-accent-green-light rounded-full px-2 py-0.5"
                              : "text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5",
                          ),
                          children: e.status,
                        }),
                      }),
                      (0, l.jsxs)(c.TableCell, {
                        className:
                          "text-center flex justify-start items-center !py-4 gap-x-3",
                        children: [
                          (0, l.jsx)(i.A, {
                            icon: "".concat(o.yD, "edit.svg"),
                            title: "Edit",
                            width: 16,
                            height: 16,
                            className: "!p-0 cursor-pointer",
                            onClick: () => r(e.id),
                          }),
                          (0, l.jsx)(i.A, {
                            icon: "".concat(o.yD, "delete.svg"),
                            title: "Delete",
                            width: 16,
                            height: 16,
                            className: "!p-0 cursor-pointer",
                            onClick: () => s(e.id),
                          }),
                          (0, l.jsx)(i.A, {
                            icon: "".concat(o.yD, "view.svg"),
                            title: "View",
                            width: 16,
                            height: 16,
                            className: "!p-0 cursor-pointer",
                            onClick: () => n(e.id),
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
      var u = a(75757);
      let g = (e) => {
          let { onEdit: t, onDelete: a, onView: r } = e,
            [s, i] = (0, n.useState)(1);
          return (0, l.jsx)(u.A, {
            totalItems: 12,
            currentPage: s,
            itemsPerPage: 3,
            onPageChange: (e) => i(e),
            children: (0, l.jsx)(d, {
              headtable: h,
              outletData: b,
              onEdit: t,
              onDelete: a,
              onView: r,
            }),
          });
        },
        h = [
          "ID",
          "Outlet",
          "Location",
          "Brand",
          "Created Date",
          "Status",
          "Actions",
        ],
        b = [
          {
            id: 1,
            outlets: "Downtown Branch",
            location: "123 Main Street New York, NY 10001",
            brand_name: "Brand A",
            status: "Active",
            created_date: "2023-01-01",
          },
          {
            id: 2,
            outlets: "Downtown Branch",
            location: "123 Main Street New York, NY 10001",
            brand_name: "Brand A",
            status: "Active",
            created_date: "2023-01-01",
          },
          {
            id: 3,
            outlets: "Downtown Branch",
            location: "123 Main Street New York, NY 10001",
            brand_name: "Brand A",
            status: "Active",
            created_date: "2023-01-01",
          },
        ],
        x = (0, n.memo)(() => {
          let e = (0, r.y)();
          return (0, l.jsx)(g, {
            onEdit: (t) => {
              e(s.N.admin.editOutlet);
            },
            onDelete: () => {
              console.log("Delete outlet action triggered");
            },
            onView: (t) => {
              e(s.N.admin.viewOutlet);
            },
          });
        });
    },
    85127: (e, t, a) => {
      "use strict";
      a.d(t, {
        Table: () => s,
        TableBody: () => i,
        TableCell: () => d,
        TableHead: () => o,
        TableHeader: () => n,
        TableRow: () => c,
      });
      var l = a(95155);
      a(12115);
      var r = a(59434);
      function s(e) {
        let { className: t, ...a } = e;
        return (0, l.jsx)("div", {
          "data-slot": "table-container",
          "className": "relative w-full overflow-x-auto",
          "children": (0, l.jsx)("table", {
            "data-slot": "table",
            "className": (0, r.cn)("w-full caption-bottom text-sm", t),
            ...a,
          }),
        });
      }
      function n(e) {
        let { className: t, ...a } = e;
        return (0, l.jsx)("thead", {
          "data-slot": "table-header",
          "className": (0, r.cn)("[&_tr]:border-b", t),
          ...a,
        });
      }
      function i(e) {
        let { className: t, ...a } = e;
        return (0, l.jsx)("tbody", {
          "data-slot": "table-body",
          "className": (0, r.cn)("[&_tr:last-child]:border-0", t),
          ...a,
        });
      }
      function c(e) {
        let { className: t, ...a } = e;
        return (0, l.jsx)("tr", {
          "data-slot": "table-row",
          "className": (0, r.cn)(
            "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors ",
            t,
          ),
          ...a,
        });
      }
      function o(e) {
        let { className: t, ...a } = e;
        return (0, l.jsx)("th", {
          "data-slot": "table-head",
          "className": (0, r.cn)(
            "text-foreground h-10 p-4 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            t,
          ),
          ...a,
        });
      }
      function d(e) {
        let { className: t, ...a } = e;
        return (0, l.jsx)("td", {
          "data-slot": "table-cell",
          "className": (0, r.cn)(
            "p-4 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            t,
          ),
          ...a,
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [3063, 5, 3047, 6052, 4891, 8441, 1684, 7358], () => t(81202)),
      (_N_E = e.O()));
  },
]);

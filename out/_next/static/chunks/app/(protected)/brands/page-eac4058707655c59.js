(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6039],
  {
    9957: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => d });
      var i = a(95155),
        s = a(45022),
        l = a(30285),
        c = a(35841),
        n = a(82507),
        r = a(70964);
      let d = (0, a(12115).memo)(() => {
        let e = (0, n.y)();
        return (0, i.jsxs)(c.A, {
          className: "grid gap-4 sm:grid-cols-1 md:grid-cols-2 ",
          children: [
            (0, i.jsx)(s.A, {
              heading: "Brands",
              description:
                "Manage all your restaurant brands and their configurations.",
            }),
            (0, i.jsx)("div", {
              className: "flex justify-end items-end",
              children: (0, i.jsx)(l.$, {
                variant: "secondary",
                className: "w-auto",
                onClick: () => {
                  e(r.N.admin.addBrand);
                },
                children: "Add Brand",
              }),
            }),
          ],
        });
      });
    },
    35630: (e, t, a) => {
      (Promise.resolve().then(a.t.bind(a, 33063, 23)),
        Promise.resolve().then(a.bind(a, 40099)),
        Promise.resolve().then(a.bind(a, 9957)),
        Promise.resolve().then(a.bind(a, 71979)),
        Promise.resolve().then(a.bind(a, 94891)));
    },
    35841: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => s });
      var i = a(95155);
      a(12115);
      let s = (e) => {
        let { children: t, className: a = "" } = e;
        return (0, i.jsx)("div", {
          className: "grid gap-6  ".concat(a),
          children: t,
        });
      };
    },
    45022: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => c });
      var i = a(95155),
        s = a(59434);
      let l = (e) => {
          let { text: t, className: a } = e;
          return (0, i.jsx)("p", {
            className: (0, s.cn)(
              "leading-7 [&:not(:first-child)]:mt-2 text-base text-supporting-light-grey",
              a,
            ),
            children: t,
          });
        },
        c = (e) => {
          let { heading: t, description: a } = e;
          return (0, i.jsxs)("div", {
            children: [
              (0, i.jsx)("h1", {
                className: "text-2xl font-medium text-gray-900",
                children: t,
              }),
              a && (0, i.jsx)(l, { className: "text-gray", text: a }),
            ],
          });
        };
    },
    71979: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => N });
      var i = a(95155),
        s = a(82507),
        l = a(70964),
        c = a(35695),
        n = a(12115),
        r = a(37628),
        d = a(66695),
        o = a(83415);
      let h = (e) => {
        let {
          id: t,
          title: a,
          description: s,
          outletsCount: l,
          status: c,
          logo: n,
          onEdit: h,
          onDelete: u,
        } = e;
        return (0, i.jsxs)(d.Zp, {
          className: "w-full gap-2",
          children: [
            (0, i.jsxs)(d.aR, {
              className: "flex justify-between items-start",
              children: [
                n,
                (0, i.jsxs)("div", {
                  className: "text-center flex justify-start gap-x-3",
                  children: [
                    (0, i.jsx)(r.A, {
                      icon: "".concat(o.yD, "edit.svg"),
                      title: "Edit",
                      width: 16,
                      height: 16,
                      className: "!p-0 cursor-pointer",
                      onClick: h,
                    }),
                    (0, i.jsx)(r.A, {
                      icon: "".concat(o.yD, "delete.svg"),
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
            (0, i.jsxs)(d.Wu, {
              children: [
                (0, i.jsx)(d.ZB, {
                  className: "text-lg font-semibold",
                  children: a,
                }),
                (0, i.jsx)("p", {
                  className: "text-sm text-gray-500",
                  children: s,
                }),
              ],
            }),
            (0, i.jsx)(d.wL, {
              children: (0, i.jsxs)("div", {
                className: " w-full flex justify-between items-center",
                children: [
                  (0, i.jsxs)("p", {
                    className:
                      "text-sm font-medium text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5",
                    children: [l, " Outlets"],
                  }),
                  (0, i.jsx)("span", {
                    className: "px-3 py-1 rounded-full text-sm ".concat(
                      "Active" === c
                        ? "text-accent-green bg-accent-green-light rounded-full px-2 py-0.5"
                        : "text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5",
                    ),
                    children: c,
                  }),
                ],
              }),
            }),
          ],
        });
      };
      var u = a(35841);
      let g = (e) => {
          let { onEdit: t } = e;
          return (0, i.jsx)(u.A, {
            className: "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
            children: m.map((e, a) =>
              (0, i.jsx)(
                h,
                {
                  id: e.id,
                  title: e.title,
                  description: e.description,
                  outletsCount: e.outletsCount,
                  status: e.status,
                  logo: e.logo,
                  onEdit: () => t(e.id),
                  onDelete: () => console.log("Delete clicked"),
                },
                a,
              ),
            ),
          });
        },
        m = [
          {
            id: 1,
            title: "Pizza Palace",
            description: "Premium pizza chain with authentic Italian recipes",
            outletsCount: 10,
            status: "Active",
            logo: (0, i.jsx)(r.A, {
              className: " bg-pagination-gray",
              icon: "/static/pizza.svg",
              title: "Pizza Palace",
              width: 50,
              height: 50,
            }),
          },
          {
            id: 2,
            title: "Pizza Palace",
            description: "Premium pizza chain with authentic Italian recipes",
            outletsCount: 10,
            status: "Active",
            logo: (0, i.jsx)(r.A, {
              className: " bg-pagination-gray",
              icon: "/static/pizza.svg",
              title: "Pizza Palace",
              width: 50,
              height: 50,
            }),
          },
          {
            id: 3,
            title: "Pizza Palace",
            description: "Premium pizza chain with authentic Italian recipes",
            outletsCount: 10,
            status: "Active",
            logo: (0, i.jsx)(r.A, {
              className: " bg-pagination-gray",
              icon: "/static/pizza.svg",
              title: "Pizza Palace",
              width: 50,
              height: 50,
            }),
          },
          {
            id: 4,
            title: "Pizza Palace",
            description: "Premium pizza chain with authentic Italian recipes",
            outletsCount: 10,
            status: "Active",
            logo: (0, i.jsx)(r.A, {
              className: " bg-pagination-gray",
              icon: "/static/pizza.svg",
              title: "Pizza Palace",
              width: 50,
              height: 50,
            }),
          },
          {
            id: 5,
            title: "Pizza Palace",
            description: "Premium pizza chain with authentic Italian recipes",
            outletsCount: 10,
            status: "Active",
            logo: (0, i.jsx)(r.A, {
              className: " bg-pagination-gray",
              icon: "/static/pizza.svg",
              title: "Pizza Palace",
              width: 50,
              height: 50,
            }),
          },
          {
            id: 6,
            title: "Pizza Palace",
            description: "Premium pizza chain with authentic Italian recipes",
            outletsCount: 10,
            status: "Active",
            logo: (0, i.jsx)(r.A, {
              className: " bg-pagination-gray",
              icon: "/static/pizza.svg",
              title: "Pizza Palace",
              width: 50,
              height: 50,
            }),
          },
        ];
      var x = a(85127);
      let p = (e) => {
        let {
          brandData: t,
          headtable: a,
          onEdit: s,
          onDelete: l,
          onView: c,
        } = e;
        return (0, i.jsxs)(x.Table, {
          children: [
            (0, i.jsx)(x.TableHeader, {
              children: (0, i.jsx)(x.TableRow, {
                children:
                  a &&
                  a.map((e, t) => (0, i.jsx)(x.TableHead, { children: e }, t)),
              }),
            }),
            (0, i.jsx)(x.TableBody, {
              children: t.map((e, t) =>
                (0, i.jsxs)(
                  x.TableRow,
                  {
                    className: "hover:bg-white  my-4",
                    children: [
                      (0, i.jsx)(x.TableCell, {
                        className: "text-gray",
                        children: e.id,
                      }),
                      (0, i.jsx)(x.TableCell, { children: e.brandName }),
                      (0, i.jsx)(x.TableCell, {
                        className: "text-left text-gray",
                        children: e.description,
                      }),
                      (0, i.jsx)(x.TableCell, {
                        children: (0, i.jsx)("div", {
                          className:
                            "text-accent-orange bg-accent-orange-light w-fit px-2 py-1  rounded-full",
                          children: e.outlets,
                        }),
                      }),
                      (0, i.jsx)(x.TableCell, {
                        className: "text-left text-gray",
                        children: e.createdDate,
                      }),
                      (0, i.jsx)(x.TableCell, {
                        className: "text-left",
                        children: (0, i.jsx)("span", {
                          className: "".concat(
                            "Active" === e.status
                              ? "text-accent-green bg-accent-green-light rounded-full px-2 py-0.5"
                              : "text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5",
                          ),
                          children: e.status,
                        }),
                      }),
                      (0, i.jsxs)(x.TableCell, {
                        className:
                          "text-center flex justify-start items-center !py-4 gap-x-3",
                        children: [
                          (0, i.jsx)(r.A, {
                            icon: "".concat(o.yD, "edit.svg"),
                            title: "Edit",
                            width: 16,
                            height: 16,
                            className: "!p-0 cursor-pointer",
                            onClick: () => s(e.id),
                          }),
                          (0, i.jsx)(r.A, {
                            icon: "".concat(o.yD, "delete.svg"),
                            title: "Delete",
                            width: 16,
                            height: 16,
                            className: "!p-0 cursor-pointer",
                            onClick: () => l(e.id),
                          }),
                          (0, i.jsx)(r.A, {
                            icon: "".concat(o.yD, "view.svg"),
                            title: "View",
                            width: 16,
                            height: 16,
                            className: "!p-0 cursor-pointer",
                            onClick: () => c(e.id),
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
      var z = a(75757);
      let j = (e) => {
          let { onEdit: t, onDelete: a, onView: s } = e,
            [l, c] = (0, n.useState)(1);
          return (0, i.jsx)(z.A, {
            totalItems: 12,
            currentPage: l,
            itemsPerPage: 3,
            onPageChange: (e) => c(e),
            children: (0, i.jsx)(p, {
              headtable: P,
              brandData: v,
              onEdit: t,
              onDelete: a,
              onView: s,
            }),
          });
        },
        P = [
          "ID",
          "Brand Name",
          "Description",
          "Outlets",
          "Created Date",
          "Status",
          "Actions",
        ],
        v = [
          {
            id: 1,
            brandName: "Pizza Palace",
            description: "Premium pizza chain with authentic Italian recipes",
            outlets: "2",
            status: "Active",
            createdDate: "2023-01-01",
          },
          {
            id: 2,
            brandName: "Pizza Palace",
            description: "Premium pizza chain with authentic Italian recipes",
            outlets: "2",
            status: "Active",
            createdDate: "2023-01-01",
          },
          {
            id: 3,
            brandName: "Pizza Palace",
            description: "Premium pizza chain with authentic Italian recipes",
            outlets: "2",
            status: "Active",
            createdDate: "2023-01-01",
          },
        ],
        N = (0, n.memo)(() => {
          let [e, t] = (0, n.useState)("list"),
            a = (0, s.y)(),
            r = (0, c.useSearchParams)();
          (0, n.useEffect)(() => {
            t(r.get("collapsed") || "list");
          }, [r]);
          let d = (e) => {
            a(l.N.admin.editBrand);
          };
          return "grid" === e
            ? (0, i.jsx)(g, { onEdit: d })
            : "list" === e
              ? (0, i.jsx)(j, {
                  onEdit: d,
                  onDelete: () => {
                    console.log("Delete brand action triggered");
                  },
                  onView: (e) => {
                    a(l.N.admin.viewBrand);
                  },
                })
              : void 0;
        });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [3063, 5, 3047, 6052, 4891, 2939, 8441, 1684, 7358], () =>
      t(35630),
    ),
      (_N_E = e.O()));
  },
]);

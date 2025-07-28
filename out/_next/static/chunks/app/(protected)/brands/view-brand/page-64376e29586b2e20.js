(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4797],
  {
    21258: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => h });
      var s = a(95155),
        l = a(82507),
        n = a(70964),
        i = a(24185),
        c = a(75757),
        r = a(12115);
      let o = (e) => {
          let { onEdit: t, onDelete: a, onView: l } = e,
            [n, o] = (0, r.useState)(1);
          return (0, s.jsx)(c.A, {
            totalItems: 12,
            currentPage: n,
            itemsPerPage: 3,
            onPageChange: (e) => o(e),
            children: (0, s.jsx)(i.A, {
              headtable: d,
              brandData: x,
              onEdit: t,
              onDelete: a,
              onView: l,
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
        x = [
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
        h = () => {
          let e = (0, l.y)();
          return (0, s.jsx)(o, {
            onEdit: (t) => {
              e(n.N.admin.editOutlet);
            },
            onDelete: () => {
              console.log("Delete outlet action triggered");
            },
            onView: (t) => {
              e(n.N.admin.viewOutlet);
            },
          });
        };
    },
    24152: (e, t, a) => {
      (Promise.resolve().then(a.bind(a, 93167)),
        Promise.resolve().then(a.bind(a, 21258)),
        Promise.resolve().then(a.bind(a, 40099)),
        Promise.resolve().then(a.bind(a, 94891)));
    },
    24185: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => r });
      var s = a(95155),
        l = a(37628),
        n = a(85127),
        i = a(83415),
        c = a(66766);
      let r = (e) => {
        let {
          brandData: t,
          headtable: a,
          onEdit: r,
          onDelete: o,
          onView: d,
        } = e;
        return (0, s.jsxs)(n.Table, {
          children: [
            (0, s.jsx)(n.TableHeader, {
              children: (0, s.jsx)(n.TableRow, {
                children:
                  a &&
                  a.map((e, t) => (0, s.jsx)(n.TableHead, { children: e }, t)),
              }),
            }),
            (0, s.jsx)(n.TableBody, {
              children: t.map((e, t) =>
                (0, s.jsxs)(
                  n.TableRow,
                  {
                    className: "hover:bg-white  my-4",
                    children: [
                      (0, s.jsx)(n.TableCell, {
                        className: "text-gray",
                        children: e.id,
                      }),
                      (0, s.jsx)(n.TableCell, { children: e.outlets }),
                      (0, s.jsx)(n.TableCell, {
                        className: "text-left text-gray",
                        children: e.location,
                      }),
                      (0, s.jsx)(n.TableCell, {
                        children: (0, s.jsxs)("div", {
                          className: "flex justify-start gap-x-2",
                          children: [
                            (0, s.jsx)(c.default, {
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
                      (0, s.jsxs)(n.TableCell, {
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
                      (0, s.jsx)(n.TableCell, {
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
                      (0, s.jsxs)(n.TableCell, {
                        className:
                          "text-center flex justify-start items-center !py-4 gap-x-3",
                        children: [
                          (0, s.jsx)(l.A, {
                            icon: "".concat(i.yD, "edit.svg"),
                            title: "Edit",
                            width: 16,
                            height: 16,
                            className: "!p-0 cursor-pointer",
                            onClick: () => r(e.id),
                          }),
                          (0, s.jsx)(l.A, {
                            icon: "".concat(i.yD, "delete.svg"),
                            title: "Delete",
                            width: 16,
                            height: 16,
                            className: "!p-0 cursor-pointer",
                            onClick: () => o(e.id),
                          }),
                          (0, s.jsx)(l.A, {
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
    93167: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => o });
      var s = a(95155),
        l = a(37628),
        n = a(66695),
        i = a(83415),
        c = a(66766);
      let r = (e) => {
          let {
            id: t,
            title: a,
            description: r,
            outletsCount: o,
            status: d,
            logo: x,
            name: h,
            date: g,
            onEdit: m,
            onDelete: u,
          } = e;
          return (0, s.jsxs)(n.Zp, {
            className: "w-full gap-2",
            children: [
              (0, s.jsxs)(n.aR, {
                className: "flex justify-between items-start",
                children: [
                  x,
                  (0, s.jsxs)("div", {
                    className: "text-center flex justify-start gap-x-3",
                    children: [
                      (0, s.jsx)(l.A, {
                        icon: "".concat(i.yD, "edit.svg"),
                        title: "Edit",
                        width: 16,
                        height: 16,
                        className: "!p-0 cursor-pointer",
                        onClick: m,
                      }),
                      (0, s.jsx)(l.A, {
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
              (0, s.jsxs)(n.Wu, {
                children: [
                  (0, s.jsx)(n.ZB, {
                    className: "text-lg font-semibold",
                    children: a,
                  }),
                  (0, s.jsx)("p", {
                    className: "text-sm text-gray-500",
                    children: r,
                  }),
                ],
              }),
              (0, s.jsx)(n.wL, {
                children: (0, s.jsxs)("div", {
                  className: " w-full flex justify-start gap-4 items-center",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "text-sm font-medium text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5 flex justify-center items-center gap-x-2",
                      children: [
                        (0, s.jsx)(c.default, {
                          src: "".concat(i.lg, "/outlet.svg"),
                          alt: "Outlet Icon",
                          width: 16,
                          height: 16,
                        }),
                        (0, s.jsxs)("p", { children: [o, " Outlets"] }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "px-3 py-1 font-semibold rounded-full text-sm flex justify-center items-center gap-x-2 ".concat(
                          "Active" === d
                            ? "text-accent-green bg-accent-green-light rounded-full px-2 py-0.5"
                            : "text-accent-orange bg-accent-orange-light rounded-full px-2 py-0.5",
                        ),
                      children: [
                        (0, s.jsx)(c.default, {
                          src: "".concat(i.lg, "/active.svg"),
                          alt: "active",
                          width: 16,
                          height: 16,
                        }),
                        (0, s.jsx)("span", { children: d }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "text-sm font-semibold text-blue-700 bg-accent-green-light rounded-full px-2 py-0.5 flex justify-center items-center gap-x-2",
                      children: [
                        (0, s.jsx)(c.default, {
                          src: "".concat(i.lg, "/user.svg"),
                          alt: "brand Manager User",
                          width: 12,
                          height: 12,
                        }),
                        (0, s.jsx)("span", { children: h }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "px-3 py-1 rounded-full text-sm text-gray bg-pagination-gray font-semibold flex justify-center items-center gap-x-2",
                      children: [
                        (0, s.jsx)(c.default, {
                          src: "".concat(i.lg, "/calendar.svg"),
                          alt: "Calendar",
                          width: 16,
                          height: 16,
                        }),
                        (0, s.jsx)("span", { children: g }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        o = () =>
          (0, s.jsx)(r, {
            id: 1,
            title: "Pizza Palace",
            description:
              "A premium pizza restaurant chain specializing in authentic Italian cuisine with fresh ingredients and traditional recipes. Operating across multiple locations with consistent quality and service standards.",
            outletsCount: 10,
            status: "Active",
            name: "Sarah Jones",
            date: "2023-10-01",
            logo: (0, s.jsx)(l.A, {
              icon: "/static/pizza.svg",
              title: "Pizza Palace",
              width: 40,
              height: 40,
              className: "bg-pagination-gray ",
            }),
            onEdit: () => console.log("Edit brand action triggered"),
            onDelete: () => console.log("Delete brand action triggered"),
          });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [3063, 5, 3047, 6052, 4891, 2939, 8441, 1684, 7358], () =>
      t(24152),
    ),
      (_N_E = e.O()));
  },
]);

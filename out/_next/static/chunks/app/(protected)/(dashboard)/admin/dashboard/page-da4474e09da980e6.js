(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4799],
  {
    16814: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => l });
      var a = s(95155),
        i = s(84854),
        r = s(92794),
        n = s(84616);
      let l = () =>
        (0, a.jsxs)(r.A, {
          title: "Role Management",
          children: [
            (0, a.jsx)(i.A, {
              text: "Manage User Role",
              icon: (0, a.jsx)(n.A, { className: "h-4 w-4" }),
              onClick: () => console.log("clicked"),
              className: "text-white hover:bg-gray-800/90 bg-gray-800",
            }),
            (0, a.jsx)(i.A, {
              text: "Permissions Settings",
              icon: (0, a.jsx)(n.A, { className: "h-4 w-4" }),
              onClick: () => console.log("clicked"),
              className: "bg-accent text-black hover:bg-accent/90",
            }),
            (0, a.jsx)(i.A, {
              text: "Create New User",
              icon: (0, a.jsx)(n.A, { className: "h-4 w-4" }),
              onClick: () => console.log("clicked"),
              className: "bg-accent text-black hover:bg-accent/90",
            }),
          ],
        });
    },
    30285: (e, t, s) => {
      "use strict";
      s.d(t, { $: () => c });
      var a = s(95155),
        i = s(99708),
        r = s(74466);
      s(12115);
      var n = s(59434);
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
      function c(e) {
        let { className: t, variant: s, size: r, asChild: c = !1, ...o } = e,
          d = c ? i.DX : "button";
        return (0, a.jsx)(d, {
          "data-slot": "button",
          "className": (0, n.cn)(l({ variant: s, size: r, className: t })),
          ...o,
        });
      }
    },
    47573: (e, t, s) => {
      (Promise.resolve().then(s.t.bind(s, 33063, 23)),
        Promise.resolve().then(s.bind(s, 67661)),
        Promise.resolve().then(s.bind(s, 16814)),
        Promise.resolve().then(s.bind(s, 61930)),
        Promise.resolve().then(s.bind(s, 94891)));
    },
    61930: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => v });
      var a = s(95155),
        i = s(83540),
        r = s(93504),
        n = s(94754),
        l = s(96025),
        c = s(52071),
        o = s(27086),
        d = s(42366);
      let u = [
          { day: "Mon", activity: 20 },
          { day: "Tue", activity: 50 },
          { day: "Wed", activity: 20 },
          { day: "Thu", activity: 70 },
          { day: "Fri", activity: 100 },
          { day: "Sat", activity: 20 },
          { day: "Sun", activity: 50 },
        ],
        v = () =>
          (0, a.jsx)(i.u, {
            width: "100%",
            height: 240,
            className: "!p-0 m-0",
            children: (0, a.jsxs)(r.b, {
              data: u,
              margin: { top: 10, bottom: 5, left: 0 },
              children: [
                (0, a.jsx)(n.d, { vertical: !1, strokeDasharray: "" }),
                (0, a.jsx)(l.W, {
                  dataKey: "day",
                  axisLine: !1,
                  tickLine: !1,
                  padding: { left: 10, right: 10 },
                }),
                (0, a.jsx)(c.h, {
                  width: 40,
                  axisLine: !1,
                  tickLine: !1,
                  ticks: [0, 25, 50, 75, 100],
                }),
                (0, a.jsx)(o.m, {}),
                (0, a.jsx)(d.N, {
                  dataKey: "activity",
                  stroke: "#F59E0B",
                  strokeWidth: 2,
                  dot: { r: 4, fill: "#F59E0B", strokeWidth: 0 },
                  activeDot: { r: 6 },
                }),
              ],
            }),
          });
    },
    67661: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => l });
      var a = s(95155),
        i = s(84854),
        r = s(92794),
        n = s(84616);
      let l = () =>
        (0, a.jsxs)(r.A, {
          title: "Global Settings",
          children: [
            (0, a.jsx)(i.A, {
              text: "System Configuration",
              icon: (0, a.jsx)(n.A, { className: "h-4 w-4" }),
              onClick: () => console.log("clicked"),
              className: "text-white hover:bg-orange-400/90 bg-orange-400",
            }),
            (0, a.jsx)(i.A, {
              text: "Export Data",
              icon: (0, a.jsx)(n.A, { className: "h-4 w-4" }),
              onClick: () => console.log("clicked"),
              className: "bg-accent text-black hover:bg-accent/90",
            }),
            (0, a.jsx)(i.A, {
              text: "View Audit Logs",
              icon: (0, a.jsx)(n.A, { className: "h-4 w-4" }),
              onClick: () => console.log("clicked"),
              className: "bg-accent text-black hover:bg-accent/90",
            }),
          ],
        });
    },
    74466: (e, t, s) => {
      "use strict";
      s.d(t, { F: () => n });
      var a = s(52596);
      let i = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        r = a.$,
        n = (e, t) => (s) => {
          var a;
          if ((null == t ? void 0 : t.variants) == null)
            return r(
              e,
              null == s ? void 0 : s.class,
              null == s ? void 0 : s.className,
            );
          let { variants: n, defaultVariants: l } = t,
            c = Object.keys(n).map((e) => {
              let t = null == s ? void 0 : s[e],
                a = null == l ? void 0 : l[e];
              if (null === t) return null;
              let r = i(t) || i(a);
              return n[e][r];
            }),
            o =
              s &&
              Object.entries(s).reduce((e, t) => {
                let [s, a] = t;
                return (void 0 === a || (e[s] = a), e);
              }, {});
          return r(
            e,
            c,
            null == t || null == (a = t.compoundVariants)
              ? void 0
              : a.reduce((e, t) => {
                  let { class: s, className: a, ...i } = t;
                  return Object.entries(i).every((e) => {
                    let [t, s] = e;
                    return Array.isArray(s)
                      ? s.includes({ ...l, ...o }[t])
                      : { ...l, ...o }[t] === s;
                  })
                    ? [...e, s, a]
                    : e;
                }, []),
            null == s ? void 0 : s.class,
            null == s ? void 0 : s.className,
          );
        };
    },
    84616: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => a });
      let a = (0, s(19946).A)("plus", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "M12 5v14", key: "s699le" }],
      ]);
    },
    84854: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => r });
      var a = s(95155),
        i = s(30285);
      s(12115);
      let r = (e) => {
        let { text: t, icon: s, className: r = "", ...n } = e;
        return (0, a.jsxs)(i.$, {
          className:
            "inline-flex items-center justify-center p-6 space-x-2 cursor-pointer hover:bg-accent/80  ".concat(
              r,
            ),
          ...n,
          children: [s, (0, a.jsx)("span", { children: t })],
        });
      };
    },
    92794: (e, t, s) => {
      "use strict";
      s.d(t, { A: () => i });
      var a = s(95155);
      let i = (e) => {
        let { title: t, children: s, className: i = "" } = e;
        return (0, a.jsxs)("div", {
          className: "bg-white rounded-md shadow-sm px-6 py-4 ".concat(i),
          children: [
            (0, a.jsx)("div", {
              className: "mb-4",
              children: (0, a.jsx)("h2", {
                className: "text-xl font-semibold text-gray-800 capitalize",
                children: t,
              }),
            }),
            (0, a.jsx)("div", {
              className: " flex flex-col gap-4",
              children: s,
            }),
          ],
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [3063, 5, 3047, 6052, 7908, 4891, 8441, 1684, 7358], () =>
      t(47573),
    ),
      (_N_E = e.O()));
  },
]);

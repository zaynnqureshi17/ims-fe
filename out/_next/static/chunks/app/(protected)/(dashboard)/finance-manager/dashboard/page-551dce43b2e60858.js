(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [196],
  {
    23888: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => v });
      var s = a(95155),
        r = a(83540),
        n = a(93504),
        o = a(94754),
        i = a(96025),
        d = a(52071),
        l = a(27086),
        c = a(64683),
        u = a(42366);
      let m = [
          { day: "Mon", uv: 4e3, pv: 2400 },
          { day: "Tue", uv: 3e3, pv: 1398 },
          { day: "Wed", uv: 2e3, pv: 9800 },
          { day: "Thu", uv: 2780, pv: 3908 },
          { day: "Fri", uv: 1890, pv: 4800 },
          { day: "Sat", uv: 2390, pv: 3800 },
          { day: "Sun", uv: 3490, pv: 4300 },
        ],
        v = () =>
          (0, s.jsx)(r.u, {
            width: "100%",
            height: "100%",
            minHeight: 300,
            children: (0, s.jsxs)(n.b, {
              data: m,
              margin: { top: 5, right: 30, left: 20, bottom: 5 },
              children: [
                (0, s.jsx)(o.d, { vertical: !1, strokeDasharray: "3" }),
                (0, s.jsx)(i.W, { dataKey: "day" }),
                (0, s.jsx)(d.h, {}),
                (0, s.jsx)(l.m, {}),
                (0, s.jsx)(c.s, {}),
                (0, s.jsx)(u.N, {
                  strokeOpacity: 2,
                  dataKey: "pv",
                  stroke: "#FB923C",
                  activeDot: { r: 8 },
                }),
                (0, s.jsx)(u.N, {
                  strokeOpacity: 10,
                  dataKey: "uv",
                  stroke: "#291E48",
                  activeDot: { r: 8 },
                }),
                (0, s.jsx)(u.N, { type: "monotone" }),
              ],
            }),
          });
    },
    29371: (e, t, a) => {
      "use strict";
      a.d(t, { DateRangePicker: () => x });
      var s = a(95155),
        r = a(85057),
        n = a(12115),
        o = a(20547),
        i = a(59434);
      function d(e) {
        let { ...t } = e;
        return (0, s.jsx)(o.bL, { "data-slot": "popover", ...t });
      }
      function l(e) {
        let { ...t } = e;
        return (0, s.jsx)(o.l9, { "data-slot": "popover-trigger", ...t });
      }
      function c(e) {
        let { className: t, align: a = "center", sideOffset: r = 4, ...n } = e;
        return (0, s.jsx)(o.ZL, {
          children: (0, s.jsx)(o.UC, {
            "data-slot": "popover-content",
            "align": a,
            "sideOffset": r,
            "className": (0, i.cn)(
              "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
              t,
            ),
            ...n,
          }),
        });
      }
      var u = a(69074),
        m = a(63008),
        v = a(4544);
      function p(e) {
        let { className: t, classNames: a, showOutsideDays: r = !0, ...n } = e;
        return (0, s.jsx)(v.h, {
          showOutsideDays: r,
          className: (0, i.cn)("p-3 bg-white rounded-md shadow-md", t),
          classNames: {
            months:
              "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
            month: "space-y-4",
            caption: "flex justify-center pt-1 relative items-center",
            caption_label: "text-sm font-medium",
            nav: "space-x-1 flex items-center",
            nav_button:
              "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
            nav_button_previous: "absolute left-1",
            nav_button_next: "absolute right-1",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-gray-500 rounded-md w-9 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-selected)]:bg-primary",
            day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
            day_selected: "bg-primary text-white rounded-md",
            day_today: "bg-accent text-accent-foreground",
            ...a,
          },
          ...n,
        });
      }
      a(39303);
      var h = a(30285);
      function x() {
        let [e, t] = (0, n.useState)(),
          [a, o] = (0, n.useState)();
        return (0, s.jsxs)("div", {
          className: "space-y-2 w-full",
          children: [
            (0, s.jsx)(r.Label, { children: "Date Range" }),
            (0, s.jsxs)("div", {
              className: "flex  gap-2",
              children: [
                (0, s.jsxs)(d, {
                  children: [
                    (0, s.jsx)(l, {
                      asChild: !0,
                      children: (0, s.jsxs)(h.$, {
                        variant: "outline",
                        className: (0, i.cn)(
                          "w-auto  justify-start text-left font-normal",
                          !e && "text-muted-foreground",
                        ),
                        children: [
                          e ? (0, m.GP)(e, "MM/dd/yyyy") : "mm/dd/yyyy",
                          (0, s.jsx)(u.A, {
                            className: "ml-auto h-4 w-4 opacity-50",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(c, {
                      className: "w-auto p-0",
                      children: (0, s.jsx)(p, {
                        mode: "single",
                        selected: e,
                        onSelect: t,
                        initialFocus: !0,
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)(d, {
                  children: [
                    (0, s.jsx)(l, {
                      asChild: !0,
                      children: (0, s.jsxs)(h.$, {
                        variant: "outline",
                        className: (0, i.cn)(
                          "w-auto  justify-start text-left font-normal",
                          !a && "text-muted-foreground",
                        ),
                        children: [
                          a ? (0, m.GP)(a, "MM/dd/yyyy") : "mm/dd/yyyy",
                          (0, s.jsx)(u.A, {
                            className: "ml-auto h-4 w-4 opacity-50",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(c, {
                      className: "w-auto p-0",
                      children: (0, s.jsx)(p, {
                        mode: "single",
                        selected: a,
                        onSelect: o,
                        initialFocus: !0,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    30285: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => d });
      var s = a(95155),
        r = a(99708),
        n = a(74466);
      a(12115);
      var o = a(59434);
      let i = (0, n.F)(
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
      function d(e) {
        let { className: t, variant: a, size: n, asChild: d = !1, ...l } = e,
          c = d ? r.DX : "button";
        return (0, s.jsx)(c, {
          "data-slot": "button",
          "className": (0, o.cn)(i({ variant: a, size: n, className: t })),
          ...l,
        });
      }
    },
    57436: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => d });
      var s = a(95155),
        r = a(83540),
        n = a(3401),
        o = a(56690);
      let i = [
          { name: "Page A", uv: 4e3, pv: 2400, amt: 2400 },
          { name: "Page B", uv: 3e3, pv: 1398, amt: 2210 },
          { name: "Page C", uv: 2e3, pv: 9800, amt: 2290 },
          { name: "Page D", uv: 2780, pv: 3908, amt: 2e3 },
          { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
          { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
          { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
        ],
        d = () =>
          (0, s.jsx)(r.u, {
            width: "100%",
            height: "100%",
            minHeight: 300,
            children: (0, s.jsx)(n.E, {
              width: 150,
              height: 40,
              data: i,
              children: (0, s.jsx)(o.y, { dataKey: "uv", fill: "#FB923C" }),
            }),
          });
    },
    85057: (e, t, a) => {
      "use strict";
      a.d(t, { Label: () => o });
      var s = a(95155);
      a(12115);
      var r = a(40968),
        n = a(59434);
      function o(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)(r.b, {
          "data-slot": "label",
          "className": (0, n.cn)(
            "flex items-center gap-2 text-sm leading-none  select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            t,
          ),
          ...a,
        });
      }
    },
    85127: (e, t, a) => {
      "use strict";
      a.d(t, {
        Table: () => n,
        TableBody: () => i,
        TableCell: () => c,
        TableHead: () => l,
        TableHeader: () => o,
        TableRow: () => d,
      });
      var s = a(95155);
      a(12115);
      var r = a(59434);
      function n(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("div", {
          "data-slot": "table-container",
          "className": "relative w-full overflow-x-auto",
          "children": (0, s.jsx)("table", {
            "data-slot": "table",
            "className": (0, r.cn)("w-full caption-bottom text-sm", t),
            ...a,
          }),
        });
      }
      function o(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("thead", {
          "data-slot": "table-header",
          "className": (0, r.cn)("[&_tr]:border-b", t),
          ...a,
        });
      }
      function i(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("tbody", {
          "data-slot": "table-body",
          "className": (0, r.cn)("[&_tr:last-child]:border-0", t),
          ...a,
        });
      }
      function d(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("tr", {
          "data-slot": "table-row",
          "className": (0, r.cn)(
            "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors ",
            t,
          ),
          ...a,
        });
      }
      function l(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("th", {
          "data-slot": "table-head",
          "className": (0, r.cn)(
            "text-foreground h-10 p-4 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            t,
          ),
          ...a,
        });
      }
      function c(e) {
        let { className: t, ...a } = e;
        return (0, s.jsx)("td", {
          "data-slot": "table-cell",
          "className": (0, r.cn)(
            "p-4 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
            t,
          ),
          ...a,
        });
      }
    },
    95952: (e, t, a) => {
      (Promise.resolve().then(a.bind(a, 29371)),
        Promise.resolve().then(a.bind(a, 23888)),
        Promise.resolve().then(a.bind(a, 57436)),
        Promise.resolve().then(a.bind(a, 94891)),
        Promise.resolve().then(a.bind(a, 85057)),
        Promise.resolve().then(a.bind(a, 59409)),
        Promise.resolve().then(a.bind(a, 85127)));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(
      0,
      [8638, 5, 3047, 6052, 7908, 2603, 1531, 4891, 8441, 1684, 7358],
      () => t(95952),
    ),
      (_N_E = e.O()));
  },
]);

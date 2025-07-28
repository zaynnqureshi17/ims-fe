(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8813],
  {
    6654: (e, t, a) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let l = a(12115);
      function r(e, t) {
        let a = (0, l.useRef)(null),
          r = (0, l.useRef)(null);
        return (0, l.useCallback)(
          (l) => {
            if (null === l) {
              let e = a.current;
              e && ((a.current = null), e());
              let t = r.current;
              t && ((r.current = null), t());
            } else (e && (a.current = n(e, l)), t && (r.current = n(t, l)));
          },
          [e, t],
        );
      }
      function n(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let a = e(t);
          return "function" == typeof a ? a : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    26650: (e, t, a) => {
      "use strict";
      a.d(t, { default: () => d });
      var l = a(95155),
        r = a(76431),
        n = a(47457),
        s = a(30285),
        i = a(35841),
        o = a(62177);
      let d = () => {
        let e = (0, o.mN)();
        return (0, l.jsxs)(o.Op, {
          ...e,
          children: [
            (0, l.jsx)("div", {
              className: "flex flex-col justify-between",
              children: (0, l.jsxs)(i.A, {
                className: "grid-cols-1 md:grid-cols-2 !gap-4",
                children: [
                  (0, l.jsx)(r.A, {
                    name: "outletCode",
                    label: "Outlet Code",
                    placeholder: "Enter unique outlet code (e.g., OUT-FSD-001)",
                    type: "text",
                  }),
                  (0, l.jsx)(r.A, {
                    name: "outletName",
                    label: "Outlet Name",
                    placeholder:
                      "Enter outlet name (e.g., Karahi Express - D Ground)",
                    type: "text",
                  }),
                  (0, l.jsx)(r.A, {
                    name: "companyName",
                    label: "Company Name",
                    placeholder:
                      "Enter legal company name (e.g., Karahi Foods Pvt Ltd)",
                    type: "text",
                  }),
                  (0, l.jsx)(r.A, {
                    name: "registrationNumber",
                    label: "Company Registration Number",
                    placeholder:
                      "Enter company registration number (e.g., 123456-7)",
                    type: "text",
                  }),
                  (0, l.jsx)(r.A, {
                    name: "streetAddress",
                    label: "Street Address",
                    placeholder:
                      "Enter complete street address (e.g., 12 D-Ground, Peoples Colony)",
                    type: "text",
                    className: "col-span-2",
                  }),
                  (0, l.jsx)(n.A, {
                    label: "Country",
                    className: "w-full bg-white",
                    placeholder: "Select country (e.g., Pakistan)",
                    options: [
                      { value: "Pakistan", label: "Pakistan" },
                      { value: "India", label: "India" },
                    ],
                  }),
                  (0, l.jsx)(n.A, {
                    label: "State/Province",
                    className: "w-full bg-white",
                    placeholder: "Enter province or state (e.g., Punjab)",
                    options: [
                      { value: "Punjab", label: "Punjab" },
                      { value: "Sindh", label: "Sindh" },
                    ],
                  }),
                  (0, l.jsx)(r.A, {
                    name: "city",
                    label: "City",
                    placeholder: "Enter city (e.g., Faisalabad)",
                    type: "text",
                  }),
                  (0, l.jsx)(r.A, {
                    name: "postalCode",
                    label: "ZIP/Postal Code",
                    placeholder: "Enter postal code (e.g., 38000)",
                    type: "text",
                  }),
                  (0, l.jsx)(r.A, {
                    name: "financeCode",
                    label: "Finance Code",
                    placeholder:
                      "Enter finance/internal code (e.g., FIN-FSD-01)",
                    type: "text",
                  }),
                  (0, l.jsx)(r.A, {
                    name: "deliveryTime",
                    label: "Delivery Time",
                    placeholder:
                      "Enter preferred delivery hour (e.g., 10:00 AM - 12:00 PM)",
                    type: "text",
                  }),
                  (0, l.jsx)(n.A, {
                    label: "Assign Brand",
                    className: "w-full bg-white",
                    placeholder: "Select brand this outlet belongs to",
                    options: [
                      { value: "Karahi", label: "Karahi" },
                      { value: "GrillExpress", label: "Grill Express" },
                    ],
                  }),
                  (0, l.jsx)(n.A, {
                    label: "Status",
                    className: "w-full bg-white",
                    placeholder: "Active",
                    options: [
                      { value: "Active", label: "Active" },
                      { value: "Inactive", label: "Inactive" },
                    ],
                  }),
                ],
              }),
            }),
            (0, l.jsxs)("div", {
              className: "flex justify-end items-center mt-4 gap-6",
              children: [
                (0, l.jsx)(s.$, {
                  type: "button",
                  variant: "cancel",
                  className: "w-fit",
                  children: "Cancel",
                }),
                (0, l.jsx)(s.$, {
                  type: "submit",
                  variant: "secondary",
                  className: "w-fit",
                  children: "Save Outlet",
                }),
              ],
            }),
          ],
        });
      };
    },
    30285: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => o });
      var l = a(95155),
        r = a(99708),
        n = a(74466);
      a(12115);
      var s = a(59434);
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
      function o(e) {
        let { className: t, variant: a, size: n, asChild: o = !1, ...d } = e,
          c = o ? r.DX : "button";
        return (0, l.jsx)(c, {
          "data-slot": "button",
          "className": (0, s.cn)(i({ variant: a, size: n, className: t })),
          ...d,
        });
      }
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
    47457: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => n });
      var l = a(95155),
        r = a(59409);
      a(12115);
      let n = (e) => {
        let {
          placeholder: t = "Select",
          options: a,
          onValueChange: n,
          className: s = "w-[240px] h-9 text-sm bg-white",
          value: i,
          label: o,
        } = e;
        return (0, l.jsxs)("div", {
          className: "flex flex-col space-y-1.5",
          children: [
            o && (0, l.jsx)("label", { className: " text-sm ", children: o }),
            (0, l.jsxs)(r.Select, {
              value: i,
              onValueChange: n,
              children: [
                (0, l.jsx)(r.SelectTrigger, {
                  className: s,
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
    56762: (e, t, a) => {
      (Promise.resolve().then(a.bind(a, 26650)),
        Promise.resolve().then(a.bind(a, 94891)));
    },
    62523: (e, t, a) => {
      "use strict";
      a.d(t, { p: () => n });
      var l = a(95155);
      a(12115);
      var r = a(59434);
      function n(e) {
        let { className: t, type: a, ...n } = e;
        return (0, l.jsx)("input", {
          "type": a,
          "data-slot": "input",
          "className": (0, r.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t,
          ),
          ...n,
        });
      }
    },
    76431: (e, t, a) => {
      "use strict";
      a.d(t, { A: () => i });
      var l = a(95155);
      a(12115);
      var r = a(62177),
        n = a(62523),
        s = a(85057);
      let i = (e) => {
        let {
            label: t,
            placeholder: a,
            type: i,
            rightIcon: o,
            name: d,
            className: c,
            ...u
          } = e,
          { register: p } = (0, r.xW)();
        return (0, l.jsxs)("div", {
          className: "mb-4 w-full space-y-3 ".concat(c),
          children: [
            (0, l.jsx)(s.Label, { className: "", children: t }),
            (0, l.jsxs)("div", {
              className: "relative",
              children: [
                (0, l.jsx)(n.p, {
                  ...p(d),
                  type: i,
                  placeholder: a,
                  className: " bg-white ".concat(o ? "pr-10" : ""),
                  ...u,
                }),
                o &&
                  (0, l.jsx)("div", {
                    className:
                      "absolute inset-y-0 right-3 flex items-center text-muted-foreground cursor-pointer",
                    children: o,
                  }),
              ],
            }),
          ],
        });
      };
    },
    85057: (e, t, a) => {
      "use strict";
      a.d(t, { Label: () => s });
      var l = a(95155);
      a(12115);
      var r = a(40968),
        n = a(59434);
      function s(e) {
        let { className: t, ...a } = e;
        return (0, l.jsx)(r.b, {
          "data-slot": "label",
          "className": (0, n.cn)(
            "flex items-center gap-2 text-sm leading-none  select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            t,
          ),
          ...a,
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [5, 3047, 6052, 9317, 4891, 8441, 1684, 7358], () => t(56762)),
      (_N_E = e.O()));
  },
]);

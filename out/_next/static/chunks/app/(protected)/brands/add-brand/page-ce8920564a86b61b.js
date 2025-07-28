(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9967],
  {
    23365: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var a = r(95155);
      r(12115);
      let s = (e) => {
        let { label: t, placeholder: r, rows: s = 4 } = e;
        return (0, a.jsxs)("div", {
          className: "space-y-3 flex flex-col",
          children: [
            (0, a.jsx)("label", {
              className: "text-lg text-gray-800",
              children: t,
            }),
            (0, a.jsx)("textarea", {
              placeholder: r,
              rows: s,
              className:
                "resize-none border border-gray-300 bg-white rounded-md p-2 w-full",
            }),
          ],
        });
      };
    },
    30285: (e, t, r) => {
      "use strict";
      r.d(t, { $: () => d });
      var a = r(95155),
        s = r(99708),
        l = r(74466);
      r(12115);
      var i = r(59434);
      let n = (0, l.F)(
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
        let { className: t, variant: r, size: l, asChild: d = !1, ...o } = e,
          c = d ? s.DX : "button";
        return (0, a.jsx)(c, {
          "data-slot": "button",
          "className": (0, i.cn)(n({ variant: r, size: l, className: t })),
          ...o,
        });
      }
    },
    35841: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => s });
      var a = r(95155);
      r(12115);
      let s = (e) => {
        let { children: t, className: r = "" } = e;
        return (0, a.jsx)("div", {
          className: "grid gap-6  ".concat(r),
          children: t,
        });
      };
    },
    47457: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => l });
      var a = r(95155),
        s = r(59409);
      r(12115);
      let l = (e) => {
        let {
          placeholder: t = "Select",
          options: r,
          onValueChange: l,
          className: i = "w-[240px] h-9 text-sm bg-white",
          value: n,
          label: d,
        } = e;
        return (0, a.jsxs)("div", {
          className: "flex flex-col space-y-1.5",
          children: [
            d && (0, a.jsx)("label", { className: " text-sm ", children: d }),
            (0, a.jsxs)(s.Select, {
              value: n,
              onValueChange: l,
              children: [
                (0, a.jsx)(s.SelectTrigger, {
                  className: i,
                  children: (0, a.jsx)(s.SelectValue, { placeholder: t }),
                }),
                (0, a.jsx)(s.SelectContent, {
                  children: r.map((e) =>
                    (0, a.jsx)(
                      s.SelectItem,
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
    62523: (e, t, r) => {
      "use strict";
      r.d(t, { p: () => l });
      var a = r(95155);
      r(12115);
      var s = r(59434);
      function l(e) {
        let { className: t, type: r, ...l } = e;
        return (0, a.jsx)("input", {
          "type": r,
          "data-slot": "input",
          "className": (0, s.cn)(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            t,
          ),
          ...l,
        });
      }
    },
    66766: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => s.a });
      var a = r(71469),
        s = r.n(a);
    },
    71469: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        !(function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return d;
          },
          getImageProps: function () {
            return n;
          },
        }));
      let a = r(88229),
        s = r(38883),
        l = r(33063),
        i = a._(r(51193));
      function n(e) {
        let { props: t } = (0, s.getImgProps)(e, {
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
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let d = l.Image;
    },
    71816: (e, t, r) => {
      (Promise.resolve().then(r.bind(r, 83442)),
        Promise.resolve().then(r.bind(r, 94891)));
    },
    76431: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => n });
      var a = r(95155);
      r(12115);
      var s = r(62177),
        l = r(62523),
        i = r(85057);
      let n = (e) => {
        let {
            label: t,
            placeholder: r,
            type: n,
            rightIcon: d,
            name: o,
            className: c,
            ...u
          } = e,
          { register: x } = (0, s.xW)();
        return (0, a.jsxs)("div", {
          className: "mb-4 w-full space-y-3 ".concat(c),
          children: [
            (0, a.jsx)(i.Label, { className: "", children: t }),
            (0, a.jsxs)("div", {
              className: "relative",
              children: [
                (0, a.jsx)(l.p, {
                  ...x(o),
                  type: n,
                  placeholder: r,
                  className: " bg-white ".concat(d ? "pr-10" : ""),
                  ...u,
                }),
                d &&
                  (0, a.jsx)("div", {
                    className:
                      "absolute inset-y-0 right-3 flex items-center text-muted-foreground cursor-pointer",
                    children: d,
                  }),
              ],
            }),
          ],
        });
      };
    },
    83442: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => u });
      var a = r(95155),
        s = r(76431),
        l = r(23365),
        i = r(47457),
        n = r(97303),
        d = r(30285),
        o = r(35841),
        c = r(62177);
      let u = () => {
        let e = (0, c.mN)();
        return (0, a.jsx)(c.Op, {
          ...e,
          children: (0, a.jsxs)("div", {
            className: "flex flex-col justify-between",
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-col gap-6",
                children: [
                  (0, a.jsx)(n.A, { onFileUpload: (e) => console.log(e) }),
                  (0, a.jsxs)(o.A, {
                    className: "grid-cols-1 md:grid-cols-2 ",
                    children: [
                      (0, a.jsx)(s.A, {
                        name: "name",
                        label: "Brand Name",
                        placeholder: "Enter Brand Name",
                        type: "text",
                      }),
                      (0, a.jsx)(i.A, {
                        label: "Status",
                        placeholder: "Active",
                        options: [
                          { value: "Active", label: "Active" },
                          { value: "Inactive", label: "Inactive" },
                        ],
                        className: "w-full bg-white  ",
                        onValueChange: (e) => console.log(e),
                      }),
                    ],
                  }),
                  (0, a.jsx)(l.A, {
                    label: "Description",
                    placeholder: "Enter Brand Description",
                    rows: 6,
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex justify-end items-center mt-4 gap-6",
                children: [
                  (0, a.jsx)(d.$, {
                    type: "button",
                    variant: "cancel",
                    className: "w-fit",
                    children: "Cancel",
                  }),
                  (0, a.jsx)(d.$, {
                    type: "submit",
                    variant: "secondary",
                    className: "w-fit",
                    children: "Save Brand",
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    85057: (e, t, r) => {
      "use strict";
      r.d(t, { Label: () => i });
      var a = r(95155);
      r(12115);
      var s = r(40968),
        l = r(59434);
      function i(e) {
        let { className: t, ...r } = e;
        return (0, a.jsx)(s.b, {
          "data-slot": "label",
          "className": (0, l.cn)(
            "flex items-center gap-2 text-sm leading-none  select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            t,
          ),
          ...r,
        });
      }
    },
    97303: (e, t, r) => {
      "use strict";
      r.d(t, { A: () => d });
      var a = r(95155),
        s = r(62523);
      let l = (0, r(19946).A)("upload", [
        ["path", { d: "M12 3v12", key: "1x0j5s" }],
        ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
        [
          "path",
          { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" },
        ],
      ]);
      var i = r(66766),
        n = r(12115);
      let d = (e) => {
        let { onFileUpload: t } = e,
          r = (0, n.useRef)(null),
          [d, o] = (0, n.useState)(null);
        return (0, a.jsxs)("div", {
          className: "flex flex-col items-start space-y-4",
          children: [
            (0, a.jsx)("label", {
              className: "text-lg text-gray-800",
              children: "Logo",
            }),
            (0, a.jsxs)("div", {
              className: "relative flex flex-col items-center space-y-2",
              onClick: () => {
                var e;
                null == (e = r.current) || e.click();
              },
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col items-center justify-center ".concat(
                      d ? " p-1" : "p-8",
                      " border-2 border-dashed border-[color:var(--accent-orange)] rounded-lg cursor-pointer bg-white ",
                    ),
                  children: [
                    d
                      ? (0, a.jsx)(i.default, {
                          src: d,
                          alt: "Uploaded",
                          width: 100,
                          height: 100,
                          className: "w-[110px] h-[120px] object-contain",
                        })
                      : (0, a.jsx)(l, {
                          className: "w-8 h-8 text-accent-orange",
                        }),
                    !d &&
                      (0, a.jsx)("span", {
                        className: "mt-2 text-gray-500",
                        children: "Upload",
                      }),
                    d &&
                      (0, a.jsx)(l, {
                        className:
                          "absolute bottom-0 -right-1 w-6 h-6 text-white  bg-accent-orange p-1 rounded-sm",
                      }),
                  ],
                }),
                (0, a.jsx)(s.p, {
                  ref: r,
                  type: "file",
                  id: "file-upload",
                  className: "hidden cursor-pointer",
                  onChange: (e) => {
                    var r;
                    let a = null == (r = e.target.files) ? void 0 : r[0];
                    if (a) {
                      let e = new FileReader();
                      ((e.onloadend = () => {
                        o(e.result);
                      }),
                        e.readAsDataURL(a),
                        t(a));
                    }
                  },
                }),
              ],
            }),
          ],
        });
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [3063, 5, 3047, 6052, 9317, 4891, 8441, 1684, 7358], () =>
      t(71816),
    ),
      (_N_E = e.O()));
  },
]);

(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4853],
  {
    6654: (e, t, l) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
      let n = l(12115);
      function r(e, t) {
        let l = (0, n.useRef)(null),
          r = (0, n.useRef)(null);
        return (0, n.useCallback)(
          (n) => {
            if (null === n) {
              let e = l.current;
              e && ((l.current = null), e());
              let t = r.current;
              t && ((r.current = null), t());
            } else (e && (l.current = u(e, n)), t && (r.current = u(t, n)));
          },
          [e, t],
        );
      }
      function u(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let l = e(t);
          return "function" == typeof l ? l : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    40968: (e, t, l) => {
      "use strict";
      l.d(t, { b: () => s });
      var n = l(12115),
        r = l(63655),
        u = l(95155),
        a = n.forwardRef((e, t) =>
          (0, u.jsx)(r.sG.label, {
            ...e,
            ref: t,
            onMouseDown: (t) => {
              var l;
              t.target.closest("button, input, select, textarea") ||
                (null == (l = e.onMouseDown) || l.call(e, t),
                !t.defaultPrevented && t.detail > 1 && t.preventDefault());
            },
          }),
        );
      a.displayName = "Label";
      var s = a;
    },
    72541: (e, t, l) => {
      (Promise.resolve().then(l.bind(l, 94891)),
        Promise.resolve().then(l.bind(l, 85057)),
        Promise.resolve().then(l.bind(l, 59409)));
    },
    85057: (e, t, l) => {
      "use strict";
      l.d(t, { Label: () => a });
      var n = l(95155);
      l(12115);
      var r = l(40968),
        u = l(59434);
      function a(e) {
        let { className: t, ...l } = e;
        return (0, n.jsx)(r.b, {
          "data-slot": "label",
          "className": (0, u.cn)(
            "flex items-center gap-2 text-sm leading-none  select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
            t,
          ),
          ...l,
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [5, 3047, 6052, 4891, 8441, 1684, 7358], () => t(72541)),
      (_N_E = e.O()));
  },
]);

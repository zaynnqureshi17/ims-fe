(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3670],
  {
    6654: (e, t, u) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }));
      let n = u(12115);
      function l(e, t) {
        let u = (0, n.useRef)(null),
          l = (0, n.useRef)(null);
        return (0, n.useCallback)(
          (n) => {
            if (null === n) {
              let e = u.current;
              e && ((u.current = null), e());
              let t = l.current;
              t && ((l.current = null), t());
            } else (e && (u.current = r(e, n)), t && (l.current = r(t, n)));
          },
          [e, t],
        );
      }
      function r(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let u = e(t);
          return "function" == typeof u ? u : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    45870: (e, t, u) => {
      Promise.resolve().then(u.bind(u, 94891));
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [5, 3047, 6052, 4891, 8441, 1684, 7358], () => t(45870)),
      (_N_E = e.O()));
  },
]);

!function (e) {
  "use strict";
  e(".navigation").singlePageNav({ currentClass: "active" }),
    e(".toggle-menu").click(function () {
      return e(".responsive-menu").stop(!0, !0).slideToggle(), !1;
    });
};

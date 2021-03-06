!(function () {
  for (
    var t,
      i = function () {},
      n = [
        "assert",
        "clear",
        "count",
        "debug",
        "dir",
        "dirxml",
        "error",
        "exception",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "markTimeline",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeStamp",
        "trace",
        "warn",
      ],
      o = n.length,
      e = (window.console = window.console || {});
    o--;

  )
    (t = n[o]), e[t] || (e[t] = i);
})(),
  "function" != typeof Object.create &&
    (Object.create = function (t) {
      function i() {}
      return (i.prototype = t), new i();
    }),
  function (t, i, n) {
    "use strict";
    var o = {
      init: function (n, o) {
        (this.options = t.extend({}, t.fn.singlePageNav.defaults, n)),
          (this.container = o),
          (this.$container = t(o)),
          (this.$links = this.$container.find("a")),
          "" !== this.options.filter &&
            (this.$links = this.$links.filter(this.options.filter)),
          (this.$window = t(i)),
          (this.$htmlbody = t("html, body")),
          this.$links.on(
            "click.singlePageNav",
            t.proxy(this.handleClick, this)
          ),
          (this.didScroll = !1),
          this.checkPosition(),
          this.setTimer();
      },
      handleClick: function (i) {
        var o = this,
          e = i.currentTarget,
          s = t(e.hash);
        i.preventDefault(),
          s.length &&
            (o.clearTimer(),
            "function" == typeof o.options.beforeStart &&
              o.options.beforeStart(),
            o.setActiveLink(e.hash),
            o.scrollTo(s, function () {
              o.options.updateHash && (n.location.hash = e.hash),
                o.setTimer(),
                "function" == typeof o.options.onComplete &&
                  o.options.onComplete();
            }));
      },
      scrollTo: function (t, i) {
        var n = this,
          o = n.getCoords(t).top,
          e = !1;
        n.$htmlbody.stop().animate(
          { scrollTop: o },
          {
            duration: n.options.speed,
            easing: n.options.easing,
            complete: function () {
              "function" != typeof i || e || i(), (e = !0);
            },
          }
        );
      },
      setTimer: function () {
        var t = this;
        t.$window.on("scroll.singlePageNav", function () {
          t.didScroll = !0;
        }),
          (t.timer = setInterval(function () {
            t.didScroll && ((t.didScroll = !1), t.checkPosition());
          }, 250));
      },
      clearTimer: function () {
        clearInterval(this.timer),
          this.$window.off("scroll.singlePageNav"),
          (this.didScroll = !1);
      },
      checkPosition: function () {
        var t = this.$window.scrollTop(),
          i = this.getCurrentSection(t);
        this.setActiveLink(i);
      },
      getCoords: function (t) {
        return { top: Math.round(t.offset().top) - this.options.offset };
      },
      setActiveLink: function (t) {
        var i = this.$container.find("a[href='" + t + "']");
        i.hasClass(this.options.currentClass) ||
          (this.$links.removeClass(this.options.currentClass),
          i.addClass(this.options.currentClass));
      },
      getCurrentSection: function (i) {
        var n, o, e, s;
        for (n = 0; n < this.$links.length; n++)
          (o = this.$links[n].hash),
            t(o).length &&
              ((e = this.getCoords(t(o))),
              i >= e.top - this.options.threshold && (s = o));
        return s || this.$links[0].hash;
      },
    };
    (t.fn.singlePageNav = function (t) {
      return this.each(function () {
        var i = Object.create(o);
        i.init(t, this);
      });
    }),
      (t.fn.singlePageNav.defaults = {
        offset: 0,
        threshold: 120,
        speed: 400,
        currentClass: "current",
        easing: "swing",
        updateHash: !1,
        filter: "",
        onComplete: !1,
        beforeStart: !1,
      });
  };

$(document).ready(function () {
  $(".filter-items").click(function () {
    let value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide("1000");
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }
  });

  $(".fliter-items").click(function () {
    $(this).addClass("active-filter").sibling().removeClass("active-filter");
  });
});

/* ============================================================
 * bootstrap-portfilter.js for Bootstrap v2.3.1
 * https://github.com/geedmo/portfilter
 * ============================================================*/
!(function (d) {
  var c = "portfilter";
  var b = function (e) {
    this.$element = d(e);
    this.stuff = d("[data-tag]");
    this.target = this.$element.data("target") || "";
  };
  b.prototype.filter = function (g) {
    var e = [],
      f = this.target;
    this.stuff
      .fadeOut("med")
      .promise()
      .done(function () {
        d(this).each(function () {
          if (d(this).data("tag") == f || f == "all") {
            e.push(this);
          }
        });
        d(e).show();
      });
  };
  var a = d.fn[c];
  d.fn[c] = function (e) {
    return this.each(function () {
      var g = d(this),
        f = g.data(c);
      if (!f) {
        g.data(c, (f = new b(this)));
      }
      if (e == "filter") {
        f.filter();
      }
    });

  };
  d.fn[c].defaults = {};
  d.fn[c].Constructor = b;
  d.fn[c].noConflict = function () {
    d.fn[c] = a;
    return this;
  };
  d(document).on(
    "click.portfilter.data-api",
    "[data-toggle^=portfilter]",
    function (f) {
      d(this).portfilter("filter");
    }
  );
})(window.jQuery);

//header background change on scroll
let header = document.querySelector("nav");

window.addEventListener("scroll", () => {
  //header.classList.toggle('shadow', window.scrollY > 0);
});

// login button
// var form = document.getElementsByClassName("form");
// var button = document.getElementsByClassName("login");
// button.onclick = function() {
//     if (form.addClass == "open") {
//         form.className == "";
//     } else {
//         form.addClass = "open";
//     }
// };

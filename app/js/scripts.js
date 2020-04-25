"use strict";

(function ($, window, document) {
  $(function () {
    //show content after loaded page
    $("body").css("opacity", "1");
    var players = Array.from(document.querySelectorAll(".js-player")).map(function (p) {
      return new Plyr(p, {
        fullscreen: {
          enabled: false
        }
      });
    });
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map

(function ($, window, document) {
  $(() => {
    //show content after loaded page
    $("body").css("opacity", "1");

    // vars to check userAgent
    var userAgent = navigator.userAgent.toLowerCase();
    var InternetExplorer = false;

    // check IE userAgent
    if (
      (/mozilla/.test(userAgent) &&
        !/firefox/.test(userAgent) &&
        !/chrome/.test(userAgent) &&
        !/safari/.test(userAgent) &&
        !/opera/.test(userAgent)) ||
      /msie/.test(userAgent)
    ) {
      InternetExplorer = true;
    }
    if (!InternetExplorer) {
      // activate plyr player
      const players = Array.from(document.querySelectorAll(".js_player")).map(
        (p) => new Plyr(p, { fullscreen: { enabled: false } })
      );

      // lazy load images
      $(".lazy").Lazy({
        threshold: 900,
      });
    } else {
      $("img").each(function () {
        var $img_src = $(this);
        $img_src.attr("src", $img_src.attr("data-src"));
        $img_src.removeAttr("data-src");
      });
    }
  });
})(window.jQuery, window, document);

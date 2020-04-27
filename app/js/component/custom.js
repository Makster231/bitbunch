(function ($, window, document) {
  $(() => {
    //show content after loaded page
    $("body").css("opacity", "1");

    const players = Array.from(document.querySelectorAll(".js_player")).map(
      (p) => new Plyr(p, { fullscreen: { enabled: false } })
    );
  });
})(window.jQuery, window, document);

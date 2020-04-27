(function ($, window, document) {
  $(() => {
    //show content after loaded page
    $("body").css("opacity", "1");

    // activate plyr player
    const players = Array.from(document.querySelectorAll(".js_player")).map(
      (p) => new Plyr(p, { fullscreen: { enabled: false } })
    );

    // lazy load images
    $(".lazy").Lazy({
      threshold: 900,
    });
  });
})(window.jQuery, window, document);

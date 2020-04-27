(function ($, window, document) {
  function teamSlider() {
    let slider = {
      container: $(".js_team-body--slider"),
      scroll: $(".js_team-body--scroll"),
      item: $(".js_team-slider--block"),
      item_width: $(".js_team-slider--block").outerWidth(),
      item_length: $(".js_team-slider--block").length,
      margin: 24,
    };

    let { container, scroll, item, item_width, item_length, margin } = slider;

    let $team_slider_width =
      item_width * item_length + margin * (item_length - 1);

    container.css({
      width: $team_slider_width + "px",
    });

    scroll.attr(
      "max",
      $team_slider_width - $(window).width() - item_width * 2
    );

    scroll.on("input change", function () {
      let $this = $(this);

      container.css({
        transform: "translateX(-" + $this.val() + "px)",
      });
    });
  }

  $(() => {
    if ($(window).width() < 640) {
      teamSlider();
    }
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  function mediaSlider() {
    let slider = {
      container: $(".js_media-body--slider"),
      scroll: $(".js_media-body--scroll"),
      item: $(".js_media-slider--block"),
      item_width: $(".js_media-slider--block").outerWidth(),
      item_length: $(".js_media-slider--block").length,
      margin: 10,
    };

    let { container, scroll, item, item_width, item_length, margin } = slider;

    let $media_slider_width =
      item_width * item_length + margin * (item_length - 1);

    container.css({
      width: $media_slider_width + "px",
    });

    scroll.attr("max", $media_slider_width - $(window).width() + 48);

    scroll.on("input change", function () {
      let $this = $(this);

      container.css({
        transform: "translateX(-" + $this.val() + "px)",
      });
    });
  }

  $(() => {
    if ($(window).width() < 640) {
      mediaSlider();
    }
  });
})(window.jQuery, window, document);

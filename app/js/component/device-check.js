(function ($, window, document) {
  // check IOS userAgent
  function isiPhone() {
    return (
      navigator.platform.indexOf("iPhone") != -1 ||
      navigator.platform.indexOf("iPod") != -1
    );
  }

  $(() => {
    if ($(window).width() < 640) {
      // add class increase thumb size on IOS, because very difficult to range the slider
      if (isiPhone()) {
        $(".js_team-body--scroll, .js_media-body--scroll").addClass(
          "js_ios-device"
        );
      }
    }
  });
})(window.jQuery, window, document);

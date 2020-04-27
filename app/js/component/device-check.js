(function ($, window, document) {
  function isiPhone() {
    return (
      //Пользователь использует iPhone
      navigator.platform.indexOf("iPhone") != -1 ||
      //Пользователь использует iPod
      navigator.platform.indexOf("iPod") != -1
    );
  }

  $(() => {
    if ($(window).width() < 640) {
      if (isiPhone()) {
        $(".js_team-body--scroll, .js_media-body--scroll").addClass("js_ios-device");
      }
    }
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  function headerNav() {
    $(".js_entry-nav--btn").click(function () {
      if (!$("body").hasClass("js_open-menu")) {
        $("body").addClass("js_open-menu");
      } else {
        $("body").removeClass("js_open-menu");
      }
    });
  }

  $(() => {
    if ($(window).width() < 960) {
      headerNav();
    }
  });
})(window.jQuery, window, document);

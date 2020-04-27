(function ($, window, document) {
  function preventDefault(e) {
    e.preventDefault();
  }

  function disableScroll() {
    document.body.addEventListener("touchmove", preventDefault, {
      passive: false,
    });
  }

  function enableScroll() {
    document.body.removeEventListener("touchmove", preventDefault, {
      passive: false,
    });
  }

  function headerNav() {
    $(".js_entry-nav--btn").click(function () {
      if (!$("body").hasClass("js_open-menu")) {
        $("body").addClass("js_open-menu");
        disableScroll();
      } else {
        $("body").removeClass("js_open-menu");
        enableScroll();
      }
    });
  }

  $(() => {
    if ($(window).width() < 960) {
      headerNav();
    }
  });
})(window.jQuery, window, document);

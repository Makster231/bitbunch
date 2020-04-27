"use strict";

(function ($, window, document) {
  function isiPhone() {
    return (//Пользователь использует iPhone
      navigator.platform.indexOf("iPhone") != -1 || //Пользователь использует iPod
      navigator.platform.indexOf("iPod") != -1
    );
  }

  $(function () {
    if ($(window).width() < 640) {
      if (isiPhone()) {
        $(".js_team-body--scroll, .js_media-body--scroll").addClass("js_ios-device");
      }
    }
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  function preventDefault(e) {
    e.preventDefault();
  }

  function disableScroll() {
    document.body.addEventListener("touchmove", preventDefault, {
      passive: false
    });
  }

  function enableScroll() {
    document.body.removeEventListener("touchmove", preventDefault, {
      passive: false
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

  $(function () {
    if ($(window).width() < 960) {
      headerNav();
    }
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  function mediaSlider() {
    var slider = {
      container: $(".js_media-body--slider"),
      scroll: $(".js_media-body--scroll"),
      item: $(".js_media-slider--block"),
      item_width: $(".js_media-slider--block").outerWidth(),
      item_length: $(".js_media-slider--block").length,
      margin: 10
    };
    var container = slider.container,
        scroll = slider.scroll,
        item = slider.item,
        item_width = slider.item_width,
        item_length = slider.item_length,
        margin = slider.margin;
    var $media_slider_width = item_width * item_length + margin * (item_length - 1);
    container.css({
      width: $media_slider_width + "px"
    });
    scroll.attr("max", $media_slider_width - $(window).width() - item_width * 2 + 24);
    scroll.on("input change", function () {
      var $this = $(this);
      container.css({
        transform: "translateX(-" + $this.val() + "px)"
      });
    });
  }

  $(function () {
    if ($(window).width() < 640) {
      mediaSlider();
    }
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  function teamSlider() {
    var slider = {
      container: $(".js_team-body--slider"),
      scroll: $(".js_team-body--scroll"),
      item: $(".js_team-slider--block"),
      item_width: $(".js_team-slider--block").outerWidth(),
      item_length: $(".js_team-slider--block").length,
      margin: 24
    };
    var container = slider.container,
        scroll = slider.scroll,
        item = slider.item,
        item_width = slider.item_width,
        item_length = slider.item_length,
        margin = slider.margin;
    var $team_slider_width = item_width * item_length + margin * (item_length - 1);
    container.css({
      width: $team_slider_width + "px"
    });
    scroll.attr("max", $team_slider_width - $(window).width() - item_width * 2);
    scroll.on("input change", function () {
      var $this = $(this);
      container.css({
        transform: "translateX(-" + $this.val() + "px)"
      });
    });
  }

  $(function () {
    if ($(window).width() < 640) {
      teamSlider();
    }
  });
})(window.jQuery, window, document);

(function ($, window, document) {
  $(function () {
    //show content after loaded page
    $("body").css("opacity", "1"); // activate plyr player

    var players = Array.from(document.querySelectorAll(".js_player")).map(function (p) {
      return new Plyr(p, {
        fullscreen: {
          enabled: false
        }
      });
    }); // lazy load images

    $(".lazy").Lazy({
      threshold: 900
    });
  });
})(window.jQuery, window, document);
//# sourceMappingURL=scripts.js.map

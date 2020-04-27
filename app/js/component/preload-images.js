(function ($, window, document) {
  $(() => {
    if ($(window).width() < 960) {
      var pic = new Image();
      var pic2 = new Image();
      var pic3 = new Image();
      pic.src = "../../images/header/bg-menu--tablet.jpg";
      pic2.src = "../../images/header/bg-menu--tablet-traingle.png";
      pic3.src = "../../images/header/icon-lang.png";
    }
  });
})(window.jQuery, window, document);

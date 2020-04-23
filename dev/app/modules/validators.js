(function($) {
  $.validator.addMethod(
    'checkEmail',
    function(value, element) {
      const re = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
      return this.optional(element) || re.test(String(value).toLowerCase());
    },
    'incorrect email'
  );
}(jQuery));

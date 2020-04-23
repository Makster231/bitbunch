/* eslint-disable func-names */
(function($) {
  // $('.phone-search-form__phone-input input').mask('99-99', { placeholder: '73-53' });
  // $('.popup-form__input#phone').mask('+7(999) 999-99-99', { placeholder: '+7(___) ___-__-__' });
  // $('.popup-form__input#phone').mask('00000000000', { placeholder: '7XXXXXXXXXX' });
  // $('#name').mask();
  $('.popup-form__input#phone').inputmask({ mask: '+7(999) 999-99-99' });
  $('.popup-form__input#email').inputmask({
    mask: '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]',
    greedy: false,
    onBeforePaste(pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace('mailto:', '');
    },
    definitions: {
      '*': {
        validator: '[0-9A-Za-z!#$%&\'*+/=?^_`{|}~-]',
        casing: 'lower',
        placeholder: '',
      },
      '@': {
        placeholder: '',
      },
    },
  });
  $('.popup-form__input#name').inputmask({
    mask: '*{1,40}',
    greedy: false,
    definitions: {
      '*': {
        validator: '[а-яА-ЯеЁ ,-]',
        placeholder: '',
      },
    },
  });
}(jQuery));

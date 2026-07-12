document.addEventListener('DOMContentLoaded', function () {

  // Acordeão FAQ
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var button = item.querySelector('.faq-question');
    button.addEventListener('click', function () {
      var isOpen = item.classList.contains('is-open');
      faqItems.forEach(function (other) {
        other.classList.remove('is-open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('is-open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Sombra no nav ao rolar
  var nav = document.querySelector('.nav');
  window.addEventListener('scroll', function () {
    nav.style.boxShadow = window.scrollY > 10
      ? '0 12px 24px -18px rgba(0,0,0,0.6)'
      : 'none';
  });

});

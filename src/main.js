'use strict';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal', // "horizontal", "vertical"
  loop: true, // true - круговий слайдер, false - зкінцевим положенням
  // speed: 600, // швидкість перемикання слайду
  effect: 'fade', // slider, cards, coverflow, flip, fade, cube
  // initialSlide: 1, // початок з 2-го слайду
  // freemode: true, // дозволяє перетаскувати мишкою
  slidesPerView: 'auto', // кількість активних слайдів
  // centeredSlides: true, // центрування слайду

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breapoints: {
    375: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    1280: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


// =========== mobileMenu ==========

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
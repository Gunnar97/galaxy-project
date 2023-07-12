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






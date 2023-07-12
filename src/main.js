'use strict';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: "horizontal", // "horizontal", "vertical"
  // speed: 600, // швидкість перемикання слайду
  // effect: "fade", // slider, cards, coverflow, flip, fade, cube
  // initialSlide: 1, // початок з 2-го слайду
  // freemode: true, // дозволяє перетаскувати мишкою
  spaceBetween: 16,
  loop: true, // true - круговий слайдер, false - зкінцевим положенням
  slidesPerView: 2, // кількість активних слайдів
  centeredSlides: false, // центрування слайду
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
      initialSlide: 1,
      spaceBetween: 16,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    375: {
      slidesPerView: 1,
    },
  },
});

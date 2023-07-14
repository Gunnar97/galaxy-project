import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const yachtsSlider = new Swiper('#yachts-slider', {
  // Optional parameters
  // direction: "horizontal", // "horizontal", "vertical"
  // speed: 600, // швидкість перемикання слайду
  // effect: "fade", // slider, cards, coverflow, flip, fade, cube
  initialSlide: 0, // початок з 2-го слайду
  // freemode: true, // дозволяє перетаскувати мишкою
  spaceBetween: 16,
  loop: true, // true - круговий слайдер, false - зкінцевим положенням

  //centeredSlides: false, // центрування слайду
  modules: [Navigation],
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
    },
  },
});

const reviewsSlider = new Swiper('#reviews-slider', {
  clickable: true,
  watchOverflow: true,

  modules: [Pagination],
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

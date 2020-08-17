import Swiper, { Navigation, Pagination } from "swiper";
export {swiper};
// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);


// init Swiper:
const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  init: false,
  spaceBetween: 16,
  slidesPerGroup: 3,
  centeredSlides: true,
  loop: true,
  loopedSlides: 5,
  breakpoints: {
    // when window width is >= 480px
    440: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    // when window width is >= 768px
    769: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BREAKPOINTS = {
  MOBILE: 767,
  TABLET: 768,
  DESKTOP: 1280,
};

const heroSwiper = new Swiper('.hero-swiper', {
  modules: [Navigation, Pagination, Autoplay],
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.hero-swiper-pagination',
    clickable: true,
  },
  spaceBetween: 0,
});

const featuredSwiper = new Swiper('.featured-swiper', {
  modules: [Navigation, Pagination],
  loop: false,
  slidesPerView: 1.1,
  spaceBetween: 16,
  loop: false,
  breakpoints: {
    [BREAKPOINTS.TABLET]: {
      slidesPerView: 2.5,
    },
    [BREAKPOINTS.DESKTOP]: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  navigation: {
    nextEl: '.featured-swiper__next',
    prevEl: '.featured-swiper__prev',
    disabledClass: 'is-disabled',
  },
  watchOverflow: true,
});

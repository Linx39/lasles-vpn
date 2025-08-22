import { setPaginationPosition } from "./swiper-mode.js";
import { Width } from "./const.js";

const REVIEWS_SLIDER_CLASS = 'reviews-slider';

const initReviewsSwiper = () => {
  const swiper = new Swiper(`.${REVIEWS_SLIDER_CLASS}`, {
    slidesPerView: 'auto',
    spaceBetween: 50,
    slideActiveClass: 'user--active',
    touchReleaseOnEdges: true,
    centerInsufficientSlides: true,
    slideToClickedSlide: true,
    // centeredSlides: true,

    navigation: {
      prevEl: '.reviews-btn-prev',
      nextEl: '.reviews-btn-next',
      disabledClass: 'navigation-btn--disabled',
      lockClass:'navigation-btn--lock',
    },

    pagination: {
      el: '.reviews-pagination',
      clickable: true,
      bulletClass: 'pagination-btn',
      bulletActiveClass: 'pagination-btn--current',
      lockClass: 'slider__pagination--lock',
      dynamicBullets: true,
      dynamicMainBullets: 3,
    },

    breakpoints: {
      [Width.MD]: {
        centeredSlides: false,
      },
    },
  });

  setPaginationPosition(swiper);

  return swiper;
};

if (document.querySelector(`.${REVIEWS_SLIDER_CLASS}`)) {
  initReviewsSwiper();
}

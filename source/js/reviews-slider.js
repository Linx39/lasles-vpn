import { handleSwiperMode } from "./swiper-mode.js";
import { Width, Padding } from "./const.js";

const REVIEWS_SLIDER_CLASS = 'reviews__slider';

const initReviewsSwiper = () => {
  const swiper = new Swiper(`.${REVIEWS_SLIDER_CLASS}`, {
    slidesPerView: 'auto',
    spaceBetween: 50,
    // slidesOffsetBefore: Padding.SM,
    // slidesOffsetAfter: Padding.SM,
    slideActiveClass: 'user--active',
    touchReleaseOnEdges: true,

    navigation: {
      prevEl: '.reviews__navigation-btn--prev',
      nextEl: '.reviews__navigation-btn--next',
      disabledClass: 'navigation-btn--disabled',
      // lockClass:'navigation-btn--lock',
    },

    pagination: {
      el: '.reviews__pagination',
      clickable: true,
      bulletClass: 'pagination__btn',
      bulletActiveClass: 'pagination__btn--current',
      // lockClass: 'pagination--lock',
      dynamicBullets: true,
      dynamicMainBullets: 2,
    },

    breakpoints: {
      [Width.MD]: {
        // slidesOffsetBefore: Padding.MD,
        // slidesOffsetAfter: Padding.MD,
      },
    },

    breakpoints: {
      [Width.XL]: {
        // slidesOffsetBefore: Padding.XL,
        // slidesOffsetAfter: Padding.XL,
      },
    },

    breakpoints: {
      [Width.XXL]: {
        // slidesOffsetBefore: Padding.XXL,
        // slidesOffsetAfter: Padding.XXL,
      },
    },
  });

  return swiper;
};

if (document.querySelector(`.${REVIEWS_SLIDER_CLASS}`)) {
  // handleSwiperMode(initReviewsSwiper);
  initReviewsSwiper();
}

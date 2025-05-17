import { setPaginationPosition } from "./swiper-mode.js";
import { Width } from "./const.js";

const PRICING_SLIDER_CLASS = 'pricing-slider';

const initPricingSwiper = () => {
  const swiper = new Swiper(`.${PRICING_SLIDER_CLASS}`, {
    slidesPerView: 'auto',
    spaceBetween: 50,
    slideActiveClass: 'plan--current',
    touchReleaseOnEdges: true,
    slideToClickedSlide: true,
    centerInsufficientSlides: true,
    slideToClickedSlide: true,
    centeredSlides: true,
    // parallax: true,

    breakpoints: {
      [Width.MD]: {
        centeredSlides: false,
      },
    },

    navigation: {
      prevEl: '.pricing-btn-prev',
      nextEl: '.pricing-btn-next',
      disabledClass: 'navigation-btn--disabled',
      lockClass: 'navigation-btn--lock',
    },

    pagination: {
      el: '.pricing-pagination',
      clickable: true,
      bulletClass: 'pagination__btn',
      bulletActiveClass: 'pagination__btn--current',
      lockClass: 'pagination--lock',
      dynamicBullets: true,
      dynamicMainBullets: 1,
    },
  });

  setPaginationPosition(swiper);

  return swiper;
};

if (document.querySelector(`.${PRICING_SLIDER_CLASS}`)) {
  initPricingSwiper();
}

import { handleSwiperMode } from "./swiper-mode.js";
import { Width, Padding } from "./const.js";

const PRICING_SLIDER_CLASS = 'pricing__slider';

const initPricingSwiper = () => {
  const swiper = new Swiper(`.${PRICING_SLIDER_CLASS}`, {
    slidesPerView: 'auto',
    spaceBetween: 50,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    centeredSlides: true,
    slideActiveClass: 'plan--current',
    touchReleaseOnEdges: true,
    parallax: true,

    breakpoints: {
      [Width.MD]: {
        // slidesOffsetBefore: Padding.MD,
        // slidesOffsetAfter: Padding.MD,
        centeredSlides: false,
        // initialSlide: 1,
      },
    },

    navigation: {
      prevEl: '.pricing__navigation-btn--prev',
      nextEl: '.pricing__navigation-btn--next',
      disabledClass: 'navigation-btn--disabled',
      lockClass:'navigation-btn--lock',
    },

    pagination: {
      el: '.pricing__pagination',
      clickable: true,
      bulletClass: 'pagination__btn',
      bulletActiveClass: 'pagination__btn--current',
      lockClass: 'pagination--lock',
      dynamicBullets: true,
      dynamicMainBullets: 4,
    },
  });

  return swiper;
};

if (document.querySelector(`.${PRICING_SLIDER_CLASS}`)) {
  // handleSwiperMode(initPricingSwiper);
  initPricingSwiper();
}

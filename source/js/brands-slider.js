import { handleSwiperMode } from "./swiper-mode.js";
import { Width, Padding } from "./const.js";

const BRANDS_SLIDER_CLASS = 'brands__slider';

const initBrandsSwiper = () => {
  const swiper = new Swiper(`.${BRANDS_SLIDER_CLASS}`, {
    slidesPerView: 'auto',
    spaceBetween: 60,
    // slidesOffsetBefore: Padding.SM,
    // slidesOffsetAfter: Padding.SM,
    touchReleaseOnEdges: true,

    breakpoints: {
      [Width.MD]: {
        // slidesOffsetBefore: Padding.MD,
        // slidesOffsetAfter: Padding.MD,
        centeredSlides: false,
        // initialSlide: 1,
      },
    },
  });

  return swiper;
};

if (document.querySelector(`.${BRANDS_SLIDER_CLASS}`)) {
  // handleSwiperMode(initPricingSwiper);
  initBrandsSwiper();
}

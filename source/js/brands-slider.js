import { Width } from "./const.js";

const BRANDS_SLIDER_CLASS = 'brands-slider';

const initBrandsSwiper = () => {
  const swiper = new Swiper(`.${BRANDS_SLIDER_CLASS}`, {
    slidesPerView: 'auto',
    spaceBetween: 60,
    touchReleaseOnEdges: true,
    loop: true,
    // autoplay: {
    //   delay: 2000,
    // },

    breakpoints: {
      [Width.MD]: {
        centeredSlides: false,
      },
    },
  });

  return swiper;
};

if (document.querySelector(`.${BRANDS_SLIDER_CLASS}`)) {
  initBrandsSwiper();
}

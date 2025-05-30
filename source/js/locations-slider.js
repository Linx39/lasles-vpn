import { Width } from "./const.js";

const LOCATIONS_SLIDER_CLASS = 'locations-slider';

const initLocationsSwiper = () => {
  const swiper = new Swiper(`.${LOCATIONS_SLIDER_CLASS}`, {
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

if (document.querySelector(`.${LOCATIONS_SLIDER_CLASS}`)) {
  initLocationsSwiper();
}

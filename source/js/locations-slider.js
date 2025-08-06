const LOCATIONS_SLIDER_CLASS = 'locations-slider';

const initLocationsSwiper = () => {
  const swiper = new Swiper(`.${LOCATIONS_SLIDER_CLASS}`, {
    slidesPerView: 'auto',
    spaceBetween: 47,
    slideActiveClass: 'brand--current',
    slidePrevClass: 'brand--prev',
    slideNextClass: 'brand--next',
    watchSlidesProgress: true,
    slideFullyVisibleClass: 'brand--visible',
    touchReleaseOnEdges: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
    },
  });

  return swiper;
};

if (document.querySelector(`.${LOCATIONS_SLIDER_CLASS}`)) {
  initLocationsSwiper();
}

import { Width } from "./const.js";

export const handleSwiperMode = (initSwiper) => {
  let isSwiperInit = false;
  let swiper = Swiper;

  const setSwiperMode = () => {
    const isDestroyWidth = window.matchMedia(`(min-width: ${Width.XL}px)`).matches;

    if (!isDestroyWidth && !isSwiperInit){
      swiper = initSwiper();
      isSwiperInit = true;
    }

    if (isDestroyWidth && isSwiperInit) {
      swiper.destroy();
      isSwiperInit = false;
    }
  };

  window.addEventListener("DOMContentLoaded", () => {
    setSwiperMode();
  });

  window.addEventListener("resize", () => {
    setSwiperMode();
  })
}

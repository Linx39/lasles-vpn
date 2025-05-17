import { Width } from "./const.js";

export const controlSwiperActivate = (initSwiper) => {
  let isSwiperInit = false;
  let swiper = Swiper;

  const setSwiperMode = () => {
    const isWidth = window.matchMedia(`(min-width: ${Width.XL}px)`).matches;

    if (!isWidth && !isSwiperInit) {
      swiper = initSwiper();
      isSwiperInit = true;
    }

    if (isWidth && isSwiperInit) {
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

export const setPaginationPosition = (swiper) => {
  const paginationElement = swiper.pagination.el;

  const setPaginationLeft = () => {
    const isWidth = window.matchMedia(`(min-width: ${Width.SM}px)`).matches;

    if (isWidth) {
      const paginationBtnStyleLeft = paginationElement.querySelector('.pagination__btn').style.left;

      paginationElement.style.left = '-' + paginationBtnStyleLeft;
    }

    if (!isWidth) {
      paginationElement.style.left = '';
    }
  }

  window.addEventListener("DOMContentLoaded", () => {
    setPaginationLeft();
  });

  window.addEventListener("resize", () => {
    setPaginationLeft();
  })
}

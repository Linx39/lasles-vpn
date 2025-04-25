import { Width } from "./const.js";
import { initModal } from "./modal.js";

const headerNav = document.querySelector('#header-nav');
let modal;

const setModalMode = () => {
  const isDesktopWidth = window.matchMedia(`(min-width: ${Width.XL}px)`).matches;

  if (!isDesktopWidth && !modal){
    modal = initModal(headerNav);
  }

  if (isDesktopWidth && modal) {
    modal.close();

    modal = null;
  }
};

window.addEventListener("DOMContentLoaded", () => {
  setModalMode();
});

window.addEventListener("resize", () => {
  setModalMode();
})

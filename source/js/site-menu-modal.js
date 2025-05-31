import { Width } from "./const.js";
import { initModal } from "./modal.js";

const siteMenu = document.querySelector('#site-menu');
let modal;

const setModalMode = () => {
  const isDesktopWidth = window.matchMedia(`(min-width: ${Width.XL}px)`).matches;

  if (!isDesktopWidth && !modal){
    modal = initModal(siteMenu);
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

const closeSiteMenu = () => modal.close();

export {closeSiteMenu};

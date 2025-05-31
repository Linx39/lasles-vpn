import { closeSiteMenu } from "./site-menu-modal.js";

const siteLists = document.querySelectorAll('.js-site-list');

siteLists.forEach(list => {
  const links = list.querySelectorAll('.js-site-link');

  links.forEach(link => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      closeSiteMenu();
      const local = link.getAttribute('href').split('#')[0];
      const anchor = link.getAttribute('href').split('#')[1];

      if (document.getElementById(`${anchor}`)) {
        localStorage.setItem('globalAnchor', '0');
        scroll(anchor);
      } else {
        localStorage.setItem('globalAnchor', anchor);
        window.location.href = local;
      }
  });
  })
})

const scroll = (anchor) => {
  const element = document.getElementById(anchor);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const anchor = localStorage.getItem('globalAnchor');
  if (anchor !== '0' && anchor) {
    scroll(anchor);
    localStorage.setItem('globalAnchor', '0');
  }
});

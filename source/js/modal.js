import { isEscEvent, isTabEvent } from "./utils.js";
import { activateOverlay, deactivateOverlay } from "./overlay.js";
// import { scrollUp } from "./scroll-up.js";

const FOCUS_ELEMENTS = [
  'a[href]',
  'area[href]',
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  'select:not([disabled]):not([aria-hidden])',
  'textarea:not([disabled]):not([aria-hidden])',
  'button:not([disabled]):not([aria-hidden])',
  'iframe',
  'object',
  'embed',
  '[contenteditable]',
  '[tabindex]:not([tabindex^="-"])'
];
const MODAL_WRAPPER_CLASS ='modal__wrapper';
const MODAL_OPENED_CLASS = 'modal--opened';
const MODAL_CLOSE_BTN_CLASS = 'modal__close-btn';

const body = document.querySelector('.page__body');
// const fixedElements = [scrollUp];
let prevModal;
let lastFocusElement;

const initModal = (modalElement, beforeOpen, afterClose) => {
  const modalWrapper = modalElement.querySelector(`.${MODAL_WRAPPER_CLASS}`);
  const id = modalElement.getAttribute('id');
  const modalOpenBtns = document.querySelectorAll(`[data-modal="#${id}"]`);
  const modalCloseBtns = document.querySelectorAll(`.${MODAL_CLOSE_BTN_CLASS}`);
  const nodes = modalElement.querySelectorAll(FOCUS_ELEMENTS);
  const nodesArray = [...nodes];
  let isOpened = false;

  const openModal = () => {
    if(isOpened) {
      return;
    }

    if(!prevModal) {
      lastFocusElement = document.activeElement;
    }

    if (prevModal) {
      prevModal.close();
    }

    prevModal = modal;

    if (beforeOpen) {
      beforeOpen();
    }

    const scrollYWidth = window.innerWidth - document.documentElement.clientWidth;

    body.style.overflowY = 'hidden';
    body.style.marginRight = `${scrollYWidth}px`;

    // if (fixedElements) {
    //   fixedElements.forEach(element => {
    //     element.style.marginRight = `${scrollYWidth}px`;
    //   })
    // }

    modalElement.classList.add(MODAL_OPENED_CLASS);
    modalElement.setAttribute('aria-hidden', 'false');
    modalElement.setAttribute('tabindex', '0');
    modalElement.style.marginRight = `${scrollYWidth}px`;

    activateOverlay();

    document.addEventListener(`keydown`, onEscKeyDown);
    document.addEventListener(`keydown`, onTabKeyDown);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    isOpened = true;

    modalElement.focus();
  }

  const closeModal = () => {
    if(!isOpened) {
      return;
    }

    body.removeAttribute('style');

    // if (fixedElements) {
    //   fixedElements.forEach(element => {
    //     element.style.marginRight = ``;
    //   })
    // }

    modalElement.classList.remove(MODAL_OPENED_CLASS);
    modalElement.setAttribute('aria-hidden', 'true');
    modalElement.setAttribute('tabindex', '-1');
    modalElement.style.marginRight = ``;

    deactivateOverlay();

    document.removeEventListener('keydown', onEscKeyDown);
    document.removeEventListener('keydown', onTabKeyDown);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);

    prevModal = null;
    isOpened = false;

    if (afterClose) {
      afterClose();
    }
  }

  const loopFocus = (evt) => {
    if (!modalElement.contains(document.activeElement)) {
      evt.preventDefault();
      nodesArray[0].focus();
    } else {
      const focusedItemIndex = nodesArray.indexOf(document.activeElement)

      if (evt.shiftKey && focusedItemIndex === 0) {
        evt.preventDefault();
        nodesArray[nodesArray.length - 1].focus();
      }
      if (!evt.shiftKey && focusedItemIndex === nodesArray.length - 1) {
        evt.preventDefault();
        nodesArray[0].focus();
      }
    }
  }

  const onTabKeyDown = (evt) => {
    if (isTabEvent(evt)) {
      loopFocus(evt);
    }
  };

  const onEscKeyDown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeModal();
    }
  };

  let isOverlayClick = false;

  const onMouseDown = (evt) => {
    if (modalElement.contains(evt.target) && !modalWrapper.contains(evt.target)) {
      isOverlayClick = true;
    }
  }

  const onMouseUp = (evt) => {
    if (modalElement.contains(evt.target) && !modalWrapper.contains(evt.target) && isOverlayClick) {
      evt.preventDefault();
      closeModal();
      isOverlayClick = false;
    }
  }

  modalOpenBtns.forEach(btn => {
    btn.addEventListener('click', (evt) => {
      openModal();
    })
  })

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      closeModal();
    })
  })

  const modal = {
    element: modalElement,
    isOpened: isOpened,
    close() {closeModal()},
    open() {openModal()},
  }

  return modal;
}

export {initModal};

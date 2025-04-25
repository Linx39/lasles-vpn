const OVERLAY_ACTIVE_CLASS = 'overlay--active';

const overlay = document.querySelector('.overlay');

export const activateOverlay = () => {
  if (!overlay.classList.contains(OVERLAY_ACTIVE_CLASS)) {
    overlay.classList.add(OVERLAY_ACTIVE_CLASS);
  }
}

export const deactivateOverlay = () => {
  if (overlay.classList.contains(OVERLAY_ACTIVE_CLASS)) {
    overlay.classList.remove(OVERLAY_ACTIVE_CLASS);
  }
}

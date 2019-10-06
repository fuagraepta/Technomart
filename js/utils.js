`use strict`;

(function () {
const ESC_KEY_CODE = 27;

const utils = {
    openPopup(popupName, evt) {
    evt.preventDefault();
    popupName.classList.add(`modal-show`);
  },
   closePopup(popupName, evt) {
    evt.preventDefault();
    popupName.classList.remove(`modal-show`);
  },
    onEscPressCloseModal(escEvt, popupName) {
    if (escEvt.keyCode === ESC_KEY_CODE) {
      escEvt.preventDefault();
      popupName.classList.remove(`modal-show`);
    }
  },
    getSliderItemFromTemplate(template) {
    const item = document.createElement(`div`);
    item.innerHTML = template;
    return item.firstChild;
  },
    addSliderItem(slider, item) {
    slider.innerHTML = ``;
    slider.appendChild(item);
  }
};

window.utils = utils;
})();

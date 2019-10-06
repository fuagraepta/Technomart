`use strict`;

//map
(function() {
  const mapLink = document.querySelector(`.map-link`);
  const map = document.querySelector(`.modal-map`);
  const mapModalClose = map.querySelector(`.modal-close`);

  const openMap = (evt) => {
    window.utils.openPopup(map, evt);
  };

  const closeMap = (evt) => {
    window.utils.closePopup(map, evt);
  };

  mapLink.addEventListener(`click`, openMap);
  mapModalClose.addEventListener(`click`, closeMap);

  //When pressing ESC close modal window
  window.addEventListener(`keydown`, (evt) => {
    window.utils.onEscPressCloseModal(evt, map);
  });
})();

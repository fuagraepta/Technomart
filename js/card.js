`use strict`;

//Modal-card
(function() {
const modalCard = document.querySelector(`.modal-card`);
const catalogBuyButtons = document.querySelectorAll(`.catalog-button-buy`);
const catalogMarkButtons = document.querySelectorAll(`.catalog-button-mark`);
const cardCloseButton = modalCard.querySelector(`.modal-close`);
const modalCardButton = modalCard.querySelector(`.modal-card-button`);

const openModalCard = (evt) => {
  window.utils.openPopup(modalCard, evt);
  addItemInBasked();
};

const closeModalCard = (evt) => {
  window.utils.closePopup(modalCard, evt);
};

for (let button of catalogBuyButtons) {
  button.addEventListener(`click`, openModalCard);
};

cardCloseButton.addEventListener(`click`, closeModalCard);
modalCardButton.addEventListener(`click`, closeModalCard);

//When pressing ESC close modal window
window.addEventListener(`keydown`, (evt) => {
  window.utils.onEscPressCloseModal(evt, modalCard);
});

//Increase counter by one when mark or basket button was pressing
const basket = document.querySelector(`.basket`);
const backedCount = basket.querySelector(`.count`);
const mark = document.querySelector(`.mark`);
const markCount = mark.querySelector(`.count`);

const counter = () => {
  let index = 0;
  return () => {
    index++;
    return index;
  };
};

const basketCounter = counter();
const markCounter = counter();

const addItemInBasked = () => {
  basket.style.backgroundColor =`#ee3643`;
  backedCount.textContent = basketCounter();
};

const addItemInMark = (evt) => {
  evt.preventDefault();
  mark.style.backgroundColor = `#ee3643`;
  markCount.textContent = markCounter();
};

for (let button of catalogMarkButtons) {
  button.addEventListener(`click`, addItemInMark);
};
})();

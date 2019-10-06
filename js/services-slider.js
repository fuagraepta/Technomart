`use strict`;

//services-slider
const services = document.querySelector(`.services`);
const serviceItems = services.querySelectorAll(`.service-item`);
const descriptionItems = services.querySelectorAll(`.description-item`);

// Hide current description item
const disabledDescriptionItem = () => {
  const currentDescriptionItems = [...descriptionItems].filter((item) => item.classList.contains(`visually-hidden`) === false);
  const [currentItem] = currentDescriptionItems;
  currentItem.classList.add(`visually-hidden`);
};

// Make an item not active
const disabledServiceItem = () => {
  const [currentService] = [...serviceItems].filter((item) => item.classList.contains(`service-current`));
  currentService.classList.remove(`service-current`);
};

// Switch current item to another item by clicking the mouse
serviceItems.forEach((service, index) => {
  service.addEventListener(`click`, () => {
    disabledDescriptionItem();
    disabledServiceItem();
    service.classList.add(`service-current`);
    descriptionItems[index].classList.remove(`visually-hidden`);
  });
});

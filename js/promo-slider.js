`use strict`;

//pormo-slider
(function() {
const sliderList = document.querySelector(`.slider-list`);
const sliderDrill = sliderList.querySelector(`.slider-drill`);
const sliderPerforator = sliderList.querySelector(`.slider-perforator`);

const slideContent = [
  {
    title: `Дрели`,
    slogan: `Соседям на радость!`,
    class: `slider-drill`,
    firstCheckbox: `checked`
  },
  {
    title: `Перфораторы`,
    slogan: `Настоящие мужские игрушки`,
    class: `slider-perforator`,
    secondCheckbox: `checked`
  }
];

const sliderItemTemplate = (data) => `<li class="slider-item ${data.class}">
  <h3>${data.title}</h3>
  <b>${data.slogan}</b>
  <a class="button"  href="catalog.html">Открыть каталог</a>
  <div class="slider-control">
    <input id="slider1-left" class="visually-hidden slider-checkbox-left" type="radio" name="slider-button" ${data.firstCheckbox ? data.firstCheckbox : ``}>
    <label for="slider1-left" class="slider-left-button"></label>
    <input id="slider1-right" class="visually-hidden slider-checkbox-right" type="radio" name="slider-button" ${data.secondCheckbox ? data.secondCheckbox : ``}>
    <label for="slider1-right" class="slider-right-button"></label>
  </div>
</li>`;

const sliderControl = {
  index: 0,
  sliderLength: slideContent.length - 1,
  increaseIndex () {
    this.index++;
    if (this.index > this.sliderLength) {
      this.index = 0;
    }
    return this.index;
  },
    decreaseIndex () {
      this.index--;
      if (this.index < 0) {
          this.index = this.sliderLength;
      }
      return this.index;
    }
  };

//Create slider item and add its buttons event listener for switching slide
const sliderItem = (state) => {
  const item = window.utils.getSliderItemFromTemplate(sliderItemTemplate(state));
  const sliderLeftButton = item.querySelector(`.slider-left-button`);
  const sliderRightButton = item.querySelector(`.slider-right-button`);

  sliderLeftButton.addEventListener(`click`, () => {
    sliderControl.decreaseIndex();
    window.utils.addSliderItem(sliderList, sliderItem(slideContent[sliderControl.index]));
  });

  sliderRightButton.addEventListener(`click`, () => {
    sliderControl.increaseIndex();
    window.utils.addSliderItem(sliderList, sliderItem(slideContent[sliderControl.index]));
  });

  return item;
};

window.utils.addSliderItem(sliderList, sliderItem(slideContent[0]));
})();

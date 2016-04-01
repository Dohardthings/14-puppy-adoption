'use strict';

export default class CreateFormView {
  constructor(element, application) {
    this.element = element;
    this.application = application;
    this.togglePuppyForm();
  }

  togglePuppyForm() {
    const dropDown = document.querySelector(`#dropdownId`);
    const dropDownBtn = document.querySelector(`.icon`);
    console.log('listy list');
    dropDownBtn.addEventListener(`click`, () => {
      dropDown.classList.toggle(`dropdown--active`);
    });
  }
}

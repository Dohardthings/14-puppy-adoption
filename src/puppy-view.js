'use strict';

export default class PuppyView {
  constructor(element, info) {
    this.element = element;
    this.info = info;
    this.renderDogImage();
  }
  renderDogImage() {
    document.querySelector(`.puppy-pic`).innerHTML = `<img src="${this.info.photoUrl}" alt="" class="puppy-img">`;
  }
}

'use strict';

import CreateFormView from 'create-form-view';
import PuppyView from 'puppy-view';

export default class App {
  constructor(element) {
    this.element = element;

    fetch(`http://tiny-tn.herokuapp.com/collections/dm-puppies`)
      .then((response) => response.json())
      .then((info) => {
        this.data = info;
        this.render();
      });

    this.formView = new CreateFormView(this.element.querySelector(`.top-nav`), this);
  }

  render() {
    const pupList = this.element.querySelector(`.puppy-list`);

    pupList.innerHTML = ``;

    this.data.forEach((puppy) => {
      const generic = new PuppyView(puppy, this);
      pupList.appendChild(generic.element);
    });
  }

  addPuppyData(puppy) {
    this.data = [...this.data, puppy];

    this.render();
  }

  removePuppyData(puppy) {
    this.data = this.data.filter((x) => x !== puppy);

    this.render();
  }
}

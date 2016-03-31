'use strict';

export default class ApplicationView {

  constructor() {
    fetch(`http://tiny-tn.herokuapp.com/collections/ryan-puppy`)
    .then((response) => response.json())
    .then((info) => {

    });
    const puppyList = document.querySelector(`.puppy-list`);
  }
  // render() {
  //   this.puppyList.innerHTML = ``;
  //   info.data.forEach(x) {
  //     x = new PuppyView;
  //     this.puppyList.appendChild(x);
  //   }
  // }


}

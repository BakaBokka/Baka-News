"use strict";
export class SearchInput {
  constructor(form, search) {
    this.form = form;
    this.search = search;
  }

  setEventListener = () => {
    this.form.addEventListener("submit", this.search)};
}

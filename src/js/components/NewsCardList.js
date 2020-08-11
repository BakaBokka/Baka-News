"use strict";
export class NewsCardList {
  constructor(place, template, callback, dateApi, storage, button) {
    this.place = place;
    this.template = template;
    this.callback = callback;
    this.dateApi = dateApi;
    this.storage = storage;
    this.button = button;
    this.start = 0;
    this.stop = 3;
  }

  //Метод добавления карточки
  addCard = (title, image, url, date, desc, source) => {
    const data = { title, image, url, date, desc, source };
    const card = this.callback(data, this.template);
    this.place.appendChild(card);
  };

  //Метод проходит по массиву и добавляет карточки в общую обёртку
  render = () => {
    if (this.storage.getNewsCard(this.start, this.stop)) {
      this.storage.getNewsCard(this.start, this.stop).forEach((item) => {
        this.addCard(
          item.title,
          item.urlToImage,
          item.url,
          this.dateApi.renderCardDate(new Date(item.publishedAt)),
          item.description,
          item.source.name
        );
      });

      this.start = this.start + 3;
      this.stop = this.stop + 3;
      console.log(this.start, this.stop);

      if (this.storage.getItem().length > this.start) {
        this.button.style.display = "flex";
      } else {
        this.button.style.display = "none";
      }
    }
  };

  clearCardList = () => {
    this.place.querySelectorAll(".result-card").forEach((e) => e.remove());
    this.start = 0;
    this.stop = 3;
  };
}

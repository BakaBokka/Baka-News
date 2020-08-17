import { RENDER_CARDS_STOP } from "../constants/constants";
("use strict");
export class NewsCardList {
  constructor(options) {
    this._options = options;
    this._start = 0;
    this._stop = RENDER_CARDS_STOP;
  }

  //Метод добавления карточки
  addCard = (title, image, url, date, desc, source) => {
    const data = { title, image, url, date, desc, source };
    const card = this._options.callback(data, this._options.template);
    this._options.place.appendChild(card);
  };

  //Метод проходит по массиву и добавляет карточки в общую обёртку
  render = () => {
    if (this._options.storage.getNewsCard(this._start, this._stop)) {
      this._options.storage
        .getNewsCard(this._start, this._stop)
        .forEach((item) => {
          this.addCard(
            item.title,
            item.urlToImage,
            item.url,
            this._options.dateApi.renderCardDate(new Date(item.publishedAt)),
            item.description,
            item.source.name
          );
        });

      this._start = this._start + 3;
      this._stop = this._stop + 3;

      if (this._options.storage.getItem().length > this._start) {
        this._options.button.style.display = "flex";
        this._setEventListener();
      } else {
        this._options.button.style.display = "none";
        this._removeEventListener();
      }
    }
  };

  clearCardList = () => {
    this._options.place
      .querySelectorAll(".result-card")
      .forEach((e) => e.remove());
    this._start = 0;
    this._stop = 3;
  };

  _setEventListener = () => {
    this._options.button.addEventListener("click", this.render);
  };

  _removeEventListener = () => {
    this._options.button.removeEventListener("click", this.render);
  };
}

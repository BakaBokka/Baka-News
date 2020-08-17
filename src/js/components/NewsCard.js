"user strict";
export class NewsCard {
  constructor(data) {
    this._data = data;
  }

  //Метод собирает карточку по темплейту
  createCard(template) {
    const newCard = template.cloneNode(true);

    newCard.querySelector(".result-card__title").textContent = this._data.title;
    if (this._data.image === null) {
      newCard.querySelector(
        ".result-card__image"
      ).style.backgroundImage = `url(../../images/hippo-logo.png)`;

      newCard.querySelector(
        ".result-card__image"
      ).style.backgroundPosition = `center`;
      newCard.querySelector(
        ".result-card__image"
      ).style.backgroundSize = `cover`;
    } else
      newCard.querySelector(
        ".result-card__image"
      ).style.backgroundImage = `url(${this._data.image})`;

    newCard
      .querySelector(".result-card__link")
      .setAttribute("href", this._data.url);
    newCard.querySelector(".result-card__date").textContent = this._data.date;
    newCard.querySelector(".result-card__text").textContent = this._data.desc;
    newCard.querySelector(
      ".result-card__origin"
    ).textContent = this._data.source;

    this.placeCard = newCard;

    return newCard;
  }
}

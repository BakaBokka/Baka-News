"user strict";
export class NewsCard {
  constructor(data) {
    this.data = data;
  }

  //Метод собирает карточку по темплейту
  createCard(template) {
    const newCard = template.cloneNode(true);

    newCard.querySelector(".result-card__title").textContent = this.data.title;
    if (this.data.image === null) {
      newCard.querySelector(
        ".result-card__image"
      ).style.backgroundImage = `url(../src/images/Fib.png)`;

      newCard.querySelector(
        ".result-card__image"
      ).style.backgroundPosition = `right`;
    } else
      newCard.querySelector(
        ".result-card__image"
      ).style.backgroundImage = `url(${this.data.image})`;

    newCard
      .querySelector(".result-card__link")
      .setAttribute("href", this.data.url);
    newCard.querySelector(".result-card__date").textContent = this.data.date;
    newCard.querySelector(".result-card__text").textContent = this.data.desc;
    newCard.querySelector(
      ".result-card__origin"
    ).textContent = this.data.source;

    this.placeCard = newCard;

    return newCard;
  }
}

"user strict";
export class CommitCard {
  constructor(data) {
    this._data = data;
  }

  //Метод собирает карточку по темплейту
  createCommit(container) {
    container.insertAdjacentHTML(
      "beforeend",
      `
            <div class="swiper-slide">
              <div class="swiper-slide__content">
                <p class="swiper-slide__date">${sanitizeHTML(
                  this._data.date
                )}</p>
                <div class="swiper-slide__author">
                  <img
                    src="${sanitizeHTML(this._data.avatar)}"
                    alt="Аватарка автора коммита"
                    class="swiper-slide__photo"
                  />
                  <div class="swiper-slide__info">
                    <p class="swiper-slide__name">${sanitizeHTML(
                      this._data.name
                    )}</p>
                    <p class="swiper-slide__email">${sanitizeHTML(
                      this._data.email
                    )}</p>
                  </div>
                </div>
                <p class="swiper-slide__text">
                ${sanitizeHTML(this._data.message)}
                </p>
              </div>
            </div>`
    );
    const commitCard = container.firstElementChild;
    return commitCard;

    // commitCard.querySelector(
    //   ".swiper-slide__name"
    // ).textContent = this._data.name;
    // commitCard.querySelector(
    //   ".swiper-slide__email"
    // ).textContent = this._data.email;

    // commitCard.querySelector(
    //   ".swiper-slide__date"
    // ).textContent = this._data.date;

    // commitCard.querySelector(
    //   ".swiper-slide__text"
    // ).textContent = this._data.message;
    // commitCard.querySelector(
    //   ".swiper-slide__photo"
    // ).style.backgroundImage = `url(${this._data.avatar})`;
  }
}

//функция sanitizeHTML предназначения для борьбы с xss - не позволяет вставлять в данных пользователя html
function sanitizeHTML(str) {
  const temp = document.createElement("div");
  temp.textContent = str;
  return temp.innerHTML;
}

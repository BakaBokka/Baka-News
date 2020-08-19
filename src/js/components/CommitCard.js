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
                <p class="swiper-slide__date">${this._sanitizeHTML(
                  this._data.date
                )}</p>
                <div class="swiper-slide__author">
                  <img
                    src="${this._sanitizeHTML(this._data.avatar)}"
                    alt="Аватарка автора коммита"
                    class="swiper-slide__photo"
                  />
                  <div class="swiper-slide__info">
                    <p class="swiper-slide__name">${this._sanitizeHTML(
                      this._data.name
                    )}</p>
                    <p class="swiper-slide__email">${this._sanitizeHTML(
                      this._data.email
                    )}</p>
                  </div>
                </div>
                <p class="swiper-slide__text">
                ${this._sanitizeHTML(this._data.message)}
                </p>
              </div>
            </div>`
    );
    const commitCard = container.firstElementChild;
    return commitCard;
  }
  
  //функция sanitizeHTML предназначения для борьбы с xss - не позволяет вставлять в данных пользователя html
_sanitizeHTML =(str) => {
  const temp = document.createElement("div");
  temp.textContent = str;
  return temp.innerHTML;
}
}



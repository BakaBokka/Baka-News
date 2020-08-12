"use strict";
export class DataStorage {
  constructor() {
    this.articles = this.getItem();
    console.log(this.articles);
    this.request = localStorage["request"];
  }
  //Метод загружает в хранилище строку со всеми новостями
  _setArticle = (array) => {
    localStorage.setItem("articles", JSON.stringify(array));
  };

  //Метод загружает в хранилище  общее количеством новостей
  _setTotal = (array) => {
    localStorage.setItem("totalResults", JSON.stringify(array.totalResults));
  };

  //Метод загружает в хранилище запрос из инпута
  setRequest = (request) => {
    localStorage.setItem("request", `${request}`);
  };

  //Метод вызывает функции загрузки новостей и загрузки количества новостей
  setItems = (array) => {
    this._setArticle(array);
    this._setTotal(array);
  };

  //Метод получает массив с новостями из хранилища
  getItem = () => {
    this.data = JSON.parse(localStorage.getItem("articles"));
    if (localStorage["articles"]) {
      this.articles = this.data.articles;
      return this.articles;
    }
  };

  //Метод собирает карточки с новостями в массив для передачи в рендер
  getNewsCard = (start, stop) => {
    this.newsCardsArray = [];
    this.dataArray = this.getItem();
    if (this.dataArray) {
      for (let i = start; i < stop; i++) {
        if (this.dataArray[i]) {
          this.newsCardsArray.push(this.dataArray[i]);
        }
      }

      return this.newsCardsArray;
    }
  };

  //Метод получает заголовки, где упоминается запрос инпута
  getNewsTitles = (array) => {
    return array.filter((item) => {
      const title = item.title.toLowerCase();

      return title.indexOf(this.request.toLowerCase()) > -1;
    });
  };

  //Метод получает тексты новостей, где упоминается запрос инпута
  getNewsDesc = (array) => {
    return array.filter((item) => {
      const desc = item.description.toLowerCase();

      return desc.indexOf(this.request.toLowerCase()) > -1;
    });
  };

  getNewsDates = (array) => {
    this.datesArray = [];
    for (let i = array.length -1; i >= 0; i--) {
      this.datesArray.push(array[i]);
    }
    console.log(this.datesArray);
    return this.datesArray;
  }

  //Метод очищает хранилище
  clearItems = () => {
    localStorage.clear();
  };
}

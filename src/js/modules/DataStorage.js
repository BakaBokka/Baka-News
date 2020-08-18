"use strict";
export class DataStorage {
  constructor() {
    this.articles = this.getItem();

    //Массив с отформатированными датами
    this.formatedArticles = this.formatArtilclesDates();

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
    if(localStorage['articles']){
    return array.filter((item) => {
      if(item.title) {
      const title = item.title.toLowerCase();

      return title.indexOf(this.request.toLowerCase()) > -1;
    }
    });
  }
  };

  //Метод получает тексты новостей, где упоминается запрос инпута
  getNewsDesc = (array) => {
    if(localStorage['articles']){
    return array.filter((item) => {
      if(item.description)  {
      const desc = item.description.toLowerCase();

      return desc.indexOf(this.request.toLowerCase()) > -1;
    }
    });
  }
  };

  //Метод получает массив всех упоминаний
  getMentions = (array) => {
    return array.filter((item) => {
      if(item) {
      const mention = item.toLowerCase();

      return mention.indexOf(this.request.toLowerCase()) > -1;
    }
    });

  };


  //Метод убирает время из даты в массиве
  formatArtilclesDates = () => {
    if(localStorage['articles']) {
    this.articles.forEach((item) => {
      if (item.publishedAt) {
        item.publishedAt = item.publishedAt.slice(0, -10);
      }
    });
    return this.articles;
  }
  };

  //Метод создаёт отсортированный по дате массив заголовков и описаний
  sortByDate = (date) => {
    this.sortedArray = [];

    this.formatedArticles.forEach((item) => {
      if (item.publishedAt === date) {
        this.sortedArray.push(item.publishedAt);
        this.sortedArray.push(item.title);
        this.sortedArray.push(item.description);
      }
    });
    return this.sortedArray;
  };



  //Метод очищает хранилище
  clearItems = () => {
    localStorage.clear();
  };
}

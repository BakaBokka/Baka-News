"use strict";
export class NewsApi {
  constructor(options) {
    this._options = options;
  }

  //Метод принимает новости с сервера
  getNews(request, fromDate, toDate, sortOption, number, key) {
    return fetch(
      `${this._options.baseUrl}` +
        `q=${request}` +
        `&from=${fromDate}` +
        `&to=${toDate}` +
        `&sortBy=${sortOption}` +
        `&pageSize=${number}&` +
        `${key}`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ужасная ошибка: ${res.status}`);
    });
  }
}

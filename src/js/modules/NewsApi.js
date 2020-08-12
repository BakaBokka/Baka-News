"use strict";
export class NewsApi {
  constructor(options) {
    this.options = options;
  }

  //Метод принимает новости с сервера
  getNews(request, fromDate, toDate) {
    return fetch(
      `${this.options.baseUrl}` +
        `q=${request}` +
        `&from=${fromDate}` +
        `&to=${toDate}` +
        "&sortBy=publishedAt" +
        "&pageSize=100&" +
        "apiKey=8aeeba1f3009478aa34ad87aeda059be"
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ужасная ошибка: ${res.status}`);
    });
  }
}

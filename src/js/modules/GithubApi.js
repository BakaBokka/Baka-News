"use strict"
export class GithubApi {
  constructor (options) {

  }

  //Метод принимает новости с сервера
  getCommits() {
    return fetch(
      `https://api.github.com/repos/BakaBokka/Baka-News/commits`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ужасная ошибка: ${res.status}`);
    });
  }
}
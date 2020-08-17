"use strict";
export class GithubApi {
  //Метод принимает новости с сервера
  getCommits(data) {
    return fetch(
      `https://api.github.com/repos/${data.user}/${data.repo}/commits?page=1&per_page=${data.number}`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Произошла ужасная ошибка: ${res.status}`);
    });
  }
}

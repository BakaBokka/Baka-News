import "swiper/swiper-bundle.css";
import "../pages/about.css";

import { GithubApi } from "../js/modules/GithubApi";
import { CommitCard } from "../js/components/CommitCard";
import { CommitCardList } from "../js/components/CommitCardList";
import { NewsDate } from "../js/utils/NewsDate";
import { swiper } from "../js/modules/Swiper";
import { GITHUB_API_DATA } from "../js/constants/constants";

//Общие переменные
const commitsContainer = document.querySelector(".swiper-wrapper");

//Переменные классов
const dates = new NewsDate();
const githubApi = new GithubApi();
const commitCardList = new CommitCardList({
  place: commitsContainer,
  callback: createNewCommit,
  datesApi: dates,
});

//Функция-коллбэк для создания коммита
function createNewCommit(data) {
  const сard = new CommitCard(data);
  return сard.createCommit(commitsContainer);
}

//Функция запускает подгрузку коммитов
function loadCommits() {
  githubApi
    .getCommits(GITHUB_API_DATA)
    .then((result) => {
      commitCardList.render(result);
    })
    .catch((error) => {
      console.log("Произошла ужасная ошибка:", error);
      return Promise.reject(error);
    })
    .then(() => {
      swiper.init();
    });
}

//Вызовы функций
loadCommits();

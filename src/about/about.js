import "swiper/swiper-bundle.css";
import "../pages/about.css";
import Swiper, { Navigation, Pagination } from "swiper";
import { GithubApi } from "../js/modules/GithubApi";
import { CommitCard } from "../js/components/CommitCard";
import { CommitCardList } from "../js/components/CommitCardList";
import { NewsDate } from "../js/utils/NewsDate";

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

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);
import "swiper/swiper-bundle.css";

// init Swiper:
const swiper = new Swiper(".swiper-container", {
  slidesPerView: "auto",
  init: false,
  spaceBetween: 16,
  slidesPerGroup: 3,
  centeredSlides: true,
  loop: true,
  loopedSlides: 5,
  breakpoints: {
    // when window width is >= 480px
    440: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    // when window width is >= 768px
    769: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Функция-коллбэк для создания коммита
function createNewCommit(data) {
  const сard = new CommitCard(data);
  return сard.createCommit(commitsContainer);
}

//Функция запускает подгрузку коммитов
function loadCommits() {
  githubApi
    .getCommits()
    .then((result) => {
      console.log(result);
      commitCardList.render(result);
    })
    .catch((error) => {
      console.log("Произошла ужасная ошбика:", error);
      return Promise.reject(error);
    })
    .then(() => {
      swiper.init();
    });
}

loadCommits();

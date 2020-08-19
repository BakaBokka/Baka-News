import "./pages/index.css";
import { NewsApi } from "./js/modules/NewsApi";
import { NewsDate } from "./js/utils/NewsDate";
import { DataStorage } from "./js/modules/DataStorage";
import { SearchInput } from "./js/components/SearchInput";
import { NewsCard } from "./js/components/NewsCard";
import { NewsCardList } from "./js/components/NewsCardList";
import {
  NEWS_API_URL,
  NEWS_API_SORT_BY,
  SEARCH_CARDS_QUANTITY,
  NEWS_API_KEY,
  DAYS_TO_RENDER
} from "./js/constants/constants";

//Общие переменные
const form = document.querySelector(".search__form");
const input = form.querySelector(".search__from-input");
const templateCard = document
  .querySelector("#template-card")
  .content.querySelector(".result-card");
const cardContainer = document.querySelector(".result__cards-container");
const resultButton = document.querySelector(".result__cards-button");
const preloader = document.querySelector(".result__preloader");
const resultNotFound = document.querySelector(".result__not-found");
const resultCards = document.querySelector(".result__cards");
const resultError = document.querySelector(".result__error");

//Переменные классов
const dates = new NewsDate();
const storage = new DataStorage();
const searchInput = new SearchInput(form, loadNews);

const newsApi = new NewsApi({
  baseUrl: `${NEWS_API_URL}`,
});

const newCardList = new NewsCardList({
  place: cardContainer,
  template: templateCard,
  callback: createNewCard,
  dateApi: dates,
  storage: storage,
  button: resultButton,
});

//Функция показывает/скрывает прелоадер
function togglePreloader() {
  preloader.classList.toggle("result__preloader_hide");
}
//Функция показывает контейнер для карточек с результатами
function showResultCards() {
  resultCards.classList.remove("result__cards_hide");
}
//Функция скрывает контейнер для карточек с результатами
function hideResultCards() {
  resultCards.classList.add("result__cards_hide");
}
//Функция показывает общий контейнер с результатами поиска
function showResults() {
  document
    .querySelector(".result__content")
    .classList.remove("result__content_hide");
}

//Фунция запускает подгрузку новостей
function loadNews() {
  newCardList.clearCardList();
  storage.clearItems();
  storage.setRequest(input.value);
  togglePreloader();
  resultNotFound.classList.add("result__not-found_hide");
  resultError.classList.add("result__error_hide");
  showResults();
  searchInput.disableSubmitButton();

  newsApi
    .getNews(
      input.value,
      requestFromDate,
      requestToDate,
      NEWS_API_SORT_BY,
      SEARCH_CARDS_QUANTITY,
      NEWS_API_KEY
    )
    .then((result) => {
      storage.setItems(result);
      input.value = localStorage["request"];
    })

    .catch((error) => {
      console.log("Произошла ужасная ошибка:", error);
      resultError.classList.remove("result__error_hide");
      hideResultCards();
      storage.clearItems();
      return Promise.reject(error);
    })
    .then(() => {
      const articles = storage.getItem();

      if (articles.length === 0) {
        resultNotFound.classList.remove("result__not-found_hide");
        hideResultCards();
      } else {
        newCardList.render();
        showResultCards();
        showResults();
      }
    })

    .finally(() => {
      togglePreloader();
      searchInput.activateSubmitButton();
    });
  event.preventDefault();
  form.reset();
}

//Функция-коллбэк для создания карточки с новостью
function createNewCard(data, template) {
  const сard = new NewsCard(data);
  return сard.createCard(template);
}

// Функция получает начальную дату для запроса
const getRequestFromDate = (date, days) => {
  return new Date(date.setDate(date.getDate() - days));
};

//Вызовы функций
const requestToDate = dates.renderRequestDate(new Date());
const requestFromDate = dates.renderRequestDate(
  getRequestFromDate(new Date(), DAYS_TO_RENDER)
);
searchInput.setEventListener();
if (localStorage["totalResults"] && localStorage["totalResults"] !== "0") {
  showResultCards();
  newCardList.render();
  showResults();
  if (localStorage["request"]) {
    input.value = localStorage["request"];
    searchInput.activateSubmitButton();
  }
}

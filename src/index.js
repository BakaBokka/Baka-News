import "./pages/index.css";
import { NewsApi } from "./js/modules/NewsApi";
import { NewsDate } from "./js/utils/NewsDate";
import { DataStorage } from "./js/modules/DataStorage";
import { SearchInput } from "./js/components/SearchInput";
import { NewsCard } from "./js/components/NewsCard";
import { NewsCardList } from "./js/components/NewsCardList";

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
const resultError = document.querySelector('.result__error');

//Переменные классов
const dates = new NewsDate();
const storage = new DataStorage();
const searchInput = new SearchInput(form, loadNews);
const API_URL =
  NODE_ENV === "production"
    ? "https://praktikum.tk/news/v2/everything?"
    : "https://newsapi.org/v2/everything?";
const newsApi = new NewsApi({
  baseUrl: `${API_URL}`,
});

const newCardList = new NewsCardList(
  cardContainer,
  templateCard,
  createNewCard,
  dates,
  storage,
  resultButton
);

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
  resultError.classList.add('result__error_hide');
  showResults();
  searchInput.disableSubmitButton();

  newsApi
    .getNews(input.value, requestFromDate, requestToDate)
    .then((result) => {
      storage.setItems(result);
      input.value = localStorage["request"];
      console.log(localStorage);
    })

    .catch((error) => {
      console.log("Произошла ужасная ошбика:", error);
      resultError.classList.remove('result__error_hide');
      hideResultCards()
      storage.clearItems();
      return Promise.reject(error);

    })
    .then(() => {
      const articles = storage.getItem();
      console.log(articles);
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

// Функция получает начальную дату для карточки новостей
const getFromDate = (date, days) => {
  return new Date(date.setDate(date.getDate() - days));
};

//Вызовы функций
getFromDate(new Date(), 7);

const requestToDate = dates.renderRequestDate(new Date());
const requestFromDate = dates.renderRequestDate(
  getRequestFromDate(new Date(), 7)
);

searchInput.setEventListener();

if (localStorage["totalResults"] && localStorage["totalResults"] !== '0') {
  showResultCards();
  newCardList.render();
  console.log(localStorage["request"]);
   showResults();
   if(localStorage["request"]){
    input.value = localStorage["request"];
    searchInput.activateSubmitButton();
  }
}



resultButton.addEventListener("click", () => {
  newCardList.render();
});

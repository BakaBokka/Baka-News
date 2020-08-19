//Переменные ошибок
export const ERROR_MESSAGES = {
  empty: "Это обязательное поле",
  wrongLength: "Должно быть от 1 до 30 символов",
  wrongPattern: "Введите верный запрос",
};

export const DAYS_TO_RENDER = 7;//Количество дней, за которое выводятся новости

export const NEWS_API_URL =
  NODE_ENV === "production"
    ? " https://nomoreparties.co/news/v2/everything?"
    : "https://newsapi.org/v2/everything?";

export const RENDER_CARDS_STOP = 3; //Количиство карточек, которые рендерятся за один раз
export const NEWS_API_SORT_BY = "publishedAt"; //Возможные опции: relevancy, popularity, publishedAt.
export const SEARCH_CARDS_QUANTITY = 100; //Максимальное количество выводимых карточек новостей
export const NEWS_API_KEY = "apiKey=8aeeba1f3009478aa34ad87aeda059be"; //Ключ авторизации

export const GITHUB_API_DATA = {
  user: "BakaBokka", //Имя пользователя Гитхаба
  repo: "Baka-News", //Имя репозитория
  number: "20", //Количество слайдов
};

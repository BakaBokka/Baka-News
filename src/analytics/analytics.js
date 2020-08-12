import "../pages/analytics.css"
import {DataStorage} from "../js/modules/DataStorage";
import {Statistics} from "../js/components/Statistics";

//Общие переменные
const request = document.querySelector('.analytics-data__request');
const newPerWeek = document.querySelector('.analytics-data__result-total');
const newsPerTitle = document.querySelector('.analytics-data__result-titles');
//Переменные классов
const storage = new DataStorage();
const stats = new Statistics(storage);


//Метод расставляет значения аналитики на страницу
function setRequestData() {
  request.textContent = localStorage["request"];
  newPerWeek.textContent = localStorage['totalResults'];
  newsPerTitle.textContent = storage.getNewsTitles(storage.getItem()).length;
}




//Вызовы методов
setRequestData();
storage.getNewsDates(storage.getItem());
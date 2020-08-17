import "../pages/analytics.css";
import { DataStorage } from "../js/modules/DataStorage";
import { Statistics } from "../js/components/Statistics";
import { NewsDate } from "../js/utils/NewsDate";

//Общие переменные
const request = document.querySelector(".analytics-data__request");
const newPerWeek = document.querySelector(".analytics-data__result-total");
const newsPerTitle = document.querySelector(".analytics-data__result-titles");
const diagramMonth = document.querySelector(
  ".diagram__header-desc_two-strings"
);

//Переменные классов
const storage = new DataStorage();
const stats = new Statistics(storage);
const dates = new NewsDate();

//Метод расставляет значения аналитики на страницу
function setRequestData() {
  request.textContent = localStorage["request"];
  newPerWeek.textContent = localStorage["totalResults"];
  newsPerTitle.textContent = storage.getNewsTitles(storage.getItem()).length;
}
//Метод расставляет актуальные дни недели в диаграмму аналитики
function setCalenderDates(array) {
  const calendarDates = Array.from(
    document.querySelectorAll(".diagram__calendar-date")
  );

  for (let i = 0; i <= array.length - 1; i++) {
    calendarDates[i].textContent = array[i];
  }
}
//Метод подставляет наименование месяца в шапку диаграммы
function setDiagramMonth() {
  diagramMonth.textContent =
    "Дата               " + '(' + dates.renderDiagramMonth(new Date()) + ')';
}

//Метод расставляет число упоминаний по дням в диаграмму аналитики
function setChartMentions(array) {
  const chartMentions = Array.from(
    document.querySelectorAll(".diagram__chart-bar")
  );

  for (let i = 0; i <= array.length - 1; i++) {
    chartMentions[i].textContent = array[i];
  }
}

//Метод расставляет число упоминаний по дням в диаграмму аналитики
function setChartPercents(array) {
  const chartPercents = Array.from(
    document.querySelectorAll(".diagram__chart-bar")
  );

  for (let i = 0; i <= array.length - 1; i++) {
    chartPercents[i].style.width = array[i] + "%";
  }
}

//Вызовы методов
setRequestData();
if(storage.articles[0]){
  const firstNewsDate = storage.articles[0].publishedAt;


const ChartDates = dates.renderChartDates(new Date(firstNewsDate));

setCalenderDates(dates.renderStatsDates(new Date(firstNewsDate)));
setDiagramMonth();

setChartMentions(stats.getChartMentions(ChartDates));

setChartPercents(stats.getChartPercent(stats.getChartMentions(ChartDates)));
}

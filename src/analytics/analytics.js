import "../pages/analytics.css";
import { DataStorage } from "../js/modules/DataStorage";
import { Statistics } from "../js/components/Statistics";
import { NewsDate } from "../js/utils/NewsDate";
import { DAYS_TO_RENDER } from "../js/constants/constants";

//Общие переменные
const request = document.querySelector(".analytics-data__request");
const newPerWeek = document.querySelector(".analytics-data__result-total");
const newsPerTitle = document.querySelector(".analytics-data__result-titles");
const diagramMonth = document.querySelector(
  ".diagram__header-desc_two-strings"
);
const calendarDates = document.querySelector(".diagram__calendar");
const diagramCharts = document.querySelector(".diagram__chart");

//Переменные классов
const storage = new DataStorage();
const stats = new Statistics(storage);
const dates = new NewsDate();

//Метод расставляет значения аналитики на страницу
function setRequestData() {
  request.textContent = localStorage["request"];
  newPerWeek.textContent = localStorage["totalResults"];
  if (localStorage["articles"]) {
    newsPerTitle.textContent = storage.getNewsTitles(storage.getItem()).length;
  }
}
//Метод создаёт элемент даты в диаграмме
function createCalendarDates() {
  const calendarDate = document.createElement("li");
  calendarDate.classList.add("diagram__calendar-date");
  return calendarDate;
}
//Метод создаёт элемент прогресс-бара в диаграмме
function createDiagramCharts() {
  const diagramChart = document.createElement("li");
  diagramChart.classList.add("diagram__chart-bar");
  return diagramChart;
}

//Метод добавляет элементы диаграммы в разметку
function addStatsElements(days) {
  for (let i = 0; i <= days - 1; i++) {
    calendarDates.appendChild(createCalendarDates());
    diagramCharts.appendChild(createDiagramCharts());
  }
}

//Метод расставляет актуальные дни недели в диаграмму аналитики
function setCalenderDates(array) {
  const calendarDatesArray = Array.from(
    document.querySelectorAll(".diagram__calendar-date")
  );

  for (let i = 0; i <= array.length - 1; i++) {
    calendarDatesArray[i].textContent = array[i];
  }
}

//Метод подставляет наименование месяца в шапку диаграммы
function setDiagramMonth() {
  diagramMonth.textContent =
    "Дата               " + "(" + dates.renderDiagramMonth(new Date()) + ")";
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
addStatsElements(DAYS_TO_RENDER);
setRequestData();
if (localStorage["articles"] && storage.articles[0]) {
  const firstNewsDate = storage.articles[0].publishedAt;
  const ChartDates = dates.renderChartDates(
    new Date(firstNewsDate),
    DAYS_TO_RENDER
  );
  setCalenderDates(
    dates.renderStatsDates(new Date(firstNewsDate), DAYS_TO_RENDER)
  );
  setDiagramMonth();
  setChartMentions(stats.getChartMentions(ChartDates));
  setChartPercents(stats.getChartPercent(stats.getChartMentions(ChartDates)));
}

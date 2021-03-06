"use strict";
export class NewsDate {
  //Метод получает полное название месяца в подходящем для карточки формате
  _getCardMonth = (date) => {
    switch (date.getMonth()) {
      case 0:
        this.fullMonth = "января";
        break;
      case 1:
        this.fullMonth = "февраля";
        break;
      case 2:
        this.fullMonth = "марта";
        break;
      case 3:
        this.fullMonth = "апреля";
        break;
      case 4:
        this.fullMonth = "мае";
        break;
      case 5:
        this.fullMonth = "июня";
        break;
      case 6:
        this.fullMonth = "июля";
        break;
      case 7:
        this.fullMonth = "августа";
        break;
      case 8:
        this.fullMonth = "сентября";
        break;
      case 9:
        this.fullMonth = "октября";
        break;
      case 10:
        this.fullMonth = "ноября";
        break;
      case 11:
        this.fullMonth = "декабря";
        break;
    }
    return this.fullMonth;
  };

  //Метод получает правильный номер месяца
  _getNumMonth = (date) => {
    switch (date.getMonth()) {
      case 0:
        this.Month = "01";
        break;
      case 1:
        this.Month = "02";
        break;
      case 2:
        this.Month = "03";
        break;
      case 3:
        this.Month = "04";
        break;
      case 4:
        this.Month = "05";
        break;
      case 5:
        this.Month = "06";
        break;
      case 6:
        this.Month = "07";
        break;
      case 7:
        this.Month = "08";
        break;
      case 8:
        this.Month = "09";
        break;
      case 9:
        this.Month = "10";
        break;
      case 10:
        this.Month = "11";
        break;
      case 11:
        this.Month = "12";
        break;
    }
    return this.Month;
  };

  //Метод получает правильный номер дня
  _getNumDay = (date) => {
    switch (date.getDate()) {
      case 1:
        this.Day = "01";
        break;
      case 2:
        this.Day = "02";
        break;
      case 3:
        this.Day = "03";
        break;
      case 4:
        this.Day = "04";
        break;
      case 5:
        this.Day = "05";
        break;
      case 6:
        this.Day = "06";
        break;
      case 7:
        this.Day = "07";
        break;
      case 8:
        this.Day = "08";
        break;
      case 9:
        this.Day = "09";
        break;
      case 10:
        this.Day = "10";
        break;
      case 11:
        this.Day = "11";
        break;
      case 12:
        this.Day = "12";
        break;
      case 13:
        this.Day = "13";
        break;
      case 14:
        this.Day = "14";
        break;
      case 15:
        this.Day = "15";
        break;
      case 16:
        this.Day = "16";
        break;
      case 17:
        this.Day = "17";
        break;
      case 18:
        this.Day = "18";
        break;
      case 19:
        this.Day = "19";
        break;
      case 20:
        this.Day = "20";
        break;
      case 21:
        this.Day = "21";
        break;
      case 22:
        this.Day = "22";
        break;
      case 23:
        this.Day = "23";
        break;
      case 24:
        this.Day = "24";
        break;
      case 25:
        this.Day = "25";
        break;
      case 26:
        this.Day = "26";
        break;
      case 27:
        this.Day = "27";
        break;
      case 28:
        this.Day = "28";
        break;
      case 29:
        this.Day = "29";
        break;
      case 30:
        this.Day = "30";
        break;
      case 31:
        this.Day = "31";
        break;
    }
    return this.Day;
  };

  //Метод получает буквенное обозначения дня недели
  _getWeekDay(date) {
    const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
    const day = date.getDay();

    return days[day];
  }

  //Метод получает полное название месяца для шапки диаграммы
  _getFullMonth(date) {
    const months = [
      "январь",
      "февраль",
      "март",
      "апрель",
      "май",
      "июнь",
      "июль",
      "август",
      "сентябрь",
      "октябрь",
      "ноябрь",
      "декабрь",
    ];
    const month = date.getMonth();

    return months[month];
  }

  //Метод выдает дату в верном формате для карточки поиска
  renderCardDate = (date) => {
    return (this.newsDate =
      `${date.getDate()}` +
      " " +
      `${this._getCardMonth(date)}` +
      ", " +
      `${date.getFullYear()}`);
  };

  //Метод выдает дату в верном формате для запроса в АПИ новостей
  renderRequestDate = (date) => {
    return (this.requestDate =
      `${date.getFullYear()}` +
      "-" +
      `${this._getNumMonth(date)}` +
      "-" +
      `${this._getNumDay(date)}`);
  };

  //Метод выдает даты в верном формате для диаграммы аналитики
  renderStatsDates = (date, days) => {
    this.firstDate =
      `${this._getNumDay(date)}` + ", " + `${this._getWeekDay(date)}`;

    this.statsDates = [this.firstDate];
    for (let i = 1; i <= days-1; i++) {
      this.weekDay = new Date(date.setDate(date.getDate() - 1));

      this.statsDate =
        `${this._getNumDay(this.weekDay)}` +
        ", " +
        `${this._getWeekDay(this.weekDay)}`;

      this.statsDates.unshift(this.statsDate);
    }

    return this.statsDates;
  };

  //Медот выдает даты в верном формате для прогресс-баров диаграммы
  renderChartDates = (date, days) => {
    this.firstDate = this.renderRequestDate(date);
    this.chartDates = [this.firstDate];
    for (let i = 1; i <= days-1; i++) {
      this.weekDay = new Date(date.setDate(date.getDate() - 1));
      this.chartDate = this.renderRequestDate(this.weekDay);
      this.chartDates.unshift(this.chartDate);
    }
    return this.chartDates;
  };

  //Метод выдает название месяца для шапки диаграммы
  renderDiagramMonth = (date) => {
    return this._getFullMonth(date);
  };
}

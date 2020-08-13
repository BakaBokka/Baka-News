"use strict";
export class Statistics {
  constructor(storage) {
    this._storage = storage;
    this._articles = this._storage.getItem();
    this._getTotalMentions = this._getTotalMentions();

  }

//Метод получает общее количество упоминаний
  _getTotalMentions = () => {
    console.log(
      this._storage.getNewsTitles(this._articles).length,
      this._storage.getNewsDesc(this._articles).length
    );
    return (
      this._storage.getNewsTitles(this._articles).length +
      this._storage.getNewsDesc(this._articles).length
    );
  };

//Метод получает массив с количеством упоминаний по дням
  getChartMentions = (array) => {

   return array.map((item) => {
   return  this._storage.getMentions(this._storage.sortByDate(item)).length

    });

  };

//Методе получает процент упоминаний по дням
  getChartPercent = (array) => {
   return this.chartPercent = array.map((item) => {
      return Math.floor((item*100)/this._getTotalMentions)
    })
  }
}

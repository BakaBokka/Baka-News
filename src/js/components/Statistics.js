"use strict"
export class Statistics {
  constructor (storage ){
this._storage = storage;
this._articles = this._storage.getItem();
this.totalMentions = this.totalMentions();
console.log(this.totalMentions);
  }


  totalMentions = () => {
    console.log(this._storage.getNewsTitles(this._articles).length, this._storage.getNewsDesc(this._articles).length)
    return this._storage.getNewsTitles(this._articles).length +  this._storage.getNewsDesc(this._articles).length;
  }



}




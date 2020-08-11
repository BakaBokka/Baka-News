"use strict";
export class DataStorage {



  _setArticle = (array) => {
    localStorage.setItem("articles", JSON.stringify(array));

  };

  _setTotal = (array) => {
    localStorage.setItem("totalResults", JSON.stringify(array.totalResults));

  };

  setRequest = (request) => {
    localStorage.setItem("request", `${request}`);

  }

  setItems = (array) => {
    this._setArticle(array);
    this._setTotal(array);
  }

  getItem = () => {

    this.data = JSON.parse(localStorage.getItem("articles"));
    if(localStorage['articles']) {
      this.articles = this.data.articles;
      return this.articles;
    }
    
  };

  getNewsCard = (start, stop) => {
    this.newsCardsArray = [];
    this.dataArray = this.getItem();
if(this.dataArray){
  for (let i = start; i < stop; i++) {
    if (this.dataArray[i]) {
    this.newsCardsArray.push(this.dataArray[i]);
  }
}

console.log(this.newsCardsArray);
return this.newsCardsArray;
}
 

}


  clearItems = () => {
    localStorage.clear();
  };
}

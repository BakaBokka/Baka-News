!function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=23)}({18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);a(18);function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,a,n;return t=e,(a=[{key:"getNews",value:function(e,t,a){return fetch("".concat(this.options.baseUrl)+"q=".concat(e)+"&from=".concat(t)+"&to=".concat(a)+"&pageSize=100&apiKey=8aeeba1f3009478aa34ad87aeda059be").then((function(e){return e.ok?e.json():Promise.reject("Произошла ужасная ошибка: ".concat(e.status))}))}}])&&r(t.prototype,a),n&&r(t,n),e}();function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c="Это обязательное поле",i="Должно быть от 1 до 30 символов",u="Введите верный запрос";function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.data=t}var t,a,r;return t=e,(a=[{key:"createCard",value:function(e){var t=e.cloneNode(!0);return t.querySelector(".result-card__title").textContent=this.data.title,null===this.data.image?(t.querySelector(".result-card__image").style.backgroundImage="url(Baka-News/src/images/Fib.png)",t.querySelector(".result-card__image").style.backgroundPosition="right"):t.querySelector(".result-card__image").style.backgroundImage="url(".concat(this.data.image,")"),t.querySelector(".result-card__link").setAttribute("href",this.data.url),t.querySelector(".result-card__date").textContent=this.data.date,t.querySelector(".result-card__text").textContent=this.data.desc,t.querySelector(".result-card__origin").textContent=this.data.source,this.placeCard=t,t}}])&&d(t.prototype,a),r&&d(t,r),e}();function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var b=document.querySelector(".search__form"),y=b.querySelector(".search__from-input"),_=document.querySelector("#template-card").content.querySelector(".result-card"),m=document.querySelector(".result__cards-container"),g=document.querySelector(".result__cards-button"),p=document.querySelector(".result__preloader"),k=document.querySelector(".result__not-found"),v=document.querySelector(".result__cards"),S=document.querySelector(".result__error"),D=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_getFullMonth",(function(e){switch(e.getMonth()){case 0:t.fullMonth="января";break;case 1:t.fullMonth="февраля";break;case 2:t.fullMonth="марта";break;case 3:t.fullMonth="апреля";break;case 4:t.fullMonth="мае";break;case 5:t.fullMonth="июня";break;case 6:t.fullMonth="июля";break;case 7:t.fullMonth="августа";break;case 8:t.fullMonth="сентября";break;case 9:t.fullMonth="октября";break;case 10:t.fullMonth="ноября";break;case 11:t.fullMonth="декабря"}return t.fullMonth})),o(this,"_getNumMonth",(function(e){switch(e.getMonth()){case 0:t.Month="01";break;case 1:t.Month="02";break;case 2:t.Month="03";break;case 3:t.Month="04";break;case 4:t.Month="05";break;case 5:t.Month="06";break;case 6:t.Month="07";break;case 7:t.Month="08";break;case 8:t.Month="09";break;case 9:t.Month="10";break;case 10:t.Month="11";break;case 11:t.Month="12"}return t.Month})),o(this,"_getNumDay",(function(e){switch(e.getDate()){case 1:t.Day="01";break;case 2:t.Day="02";break;case 3:t.Day="03";break;case 4:t.Day="04";break;case 5:t.Day="05";break;case 6:t.Day="06";break;case 7:t.Day="07";break;case 8:t.Day="08";break;case 9:t.Day="09";break;case 10:t.Day="10";break;case 11:t.Day="11";break;case 12:t.Day="12";break;case 13:t.Day="13";break;case 14:t.Day="14";break;case 15:t.Day="15";break;case 16:t.Day="16";break;case 17:t.Day="17";break;case 18:t.Day="18";break;case 19:t.Day="19";break;case 20:t.Day="20";break;case 21:t.Day="21";break;case 22:t.Day="22";break;case 23:t.Day="23";break;case 24:t.Day="24";break;case 25:t.Day="25";break;case 26:t.Day="26";break;case 27:t.Day="27";break;case 28:t.Day="28";break;case 29:t.Day="29";break;case 30:t.Day="30";break;case 31:t.Day="31"}return t.Day})),o(this,"renderCardDate",(function(e){return t.newsDate="".concat(e.getDate())+" "+"".concat(t._getFullMonth(e))+", "+"".concat(e.getFullYear())})),o(this,"renderRequestDate",(function(e){return t.requestDate="".concat(e.getFullYear())+"-"+"".concat(t._getNumMonth(e))+"-"+"".concat(t._getNumDay(e))}))},w=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_setArticle",(function(e){localStorage.setItem("articles",JSON.stringify(e))})),s(this,"_setTotal",(function(e){localStorage.setItem("totalResults",JSON.stringify(e.totalResults))})),s(this,"setRequest",(function(e){localStorage.setItem("request","".concat(e))})),s(this,"setItems",(function(e){t._setArticle(e),t._setTotal(e)})),s(this,"getItem",(function(){if(t.data=JSON.parse(localStorage.getItem("articles")),localStorage.articles)return t.articles=t.data.articles,t.articles})),s(this,"getNewsCard",(function(e,a){if(t.newsCardsArray=[],t.dataArray=t.getItem(),t.dataArray){for(var r=e;r<a;r++)t.dataArray[r]&&t.newsCardsArray.push(t.dataArray[r]);return console.log(t.newsCardsArray),t.newsCardsArray}})),s(this,"clearItems",(function(){localStorage.clear()}))},M=new function e(t,a){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"setEventListener",(function(){r._form.addEventListener("submit",r._searchRequest),r._form.addEventListener("input",(function(){r._checkInputValidity(r._input)})),r._form.addEventListener("input",r._handlerInputForm,!0)})),l(this,"_isFieldValid",(function(e){var t=r._checkInputValidity(e);return r._errorElement.textContent=e.validationMessage,t})),l(this,"_checkInputValidity",(function(e){return e.setCustomValidity(""),e.validity.valueMissing?(e.setCustomValidity(c),!1):e.validity.tooShort||e.value.length>29?(e.setCustomValidity(i),!1):e.validity.valid?e.checkValidity():(e.setCustomValidity(u),!1)})),l(this,"_handlerInputForm",(function(){r._isFieldValid(r._input),r._checkInputValidity(r._input)?r._setSubmitButtonState(!0):r._setSubmitButtonState(!1)})),l(this,"_setSubmitButtonState",(function(e){e?r.activateSubmitButton():r.disableSubmitButton()})),l(this,"disableSubmitButton",(function(){r._submitButton.setAttribute("disabled","true")})),l(this,"activateSubmitButton",(function(){r._submitButton.removeAttribute("disabled")})),this._form=t,this._searchRequest=a,this._input=this._form.querySelector(".search__from-input"),this._errorElement=this._form.querySelector(".search__error"),this._submitButton=this._form.querySelector(".search__form-submit")}(b,(function(){C.clearCardList(),w.clearItems(),w.setRequest(y.value),I(),k.classList.add("result__not-found_hide"),S.classList.add("result__error_hide"),E(),M.disableSubmitButton(),q.getNews(y.value,N,B).then((function(e){w.setItems(e),y.value=localStorage.request})).catch((function(e){return console.log("Произошла ужасная ошбика:",e),S.classList.remove("result__error_hide"),j(),w.clearItems(),Promise.reject(e)})).then((function(){0===w.getItem().length?(k.classList.remove("result__not-found_hide"),j()):(C.render(),A(),E())})).finally((function(){I(),M.activateSubmitButton()})),event.preventDefault(),b.reset()})),q=new n({baseUrl:"".concat("https://praktikum.tk/news/v2/everything?")}),C=new function e(t,a,r,n,o,s){var c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"addCard",(function(e,t,a,r,n,o){var s={title:e,image:t,url:a,date:r,desc:n,source:o},i=c.callback(s,c.template);c.place.appendChild(i)})),h(this,"render",(function(){c.storage.getNewsCard(c.start,c.stop)&&(c.storage.getNewsCard(c.start,c.stop).forEach((function(e){c.addCard(e.title,e.urlToImage,e.url,c.dateApi.renderCardDate(new Date(e.publishedAt)),e.description,e.source.name)})),c.start=c.start+3,c.stop=c.stop+3,console.log(c.start,c.stop),c.storage.getItem().length>c.start?c.button.style.display="flex":c.button.style.display="none")})),h(this,"clearCardList",(function(){c.place.querySelectorAll(".result-card").forEach((function(e){return e.remove()})),c.start=0,c.stop=3})),this.place=t,this.template=a,this.callback=r,this.dateApi=n,this.storage=o,this.button=s,this.start=0,this.stop=3}(m,_,(function(e,t){return new f(e).createCard(t)}),D,w,g);function I(){p.classList.toggle("result__preloader_hide")}function A(){v.classList.remove("result__cards_hide")}function j(){v.classList.add("result__cards_hide")}function E(){document.querySelector(".result__content").classList.remove("result__content_hide")}var L,O;L=new Date,O=7,new Date(L.setDate(L.getDate()-O));var B=D.renderRequestDate(new Date),N=D.renderRequestDate(function(e,t){return new Date(e.setDate(e.getDate()-t))}(new Date,7));M.setEventListener(),localStorage.totalResults&&"0"!==localStorage.totalResults&&(A(),C.render(),E(),localStorage.request&&(y.value=localStorage.request,M.activateSubmitButton())),g.addEventListener("click",(function(){C.render()}))}});
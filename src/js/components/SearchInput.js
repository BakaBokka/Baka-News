import { ERROR_MESSAGES } from "../constants/constants";
("use strict");
export class SearchInput {
  constructor(form, searchRequest) {
    this._form = form;
    this._searchRequest = searchRequest;
    this._input = this._form.querySelector(".search__from-input");
    this._errorElement = this._form.querySelector(".search__error");
    this._submitButton = this._form.querySelector(".search__form-submit");
  }

  //Метод активирует слушатели для класса
  setEventListener = () => {
    this._form.addEventListener("submit", this._searchRequest);
    this._form.addEventListener("input", () => {
      this._checkInputValidity(this._input);
    });
    this._form.addEventListener("input", this._handlerInputForm, true);
  };

  _isFieldValid = (input) => {
    const valid = this._checkInputValidity(input);
    this._errorElement.textContent = input.validationMessage;
    return valid;
  };

  _checkInputValidity = (input) => {
    input.setCustomValidity("");

    //Проверка на пустоту инпута
    if (input.validity.valueMissing) {
      input.setCustomValidity(ERROR_MESSAGES.empty);
      return false;
    }
    //Проверка на минимальное и максимальное количество символов в инпуте. В ссылке не применяется
    if (input.validity.tooShort) {
      input.setCustomValidity(ERROR_MESSAGES.wrongLength);
      return false;
    } else if (input.value.length > 29) {
      input.setCustomValidity(ERROR_MESSAGES.wrongLength);
      return false;
    }

    //Проверка на верность символов в инпутах
    if (!input.validity.valid) {
      input.setCustomValidity(ERROR_MESSAGES.wrongPattern);
      return false;
    }

    return input.checkValidity();
  };

  //Метод проверяет инпуты на валидность, активирует сабмит
  _handlerInputForm = () => {
    this._isFieldValid(this._input);

    if (this._checkInputValidity(this._input)) {
      this._setSubmitButtonState(true);
    } else {
      this._setSubmitButtonState(false);
    }
  };

  //Метод активации и деактивации кнопки при валидации
  _setSubmitButtonState = (state) => {
    if (state) {
      this.activateSubmitButton();
    } else {
      this.disableSubmitButton();
    }
  };

  disableSubmitButton = () => {
    this._submitButton.setAttribute("disabled", "true");
  }

  activateSubmitButton = () => {
    this._submitButton.removeAttribute("disabled");
  }


  //Метод сброса сообщения ошибки в инпутах
  // resetInvalidState = () => {
  //   this._errorElement.textContent = "";
  // };
}

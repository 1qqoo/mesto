import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmite) {
    super(popupSelector);
    this._handleSubmite = handleSubmite;
    this._formElement = this._popup.querySelector(".popup__form");
    this._button = this._formElement.querySelector(".popup__button-save");
    this._inputList = Array.from(
      this._formElement.querySelectorAll(".popup__input")
    );
  }

  _getInputValues() {
    const formValues = {};
    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmite(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  loading(isLoading, content) {
    if (isLoading) {
      this._button.textContent = "Сохранение...";
    } else {
      this._button.textContent = content;
    }
  }
}

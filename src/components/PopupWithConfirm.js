import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSeletor, handleDeleteFormSubmit) {
    super(popupSeletor);
    this._form = this._popup.querySelector(".popup__form");
    this._button = this._form.querySelector('.popup__button-save');
    this._handleDeleteFormSubmit = handleDeleteFormSubmit;
    this._cardInfo = {};
  }

  open(card) {
    super.open();
    this._cardInfo = card;
  }

  loadingConfirm(isLoading) {
    if (isLoading) {
      this._button.textContent = "Удаление..."
    } else {
      this._button.textContent = "Да"
    }
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleDeleteFormSubmit(this._cardInfo);
    });

    super.setEventListeners();
  }
}

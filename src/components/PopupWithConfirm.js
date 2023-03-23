import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSeletor, handleDeleteFormSubmit) {
    super(popupSeletor);
    this._form = this._popup.querySelector(".popup__form");
    this._handleDeleteFormSubmit = handleDeleteFormSubmit;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleDeleteFormSubmit();
    });

    super.setEventListeners();
  }

  open(){
    super.open();
  }
}

import Popup from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupImage = this._popup.querySelector(".popup__image");
    this.popupCaption = this._popup.querySelector(".popup__caption");
  }

  open(name, link) {
    this.popupImage.alt = name;
    this.popupImage.src = link;
    this.popupCaption.textContent = name;
    super.open();
  }
}

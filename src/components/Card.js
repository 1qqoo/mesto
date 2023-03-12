export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._deleteCard = this._element.querySelector(".element__button-delete");
    this._cardLike = this._element.querySelector(".element__button-like");
    this._cardImage = this._element.querySelector(".element__image");
    this._element.querySelector(".element__title").textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._deleteCard.addEventListener("click", () => {
      this._element.remove();
    });

    this._cardLike.addEventListener("click", () => {
      this._cardLike.classList.toggle("element__button-like_active");
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

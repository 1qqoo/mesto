export class Card {
  constructor(
    data,
    templateSelector,
    userId,
    handleCardClick,
    handleDeleteCard
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._handleLike = data.handleLike;
    this._userId = userId;
    this._isOwner = data.owner._id === userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
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
    if (!this._isOwner) this._deleteCard.remove();
    this._setEventListeners();
    return this._element;
  }

  deleteCard() {
    this._element.remove();
  }

  getCardId() {
    return this._id;
  }

  _setEventListeners() {
    this._deleteCard.addEventListener("click", () => {
      this._handleDeleteCard(this);
    });

    this._cardLike.addEventListener("click", () => {
      this._handleLike(this._handleLike);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

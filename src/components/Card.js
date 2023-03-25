export class Card {
  constructor(
    data,
    templateSelector,
    userId,
    handleCardClick,
    handleDeleteCard,
    handleLike
    // handleLikeDelite
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._handleLike = handleLike;
    this._likes = data.likes;
    this._userId = userId;
    this._isOwner = data.owner._id === userId;
    // this._handleLikeDelite = handleLikeDelite;
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

  _checkLikeCard() {
    if (this._cardLike.classList.contains("element__button-like_active")) {
      this._handleLikeDelite(this._id);
    } else {
      this._handleLike(this._id);
    }
  }

  _isCardLiked() {
    if (
      this._likes.some((user) => {
        return this._userId === user._id;
      })
    ) {
      this._likeCard.classList.add("element__button-like_active");
    }
  }

  handleCardLike(data) {
    this._likes = data.likes;
    this._likeCard.classList.toggle("element__button-like_active");
    this._likesNumber.textContent = this._likes.length;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._deleteCard = this._element.querySelector(".element__button-delete");
    this._cardLike = this._element.querySelector(".element__button-like");
    this._cardImage = this._element.querySelector(".element__image");
    this._likesNumber = this._element.querySelector(".element__like-number");
    this._element.querySelector(".element__title").textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;
    this._likesNumber.textContent = this._likes.length;
    if (!this._isOwner) this._deleteCard.remove();
    this._setEventListeners();
    this._isCardLiked();
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
      this._checkLikeCard();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

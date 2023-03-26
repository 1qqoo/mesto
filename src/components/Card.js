export class Card {
  constructor(
    { data, userId, handleCardClick, handleLikeClick, handleDeleteCard },
    templateSelector
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._likes = data.likes;
    this._userId = userId;
    this._isOwner = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteCard = handleDeleteCard;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  likeCard(count) {
    this._likes = this._data.likes;
    this._cardLike.classList.toggle("element__button-like_active");
    this._likesNumber.textContent = count;
  }

  isLike() {
    return this._cardLike.classList.contains("element__button-like_active");
  }

  showLike() {
    this._likes.forEach((el) => {
      if (el._id === this._userId) {
        this._cardLike.classList.add("element__button-like_active");
      }
    });
  }

  hiddenTrash() {
    this.isMyCard = this._userId === this._isOwner;
    if (!this.isMyCard) {
      this._deleteCard.classList.toggle("element__button-delete_hidden");
    }
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  getCardId() {
    return this._cardId;
  }

  _setEventListeners() {
    this._deleteCard.addEventListener("click", () => {
      this._handleDeleteCard(this._element);
    });
    this._cardLike.addEventListener("click", () => {
      this._handleLikeClick();
    });
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
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
    this.hiddenTrash();
    this.showLike();
    this._setEventListeners();
    return this._element;
  }
}

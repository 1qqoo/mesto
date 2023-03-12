export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const content = document.querySelector(".content");

export const cardListSelector = ".elements-grid";
export const cardList = document.querySelector(".elements-grid");
const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupCardImage = document.querySelector(".popup_type_image");
export const popupImage = popupCardImage.querySelector(".popup__image");

// Кнопки

export const profileButton = content.querySelector(".profile__button");
export const popupProfileClose = popupProfile.querySelector(
  ".popup__button-close"
);
export const popupCardClose = popupCard.querySelector(".popup__button-close");
export const popupImageClose = popupCardImage.querySelector(
  ".popup__button-close"
);
export const profileAddCard = document.querySelector(".profile__add-card");

// Профиль
export const profileTitle = content.querySelector(".profile__title");
export const profileSubtitle = content.querySelector(".profile__subtitle");

// Формы
export const nameInput = popupProfile.querySelector(".popup__input_type_name");
export const aboutInput = popupProfile.querySelector(".popup__input_type_job");
export const titleInput = popupCard.querySelector(".popup__input_type_title");
export const imageInput = popupCard.querySelector(".popup__input_type_image");

export const popupTitle = document.querySelector(".popup__caption");

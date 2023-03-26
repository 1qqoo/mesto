export const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

const content = document.querySelector(".content");

export const cardListSelector = ".elements-grid";
export const cardList = document.querySelector(".elements-grid");
const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupAvatar = document.querySelector(".popup_type_avatar");
const popupCardImage = document.querySelector(".popup_type_image");
export const avatar = document.querySelector(".profile__avatar");
export const popupImage = popupCardImage.querySelector(".popup__image");

// Кнопки

export const profileButtonEdit = document.querySelector(
  ".profile__button-edit"
);
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
export const avatarInput = popupAvatar.querySelector(
  ".popup__input_type_avatar"
);
export const cardForm = popupCard.querySelector(".popup__form-card");
export const profileForm = popupProfile.querySelector(".popup__form-profile");
export const avatarForm = popupAvatar.querySelector(".popup__form-avatar");

export const popupTitle = document.querySelector(".popup__caption");
export const apiParameters = {
  url: "https://mesto.nomoreparties.co/v1/cohort-61",
  headers: {
    "Content-Type": "application/json",
    authorization: "957a4dff-e381-48f3-972a-805329544aae",
  },
};

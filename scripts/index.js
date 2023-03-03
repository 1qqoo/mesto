import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

const content = document.querySelector(".content");
const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupCardImage = document.querySelector(".popup_type_image");
const popupImage = popupCardImage.querySelector(".popup__image");
const profileButton = content.querySelector(".profile__button");
const popupProfileClose = popupProfile.querySelector(".popup__button-close");
const popupCardClose = popupCard.querySelector(".popup__button-close");
const popupImageClose = popupCardImage.querySelector(".popup__button-close");
const profileAddCard = document.querySelector(".profile__add-card");
const profileTitle = content.querySelector(".profile__title");
const profileSubtitle = content.querySelector(".profile__subtitle");
const profileForm = popupProfile.querySelector(".popup__form_profile");
const cardForm = popupCard.querySelector(".popup__form_card");
const nameInput = popupProfile.querySelector(".popup__input_type_name");
const jobInput = popupProfile.querySelector(".popup__input_type_job");
const titleInput = popupCard.querySelector(".popup__input_type_title");
const imageInput = popupCard.querySelector(".popup__input_type_image");
const cardContainer = document.querySelector(".elements-grid");
const popupTitle = document.querySelector(".popup__caption");

const cardValidator = new FormValidator(cardForm, config);
const profileValidator = new FormValidator(profileForm, config);

cardValidator.enableValidation();
profileValidator.enableValidation();

const initialCards = [
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

function openPopup(popup) {
  document.addEventListener("keydown", closePopapupEsc);
  document.addEventListener("mousedown", closePopupMousedown);
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  document.removeEventListener("keydown", closePopapupEsc);
  document.removeEventListener("mousedown", closePopupMousedown);
  popup.classList.remove("popup_opened");
}

function closePopapupEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function closePopupMousedown(evt) {
  if (evt.target.classList.contains("popup_opened")) {
    closePopup(evt.target);
  }
}

function handleProfileButton() {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
  profileValidator.resetValid();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile);
}

function createCard(item) {
  const newCard = new Card(item, "#element-template", handleCardClick);
  const cardElement = newCard.generateCard();

  return cardElement;
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = createCard({
    name: titleInput.value,
    link: imageInput.value,
  });

  cardContainer.prepend(cardElement);
  closePopup(popupCard);
}

function handleAddCardButton() {
  openPopup(popupCard);
  cardForm.reset();
  cardValidator.resetValid();
}

profileForm.addEventListener("submit", handleProfileFormSubmit);

cardForm.addEventListener("submit", handleCardFormSubmit);

profileButton.addEventListener("click", handleProfileButton);

profileAddCard.addEventListener("click", handleAddCardButton);

popupProfileClose.addEventListener("click", function () {
  closePopup(popupProfile);
});

popupImageClose.addEventListener("click", function () {
  closePopup(popupCardImage);
});

popupCardClose.addEventListener("click", function () {
  closePopup(popupCard);
});

const handleCardClick = (name, link) => {
  popupImage.alt = name;
  popupImage.src = link;
  popupTitle.textContent = name;
  openPopup(popupCardImage);
};

initialCards.forEach(function (item) {
  const cardElement = createCard(item);
  cardContainer.append(cardElement);
});

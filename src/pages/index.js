import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  config,
  initialCards,
  profileButton,
  profileAddCard,
  nameInput,
  aboutInput,
  cardListSelector,
} from "../components/utils/constants.js";

import { PopupWithForm } from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";

const cardValidator = new FormValidator(cardForm, config);
const profileValidator = new FormValidator(profileForm, config);
const popupCard = new PopupWithForm(".popup_type_card", handleCardFormSubmit);
const popupProfile = new PopupWithForm(
  ".popup_type_profile",
  handleProfileFormSubmit
);
const popupCardImage = new PopupWithImage(".popup_type_image");

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  infoSelector: ".profile__subtitle",
});

cardValidator.enableValidation();
profileValidator.enableValidation();
popupCard.setEventListeners();
popupProfile.setEventListeners();
popupCardImage.setEventListeners();

function handleProfileButton() {
  popupProfile.open();
  const elementInfo = userInfo.getUserInfo();
  nameInput.value = elementInfo.name;
  aboutInput.value = elementInfo.about;
  profileValidator.resetValid();
}

function handleAddCardButton() {
  popupCard.open();
  cardForm.reset();
  cardValidator.resetValid();
}
console.log("Даров");
function handleProfileFormSubmit(userData) {
  userInfo.setUserInfo(userData);
}

function handleCardFormSubmit(cardData) {
  const cardElement = createCard(cardData);

  сardList.addItem(cardElement);
}

const handleCardClick = (name, link) => {
  popupCardImage.open(name, link);
};

function createCard(item) {
  const newCard = new Card(item, "#element-template", handleCardClick);
  const cardElement = newCard.generateCard();

  return cardElement;
}

const сardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);
      сardList.addItem(cardElement);
    },
  },
  cardListSelector
);

сardList.renderItems();

profileButton.addEventListener("click", handleProfileButton);

profileAddCard.addEventListener("click", handleAddCardButton);

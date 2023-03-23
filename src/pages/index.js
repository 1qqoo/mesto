import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  config,
  profileButton,
  profileAddCard,
  nameInput,
  aboutInput,
  profileButtonEdit,
  apiParameters,
} from "../components/utils/constants.js";

import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import PopupWithConfirm from "../components/PopupWithConfirm";
import Section from "../components/Section.js";
import Api from "../components/Api";

let userId;
const cardValidator = new FormValidator(cardForm, config);
const profileValidator = new FormValidator(profileForm, config);
const popupCard = new PopupWithForm(".popup_type_card", handleCardFormSubmit);
const popupProfile = new PopupWithForm(
  ".popup_type_profile",
  handleProfileFormSubmit
);

const popupProfileEdit = new PopupWithForm(
  ".popup_type_avatar",
  handleAvatarFormSubmit
);
const popupCardImage = new PopupWithImage(".popup_type_image");
const popupCardDelete = new PopupWithConfirm(
  ".popup_type_delete",
  handleDeleteFormSubmit
);

const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  infoSelector: ".profile__subtitle",
  profileAvatar: ".profile__avatar",
});

const api = new Api(apiParameters);

Promise.all([api.getUserInfo(), api.getAllCards()])
  .then(([userData, cardItems]) => {
    userId = userData._id;
    userInfo.setUserInfo(userData);
    userInfo.setUserAvatar(userData);
    сardList.renderItems(cardItems);
  })
  .catch((err) => {
    console.log(err);
  });

cardValidator.enableValidation();
profileValidator.enableValidation();
popupCard.setEventListeners();
popupProfile.setEventListeners();
popupProfileEdit.setEventListeners();
popupCardImage.setEventListeners();
popupCardDelete.setEventListeners();

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

function handleProfileFormSubmit(userData) {
  api
    .updateUserInfo(userData)
    .then((userData) => userInfo.setUserInfo(userData));
}

function handleAvatarButton() {
  popupProfileEdit.open();
  profileValidator.resetValid();
}

function handleAvatarFormSubmit(userData) {
  api
    .updateUserAvatar(userData)
    .then((userData) => userInfo.setUserAvatar(userData));
}

function handleCardFormSubmit(cardData) {
  api.addNewCard(cardData).then((cardData) => {
    const cardElement = createCard(cardData);

    сardList.addItem(cardElement);
  });
}

function handleDeleteFormSubmit(card) {
  api.deleteCard(card.getCardId()).then(() => {
    card.deleteCard();
    popupCardDelete.close();
  });
}

const handleLike = (like) => {
  like.classList.add("element__button-like_active");
};

const handleDeleteCard = (card) => {
  popupCardDelete.open(card);
};

const handleCardClick = (name, link) => {
  popupCardImage.open(name, link);
};

const createCard = (item) => {
  const newCard = new Card(
    item,
    "#card",
    userId,
    handleCardClick,
    handleDeleteCard,
    handleLike
  );
  const cardElement = newCard.generateCard();
  return cardElement;
};

const сardList = new Section(
  {
    renderer: (item) => {
      сardList.addItem(createCard(item));
    },
  },
  ".elements-grid"
);

profileButton.addEventListener("click", handleProfileButton);
profileAddCard.addEventListener("click", handleAddCardButton);
profileButtonEdit.addEventListener("click", handleAvatarButton);

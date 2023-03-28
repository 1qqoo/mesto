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
  cardForm,
  profileForm,
  avatarForm,
} from "../utils/constants.js";

import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import PopupWithConfirm from "../components/PopupWithConfirm";
import Section from "../components/Section.js";
import Api from "../components/Api";

let userId;
const cardValidator = new FormValidator(cardForm, config);
const profileValidator = new FormValidator(profileForm, config);
const avatarValidator = new FormValidator(avatarForm, config);

const popupCardImage = new PopupWithImage(".popup_type_image");
const popupCard = new PopupWithForm(".popup_type_card", (cardData) => {
  popupCard.loading(true);
  api
    .addNewCard(cardData)
    .then((res) => {
      const cardElement = createCard(res);
      сardList.addItem(cardElement);
      popupCard.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupCard.loading(false, "Создать");
    });
});

const popupProfile = new PopupWithForm(".popup_type_profile", (userData) => {
  popupProfile.loading(true);
  api
    .updateUserInfo(userData)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupProfile.loading(false, "Сохранить");
    });
});

const popupAvatar = new PopupWithForm(".popup_type_avatar", (userData) => {
  popupAvatar.loading(true);
  api
    .updateUserAvatar(userData)
    .then((res) => {
      userInfo.setUserAvatar(res);
      popupAvatar.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupAvatar.loading(false, "Обновить");
    });
});

const popupCardDelete = new PopupWithConfirm(".popup_type_delete", (card) => {
  popupCardDelete.loadingConfirm(true);
  api
    .deleteCard(card.getCardId())
    .then(() => {
      card.deleteCard();
      popupCardDelete.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupCardDelete.loadingConfirm(false);
    });
});

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
avatarValidator.enableValidation();
popupCard.setEventListeners();
popupProfile.setEventListeners();
popupAvatar.setEventListeners();
popupCardImage.setEventListeners();
popupCardDelete.setEventListeners();

const createCard = (item) => {
  const newCard = new Card(
    {
      data: item,
      userId: userId,
      handleCardClick: (name, link) => {
        popupCardImage.open(name, link);
      },
      handleLikeClick: () => {
        if (newCard.isLike()) {
          api
            .deleteLike(newCard.getCardId())
            .then((res) => {
              newCard.likeCard(res.likes.length);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .setLike(newCard.getCardId())
            .then((res) => {
              newCard.likeCard(res.likes.length);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
      handleDeleteCard: () => {
        popupCardDelete.open(newCard);
      },
    },
    "#card"
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

profileButton.addEventListener("click", () => {
  const elementInfo = userInfo.getUserInfo();
  nameInput.value = elementInfo.name;
  aboutInput.value = elementInfo.about;
  profileValidator.resetValid();
  popupProfile.open();
});
profileAddCard.addEventListener("click", () => {
  cardValidator.resetValid();
  popupCard.open();
});
profileButtonEdit.addEventListener("click", () => {
  avatarValidator.resetValid();
  popupAvatar.open();
});

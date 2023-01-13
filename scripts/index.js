const content = document.querySelector(".content");
const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const profileButton = content.querySelector(".profile__button");
const popupProfileClose = popupProfile.querySelector(".popup__button-close");
const popupCardClose = popupCard.querySelector(".popup__button-close");
const profileAddCard = document.querySelector(".profile__add-card");
const profileTitle = content.querySelector(".profile__title");
const profileSubtitle = content.querySelector(".profile__subtitle");
const profileForm = popupProfile.querySelector(".popup__form");
const nameInput = popupProfile.querySelector(".popup__text_type_name");
const jobInput = popupProfile.querySelector(".popup__text_type_job");
const cardForm = popupCard.querySelector(".popup__form");
const titleInput = popupCard.querySelector(".popup__text_type_title");
const imageInput = popupCard.querySelector(".popup__text_type_image");
const cardTemplete = document.querySelector("#element-template").content;
const cardContainer = document.querySelector(".elements-grid");
const elementDeleteCard = cardTemplete.querySelector(".element__button-delete");
const popupCardImage = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const popupImageClose = popupCardImage.querySelector(".popup__button-close");

function createCard({ name, link }) {
  const newCard = cardTemplete.querySelector(".element").cloneNode(true);
  const cardDelete = newCard.querySelector(".element__button-delete");
  const cardImage = newCard.querySelector(".element__image");
  const cardTitle = newCard.querySelector(".element__title");
  const cardLike = newCard.querySelector(".element__button-like");

  cardImage.src = link;
  cardImage.alt = name;
  cardTitle.textContent = name;

  cardDelete.addEventListener("click", function () {
    newCard.remove();
  });
  cardLike.addEventListener("click", function () {
    cardLike.classList.toggle("element__button-like_active");
  });
  cardImage.addEventListener("click", function () {
    popupImage.src = link;
    popupImage.alt = name;
    console.log(popupCaption);
    popupCaption.textContent = name;
    openPopup(popupCardImage);
  });

  return newCard;
}

function renderCards() {
  initialCards.forEach(function (cardData) {
    const newCard = createCard(cardData);
    cardContainer.append(newCard);
  });
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function handleProfileButton() {
  openPopup(popupProfile);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupProfile);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = createCard({
    name: titleInput.value,
    link: imageInput.value,
  });
  cardContainer.prepend(newCard);
  closePopup(popupCard);
  titleInput.value = "";
  imageInput.value = "";
}

function handleAddCardButton() {
  openPopup(popupCard);
}

renderCards();

profileForm.addEventListener("submit", handleProfileFormSubmit);

cardForm.addEventListener("submit", handleCardFormSubmit);

profileButton.addEventListener("click", handleProfileButton);

profileAddCard.addEventListener("click", handleAddCardButton);

popupProfileClose.addEventListener("click", function () {
  closePopup(popupProfile);
});

popupCardClose.addEventListener("click", function () {
  closePopup(popupCard);
});

popupImageClose.addEventListener("click", function () {
  closePopup(popupCardImage);
});

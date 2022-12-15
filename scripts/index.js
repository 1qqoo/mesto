const content = document.querySelector(".content");
const popup = document.querySelector(".popup");
const profileButton = content.querySelector(".profile__button");
const popapButtonClose = document.querySelector(".popup__button-close");
const profileTitle = content.querySelector(".profile__title");
const profileSubtitle = content.querySelector(".profile__subtitle");
const popupForm = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__text_type_name");
const jobInput = document.querySelector(".popup__text_type_job");

function openProfileButton() {
  popup.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

profileButton.addEventListener("click", openProfileButton);

function closePopapButton() {
  popup.classList.remove("popup_opened");
}

popapButtonClose.addEventListener("click", closePopapButton);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopapButton();
}

popupForm.addEventListener("submit", handleFormSubmit);

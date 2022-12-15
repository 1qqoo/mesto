const content = document.querySelector(".content");
const popup = document.querySelector(".popup");
const profileButton = content.querySelector(".profile__button");
const popapButtonClose = document.querySelector(".popup__button-close");
const profileTitle = content.querySelector(".profile__title");
const profileSubtitle = content.querySelector(".profile__subtitle");
const popupForm = document.querySelector(".popup__form");
const nameInput = document.querySelector(".popup__text_type_name");
const jobInput = document.querySelector(".popup__text_type_job");
const popupButtonSave = document.querySelector(".popup__button-save");

profileButton.addEventListener("click", (event) => {
  popup.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
});

popapButtonClose.addEventListener("click", function popapButtonClose() {
  popup.classList.remove("popup_opened");
});

popupButtonSave.addEventListener("click", function popapButtonClose() {
  popup.classList.remove("popup_opened");
});

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  popapButtonClose();
}

popupForm.addEventListener("submit", handleFormSubmit);

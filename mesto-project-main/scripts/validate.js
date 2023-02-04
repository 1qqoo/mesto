const setting = {
  formSelector: ".form",
  inputSelector: ".form__field",
  submitButtonSelector: ".form__submite-button",
  inactiveButtonClass: "form__submit-button_disabled",
  inputErrorClass: "popup__field_type_error",
  errorClass: "popup__field-error_active",
};

const showInputError = (formElement, inputElement, errorMessage, configuration) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(configuration.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(configuration.errorClass);
};

const hideInputError = (formElement, inputElement, configuration) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(configuration.inputErrorClass);
  errorElement.classList.remove(configuration.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, configuration) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      configuration
    );
  } else {
    hideInputError(formElement, inputElement, configuration);
  }
};

const setEventListeners = (formElement, configuration) => {
  const inputList = Array.from(
    formElement.querySelectorAll(configuration.inputSelector)
  );

  const buttonElement = formElement.querySelector(configuration.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, configuration);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, configuration);
      toggleButtonState(inputList, buttonElement, configuration);
    });
  });
};

const sbrosValidac = (formElement, configuration) => {
  const inputList = Array.from(
    formElement.querySelectorAll(configuration.inputSelector)
  );

  const buttonElement = formElement.querySelector(configuration.submitButtonSelector);

  toggleButtonState(inputList, buttonElement, configuration);

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, configuration);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const enableValidation = (configuration) => {
  const formList = Array.from(document.querySelectorAll(configuration.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, configuration);
  });
};

const toggleButtonState = (inputList, buttonElement, configuration) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(configuration.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(configuration.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
};

enableValidation(setting);
class FormValidator {
  constructor(formElement, listSelector) {
    this._formElement = formElement;
    this._listSelector = listSelector;
    this._inputList = Array.from(
      formElement.querySelectorAll(this._listSelector.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._listSelector.submitButtonSelector
    );
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._listSelector.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._listSelector.errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._listSelector.inputErrorClass);
    errorElement.classList.remove(this._listSelector.errorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._listSelector.inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(
        this._listSelector.inactiveButtonClass
      );
      this._buttonElement.removeAttribute("disabled");
    }
  };

  _setEventListeners = () => {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };

  resetValid = () => {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  };

  enableValidation = () => {
    this._setEventListeners();
  };
}

export { FormValidator };

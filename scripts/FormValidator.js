export class FormValidator {

    constructor(config, form) {
        this._config = config;
        this._form = form;
    }

    enableValidation () {
        this._setEventListeners();
    }

    resetValidation() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }

    _setEventListeners = () => {
        this._inputList = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._buttonElement = this._form.querySelector(this._config.submitButtonSelector)
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState()
            });
        });
    }

    _showInputError = (inputElement, errorMessage) => {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._config.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._config.messageErrorClass);
    }

    _hideInputError = (inputElement) => {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._config.inputErrorClass);
        errorElement.classList.remove(this._config.messageErrorClass);
        errorElement.textContent = '';
    }

    _checkInputValidity = (inputElement) => {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    }

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState () {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._config.inactiveButtonClass);
            this._buttonElement.disabled = true;
        } else {
            this._buttonElement.classList.remove(this._config.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    }
}

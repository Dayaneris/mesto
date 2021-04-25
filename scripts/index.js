let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let closePopup = document.querySelector('.popup__close-button')
let openPopupButton = document.querySelector('.profile__edit-button');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');

function formSubmitHandler (event) {
    event.preventDefault();
    title.textContent = nameInput.value;
    subtitle.textContent =  jobInput.value;
    popup.classList.remove('popup_opened');
}

function formCloseHandler () {
    popup.classList.remove('popup_opened');
}

function formOpenHandler () {
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
    popup.classList.add('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
closePopup.addEventListener('click', formCloseHandler);
openPopupButton.addEventListener ('click', formOpenHandler);

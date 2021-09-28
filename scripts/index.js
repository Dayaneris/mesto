import {FormValidator} from './FormValidator.js'
import {Card} from "./Card.js";

// Edit profile
const profileEditPopupButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_profile-edit');
const profileEditPopupContainer = profileEditPopup.querySelector('.popup__container');
const closeEditProfilePopupButton = profileEditPopup.querySelector('.popup__close-button')

const nameInput = profileEditPopup.querySelector('input[name="profileName"]');
const jobInput = profileEditPopup.querySelector('input[name="profileJob"]');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');

// Add new card
const addNewCardPopupButton = document.querySelector('.profile__add-button');
const addCardPopup = document.querySelector('.popup_add-card');
const addCardPopupContainer = addCardPopup.querySelector('.popup__container');
const closeAddCardPopupButton = addCardPopup.querySelector('.popup__close-button')

const cardTemplate = document.querySelector('#card-template');
const cardContainer = document.querySelector('.elements')

const cardNameInput = addCardPopup.querySelector('input[name="cardName"]');
const cardUrlInput = addCardPopup.querySelector('input[name="cardUrl"]');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//overlay
const popupList = Array.from(document.querySelectorAll('.popup'));

//closing a popup by click on the overlay
function handleOverlayClick(event, popup) {
    if (event.target === event.currentTarget) {
        closePopup(popup);
    }
}

//closing a popup by click on the escape
function closePopupEscape(event) {
    if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        closePopup(openedPopup);
    }
}

// Image popup
const imagePopup = document.querySelector('.popup_image');
const closeImagePopupButton = imagePopup.querySelector('.popup__close-button')

function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEscape);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEscape);
}

function openEditProfileHandler() {
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
    openPopup(profileEditPopup)
}

function submitEditProfileHandler(event) {
    event.preventDefault();
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    closePopup(profileEditPopup)
}

function submitNewCardHandler(event) {
    event.preventDefault();
    const newCard = createCard(cardNameInput.value, cardUrlInput.value);
    cardContainer.prepend(newCard)
    closePopup(addCardPopup)
    resetCardPopupInputFields()
}

function resetCardPopupInputFields() {
    cardNameInput.value = ''
    cardUrlInput.value = ''
}

//create single card with given name and link
function createCard(name, imageUrl) {
    const cardElement = new Card(cardTemplate, name, imageUrl).getElement()
    initImagePopupButton(cardElement, name, imageUrl)
    return cardElement;
}

function initImagePopupButton(cardElement, imageName, imageUrl) {
    const imageButton = cardElement.querySelector('.element__image');
    imageButton.addEventListener('click', () => {
        openPopup(imagePopup);
        imagePopup.querySelector('.popup__image-title').textContent = imageName
        imagePopup.querySelector('.popup__image').src = imageUrl
        imagePopup.querySelector('.popup__image').alt = imageName
    });
}

//create cards grid with data from initialCards array
initialCards.forEach(function (element) {
        const createdCard = createCard(element.name, element.link)
        cardContainer.append(createdCard)
    }
)

popupList.forEach((popupElement) => {
    popupElement.addEventListener('click', (event) => handleOverlayClick(event, popupElement));
});

profileEditPopupButton.addEventListener('click', openEditProfileHandler);
profileEditPopupContainer.addEventListener('submit', submitEditProfileHandler);
closeEditProfilePopupButton.addEventListener('click', () => closePopup(profileEditPopup));

addNewCardPopupButton.addEventListener('click', () => openPopup(addCardPopup));
addCardPopupContainer.addEventListener('submit', submitNewCardHandler)
closeAddCardPopupButton.addEventListener('click', () => closePopup(addCardPopup));

closeImagePopupButton.addEventListener('click', () => closePopup(imagePopup));

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input-error',
    messageErrorClass: 'popup__input-message_error_active'
}

const formAddCard = document.querySelector('.popup_form-add-card');
const formAddCardValidator = new FormValidator(validationConfig, formAddCard)
formAddCardValidator.enableValidation();

const formProfileEdit = document.querySelector('.popup_form-profile-edit');
const formProfileEditValidator = new FormValidator(validationConfig, formProfileEdit)
formProfileEditValidator.enableValidation();
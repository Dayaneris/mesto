// Edit profile
const profileEditPopupButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_profile-edit');
const profileEditPopupContainer = document.querySelector('.popup__container_profile-edit');
const closeEditProfilePopupButton = document.querySelector('.popup__close-button_profile-edit')

const nameInput = document.querySelector('input[name="name"]');
const jobInput = document.querySelector('input[name="job"]');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');

// Add new card
const addNewCardPopupButton = document.querySelector('.profile__add-button');
const addCardPopup = document.querySelector('.popup_add-card');
const addCardPopupContainer = document.querySelector('.popup__container_add-card');
const closeAddCardPopupButton = document.querySelector('.popup__close-button_add-card')

const cardTemplate = document.querySelector('#card-template');
const cardContainer = document.querySelector('.elements')

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

function openPopup(popup) {
    popup.classList.add('popup_opened');
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
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
    closePopup(addCardPopup)
}

//create single card with given name and link
function createCard(name, imageLink) {
    const card = cardTemplate.content.querySelector('.element').cloneNode(true)
    card.querySelector('.element__title').textContent = name;
    card.querySelector('.element__image').alt = name;
    card.querySelector('.element__image').src = imageLink;
    return card;
}

//create cards grid with data from initialCards array
initialCards.forEach(function (element) {
        const createdCard = createCard(element.name, element.link)
        cardContainer.append(createdCard)
    }
)

profileEditPopupButton.addEventListener('click', openEditProfileHandler);
profileEditPopupContainer.addEventListener('submit', submitEditProfileHandler);
closeEditProfilePopupButton.addEventListener('click', () => closePopup(profileEditPopup));

addNewCardPopupButton.addEventListener('click', () => openPopup(addCardPopup));
addCardPopupContainer.addEventListener('submit', submitNewCardHandler)
closeAddCardPopupButton.addEventListener('click', () => closePopup(addCardPopup));

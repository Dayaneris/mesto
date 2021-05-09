const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__container');

const closePopupButton = document.querySelector('.popup__close-button')
const profileEditPopupButton = document.querySelector('.profile__edit-button');
const addNewCardPopupButton = document.querySelector('.profile__add-button');

const nameInput = document.querySelector('input[name="name"]');
const jobInput = document.querySelector('input[name="job"]');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');

const cardTemplate = document.querySelector('#card-template');
const  cardContainer = document.querySelector('.elements')

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

function formOpenHandler() {
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
    popup.classList.add('popup_opened');
}

function formSubmitHandler(event) {
    event.preventDefault();
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

function formCloseHandler() {
    popup.classList.remove('popup_opened');
}

//создание карточки места
function createCard(name, imageLink) {
    const card = cardTemplate.content.querySelector('.element').cloneNode(true)
    card.querySelector('.element__title').textContent = name;
    card.querySelector('.element__image').alt = name;
    card.querySelector('.element__image').src = imageLink;
    return card;
}

//создание таблицы карточек из данных массива initialCards
initialCards.forEach(function (element) {
        const createdCard = createCard(element.name, element.link)
        cardContainer.append(createdCard)
    }
)

formElement.addEventListener('submit', formSubmitHandler);
profileEditPopupButton.addEventListener('click', formOpenHandler);
closePopupButton.addEventListener('click', formCloseHandler);
addNewCardPopupButton.addEventListener('click', formOpenHandler);

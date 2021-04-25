// let openPopupButton = document.querySelector('.profile__edit-button');
// let popup = document.querySelector('.popup');
//
// let closePopupPopup = document.querySelector('.popup__close-button')
//
// let containerInfo = document.querySelector('.profile__info');
//
// let nameProfile = document.querySelector('.profile__title');
// let jobProfile = document.querySelector('.profile__subtitle');
// let formElement = document.querySelector('.popup__form');
// let nameInput = document.querySelector('#name');
// let jobInput = document.querySelector('#job');
//
// function togglePopupOpen() {
//     popup.classList.toggle('popup_opened');
//
//     nameInput.value = nameProfile.textContent;
//     jobInput.value = jobProfile.textContent;
//
//
// };
//
// function togglePopupClose() {
//     popup.classList.toggle('popup_opened');
//     console.log(closed);
// }
//
//
// function handleOverlayClick(event) {
//     if (event.target === event.currentTarget) {
//         togglePopupClose();
//     }
// };
//
//
// function formSubmitHandler (event) {
//     event.preventDefault();
//
//     nameProfile.textContent = nameInput.value;
//     jobProfile.textContent= jobInput.value;
//
//     togglePopupClose();
//
// }
// openPopupButton.addEventListener('click', togglePopupOpen);
//
// closePopupButton.addEventListener('click', togglePopupClose);
//
// popup.addEventListener('click', handleOverlayClick);
//
// formElement.addEventListener('submit', formSubmitHandler);


let popup = document.querySelector('.popup');
let formElement = popup.querySelector('.popup__container');
let closePopupPopup = document.querySelector('.popup__close-button')
let openPopupButton = document.querySelector('.profile__edit-button');
let nameInput = document.querySelector('#name');
let jobInput = document.querySelector('#job');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');

function formSubmitHandler (event) {
    event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
    let job = jobInput.value;
    let name = nameInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    title.textContent = name;
    subtitle.textContent = job;
    popup.classList.remove('popup_opened');
}
function formCloseHandler () {
    popup.classList.remove('popup_opened');
}
function formOpenHandler () {
    let name = title.textContent;
    let job = subtitle.textContent;
    nameInput.value = name;
    jobInput.value = job;
    popup.classList.add('popup_opened');
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
closePopupPopup.addEventListener('click', formCloseHandler);
openPopupButton.addEventListener ('click', formOpenHandler);

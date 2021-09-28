export class Card {

    constructor(cardTemplate, name, link) {
        this._name = name;
        this._link = link;
        this._element = cardTemplate.content.querySelector('.element').cloneNode(true);
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__image').src = this._link;
        this._initLikeButton();
        this._initTrashButton();
    }

    getElement = () => {
        return this._element;
    }

    _initLikeButton() {
        const likeButton = this._element.querySelector('.element__heart');
        likeButton.addEventListener('click', () => likeButton.classList.toggle('element__heart_pressed'));
    }

    _initTrashButton() {
        const trashButton = this._element.querySelector('.element__trash');
        trashButton.addEventListener('click', () => trashButton.closest('.element').remove());
    }
}
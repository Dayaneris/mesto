export class Card {

    constructor(name, link, handleCardClick) {
        this._name = name;
        this._link = link;
        this._handleCardClick = handleCardClick
    }

    getElement() {
        this._element = this._getTemplate().content.querySelector('.element').cloneNode(true);
        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').alt = this._name;
        this._element.querySelector('.element__image').src = this._link;
        this._setEventListeners();
        return this._element;
    }

    _getTemplate() {
        return document.querySelector('#card-template');
    }

    _setEventListeners() {
        this._initLikeButtonListener();
        this._initTrashButtonListener();
        this._initPictureClickListener();
    }

    _initLikeButtonListener() {
        const likeButton = this._element.querySelector('.element__heart');
        likeButton.addEventListener('click', () => likeButton.classList.toggle('element__heart_pressed'));
    }

    _initTrashButtonListener() {
        const trashButton = this._element.querySelector('.element__trash');
        trashButton.addEventListener('click', () => trashButton.closest('.element').remove());
    }

    _initPictureClickListener() {
        const picture = this._element.querySelector('.element__image');
        picture.addEventListener('click', () => this._handleCardClick(this._element, this._name, this._link))
    }
}
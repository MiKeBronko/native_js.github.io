'use strict';
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
  },
  {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
  },
  {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
  },
  {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
  },
  {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
   }
];

  class Card {
  constructor(name, link) {
    this.cardElement=this.create(name, link);
  }


  static like(event) {
      event.target.classList.toggle('place-card__like-icon_liked');
  }
  
  static remove(event) {
    /* Можно лучше: не использовать здесь document.querySelector('.places-list') 
      на тот случай если в дальнейшем карточки будут добавляться в разные контейнеры, а 
      удалять через parentNode карточки 

      const card = event.target.closest('.place-card'));
      card.parentNode.removeChild(card);
    */
    document.querySelector('.places-list').removeChild(event.target.closest('.place-card'));
  }

  create(nameValue, linkValue) {
    const cardItem = document.createElement('div');
    const cardBackground = document.createElement('div');
    const delButton = document.createElement('button');
    const cardDesription = document.createElement('div');
    const cardName = document.createElement('h3');
    const likeButton = document.createElement('button');

    cardItem.classList.add('place-card');
    cardBackground.classList.add('place-card__image');
    delButton.classList.add('place-card__delete-icon');
    cardDesription.classList.add('place-card__description');
    cardName.classList.add('place-card__name');
    likeButton.classList.add('place-card__like-icon');

    cardItem.appendChild(cardBackground);
    cardBackground.appendChild(delButton);
    cardItem.appendChild(cardDesription);
    cardDesription.appendChild(cardName);
    cardDesription.appendChild(likeButton);

    cardName.textContent=nameValue;
    cardBackground.style.backgroundImage =`url(${linkValue})`;
    return cardItem;
}

  }

  class CardList {
  constructor(arr,container) {
    this.arr=arr;
    this.container=container;
  }

   addCard(name, link) {
    const { cardElement }= new Card (name, link);
    this.container.appendChild(cardElement);
  }

    render() {
    this.arr.forEach((item) => { 
     return this.addCard(item.name, item.link);
  });
  }
}

    class Popup {
      constructor(namePopup, openClassName, closeClassName) {
        this.popup = document.querySelector(namePopup);
        this.openClassName = openClassName;
        this.closeClassName = closeClassName;
        this.close = this.close.bind(this);
        this.popup.querySelector(this.closeClassName)
        .addEventListener('click', this.close);
      }

      open() {
        this.popup.classList.add(this.openClassName);
      }

      close() {
        this.popup.classList.remove(this.openClassName);
      }
    }

    class ImagePopup extends Popup {
      open(src) {
        this.popup.querySelector('.popup-image__view').src = src;
        super.open();
      }
    }

  const cards = new CardList(initialCards, document.querySelector('.places-list'));
  cards.render();
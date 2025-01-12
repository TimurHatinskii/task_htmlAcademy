var cardsData = [
  {
    inStock: true,
    imgUrl: 'gllacy/choco.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 310,
    isHit: true,
    specialOffer: 'Двойная порция сиропа бесплатно!'
  },
  {
    inStock: false,
    imgUrl: 'gllacy/lemon.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 125,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cowberry.jpg',
    text: 'Сливочное с брусничным джемом',
    price: 170,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/cookie.jpg',
    text: 'Сливочное с кусочками печенья',
    price: 250,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'gllacy/creme-brulee.jpg',
    text: 'Сливочное крем-брюле',
    price: 190,
    isHit: false
  }
];

var renderCards = function(cardsArray) {
  var cardList = document.querySelector('.goods');
    for (var i=0; i<cardsArray.length; i++) {
      var cardItem = document.createElement('li');
      cardItem.classList.add('good');
      
      var cardsAvailable = 'good--available';
      if (!cardsArray[i].inStock) {
        cardsAvailable = 'good--unavailable'
      }
      cardItem.classList.add(cardsAvailable);
      
      if (cardsArray[i].isHit) {
        cardItem.classList.add('good--hit');
      }
      
      var nemaCard = document.createElement('h2');
      nemaCard.classList.add('good__description');
      nemaCard.textContent = cardsArray[i].text;
      cardItem.appendChild(nemaCard);
      
      var imgCard = document.createElement('img');
      imgCard.classList.add('good__image');
      imgCard.src = cardsArray[i].imgUrl;
      imgCard.alt = cardsArray[i].text;
      cardItem.appendChild(imgCard);
      
      var priceCard = document.createElement('p');
      priceCard.classList.add('good__price');
      priceCard.textContent = cardsArray[i].price+'₽/кг';
      cardItem.appendChild(priceCard);
      
      if (cardsArray[i].specialOffer) {
        var pSpecial = document.createElement('p');
        pSpecial.classList.add('good__special-offer');
        pSpecial.textContent = cardsArray[i].specialOffer;
        cardItem.appendChild(pSpecial);
      }
      
      cardList.appendChild(cardItem);
  }
  
  return cardList;
}

renderCards(cardsData);

/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="gllacy/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
  </li>
  ...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.

*/
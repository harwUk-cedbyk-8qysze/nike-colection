//cargo-slider
const goods = document.querySelector('.goods');
let i = 0;
for (let li of goods.querySelectorAll('.goods__card-item')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

let width = 183; // ширина картинки
let count = 1.5; // счетчик изображений
let list = goods.querySelector('.goods__card-container');
let listElems = goods.querySelectorAll('.goods__card-item');

let position = 0; // положение ленты прокрутки

goods.querySelector('.goods__swipe-left').onclick = function () {
    position += width * count;
    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

goods.querySelector('.goods__swipe-right').onclick = function () {
    position -= width * count;
    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};

const buttonMenu = document.querySelector('.header__menu-button');
const popup = document.querySelector('.popup');
const buttonCloseMenu = popup.querySelector('.popup__close-button');
const buttonFind = popup.querySelectorAll('.popup__link');

function openPopup(p) {
    popup.classList.add('popup_open');
}

function closePopup(p) {
    popup.classList.remove('popup_open');
}

buttonMenu.addEventListener('click', function () {
    openPopup(popup);
})

buttonCloseMenu.addEventListener('click', function () {
    closePopup(popup);
})

buttonFind.addEventListener('click', function () {
    closePopup(popup);
})
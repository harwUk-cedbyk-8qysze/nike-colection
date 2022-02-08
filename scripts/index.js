//goods-slider
const goods = document.querySelector('.goods');
let i = 0;
for (let li of goods.querySelectorAll('.goods__card-item')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}

let width = 160; // width image
let count = 1.5; // image scroll
let list = goods.querySelector('.goods__card-container');
let listElems = goods.querySelectorAll('.goods__card-item');

let position = 0; // position scroll line

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

// open and close popup
const buttonMenu = document.querySelector('.header__menu-button');
const popup = document.querySelector('.popup');
const buttonCloseMenu = popup.querySelector('.popup__close-button');
const buttonFind = popup.querySelectorAll('.popup__link');

function openPopup(p) {
    p.classList.add('popup_open');
}

function closePopup(p) {
    p.classList.remove('popup_open');
}

buttonMenu.addEventListener('click', function () {
    openPopup(popup);
});

buttonCloseMenu.addEventListener('click', function () {
    closePopup(popup);
});

// work form e-mail

const formElement = document.querySelector('.footer__form');
const formMail = formElement.querySelector('.footer__email')

formElement.addEventListener('submit', function (evt) {
    evt.preventDefault();
    addMail();
})

function addMail() {
    // element newUser one step down for future when we will need to save information.
    // let newUser = formMail.value;
    formMail.value = '';
}

// NAVIGATION FROM POPUP

// button from popup
const buttonAboutPopup = document.getElementById('about');
const buttonGoodsPopup = document.getElementById('goods');
const buttonSignPopup = document.getElementById('sign');
// position to navigation
const pageAbout = document.querySelector('.about');
const pageGoods = document.querySelector('.goods');
const pageSign = document.querySelector('.footer');
// function navigation
function scrollPosition(position) {
    position.scrollIntoView({behavior: 'smooth'});
}
//work with button from popup
buttonAboutPopup.addEventListener('click', function(evt) {
    evt.preventDefault();
    closePopup(popup);
    scrollPosition(pageAbout)
});

buttonGoodsPopup.addEventListener('click', function(evt) {
    evt.preventDefault();
    closePopup(popup);
    scrollPosition(pageGoods)
});

buttonSignPopup.addEventListener('click', function(evt) {
    evt.preventDefault();
    closePopup(popup);
    scrollPosition(pageSign)
});

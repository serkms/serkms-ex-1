const setHeader = () => {
   document.querySelector('.header').classList.add('header_active')
   document.querySelector('.offer__content').classList.add('offer__content_active')
}

const setHeaderNav = () => {
   document.querySelector('.header__nav').classList.add('header__nav_active')
   document.querySelector('.header__logo').classList.add('header__logo_active')

}

setTimeout(setHeader, 500);
setTimeout(setHeaderNav, 1500);

// //Получаем селектор элемента header__nav
const selectorHeaderNav = document.querySelector('.header__nav')

//Слушатель прокрутки экрана
window.addEventListener('scroll', () => {
   // console.log("header__nav", positionElementTop(selectorHeaderNav))
})
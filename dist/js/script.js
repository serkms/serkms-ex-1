const WINDOW_HEIGHT = document.documentElement.clientHeight

const positionElementTop = (selector) => {
   return WINDOW_HEIGHT - selector.getBoundingClientRect().top
}



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
const setOfferTitle = () => {
   document.querySelector('.offer__title_first-left').classList.add('offer__title_active-down')
   document.querySelector('.offer__title_first-right').classList.add('offer__title_active-up')
   document.querySelector('.offer__title_second-left').classList.add('offer__title_active-right')
   document.querySelector('.offer__title_second-center').classList.add('offer__title_active-right')
   document.querySelector('.offer__title_second-right').classList.add('offer__title_active-left')
   document.querySelector('.offer__title_third-right').classList.add('offer__title_active-up')
}

const setOfferText = () => {
   document.querySelector('.offer__text').classList.add('offer__text_active')
}

const setOfferBack = () => {
   document.querySelector('.offer__back').classList.add('offer__back_active')
}

setTimeout(setOfferTitle, 2000);
setTimeout(setOfferBack, 2400);
setTimeout(setOfferText, 2500);








const aboutTitle = document.querySelector('.about__title-text')
const aboutContent = document.querySelector('.about__content')

const aboutItemFirst = document.querySelector('.about__item_first')
const aboutItemSecond = document.querySelector('.about__item_second')
const aboutItemThird = document.querySelector('.about__item_third')
const aboutItemFourth = document.querySelector('.about__item_fourth')



const content = (selector) => {
   selector.classList.add('about__item_active')
}
// const content2 = (selector) => {
//    aboutItemSecond.classList.add('about__content_active')
// }

//Слушатель прокрутки экрана
window.addEventListener('scroll', () => {
   if(positionElementTop(aboutTitle) > 50) {
      aboutTitle.classList.add('about__title-text_active')
   }
   if(positionElementTop(aboutContent) > 50 ) {
      setTimeout(() => content(aboutItemFirst), 300);
      setTimeout(() => content(aboutItemSecond), 600);
      setTimeout(() => content(aboutItemThird), 900);
      setTimeout(() => content(aboutItemFourth), 1200);
   }

})


//Слушатель изменения ориентации телефона/планшета
//При изменении - обновление
window.addEventListener('orientationchange', () => {
   document.location.reload()
});







import './index.css'

const setHeader = () => {
  document.querySelector('.header').classList.add('header_active')
  document.querySelector('.offer__content').classList.add('offer__content_active')
}

const setHeaderNav = () => {
  document.querySelector('.header__nav').classList.add('header__nav_active')
  document.querySelector('.header__logo').classList.add('header__logo_active')

  // document.querySelector('.offer__title').classList.add('offer__title_active')
  // document.querySelector('.offer__title_outline').classList.add('offer__title_active1')
}

const setOfferTitle = () => {
  document.querySelector('.offer__title_first-left').classList.add('offer__title_active-down')
  document.querySelector('.offer__title_first-right').classList.add('offer__title_active-up')
  document.querySelector('.offer__title_second-left').classList.add('offer__title_active-right')
  document.querySelector('.offer__title_second-right').classList.add('offer__title_active-left')
}

const setOfferText = () => {
  document.querySelector('.offer__text').classList.add('offer__text_active')
}

setTimeout(setHeader, 500);
setTimeout(setHeaderNav, 1500);
setTimeout(setOfferTitle, 2000);
setTimeout(setOfferText, 2500
);



//Слушатель изменения ориентации телефона/планшета
//При изменении - обновление
window.addEventListener('orientationchange', () => {
  document.location.reload()
});








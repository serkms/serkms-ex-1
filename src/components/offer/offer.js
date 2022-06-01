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







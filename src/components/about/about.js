
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

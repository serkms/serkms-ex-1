@@include('global.js')

@@include('../components/header/header.js')
@@include('../components/offer/offer.js')
@@include('../components/about/about.js')
@@include('../components/stack/stack.js')

//Слушатель изменения ориентации телефона/планшета
//При изменении - обновление
window.addEventListener('orientationchange', () => {
   document.location.reload()
});







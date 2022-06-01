@@include('global.js')

@@include('../components/header/header.js')
@@include('../components/offer/offer.js')
@@include('../components/about/about.js')

//Слушатель изменения ориентации телефона/планшета
//При изменении - обновление
window.addEventListener('orientationchange', () => {
   document.location.reload()
});







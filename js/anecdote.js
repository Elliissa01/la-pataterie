/*Swiper | Card Slider*/
const swiper = new Swiper('.slider-wrapper', {
    //Paramètres optionnels.
    loop: true,
    grabCursor: true,
    
    //Pagination.
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    //Flèches de navigation.
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      //Écran >= 320px.
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      //Écran >= 750px.
      750: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      //Écran >= 1050px.
      1050: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      //Écran >= 1450px.
      1450: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
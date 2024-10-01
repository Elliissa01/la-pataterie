/*Swiper | Card Slider*/
const swiper = new Swiper('.slider-wrapper', {
    //Paramètres optionnels.
    loop: true,
    grabCursor: true,
    centeredSlides: true,
  
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
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 320px
        550: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        // when window width is >= 320px
        800: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        // when window width is >= 480px
        1100: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        //Écran >= 1350px.
        1350: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
  });
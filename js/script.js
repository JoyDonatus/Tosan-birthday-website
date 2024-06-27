var swiper = new Swiper(".cover", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1199: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        750:{
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        0:{
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

//after spaceBetween; slidesPerGroup: 3, after loop: true, loopFillGroupWithBlank: true,
//after pagination:  breakpoints: {
      //769: {
       // slidesPerView: 3,
       // slidesPerGroup: 3,
      //},
   // },    keyboard: {
   //   enabled: true,
    //},


//centeredSlides: false,
//grabCursor: true,
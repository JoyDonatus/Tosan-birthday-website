var swiper = new Swiper('.scrollImages', {
    slidesPerView : 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    centerSlider: "true",
    fade: "true",
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl : ".right",
        prevEl: ".left"
    },
})
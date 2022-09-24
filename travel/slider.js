new Swiper('.swiper-container',{
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dinamicBullets: true,
    },
    spaceBetween: 30,
    slidesPerView: 2,
    slidesPerGroup: 1,
    initialSlide: 1,
    watchOverflow: true,
    centeredSlides: true,
    slideToClickedSlide: true,
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

});
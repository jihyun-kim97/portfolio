$(function () {
    let mainswiper = new Swiper(".main_slide_wrap", {
    /*     spaceBetween: 30, */
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".main_slide_wrap .swiper-pagination",
            clickable: true,

        },
        navigation: {
            nextEl: ".walk .next_buttton",
        },
    });

    let walkswiper = new Swiper(".walk .right_section", {
        slidesPerView: 1.3,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".walk .next_buttton",
        },
    });


});
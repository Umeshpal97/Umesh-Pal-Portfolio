const swiper = new Swiper(".mySwiper", {

    slidesPerView: 3,
    spaceBetween: 30,

    loop: false,

    grabCursor: true,

    speed: 800,

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints:{
        0:{
            slidesPerView:1,
            grid: {
                rows: 1,
                fill:"row",
            },
        },

        768: {
            slidesPerView: 2,
            grid: {
                rows: 1,
            },
        },

        1024: {
            slidesPerView:3,
            grid: {
                rows: 1,
            },
        }
    }
});
   
document.getElementById("next").onclick = () => swiper.slideNext();
document.getElementById("prev").onclick = () => swiper.slidePrev();
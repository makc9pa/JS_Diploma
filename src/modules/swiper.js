import Swiper, { Autoplay, Navigation } from 'swiper';

Swiper.use([Autoplay, Navigation])

export const swiper = () => {
    const swiper = new Swiper('.swiper', {  
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })
}
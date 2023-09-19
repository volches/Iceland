import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function aboutInnerSlider () {
	const swiper = new Swiper('.about-inner-slider', {
		navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            loop:true,
            grabCursor: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            slidesPerView: 1,
            spaceBetween: 45,
	});
}

export default aboutInnerSlider;
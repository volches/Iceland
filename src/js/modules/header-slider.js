import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc () {
	const swiper = new Swiper('.header-slider', {
		slidesPerView: 4,
		loop:true,
  		grabCursor: true,
  		autoplay: true,
  		navigation:true,
  		navigation: {
    		nextEl: '.header-slider__btn-next',
    		prevEl: '.header-slider__btn-prev',
  		},
		speed: 3000,
		// autoplay: {
		// 	delay: 0.0,
		// 	// disableOnInteraction: false,
		// },
		slidesPerView: 3,
		spaceBetween: 30,
		// a11y: false,
		// freeMode: true,
		// speed: 3000,
		// autoplay: {
		// 	delay: 0.0,
		// 	disableOnInteraction: false,
		// },
		breakpoints: {
			320: {
				slidesPerView: 1
			},
			430: {
				slidesPerView: 3
			},
			800: {
				spaceBetween: 40
			},
			1141: {
				spaceBetween: 60
			},
			1300: {
				spaceBetween: 70
			}
		}
	});
}

export default swiperFunc;
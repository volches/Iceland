import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function toursImgSlider () {
	const swiper = new Swiper('.tours-slider', {
		effect: "coverflow",
		mousewheel: true,
		grabCursor: true,
		centeredSlides: true,
		coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 80,
		modifier: 3,
		},
    	loop: true,
		pagination: {
		el: ".swiper-pagination",
		clickable: true
		},
		breakpoints: {
			320: {
				slidesPerView: 1
			},
			430: {
				slidesPerView: 2
			},
			800: {
				slidesPerView: 3
			},
			1140: {
				slidesPerView: 4
			},
			1400: {
				slidesPerView: 5
			}
		}
	});
}

export default toursImgSlider;
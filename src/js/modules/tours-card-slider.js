import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc () {
	const swiper = new Swiper('.tours-card-slider', {
		direction: 'vertical',
		slidesPerView: 1,
		spaceBetween: 0,
		grabCursor: true,
		// mousewheel:true,
		loop: true,
		a11y: false,
		freeMode: true,
		speed: 3000,
		autoplay: {
			delay: 0.01,
			disableOnInteraction: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1
			},
			833: {
				slidesPerView: 2,
			}
		}
	});
}

export default swiperFunc;
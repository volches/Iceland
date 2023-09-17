import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc () {
	const swiper = new Swiper('.tours-card-slider', {
		slidesPerView: 1,
		spaceBetween: 45,
		grabCursor: true,
		// mousewheel:true,
		loop: true,
		a11y: false,
		freeMode: true,
		speed: 4000,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		autoplay: {
			delay: 0.01,
			disableOnInteraction: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1
			},
			1440: {
				slidesPerView: 2,
				direction: 'vertical',
				
			}
		}
	});
}

// Устанавливаем брейкпоинт
// const breakpoint = window.matchMedia('(max-width:1439px)');

// Ф-я которая проверяет срабатываение медиа запроса в breakpoint
// const breakpointChecker = function (){
// 	if (breakpoint.matches === true){
// 		swiper
// 	}
// }

export default swiperFunc;
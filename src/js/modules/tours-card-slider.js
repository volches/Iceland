import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiper;

// function swiperFunc () {
	// const swiper = new Swiper('.tours-card-slider', {
	// 	slidesPerView: 1,
	// 	spaceBetween: 45,
	// 	grabCursor: true,
	// 	// mousewheel:true,
	// 	loop: true,
	// 	freeMode: true,
	// 	pagination: {
	// 		el: ".swiper-pagination",
	// 		clickable: true
	// 	},
		// breakpoints: {
		// 	320: {
		// 		slidesPerView: 1
		// 	},
		// 	1440: {
		// 		slidesPerView: 2,
		// 		direction: 'vertical',
		// 		a11y: false,
		// 		speed: 3000,
		// 		autoplay: true,
		// 		autoplay: {
		// 			delay: 0.01,
		// 			disableOnInteraction: true,
		// 		},
				
		// 	}
		// }
// 	});
// }

const configHorizontal = {
	direction: 'horizontal',
	slidesPerView: 1,
	spaceBetween: 45,
	grabCursor: true,
	freeMode: true,
	speed: 2000,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	// autoplay: {
	// 	delay: 0.0,
	// 	disableOnInteraction: false,
	// },
};

const configVertical = {
	direction: 'vertical',
	slidesPerView: 2,
	spaceBetween: 0,
	grabCursor: true,
	a11y: false,
	freeMode: true,
	speed: 2000,
	loop: true,
	autoplay: {
		delay: 0.0,
		disableOnInteraction: false,
	},
};

// Устанавливаем брейкпоинт
const breakpoint = window.matchMedia('(max-width:1439px)');

// Ф-я которая проверяет срабатываение медиа запроса в breakpoint
const breakpointChecker = function (){
	if (breakpoint.matches === true){
		swiper = new Swiper('.tours-card-slider', configHorizontal)
	} else if (breakpoint.matches === false) {
		swiper = new Swiper('.tours-card-slider', configVertical)
	}
};

function toursCardSlider(){
	breakpoint.addListener(breakpointChecker);
	breakpointChecker();

}


// export default swiperFunc;

export default toursCardSlider;
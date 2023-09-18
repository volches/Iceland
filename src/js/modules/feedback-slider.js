import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function feedbackSlider () {
	const swiper = new Swiper('.feedback-slider', {
		navigation: {
			nextEl: '.feedback-slider__btn-next',
			prevEl: '.feedback-slider__btn-prev',
			},
			loop:true,
			grabCursor: true,
			speed:1000,
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true
			},
			slidesPerView: 1,
			spaceBetween: 70,
	});
}

export default feedbackSlider;
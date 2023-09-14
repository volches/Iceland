import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc () {
	const swiper = new Swiper('.about__text', {
		direction: 'vertical',
  		slidesPerView: 'auto',
  		freeMode: true,
  		navigation:true,
  		navigation: {
			nextEl: '.about__text-btn-next',
			prevEl: '.about__text-btn-prev',
  		},
	});
}

export default swiperFunc;
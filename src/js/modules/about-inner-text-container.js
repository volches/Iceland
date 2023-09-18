import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function aboutInnerTextContainer () {
	const swiper = new Swiper('.about-inner__text', {
		direction: 'vertical',
  		slidesPerView: 'auto',
  		freeMode: true,
  		navigation:true,
  		navigation: {
			nextEl: '.about-inner__text-btn-next',
			prevEl: '.about-inner__text-btn-prev',
  		},
	});
}

export default aboutInnerTextContainer;
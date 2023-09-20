import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function thorsmorkInnerTextSlider(){
    var swiper = new Swiper('.thorsmork.inner-text-slider', {
        // mousewheel: true,
        // mouseWheel:{
        //   invert: true,
        // },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        loop:true,
        grabCursor: true,
        // autoplay: true,
        // speed:500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        slidesPerView: 1,
        spaceBetween: 45,
      });
}

export default thorsmorkInnerTextSlider;
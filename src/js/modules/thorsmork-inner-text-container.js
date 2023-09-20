import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function thorsmorkInnerTextContainer(){
    var swiper = new Swiper('.thorsmork.inner-text-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
        navigation:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // mousewheel: true,
      });
}

export default thorsmorkInnerTextContainer;
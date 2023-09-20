import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function landmannalaugarInnerTextContainer(){
    var swiper = new Swiper('.landmannalaugar.inner-text-container', {
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

export default landmannalaugarInnerTextContainer;
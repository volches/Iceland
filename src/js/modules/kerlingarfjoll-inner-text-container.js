import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function kerlingarfjollInnerTextContainer(){
    var swiper = new Swiper('.kerlingarfjoll.inner-text-container', {
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

export default kerlingarfjollInnerTextContainer;
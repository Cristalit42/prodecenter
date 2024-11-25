import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';

let swiperInstance = null;

function initSwiper() {
  if (!swiperInstance) {
    swiperInstance = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 2, 
      breakpoints: {
        900: {
          slidesPerView: 2, 
        },
        300:{
          slidesPerView: 1,
          spaceBetween: 20,
        }

      },
    });
    console.log('Swiper инициализирован');
  }
}

function destroySwiper() {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
    console.log('Swiper уничтожен');
  }
}

function handleResize() {
  if (window.innerWidth < 1300) {
    initSwiper();
  } else {
    destroySwiper();
  }
}

handleResize();

window.addEventListener('resize', handleResize);

import Swiper from "swiper";
import 'swiper/css';
import {Mousewheel, Navigation, Scrollbar, Thumbs} from "swiper/modules";

class Slider {
  element;
  thumbs;
  slider: Swiper;
  constructor(element: Element, thumbs?: Element) {
    this.element = element;
    this.thumbs = thumbs;
    this.slider = this.element.querySelector('.swiper')
    this.init()
  }
  
  init() {
    this.initSlider()
  }
  
  initSlider() {
    if (this.element.getAttribute('data-slider') !== 'thumbs') {
      this.initDefaultSlider()
    } else {
      this.initSliderWithThumbs()
    }
  }
  
  initDefaultSlider() {
    new Swiper(this.slider, {
      modules: [Navigation, Scrollbar, Mousewheel],
      slidesPerView: 1,
      spaceBetween: 32,
      mousewheel: true,
      direction: 'vertical',
      autoHeight: true,
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }
  
  initSliderWithThumbs() {
    const thumbsSlider = new Swiper(this.thumbs.querySelector('.swiper'), {
      slidesPerView: 3,
      spaceBetween: 32,
    })
    new Swiper(this.slider, {
      modules: [Navigation, Thumbs],
      slidesPerView: 1,
      spaceBetween: 32,
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
      thumbs: {
        swiper: thumbsSlider
      }
    })
  }
}

export default Slider
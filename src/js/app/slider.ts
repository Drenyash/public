import Swiper from "swiper";
import 'swiper/css';
import {Navigation, Pagination, Thumbs} from "swiper/modules";

class Slider {
    element;
    thumbs;
    slider: Swiper;
    desktop;
    
    constructor(element: Element, thumbs?: Element) {
        this.element = element;
        this.thumbs = thumbs;
        this.slider = this.element.querySelector('.swiper')
        this.desktop = window.matchMedia('(max-width: 744px)')
        this.init()
    }
    
    init() {
        this.initSlider()
    }
    
    initSlider() {
        switch (this.element.getAttribute('data-slider')) {
        case 'custom':
            this.initCustomSlider();
            break;
        case 'master':
            this.initMastersSlider();
            break;
        case 'thumbs':
            this.initSliderWithThumbs()
            break;
        default:
            this.initDefaultSlider()
        }
    }
    
    initDefaultSlider() {
        let currentRotate = 0;
        const swiperCue = this.element.querySelector('[data-slider-cue]') as HTMLElement;
        let swiper = new Swiper(this.slider, {
            modules: [Navigation],
            slidesPerView: 1,
            spaceBetween: 1200,
            navigation: {
                nextEl: this.element.querySelector('.swiper-button-next'),
                prevEl: this.element.querySelector('.swiper-button-prev'),
            },
            on: {
                slideNextTransitionStart() {
                    currentRotate += 180
                    swiperCue.style.rotate = `${currentRotate}deg`
                },
                slidePrevTransitionStart() {
                    currentRotate -= 180
                    swiperCue.style.rotate = `${currentRotate}deg`
                }
            }
        })
        if (this.element.hasAttribute('data-desktop-only')) {
            if (this.desktop.matches) {
                swiper.destroy(true, true)
            } else {
                swiper.init()
            }
        }
        window.addEventListener('resize', () => {
            if (this.element.hasAttribute('data-desktop-only')) {
                if (this.desktop.matches) {
                    if (swiper) {
                        swiper.destroy(true, true)
                        swiper = null;
                    }
                } else {
                    if (!swiper) {
                        this.initDefaultSlider()
                    }
                }
            }
        })
    }
    
    initCustomSlider() {
        new Swiper(this.slider, {
            modules: [Pagination],
            slidesPerView: 'auto',
            spaceBetween: 30,
            centeredSlides: true,
            breakpoints: {
                744: {
                    slidesPerView: 3,
                    centeredSlides: false,
                }
            },
            pagination: {
                el: this.slider.querySelector('.swiper-pagination'),
                clickable: true,
            }
        })
    }
    
    initMastersSlider() {
        new Swiper(this.slider, {
            slidesPerView: 'auto',
            spaceBetween: 30,
            breakpoints: {
                744: {
                    slidesPerView: 2,
                }
            }
        })
    }
    
    initSliderWithThumbs() {
        const thumbsSlider = new Swiper(this.thumbs.querySelector('.swiper'), {
            slidesPerView: 2,
            spaceBetween: 32,
            breakpoints: {
                1133: {
                    slidesPerView: 3,
                }
            }
        })
        new Swiper(this.slider, {
            modules: [Navigation, Thumbs],
            slidesPerView: 'auto',
            spaceBetween: 32,
            centeredSlides: true,
            navigation: {
                nextEl: this.element.querySelector('.swiper-button-next'),
                prevEl: this.element.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                744: {
                    slidesPerView: 1,
                    centeredSlides: false,
                }
            },
            thumbs: {
                swiper: thumbsSlider
            },
        })
    }
}

export default Slider

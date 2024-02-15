class Gallery {
    element;
    items;
    
    constructor(element: Element) {
        this.element = element;
        this.items = this.element.querySelectorAll('[data-gallery-item]')
        
        this.init()
    }
    
    init() {
        this.initGallery()
    }
    
    initGallery() {
        const toggleClass = (el: Element) => {
            this.items.forEach(temp => temp.closest('.swiper-slide').classList.remove('active'))
            el.closest('.swiper-slide').classList.add('active')
        }
        this.items.forEach(el => {
            el.addEventListener('click', () => toggleClass(el))
            el.addEventListener('mouseover', () => toggleClass(el))
        })
    }
    
}

export default Gallery

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
    this.items.forEach(el => {
      el.addEventListener('click', () => {
        this.items.forEach(temp => temp.classList.remove('active'))
        el.classList.add('active')
      })
    })
  }
  
}

export default Gallery
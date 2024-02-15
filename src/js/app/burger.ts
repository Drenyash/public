class Burger {
    element;
    mobileMenu;
    constructor(element: Element) {
        this.element = element;
        this.mobileMenu = document.querySelector('[data-menu-mobile]')
    
        this.init()
    }
    
    init () {
        this.initBurger()
    }
    
    initBurger() {
        this.element.addEventListener('click', () => {
            this.mobileMenu.classList.toggle('active')
            this.element.classList.toggle('active')
        })
    }
}

export default Burger

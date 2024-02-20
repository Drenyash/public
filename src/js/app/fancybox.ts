import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

class FancyboxCustom {
    element;
    close;
    elements;
    
    constructor(element: Element) {
        this.element = element
        this.elements = [...Array.from(document.querySelectorAll('input'))];
        this.close = this.element.querySelector('[data-fancybox-close]')
        this.init()
    }
    
    init() {
        this.initFancybox()
        this.closeFancybox()
        
        this.element.addEventListener('click', () => {
            console.log(this.element)
            if (localStorage.getItem('currentTable')) {
                localStorage.removeItem('currentTable')
            }
            localStorage.setItem('currentTable', this.element.getAttribute('data-select'))
            this.elements.forEach(temp => temp.checked = false)
            this.elements.forEach(el => {
                if (el.getAttribute('data-value') === localStorage.getItem('currentTable')) {
                    el.checked = true
                }
            })
        })
    }
    
    initFancybox() {
        Fancybox.bind('[data-fancybox]', {
            defaultType: 'inline',
            dragToClose: false,
        })
    }
    
    closeFancybox() {
        if (this.close) {
            this.close.addEventListener('click', () => {
                Fancybox.close()
            })
        }
    }
    
}

export default FancyboxCustom

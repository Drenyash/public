import {Fancybox} from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

class FancyboxCustom {
  element;
  close;
  
  constructor(element: Element) {
    this.element = element
    this.close = this.element.querySelector('[data-fancybox-close]')
    this.init()
  }
  
  init() {
    this.initFancybox()
    this.closeFancybox()
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
import inputmask from "inputmask/lib/inputmask";

class InputMask {
  elements;
  
  constructor() {
    this.elements = document.querySelectorAll('input')
    this.init()
  }
  
  init() {
    this.initMask()
  }
  
  initMask() {
    this.elements.forEach(phone => {
      switch (phone.type) {
        case 'tel':
          inputmask({"mask": "+7 (999) 999-99-99"}).mask(phone);
          break;
        default:
          return phone;
      }
    })
  }
}

export default InputMask

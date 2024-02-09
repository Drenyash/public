import axios from "axios";
import {Fancybox} from "@fancyapps/ui";

class Form {
  form;
  url;
  elements;
  
  constructor(form: Element) {
    this.form = form;
    this.url = this.form.getAttribute('action')
    this.elements = [...Array.from(this.form.querySelectorAll('input'))];
    this.init()
  }
  
  init() {
    this.initForm()
  }
  
  initForm() {
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this.sendData()
    })
  }
  
  sendData() {
    axios.post(this.url, this.getData())
      .then(response => response.data)
      .then(data => {
        console.log(data)
        Fancybox.close()
      })
      .catch(error => console.error(error))
  }
  
  getData() {
    const data: FormData = new FormData()
    this.elements.forEach(el => {
      if (el.type === 'hidden') {
        el.value = Fancybox.getInstance().container.baseURI.match(/(?<=#)[^"]+/)[0]
      }
      if (el.type === 'radio' && el.checked) {
        console.log(el)
        data.append(el.name, el.value)
      } else if (el.type !== 'radio') {
        data.append(el.name, el.value)
      }
    })
    
    return data;
  }
}

export default Form
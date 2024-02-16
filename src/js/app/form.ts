import axios from "axios";
import {Fancybox} from "@fancyapps/ui";

class Form {
    form;
    url;
    elements;
    areaElement;
    modalSuccess;
    modalError;
    
    constructor(form: Element) {
        this.form = form;
        this.url = this.form.getAttribute('action')
        this.elements = [...Array.from(this.form.querySelectorAll('input'))];
        this.areaElement = [...Array.from(this.form.querySelectorAll('textarea'))]
        this.modalSuccess = this.form.parentNode.querySelector('[data-modal-success]')
        this.modalError = this.form.parentNode.querySelector('[data-modal-error]')
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
            .then(() => {
                this.modalSuccess.classList.add('active')
                setTimeout(() => {
                    this.modalSuccess.classList.remove('active')
                    Fancybox.close()
                }, 3000)
            })
            .catch(error => {
                console.error(error)
                this.modalError.classList.add('active')
                setTimeout(() => {
                    this.modalError.classList.remove('active')
                    Fancybox.close()
                }, 3000)
            })
    }
    
    getData() {
        const data: FormData = new FormData()
        this.elements.forEach(el => {
            if (el.type === 'hidden') {
                el.value = Fancybox.getInstance().container.baseURI.match(/(?<=#)[^"]+/)[0]
            }
            if (el.type === 'radio' && el.checked) {
                data.append(el.name, el.value)
            } else if (el.type !== 'radio') {
                data.append(el.name, el.value)
            }
        })
        this.areaElement.forEach(el => {
            data.append(el.name, el.value)
        })
        
        return data;
    }
}

export default Form

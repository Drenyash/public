import Slider from "./slider";
import Gallery from "./gallery";
import FancyboxCustom from "./fancybox";
import Form from "./form";
import Tabs from "./tabs";
import DatePicker from "./datePicker";
import InputMask from "./inputMask";
import Burger from "./burger";

class App {
    constructor() {
        this.init();
    }
    
    init = () => {
        this.createSlider()
        this.createGallery()
        this.createFancybox()
        this.createForm()
        this.createTabs()
        this.createDatePicker()
        this.createInputMask()
        this.createBurger()
    };
    
    createSlider() {
        const sliders = document.querySelectorAll('[data-slider]');
        if (!sliders) return
        const thumbs = document.querySelector('[data-slider-thumb]')
        sliders.forEach((slider) => {
            new Slider(slider, thumbs)
        })
    }
    
    createGallery() {
        const gallery = document.querySelector('[data-gallery]');
        if (!gallery) return;
        new Gallery(gallery)
    }
    
    createFancybox() {
        const modals = document.querySelectorAll('[data-fancybox]')
        if (!modals) return
        modals.forEach(modal => {
            new FancyboxCustom(modal)
        })
    }
    
    createForm() {
        const forms = document.querySelectorAll('[data-form]')
        if (!forms) return;
        forms.forEach(form => {
            new Form(form)
        })
    }
    
    createTabs() {
        new Tabs()
    }
    
    createDatePicker() {
        const pickerInput = document.querySelectorAll('[data-date-selection]');
        pickerInput.forEach(el => {
            new DatePicker(el)
        })
    }
    
    createInputMask() {
        new InputMask()
    }
    
    createBurger() {
        const burger = document.querySelector('[data-burger]')
        if (!burger) return;
        new Burger(burger)
    }
}

export {App};


import Slider from "./slider";
import Gallery from "./gallery";
import FancyboxCustom from "./fancybox";
import Form from "./form";
import Tabs from "./tabs";

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
  };
  
  createSlider() {
    const sliders = document.querySelectorAll('[data-slider]');
    if (!sliders) return
    const thumbs = document.querySelectorAll('[data-slider-thumb]')
    sliders.forEach((slider, idx) => {
      new Slider(slider, thumbs[idx])
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
}

export {App};


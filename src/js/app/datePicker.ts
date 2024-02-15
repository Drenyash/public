import AirDatepicker from "air-datepicker";
import 'air-datepicker/air-datepicker.css';

class DatePicker {
  picker: HTMLElement | AirDatepicker<HTMLElement>;
  selector;
  
  constructor(selector: Element) {
    this.selector = selector;
    
    this.init()
  }
  
  init() {
    this.initPicker()
  }
  
  initPicker() {
    this.picker = new AirDatepicker(this.selector as HTMLElement, {
      minDate: Date.now(),
      autoClose: true,
    });
  }
}

export default DatePicker;

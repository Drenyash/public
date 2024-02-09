class Tabs {
  headerEls;
  contentEls;
  
  constructor() {
    this.headerEls = document.querySelectorAll('[data-tab-header]')
    this.contentEls = document.querySelectorAll('[data-tab-content]')
    
    this.init()
  }
  
  init() {
    this.initTabs()
  }
  
  removeAllClasses(element: NodeListOf<Element>) {
    element.forEach(temp => temp.classList.remove('active'))
  }
  
  initTabs() {
    this.headerEls.forEach((head, idx) => {
      head.addEventListener('click', () => {
        this.removeAllClasses(this.headerEls)
        this.removeAllClasses(this.contentEls)
        head.classList.add('active')
        this.contentEls.item(idx)?.classList.add('active')
      })
    })
  }
}

export default Tabs
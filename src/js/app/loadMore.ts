import axios from "axios";

class LoadMore {
    element;
    container;
    url;
    
    constructor(element: Element, container: Element) {
        this.element = element;
        this.container = container;
        this.url = 'http://localhost:3000'
        
        this.init()
    }
    
    init() {
        this.element.addEventListener('click', this.loadData)
    }
    
    async loadData() {
        const response = await axios.get(this.url)
        const domParser = new DOMParser();
        this.container.append(domParser.parseFromString(response.data, 'text/html'))
    }
}

export default LoadMore

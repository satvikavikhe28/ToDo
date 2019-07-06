import Component from '../lib/conponents.js';
import store from '../store/index.js';
export default class Count extends Component {
    constructor() {
        super({
            store,
            element: document.querySelector('.js-count')
        });
    }
    render() {
        let suffix = store.state.items.length !== 1 ? 's' : '';
        this.element.innerHTML = `
      You have
      ${store.state.items.length}
      task${suffix} today 
    `;
    }
}
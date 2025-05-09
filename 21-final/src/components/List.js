import {Component} from '../core/Component';
import ListItem from './ListItem';

export default class List extends Component {
    setup() {
        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'donates-container';

        this.$title = document.createElement('h2');
        this.$title.className = 'donates-container__title';
        this.$title.textContent = 'Список донатов';
        this.$rootElement.appendChild(this.$title);

        this.$listContainer = document.createElement('div');
        this.$listContainer.className = 'donates-container__donates';
        this.$rootElement.appendChild(this.$listContainer);
    }

    updateDonations(donations) {
        this.$listContainer.innerHTML = '';

        donations.forEach(donation => {
            const item = new ListItem({donation}); // Передаём donation через props
            this.$listContainer.appendChild(item.$rootElement);
        });
    }
}
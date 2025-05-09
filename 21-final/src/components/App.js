import {Component} from '../core/Component';
import Form from './Form';
import List from './List';

export default class App extends Component {
    setup() {
        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'app';

        const $form = new Form({
            onSubmit: this.handleDonation.bind(this)
        });
        this.$rootElement.appendChild($form.$rootElement);

        this.donateList = new List();
        this.$rootElement.appendChild(this.donateList.$rootElement);

        this.$totalAmount = document.createElement('h1');
        this.$totalAmount.className = 'total-amount';
        this.$totalAmount.textContent = 'Итого: $0';
        this.$rootElement.insertBefore(this.$totalAmount, this.$rootElement.firstChild);

        // Инициализируем состояние
        this.state = {
            total: 0,
            donations: []
        };
    }

    handleDonation(amount) {
        const donation = {
            id: Date.now(),
            amount,
            timestamp: new Date().toLocaleString()
        };
        this.state.donations.push(donation);
        this.state.total += amount;

        this.donateList.updateDonations(this.state.donations);
        this.$totalAmount.textContent = `Итого: $${this.state.total}`;
    }
}
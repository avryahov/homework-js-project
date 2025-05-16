import {Component} from '../core/Component';
import Form from './Form';
import List from './List';

export default class App extends Component {
    setup() {
        this.state = {
            total: 0,
            donations: []
        };

        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'app';

        this.$totalAmount = document.createElement('h1');
        this.$totalAmount.className = 'total-amount';
        this.$totalAmount.textContent = `Итого: $${this.state.total}`;
        this.$rootElement.appendChild(this.$totalAmount);

        this.donateForm = new Form({
            onSubmit: this.handleDonation.bind(this)
        });
        this.$rootElement.appendChild(this.donateForm.$rootElement);

        this.donateList = new List();
        this.$rootElement.appendChild(this.donateList.$rootElement);

        this.updateList();
    }

    handleDonation(amount) {
        const donation = {
            id: Date.now(),
            amount,
            timestamp: new Date().toLocaleString()
        };
        this.state.donations.push(donation);
        this.state.total += amount;

        this.updateList();
        this.updateTotal();
    }

    handleDelete(donationId) {
        const index = this.state.donations.findIndex(donation => donation.id === donationId);

        if (index !== -1) {
            const removedDonation = this.state.donations.splice(index, 1)[0];
            this.state.total -= removedDonation.amount;

            this.updateList();
            this.updateTotal();
        }
    }

    updateList() {
        this.donateList.updateDonations(this.state.donations, this.handleDelete.bind(this));
    }

    updateTotal() {
        this.$totalAmount.textContent = `Итого: $${this.state.total}`;
    }
}
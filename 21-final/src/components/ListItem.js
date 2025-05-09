import {Component} from '../core/Component';

export default class ListItem extends Component {
    setup() {
        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'donate-item';
        this.$rootElement.innerHTML = `${this.props.donation.timestamp} - <b>$${this.props.donation.amount}</b>`;
    }
}
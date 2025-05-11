import {Component} from '../core/Component';

export default class ListItem extends Component {
    setup() {
        this.$rootElement = document.createElement('div');
        this.$rootElement.className = 'donate-item';

        const $info = document.createElement('span');
        $info.innerHTML = `${this.props.donation.timestamp} - <b>$${this.props.donation.amount}</b>`;
        this.$rootElement.appendChild($info);

        this.$deleteButton = document.createElement('button');
        this.$deleteButton.className = 'delete-button';
        this.$deleteButton.textContent = 'Удалить';
        this.$deleteButton.addEventListener('click', () => {
            this.props.onDelete(this.props.donation.id); // Вызываем функцию удаления
        });
        this.$rootElement.appendChild(this.$deleteButton);
    }
}
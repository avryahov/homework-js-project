import {Component} from '../core/Component';

export default class Form extends Component {
    setup(props) {
        this.$rootElement = document.createElement('form');
        this.$rootElement.className = 'donate-form';

        const $label = document.createElement('label');
        $label.className = 'donate-form__input-label';
        $label.textContent = 'Введите сумму в $';
        this.$rootElement.appendChild($label);

        this.$input = document.createElement('input');
        this.$input.className = 'donate-form__donate-input';
        this.$input.name = 'amount';
        this.$input.type = 'number';
        this.$input.min = '1';
        this.$input.max = '100';
        this.$input.required = true;
        $label.appendChild(this.$input);

        this.$submitButton = document.createElement('button');
        this.$submitButton.className = 'donate-form__submit-button';
        this.$submitButton.type = 'submit';
        this.$submitButton.textContent = 'Задонатить';
        this.$rootElement.appendChild(this.$submitButton);

        this.$rootElement.addEventListener('submit', (event) => {
            event.preventDefault();
            const amount = parseFloat(this.$input.value);
            if (!isNaN(amount) && amount >= 1 && amount <= 100) {
                props.onSubmit(amount);
                this.$input.value = '';
                this.$input.focus();
            }
        });

        this.$input.addEventListener('input', () => {
            const isValid = !isNaN(parseFloat(this.$input.value)) && parseFloat(this.$input.value) >= 1 && parseFloat(this.$input.value) <= 100;
            this.$submitButton.disabled = !isValid;
        });
    }
}
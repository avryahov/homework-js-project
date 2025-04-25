const form = document.createElement('form');
form.className = 'create-user-form';

const labelName = document.createElement('label');
labelName.textContent = 'Имя ';

const inputName = document.createElement('input');
inputName.type = 'text';
inputName.name = 'userName';
inputName.placeholder = 'Введите ваше имя';

labelName.appendChild(inputName);

const labelPassword = document.createElement('label');
labelPassword.textContent = 'Пароль ';

const inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.name = 'password';
inputPassword.placeholder = 'Придумайте Пароль';

labelPassword.appendChild(inputPassword);

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Подтвердить';

form.append(labelName);
form.append(document.createTextNode(" "))
form.append(labelPassword);
form.append(document.createTextNode(" "))
form.append(button);

const body = document.querySelector('body');
body.insertAdjacentElement('beforeend', form);
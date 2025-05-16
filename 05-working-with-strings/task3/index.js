let userName = prompt('Как вас зовут?');

if (userName) {
    userName = userName.trim().toLowerCase();
    alert(`Вас зовут ${userName}`);
} else {
    alert(`Вы не указали значение`);
}
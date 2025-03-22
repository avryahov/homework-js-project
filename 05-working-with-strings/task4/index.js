let userName = prompt('Как вас зовут?');
userName = userName.trim().toLowerCase();

let userAge = prompt('Сколько вам лет?');

alert(`Вас зовут ${userName} и вам ${Number(userAge.trim())} лет`);
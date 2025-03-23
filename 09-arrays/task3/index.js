const coffees = ['Latte', 'Cappuccino', 'Americano'];

const coffeeName = prompt('Поиск кофе по названию:');
const index = coffees.findIndex(coffee =>
    coffee.toLowerCase() === coffeeName.toLowerCase()
);

if (index !== -1) {
    alert(`Держите ваш любимый кофе ${coffees[index]}. Он ${index + 1}-й по популярности в нашей кофейне.`);
} else {
    alert('К сожалению, такого вида кофе нет в наличии');
}
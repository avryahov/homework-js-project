// const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
//
// if (temperatureInCelsius === 0) {
//     alert('0 градусов по Цельсию - это температура замерзания воды')
// } else if (temperatureInCelsius > 0) {
//     alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
// }
//
// const temperatureInFahrenheit = (temperatureIncelsius) * 9 / 5 + 32;
// alert(`%{temperatureInCelsius} градусов по Цельсию - это %{temperatureInFahrenheit} по Фаренгейту.`);

// Когда он вводит в текстовое поле 0, то у него не отображается сообщение: «0 градусов по Цельсию — это температура замерзания воды».
// Не отображается сообщение «temperatureInCelsius градусов по Цельсию — это temperatureInFahrenheit по Фаренгейту».
// В сообщении «temperatureInCelsius градусов по Цельсию — это temperatureInFahrenheit по Фаренгейту.» данные из переменных temperatureInCelsius и temperatureInFahrenheit почему-то не подставляются в строку.


const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия');
debugger; // Остановка для проверки исходного значения

const numericTemp = Number(temperatureInCelsius); // Явное преобразование в число

if (numericTemp === 0) {
    alert('0 градусов по Цельсию - это температура замерзания воды');
} else if (numericTemp > 0) {
    alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
}

// Исправлена опечатка в имени переменной (Celsius с большой буквы)
const temperatureInFahrenheit = numericTemp * 9 / 5 + 32;

// Исправлен синтаксис шаблонной строки
alert(`${numericTemp} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`); 
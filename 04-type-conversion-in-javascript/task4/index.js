// 1. Пробелы между цифрами приводят к NaN
console.log(Number(' 1 2 3 4 5'));

// 2. И снова пробел, и снова NaN
console.log(Number('1234 5'));

// 3. Верное число без пробелов
console.log(Number('12345'));

// 4. Булево значение становится строкой
console.log(String(false));

// 5. Ноль (даже с ведущими нулями) — falsy
console.log(Boolean(0000000));

// 6. Любое ненулевое число — truthy
console.log(Boolean(0.0000001));

// 7. undefined превращается в строку "undefined"
console.log(String(undefined));

// 8. Нечисловой символ 'f' делает преобразование недопустимым -> NaN
console.log(Number('100f'));

// 9. Корректное число в строке -> 100
console.log(Number('100'));

// 10. Ведущие нули игнорируются -> 1
console.log(Number('000001'));
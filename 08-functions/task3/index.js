function getDivisorsCount(number) {
    if (typeof number !== 'number' || Number.isNaN(number)) {
        return NaN;
    }

    if (number <= 0 || !Number.isInteger(number)) {
        alert(`${number} должен быть целым числом и больше нуля!`);
        return NaN;
    }

    let count = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    return count;
}

console.log(getDivisorsCount(4)); // Вернет 3 (делители - 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители - 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
console.log(getDivisorsCount(30)); // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)
console.log(getDivisorsCount(0)); // NaN (с алертом)
console.log(getDivisorsCount(-5)); // NaN (с алертом)
console.log(getDivisorsCount(2.5)); // NaN (с алертом)
console.log(getDivisorsCount("10")); // NaN
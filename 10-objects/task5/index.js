const TYPE_STRING = 'string';
const TYPE_NUMBER = 'number';

function parseNumber(item) {
    if (typeof item === TYPE_NUMBER && Number.isFinite(item)) {
        return item;
    } else if (typeof item === TYPE_STRING) {
        const num = Number(item);
        return Number.isFinite(num) ? num : 0;
    }
    return 0;
}

function sum(...numbers) {
    return numbers
        .map(item => parseNumber(item))
        .reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(2, 2)); // 4
console.log(sum(10, 15, 249, 653, 846)); // 1773
console.log(sum()); // 0
console.log(sum(1, "2", 3)); // 6
console.log(sum(5, NaN)); // 5
console.log(sum(5, Infinity)); // 5
console.log(sum("5", 3, "4.5")); // 12.5
console.log(sum("abc", 2, "3.5")); // 5.5
console.log(sum(null, undefined, true)); // 0
console.log(sum("12.3")); // 12.3
console.log(sum("12,3")); // 0
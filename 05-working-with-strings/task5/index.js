let userString = prompt('Введите текст для обрезки');
userString = userString ? userString.trim() : '';

let startInput = prompt('Введите индекс, с которого нужно начать обрезку строки');
let startSliceIndex = startInput ? Number(startInput.trim()) : 0;

let endInput = prompt('Введите индекс, которым нужно закончить обрезку строки');
let endSliceIndex = endInput ? Number(endInput.trim()) : userString.length;

const resultString = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${resultString}`);
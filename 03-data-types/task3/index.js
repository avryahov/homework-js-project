let ageOfPerson1 = 18;
let ageOfPerson2 = '20';

let nameOfAnimal1 = null;
let nameOfAnimal2 = 'Charlie';

let initialValue1;
let initialValue2 = 0;

let helloText1 = 'Hello!';
let helloText2 = 'Привет!';

// --- Работа с let ---
ageOfPerson2 = ageOfPerson1;
console.log("ageOfPerson2", ageOfPerson2, typeof ageOfPerson2);

nameOfAnimal2 = nameOfAnimal1;
console.log("nameOfAnimal2", nameOfAnimal2, typeof nameOfAnimal2);

initialValue2 = initialValue1;
console.log("initialValue2", initialValue2, typeof initialValue2);

helloText2 = helloText1;
console.log(helloText2, typeof helloText2);
console.log('');

// --- Работа с var ---
// var isJavaScriptProgrammer1 = true;
// var isJavaScriptProgrammer2 = false;
console.log('var является устаревшим');

let isJavaScriptProgrammer1 = true;
let isJavaScriptProgrammer2 = false;

isJavaScriptProgrammer2 = isJavaScriptProgrammer1;
console.log("isJavaScriptProgrammer2", isJavaScriptProgrammer2, typeof isJavaScriptProgrammer2);
console.log('');

// --- Работа с const ---
console.log('Переменную с const переопределить нельзя');

const bestProgrammingLanguage1 = 'JavaScript';
const bestProgrammingLanguage2 = 'Java';

console.log("bestProgrammingLanguage1", bestProgrammingLanguage1, typeof bestProgrammingLanguage1);
console.log("bestProgrammingLanguage2", bestProgrammingLanguage2, typeof bestProgrammingLanguage2);
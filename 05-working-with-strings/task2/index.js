const myName = 'Александр';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилена';
const reasonText = 'мне нужно развить T-Sharped, то есть стать Full-Stack разработчиком';
const numberOfMonth = 0;

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`;

// 1. Замена "JavaScript" на строчные буквы
myInfoText = myInfoText.replaceAll("JavaScript", "javascript");

// 2. Замена "курс" на "КУРС"
myInfoText = myInfoText.replaceAll("курс", "КУРС");

// 3. Вывод итоговой строки
console.log(myInfoText);
console.log();

// 4. Вывод длины строки
console.log("Длина строки:", myInfoText.length);
console.log();

// 5. Вывод первого и последнего символа
console.log("Первый символ:", myInfoText[0]);
console.log("Последний символ:", myInfoText[myInfoText.length - 1]);
console.log();
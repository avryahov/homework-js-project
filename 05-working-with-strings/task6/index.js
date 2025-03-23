let userText = prompt('Введите текст') ?? "";
userText = userText.trim();

let fragmentOfText = prompt('Введите слово из текста') ?? "";
fragmentOfText = fragmentOfText.trim();

const indexOfFragment = userText.indexOf(fragmentOfText);
let resultString = userText.slice(0, indexOfFragment);

alert("Результат: " + resultString);
// Правильные ответы
const answer1 = 4;
const answer2 = 4;
const answer3 = 1;
const answer4 = 12;
const answer5 = 6;

// Счетчики
let correctAnswers = 0;
let incorrectAnswers = 0;

// Вопрос 1
const response1 = prompt('Сколько будет 2 + 2?');
const userAnswer1 = Number(response1);
if (userAnswer1 === answer1) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

// Вопрос 2
const response2 = prompt('Сколько будет 2 * 2?');
const userAnswer2 = Number(response2);
if (userAnswer2 === answer2) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

// Вопрос 3
const response3 = prompt('У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?');
const userAnswer3 = Number(response3);
if (userAnswer3 === answer3) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

// Вопрос 4
const response4 = prompt('У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?');
const userAnswer4 = Number(response4);
if (userAnswer4 === answer4) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

// Вопрос 5
const response5 = prompt('Сколько будет 2 + 2 * 2?');
const userAnswer5 = Number(response5);
if (userAnswer5 === answer5) {
    alert('Ответ Верный');
    correctAnswers++;
} else {
    alert('Ответ Неверный');
    incorrectAnswers++;
}

// Итоговое сообщение
alert(`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}.`);
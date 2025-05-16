const answer1 = confirm("JavaScript появился в 1995 году?");
if (answer1 === true) {
    alert("Верно");
} else {
    alert("Правильный ответ: 1995");
}

const answer2 = confirm("Спецификация JavaScript называется ECMAScript?");
if (answer2 === true) {
    alert("Верно");
} else {
    alert("Правильный ответ: ECMAScript");
}

const answer3 = confirm("JavaScript был создан за 1 месяц?");
if (answer3 === false) {
    alert("Верно");
} else {
    alert("Правильный ответ: 10 дней");
}
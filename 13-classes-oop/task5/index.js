/*
Вам сейчас необходимо создать 3 дочерних класса от класса Developer:

JuniorDeveloper. Конструктор данного класса принимает 2 параметра: fullName и age.
Вызовите конструктор родительского класса и передайте туда эти 2 параметра.

В качестве 3-го у нас выступает position. Вам необходимо его указать по умолчанию.
Напишите значение "Junior" в качестве 3-го параметра вызова родительского конструктора.
Кроме этого, необходимо переопределить метод code(), чтобы он выводил в консоль строку: “Junior разработчик пишет код...”.
Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript'.

MiddleDeveloper. Проделайте ту же самую работу в конструкторе, что и в JuniorDeveloper.
Только на место position передавайте значение "Middle". Метод code() у класса MiddleDeveloper должен выводить в консоль строку: “Middle-разработчик пишет код...”.
 Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’.

SeniorDeveloper. Проделайте ту же самую работу в конструкторе, что и в JuniorDeveloper.
Только на место position передавайте значение "Senior". Метод code() у класса SeniorDeveloper должен выводить в консоль строку: “Senior-разработчик пишет код...”.
Массив technologies должен содержать следующие технологии: 'HTML', 'CSS', 'JavaScript', ‘React’, ‘NodeJS’.
*/

const Position = {
    JUNIOR: 'Junior',
    MIDDLE: 'Middle',
    SENIOR: 'Senior'
}

class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        this.position = position;
        this.technologies = []
    }

    code() {
    }

    learnNewTechnologies(technology) {
        this.technologies.push(technology);
    }
}

const developer = new Developer("Alex", 34, Position.SENIOR);

console.log(developer);
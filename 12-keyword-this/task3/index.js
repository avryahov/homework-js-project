const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack() { // Изменили стрелочную функцию на обычную
        console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal(sound) {
        console.log(`${this.fullName} забил гол! Вот это да!`);
        this.celebrate(sound);
    },
    celebrate(sound) {
        console.log(sound);
    },
    goToSubstitution: function(newPlayer) {
        console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
};

// Исправляем контекст для attack через bind()
const attack = footballer.attack.bind(footballer);

// Исправляем контекст для scoreGoal через call()
const score = footballer.scoreGoal;
score.call(footballer, 'Сиииии');

// Исправляем контекст для goToSubstitution через apply()
const substitute = footballer.goToSubstitution;
substitute.apply(footballer, ['Paulo Dibala']);

attack(); // Теперь работает корректно
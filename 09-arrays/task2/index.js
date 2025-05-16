function getSumOfSequence(number) {
    const sequence = [];
    for (let i = 1; i <= number; i++) {
        sequence.push(i);
    }
    return sequence[0] + sequence[sequence.length - 1];
}

const sumOfSequence = getSumOfSequence(5) // 6 ([1, 2, 3, 4, 5], 1+5=6)
console.log(sumOfSequence);
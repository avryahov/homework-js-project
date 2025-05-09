function runCode() {
    console.log('before promise');
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Zero Promise');
            resolve();
        }, 0);
    });
}
setTimeout(() => {
    console.log('Zero');
}, 0);
runCode().then(() => console.log('Zero Promise Invoked'));
console.log('One');

// before promise -> One -> Zero Promise Invoked -> Zero Promise -> Zero

// совсем иначе?!

// с треем по стэку разобрался, сначала логика внутри промиса, потом последовательные операции
// далее макрозадачи по таймауту/ я думал, что приоритет от промисов, а нет
// сначала идет макрозадача выше, потом внутри промиса, и лишь then
// о как! ясненько - реальные проекты проресечу, там стопудово такие подкорки есть, продебажу и отложиться
setTimeout(() => {
    console.log('setTimeout');
}, 0);
const promise = new Promise((resolve) => {
    console.log('Promise');
    resolve();
});
promise.then(() => {
    console.log('Promise resolve');
});
console.log('End');

// Promise -> Promise resolve -> End -> setTimeout

// приоритет у промиса, макрозадача попозже
// сначала внутри лог отработает, затем результат прописа, и после энд, и уже макрозадача


// однако увидел, что энд первее после запуска всегда, то есть операции в трее выполнятся приоритетнее, а уже потом then
// запомним
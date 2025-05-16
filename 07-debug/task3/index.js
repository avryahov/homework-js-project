// const salaryOfJuniorDeveloper = 500;
// const numberOfJuniorDevelopers = 3;
// let taxPercentage = 13;
// let totalJuniorDevelopersSalary;
//
// for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
//     const salaryWithTax = salaryOfJuniorDeveloper-(salaryOfJuniorDeveloper*taxPercentage/100);
//     totalJuniorDevelopersSalary += salaryWithTax;
// }
// console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);

// В данном коде totalJuniorDevelopersSalary выводите почему-то значение NaN.

const salaryOfJuniorDeveloper = 500;
const numberOfJuniorDevelopers = 3;
let taxPercentage = 13;
let totalJuniorDevelopersSalary = 0;

for (let i = 0; i < numberOfJuniorDevelopers; i += 1) {
    const salaryWithTax = salaryOfJuniorDeveloper - (salaryOfJuniorDeveloper * taxPercentage / 100);
    totalJuniorDevelopersSalary += salaryWithTax;
}
debugger;
console.log('totalJuniorDevelopersSalary', totalJuniorDevelopersSalary);
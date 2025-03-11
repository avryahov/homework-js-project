let age = 33;
console.log(Number(age), Boolean(age), String(age));

let name = "Alexander";
console.log(Number(name), Boolean(name), String(name));

let isStudent = true;
console.log(Number(isStudent), Boolean(isStudent), String(isStudent));

let empty = null;
console.log(Number(empty), Boolean(empty), String(empty));

let notDefined;
console.log(Number(notDefined), Boolean(notDefined), String(notDefined));

let person = {firstName: name, languages: ["JavaScript", "Java"]};
console.log(Number(person), Boolean(person), String(person));

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber));

let id = Symbol("Identifier");
console.log(Boolean(id), String(id));
// console.log(Number(id), Boolean(id), String(id)); // throw exception
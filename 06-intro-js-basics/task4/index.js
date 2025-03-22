const message = 'Введите имя студента!';
for (let i = 0; i < 3; i += 1) {
    let newStudent = prompt(message + " (FOR)");
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`);
    }
}
// ---------------------------------------------------------------------------------------
i = 0;
while (i < 3) {
    let newStudent = prompt(message + " (WHILE-DO)");
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`);
    }
    i++;
}
// ---------------------------------------------------------------------------------------
i = 0;
do {
    let newStudent = prompt(message + " (DO-WHILE)");
    if (newStudent) {
        newStudent = newStudent.trim();
        alert(`Добро пожаловать, ${newStudent}!`);
    }
    i++;
} while (i < 3);
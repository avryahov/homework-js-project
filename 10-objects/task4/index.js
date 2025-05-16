const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
}

function giveJobToStudent(student, jobName) {
    const updatedStudent = {...student, job: jobName};
    alert(`Поздравляем! У студента ${student.fullName} появилась новая работа! Теперь он ${jobName}`);

    return updatedStudent;
}

const updatedStudent = giveJobToStudent(student, 'веб-разработчик');
console.log(updatedStudent);
/*
updatedStudent = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    job: 'веб-разработчик',
}
*/
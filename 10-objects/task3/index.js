const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
}

function handleObject(obj, key, option) {
    switch (option) {
        case 'get':
            return obj[key];
        case 'add':
            obj[key] = "";
            return obj;
        case 'delete':
            delete obj[key]; // Ухты! Всё больше интересных фишек, по сравнению с Java. Куда гибче. Это факт!
            return obj;
        default:
            return obj;
    }
}

const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result); // { name: 'Maxim' }
const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
];

function createTaskElement(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.setAttribute('data-task-id', task.id);

    const mainContainer = document.createElement('div');
    mainContainer.className = 'task-item__main-container';

    const mainContent = document.createElement('div');
    mainContent.className = 'task-item__main-content';

    const checkboxForm = document.createElement('form');
    checkboxForm.className = 'checkbox-form';

    const checkboxInput = document.createElement('input');
    checkboxInput.className = 'checkbox-form__checkbox';
    checkboxInput.type = 'checkbox';
    checkboxInput.id = `task-${task.id}`;

    const checkboxLabel = document.createElement('label');
    checkboxLabel.htmlFor = `task-${task.id}`;

    checkboxForm.append(checkboxInput, checkboxLabel);

    const taskText = document.createElement('span');
    taskText.className = 'task-item__text';
    taskText.textContent = task.text;

    mainContent.append(checkboxForm, taskText);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'task-item__delete-button default-button delete-button';
    deleteButton.textContent = 'Удалить';

    mainContainer.append(mainContent, deleteButton);
    taskItem.append(mainContainer);

    return taskItem;
}

const tasksList = document.querySelector('.tasks-list');

tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    tasksList.append(taskElement);
});
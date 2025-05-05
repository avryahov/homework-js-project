const tasks = [
    {
        id: "1138465078061",
        completed: false,
        text: "Посмотреть новый урок по JavaScript",
    },
    {
        id: "1138465078062",
        completed: false,
        text: "Выполнить тест после урока",
    },
    {
        id: "1138465078063",
        completed: false,
        text: "Выполнить ДЗ после урока",
    },
];

function createTaskElement(taskId, taskText) {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.dataset.taskId = taskId;

    const mainContainer = document.createElement("div");
    mainContainer.className = "task-item__main-container";

    const mainContent = document.createElement("div");
    mainContent.className = "task-item__main-content";

    const checkboxForm = document.createElement("form");
    checkboxForm.className = "checkbox-form";

    const checkboxInput = document.createElement("input");
    checkboxInput.className = "checkbox-form__checkbox";
    checkboxInput.type = "checkbox";
    const inputId = `task-${taskId}`;
    checkboxInput.id = inputId;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.htmlFor = inputId;

    checkboxForm.append(checkboxInput, checkboxLabel);

    const taskItemText = document.createElement("span");
    taskItemText.className = "task-item__text";
    taskItemText.textContent = taskText;

    mainContent.append(checkboxForm, taskItemText);

    const deleteButton = document.createElement("button");
    deleteButton.className = "task-item__delete-button default-button delete-button";
    deleteButton.textContent = "Удалить";

    mainContainer.append(mainContent, deleteButton);
    taskItem.append(mainContainer);

    return taskItem;
}

const tasksList = document.querySelector(".tasks-list");

tasks.forEach(task => {
    const taskElement = createTaskElement(task.id, task.text);
    tasksList.append(taskElement);
});

const createTaskForm = document.querySelector('.create-task-block');
const createTaskInput = document.querySelector('.create-task-block__input');

function showErrorMessage(message) {
    let errorBlock = createTaskForm.querySelector('.error-message-block');

    if (!errorBlock) {
        errorBlock = document.createElement('span');
        errorBlock.className = 'error-message-block';
        createTaskForm.appendChild(errorBlock);
    }

    errorBlock.textContent = message;
}

function hideErrorMessage() {
    const errorBlock = createTaskForm.querySelector('.error-message-block');
    if (errorBlock) {
        errorBlock.remove();
    }
}

createTaskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Отключаем стандартное поведение формы

    const newTaskText = createTaskInput.value.trim();

    if (!newTaskText) {
        showErrorMessage('Название задачи не должно быть пустым');
        return;
    }

    const isDuplicate = tasks.some(task => task.text.toLowerCase() === newTaskText.toLowerCase());
    if (isDuplicate) {
        showErrorMessage('Задача с таким названием уже существует.');
        return;
    }

    hideErrorMessage();

    const newTaskId = Date.now().toString();

    const newTask = {
        id: newTaskId,
        completed: false,
        text: newTaskText
    };

    tasks.push(newTask);
    createTaskInput.value = '';

    const taskElement = createTaskElement(newTaskId, newTaskText);
    tasksList.append(taskElement);
});
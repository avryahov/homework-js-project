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


function createDeleteModal() {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay modal-overlay_hidden';

    const modal = document.createElement('div');
    modal.className = 'delete-modal';

    const question = document.createElement('p');
    question.className = 'delete-modal__question';
    question.textContent = 'Вы действительно хотите удалить эту задачу?';

    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'delete-modal__buttons';

    const cancelButton = document.createElement('button');
    cancelButton.className = 'delete-modal__button';
    cancelButton.textContent = 'Отмена';

    const confirmButton = document.createElement('button');
    confirmButton.className = 'delete-modal__button delete-modal__confirm-button';
    confirmButton.textContent = 'Удалить';

    buttonsContainer.append(cancelButton, confirmButton);
    modal.append(question, buttonsContainer);
    overlay.append(modal);

    return overlay;
}

const body = document.querySelector('body');
const deleteModal = createDeleteModal();
body.appendChild(deleteModal);

let taskIdToDelete = null;

function openDeleteModal(taskId) {
    taskIdToDelete = taskId;
    deleteModal.classList.remove('modal-overlay_hidden');
}

function closeDeleteModal() {
    deleteModal.classList.add('modal-overlay_hidden');
    taskIdToDelete = null;
}

deleteModal.addEventListener('click', function(event) {
    if (event.target.textContent === 'Отмена') {
        closeDeleteModal();
    } else if (event.target.textContent === 'Удалить') {
        if (taskIdToDelete) {
            const taskIndex = tasks.findIndex(task => task.id === taskIdToDelete);
            if (taskIndex > -1) {
                tasks.splice(taskIndex, 1);
            }

            const taskElement = document.querySelector(`[data-task-id="${taskIdToDelete}"]`);
            if (taskElement) {
                taskElement.remove();
            }

            closeDeleteModal();
        }
    }
});

tasksList.addEventListener('click', function(event) {
    if (event.target.classList.contains('task-item__delete-button')) {
        const taskItem = event.target.closest('.task-item');
        const taskId = taskItem.dataset.taskId;

        openDeleteModal(taskId);
    }
});

let isDarkTheme = false;

function applyTheme() {
    document.body.style.background = isDarkTheme ? '#24292E' : 'initial';

    const taskItems = document.querySelectorAll('.task-item');
    taskItems.forEach(taskItem => {
        taskItem.style.color = isDarkTheme ? '#ffffff' : 'initial';
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.border = isDarkTheme ? '1px solid #ffffff' : 'none';
    });
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        event.preventDefault(); // Отключаем стандартное поведение Tab (переход по полям)

        isDarkTheme = !isDarkTheme;
        applyTheme();
    }
});
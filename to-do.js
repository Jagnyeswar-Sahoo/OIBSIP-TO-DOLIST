const  taskInput = document.getElementById('taskInput');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.onclick = () => completeTask(taskItem);

    taskItem.appendChild(completeButton);
    pendingTasksList.appendChild(taskItem);

    taskInput.value = '';
}

function completeTask(taskItem) {
    pendingTasksList.removeChild(taskItem);
    completedTasksList.appendChild(taskItem);
}


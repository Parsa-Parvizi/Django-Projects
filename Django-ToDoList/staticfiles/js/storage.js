document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.querySelector('.todo-list');

    // Load tasks from local storage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const todoItem = createTodoItem(task.title, task.isCompleted);
            todoList.appendChild(todoItem);
        });
    };

    // Save tasks to local storage
    const saveTasks = () => {
        const tasks = [];
        todoList.querySelectorAll('.todo-item').forEach(item => {
            const title = item.querySelector('.todo-title').innerText;
            const isCompleted = item.classList.contains('completed');
            tasks.push({ title, isCompleted });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Create a new todo item
    const createTodoItem = (title, isCompleted) => {
        const item = document.createElement('div');
        item.classList.add('todo-item', isCompleted ? 'completed' : '');
        item.innerHTML = `
            <span class="todo-title">${title}</span>
            <button class="delete-button">Delete</button>
        `;
        item.querySelector('.delete-button').addEventListener('click', function() {
            item.remove();
            saveTasks();
        });
        return item;
    };

    loadTasks();

    // Add event listeners for adding new tasks
    document.querySelector('.add-todo-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const title = this.querySelector('input[name="title"]').value;
        const todoItem = createTodoItem(title, false);
        todoList.appendChild(todoItem);
        this.reset();
        saveTasks();
    });
});
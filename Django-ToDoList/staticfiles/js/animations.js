document.addEventListener('DOMContentLoaded', function() {
    const todoItems = document.querySelectorAll('.todo-item');

    todoItems.forEach(item => {
        item.style.opacity = 0;
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transition = 'opacity 0.5s ease-in-out';
        }, 100);
    });

    const addTodoItem = (item) => {
        item.style.opacity = 0;
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transition = 'opacity 0.5s ease-in-out';
        }, 100);
    };

    const removeTodoItem = (item) => {
        item.style.opacity = 0;
        setTimeout(() => {
            item.remove();
        }, 500);
    };

    document.querySelector('.todo-list').addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-button')) {
            const item = e.target.closest('.todo-item');
            removeTodoItem(item);
        }
    });
});
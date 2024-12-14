document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-button');
    const todoItems = document.querySelectorAll('.todo-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filter = this.dataset.filter;

            todoItems.forEach(item => {
                const isCompleted = item.classList.contains('completed');
                if (filter === 'all' || (filter === 'completed' && isCompleted) || (filter === 'active' && !isCompleted)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
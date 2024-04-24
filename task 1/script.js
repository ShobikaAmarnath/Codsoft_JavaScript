document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo-btn');

    addTodoBtn.addEventListener('click', function() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const todoItem = document.createElement('li');
            todoItem.className = 'todo-item';
            todoItem.innerHTML = `
                <input type="checkbox">
                <span>${todoText}</span>
                <button class="delete-todo">Delete</button>
            `;
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    });

    todoList.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('delete-todo')) {
            event.target.parentNode.remove();
        }
    });

    todoList.addEventListener('change', function(event) {
        if (event.target && event.target.type === 'checkbox') {
            const todoItem = event.target.parentNode;
            if (event.target.checked) {
                todoItem.classList.add('completed');
            } else {
                todoItem.classList.remove('completed');
            }
        }
    });
});
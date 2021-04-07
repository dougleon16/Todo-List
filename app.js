//  /**------------------------------------------------------------------------
/*todo                         TODO LIST APP
 *------------------------------------------------------------------------**/

// SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.filter-todo')


// FUNCTIONS
var addTodo = (event) => {
    event.preventDefault();
    // CREATE A DIV ELEMENT
    const todoDiv = document.createElement('DIV');
    todoDiv.classList.add('todo');

    // CREATE A LI ELEMENT
    const newTodo = document.createElement('LI');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    // APPPEND  LI TO DIV
    todoDiv.appendChild(newTodo)
    todoInput.value = "";

    // COMPLETE BUTTON
    const completeButton = document.createElement('BUTTON');
    completeButton.innerHTML = '<i class="fas fa-check"></i>'
    completeButton.classList.add('complete-btn')
        // APPEND COOMPLETE BUTTON TO DIV
    todoDiv.appendChild(completeButton)

    // Trash BUTTON
    const trashButton = document.createElement('BUTTON');
    trashButton.innerHTML = '<i class="fas fa-trash" ></i>'
    trashButton.classList.add('trash-btn')

    // APPEND TRASH BUTTON TO DIV
    todoDiv.appendChild(trashButton)
        // APPEND DIV LI TO UL
    todoList.appendChild(todoDiv)
}


// function DELETECHECK
var deleteCheck = (e) => {
    // target DELETE
    const item = e.target
        // TRASH BUTTON
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
            // ANIMATION
        todo.classList.add('fall')
        todo.addEventListener('transitionend', () => {
            todo.remove();

        });

    }
    //  
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed')

    }
}

// FILTER MODE
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
        }
    });
}


// EVENLISTENERS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck)
filterOptions.addEventListener('click', filterTodo)
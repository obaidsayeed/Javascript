'use strict'
// Fetching the existing todos from localstorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('user')
    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return [];
    }
}

// Save todos to localstorage
const saveTodos = (todos) => {
    localStorage.setItem('user', JSON.stringify(todos));
}

// const sortTodos = function(todos, sortBy) {
//     if (sortBy === 'byEdited') {
//         return todos.sort(function(a, b) {
//             if (a.updateAt > b.updateAt) {
//                 return -1
//             } else if (a.updateAt < b.updateAt) {
//                 return 1;
//             } else {
//                 return 0;
//             }
//         })
//     }
// }

//Remove a todo from the list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((note) => note.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

const checkTodo = function(id) {
    const findTodo = todos.find((todo) => todo.id === id)

    if (findTodo) {
        // checkbox.checked = !findTodo.completed;
        findTodo.completed = !findTodo.completed;
    }
    return findTodo.completed
}

// render Todos
const renderTodos = (todos, filters) => {
    // let filterTodos = todos.filter(function(todo) {
    //   return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    // })
    // todos = sortTodos(todos, filters.sortBy)

    document.querySelector('#myTodos').innerHTML = ''

    todos.forEach(function(todo) {
        document.querySelector('#myTodos').appendChild(generateTodoDOM(todo))
    })
}

const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const p = document.createElement('a');
    const button = document.createElement('button');
    // Setup the checkbox
    checkbox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkbox);
    checkbox.addEventListener('change', () => {
        checkTodo(todo.id);

        saveTodos(todos);
        //renderTodos(todos);
    })

    p.setAttribute('href', `edit.html#${todo.id}`)
        // location.assign(`edit.html#${todo.id}`)
        // Setup the text content of span 
    if (todo.text.length > 0) {
        p.textContent = todo.text;
    } else {
        p.textContent = 'Unamed Note';
    }
    todoEl.appendChild(p);

    button.textContent = 'x';
    todoEl.appendChild(button);
    button.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos);
    })
    return todoEl;
}
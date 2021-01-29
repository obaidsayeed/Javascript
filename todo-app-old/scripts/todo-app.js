let todos = getSavedTodos();

const filters = {
    sortBy: 'byEdited'
}


renderTodos(todos, filters);
// document.querySelector('#newTodo').addEventListener('input', function(e) {
// filters.searchText = e.target.value
//  renderTodos(todos, filters)
// })


document.querySelector('#newTodo').addEventListener('submit', function(e) {
    e.preventDefault();
    const text = e.target.elements.todos.value.trim();
    const id = uuidv4();
    const timeStamp = moment().valueOf();
    if (text.length > 0) {
        todos.push({
            id: id,
            text: text,
            completed: false,
            createAt: timeStamp,
            updateAt: timeStamp
        })
        saveTodos(todos);
        renderTodos(todos, filters)
        e.target.elements.todos.value = '';
        location.assign(`edit.html#${id}`);
    }
})

//document.querySelector('#completed').addEventListener('change', function(e) {
//  e.target.checked
//})

window.addEventListener('storage', function(e) {
    if (e.key = 'todos') {
        todos = JSON.parse(e.newValue)
        renderTodos(todos, filters)
    }
})

document.querySelector('#my-Dropdown').addEventListener('change', function(e) {
    filters.sortBy = e.target.value;
    renderTodos(todos, filters);
})
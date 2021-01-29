const todoId = location.hash.substring(1);
let todos = getSavedTodos();
let todo = todos.find(function(todo) {
    return todo.id === todoId;
})

if (todo === undefined) {
    location.assign('index.html')
}
document.querySelector('#todo-title').value = todo.text;
document.querySelector('#todo-body').value = todo.completed;

document.querySelector('#todo-title').addEventListener('input', function(e) {
    todo.text = e.target.value;
    todo.updateAt = moment().valueOf();
    document.querySelector('#edited').textContent = `last update was  ${moment(todo.updateAt).fromNow()}`;
    saveTodos(todos);

})

document.querySelector('#todo-body').addEventListener('input', function(e) {
    todo.completed = e.target.value;
    todo.updateAt = moment().valueOf();
    document.querySelector('#edited').textContent = `last update was  ${moment(todo.updateAt).fromNow()}`;
    saveTodos(todos);

})
document.querySelector("#remove-todo").addEventListener('click', function(e) {
    removeTodo(todo.id);
    saveTodos(todos);
    location.assign('index.html')
})


window.addEventListener('storage', function(e) {
    if (e.key = 'todos') {
        todos = JSON.parse(e.newValue);
        todo = todos.find(function(todo) {
            return todo.id === todoId;
        })
        if (todo === undefined) {
            location.assign('index.html')
        }
        document.querySelector('#todo-title').value = todo.text;
        document.querySelector('#todo-body').value = todo.completed;
        document.querySelector('#edited').textContent = `last update was  ${moment(todo.updateAt).fromNow()}`;
        //console.log(todo)
    }
})
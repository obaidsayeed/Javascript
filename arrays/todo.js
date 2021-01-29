//Creating an array with 3 objects
const todos = [{
    text: 'Order food',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Sell food',
    completed: false
}];

const sortsTodos = function(todos) {
    todos.sort(function(a, b) {
        if (a.completed === false && b.completed === true) {
            return -1;
        } else if (a.completed === true && b.completed === false) {
            return 1;
        } else {
            return 0;
        }
    })
}

sortsTodos(todos);
console.log(todos);

//const deleteTodo = function(todos, todoText) {
//  const index = todos.findIndex(function(todo) {
//    return todo.text.toLowerCase() === todoText.toLowerCase();
//})

//if (index > -1) {
//  todos.splice(index, 1);
//}
//}

//console.log(deleteTodo(todos, 'Buy food'));
//console.log(todos);

//const getThingsTodo = function(todos) {
//  return todos.filter(function(todo) {
//    return todo.completed === false;
// })
//}
//console.log(getThingsTodo(todos));

//todos.forEach(function(todos, index) {
//console.log(`${index + 1}. ${todos}`);
//})

//for (let i = 0; i < todos.length; i++) {
//  console.log(`${i + 1}. ${todos[i]}`);
//}
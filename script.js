var todos: [];

var displayTodos = function() {
  console.log('My Todos:', todos);
},

var addTodo = function(value) {
  todos.push(value);
  displayTodos();
},

var changeTodo = function(position, newValue) {
  todos[position] = newValue;
  displayTodos();
},

var deleteTodo = function(position) {
  todos.splice(position, 1);
  displayTodos();
}

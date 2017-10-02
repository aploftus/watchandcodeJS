var todoList = {
  todos: [],

  displayTodos: function() {
    console.log('My Todos:', this.todos);
  },
  addTodo: function(value) {
    this.todos.push(value);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
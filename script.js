var todoList = {
  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      console.log('My Todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          console.log('(x) ' + this.todos[i].todoText);
        } else {
          console.log('( ) ' + this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var completedTodos = 0;
    var totalTodos = this.todos.length;
    for (var i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed) {
        completedTodos ++;
      }
    }
    // if everything is true, make everything false
    if (completedTodos === totalTodos) {
      for (var k = 0; k < this.todos.length; k++) {
        this.todos[k].completed = false;
      }
    } else {
      for (var m = 0; m < this.todos.length; m++) {
        this.todos[m].completed = true;
      }
    }
    this.displayTodos();
  }
};

var handlers = {
  displayTodos: function() {
    todoList.displayTodos()
  },
  toggleAll: function() {
    todoList.toggleAll()
  },
  addTodo: function() {
    var input = document.getElementById('add-todo-input');
    if (input.value) {
      todoList.addTodo(input.value);
      input.value = '';
    }
  },
  changeTodo: function() {
    var position = document.getElementById('change-todo-position');
    var input = document.getElementById('change-todo-text');
    if (input.value) {
      todoList.changeTodo(position.valueAsNumber, input.value);
      input.value = '';
      position.value = '';
    }
  },
  deleteTodo: function() {
    var position =  document.getElementById('delete-todo-position');
    todoList.deleteTodo(position.valueAsNumber);
    position.value = '';
  },
  toggleCompleted: function() {
    var position =  document.getElementById('toggle-todo-position');
    todoList.toggleCompleted(position.valueAsNumber);
    position.value = '';
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
}


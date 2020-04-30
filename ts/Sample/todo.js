//-------------------------------------------------------------------------------
var Todo = /** @class */ (function () {
    function Todo(title) {
        this.id = 0;
        this.completed = false;
        Todo.idx++;
        this.id = Todo.idx;
        this.title = title;
    }
    Todo.prototype.getId = function () { return this.id; };
    Todo.prototype.setTitle = function (title) {
        if (title)
            this.title = title;
    };
    Todo.prototype.getTitle = function () {
        return this.title;
    };
    Todo.prototype.toggleComplete = function () {
        this.completed = !this.completed;
    };
    Todo.prototype.setCompleted = function (b) {
        this.completed = b;
    };
    Todo.prototype.isCompleted = function () {
        return this.completed;
    };
    Todo.idx = 0;
    return Todo;
}());
//-------------------------------------------------------------------------------
var TodoService = /** @class */ (function () {
    function TodoService() {
        this.todos = [];
    }
    TodoService.prototype.addTodo = function (title) {
        var newTodo = new Todo(title);
        this.todos.push(newTodo);
    };
    TodoService.prototype.editTodo = function (id, newTitle) {
        var todo = this.todos[id];
        todo.setTitle(newTitle);
    };
    TodoService.prototype.completeTodo = function (id) {
        var todo = this.todos[id];
        todo.toggleComplete();
    };
    TodoService.prototype.deleteTodo = function (id) {
        // let todoIdx = this.todos.findIndex(todo => todo.getId() === id)
        this.todos.splice(id, 1);
    };
    TodoService.prototype.clearCompleted = function () {
        for (var i = 0; i < this.todos.length; i++) {
            var todo = this.todos[i];
            if (todo.isCompleted)
                this.todos.splice(i, 1);
        }
    };
    TodoService.prototype.completeAll = function () {
        var areAllCompleted = this.todos.every(function (todo) { return todo.isCompleted(); });
        for (var i = 0; i < this.todos.length; i++) {
            var todo = this.todos[i];
            todo.setCompleted(!areAllCompleted);
        }
    };
    TodoService.prototype.viewTodos = function (flag) {
        if (flag === "ALL")
            this.todos.forEach(function (todo) { return console.log(todo); });
    };
    return TodoService;
}());
var todoService = new TodoService();

console.log("Todo List in JavaScript")
    //Todo Application in console
    // Model / data
class Todo {
    constructor(title) {
        Todo.idx++
            this.id = Todo.idx
        this.title = title
        this.completed = false
    }
}
Todo.idx = 0;

// service
class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title)
        this.todos = this.todos.concat(newTodo)
    }
    editTodo(id, newTitle) {
        // let editableTodo = this.todos.find(todo => todo.id === id)
        let editableTodo = this.todos[id]
        editableTodo.title = newTitle
    }
    completeTodo(id) {
        let todo = this.todos[id]
        todo.completed = true
    }
    deleteTodo(id) {
        this.todos.splice(id, 3)
    }
    clearCompleted() {
        for (let id = 0; id < this.todos.length; id++) {
            if (this.todos[id].completed)
                this.todos.splice(id, 1)
        }
    }
    compelteAll() {
        const allTodos = this.todos.length;
        let completedTodos = 0;

        for (let i = 0; i < allTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        if (completedTodos === allTodos) {
            for (let i = 0; i < allTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (let i = 0; i < allTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
    viewTodos(flag) {
        if (flag === "ALL")
            this.todos.forEach(todo => console.log(todo))
    }
}
let service = new TodoService();
service.addTodo("go to BLT")
service.addTodo("go to ROOM")
service.addTodo("go to discussion room")
service.addTodo("go to project room")
service.addTodo("go to Training room")
service.viewTodos('ALL')
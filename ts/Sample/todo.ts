

//-------------------------------------------------------------------------------

class Todo {
    private static idx = 0
    private id: number = 0
    private title: string
    private completed: boolean = false
    constructor(title: string) {
        Todo.idx++
        this.id = Todo.idx
        this.title = title
    }
    getId() { return this.id }
    setTitle(title) {
        if (title) this.title = title
    }
    getTitle() {
        return this.title
    }
    toggleComplete() {
        this.completed = !this.completed
    }
    setCompleted(b: boolean) {
        this.completed = b
    }
    isCompleted() {
        return this.completed
    }
}


//-------------------------------------------------------------------------------

class TodoService {

    todos: Array<Todo>=[]

    addTodo(title: string): void {
        const newTodo = new Todo(title)
        this.todos.push(newTodo)
    }
    editTodo(id: number, newTitle: string) {
        let todo = this.todos[id]
        todo.setTitle(newTitle)
    }
    completeTodo(id: number) {
        let todo = this.todos[id]
        todo.toggleComplete()
    }
    deleteTodo(id: number) {
        // let todoIdx = this.todos.findIndex(todo => todo.getId() === id)
        this.todos.splice(id, 1)
    }
    clearCompleted() {
        for (let i = 0; i < this.todos.length; i++) {
            let todo = this.todos[i]
            if (todo.isCompleted) this.todos.splice(i, 1)
        }
    }
    completeAll() {
        let areAllCompleted = this.todos.every(todo => todo.isCompleted())
        for (let i = 0; i < this.todos.length; i++) {
            let todo = this.todos[i]
            todo.setCompleted(!areAllCompleted)
        }
    }
    viewTodos(flag: string) {
        if (flag === "ALL")
            this.todos.forEach(todo => console.log(todo))
    }

}

const todoService = new TodoService()







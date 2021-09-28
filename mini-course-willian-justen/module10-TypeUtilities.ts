type Todo = {
  title: string
  description: string
  completed: boolean
}

// Readonly
const todo: Readonly<Todo> = {
  title: 'Write TypeScript',
  description: 'Learn TypeScript',
  completed: false,
}

console.log(todo)

//todo.completed = true

// Partial
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, {
  title: 'Learn TypeScript',
  description: 'Learn TypeScript',
  completed: true,
})

console.log(todo2)

// Pick
type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo3: TodoPreview = {
  title: 'Write TypeScript',
  completed: false,
}

// Omit
type TodoPreview2 = Omit<Todo, 'description'>

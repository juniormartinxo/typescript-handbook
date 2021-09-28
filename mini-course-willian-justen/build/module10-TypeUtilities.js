"use strict";
// Readonly
const todo = {
    title: 'Write TypeScript',
    description: 'Learn TypeScript',
    completed: false,
};
console.log(todo);
//todo.completed = true
// Partial
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updateTodo(todo, {
    title: 'Learn TypeScript',
    description: 'Learn TypeScript',
    completed: true,
});
console.log(todo2);
const todo3 = {
    title: 'Write TypeScript',
    completed: false,
};

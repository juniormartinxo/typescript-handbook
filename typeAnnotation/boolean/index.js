"use strict";
// How it's done in Javascript
/**
 * let taskCompleted = true;
 */
// How it's done in Typescript
let taskCompleted = true;
console.log(taskCompleted);
//return: boolean
console.log(typeof taskCompleted);
if (typeof taskCompleted === 'boolean') {
    console.log('taskCompleted is a boolean');
}
else {
    console.log('taskCompleted is not a boolean, message_2 is a ' + typeof message_1);
}
console.log('-------------x-------------');
/*
// How it's done in Typescript
let incompleteTask: boolean = 'false';

console.log(incompleteTask);

//return: string
console.log(typeof incompleteTask);

if (typeof incompleteTask === 'boolean') {
  console.log('incompleteTask is a boolean');
} else {
  console.log(
    'incompleteTask is not a boolean, incompleteTask is a ' + typeof message_1
  );
}
*/

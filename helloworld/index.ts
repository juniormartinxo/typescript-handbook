// How it's done in Javascript
/**
 * let message = "Hello World";
 */

// How it's done in Typescript
let message_1: string = 'Hello world';

console.log(message_1);

//return: string
console.log(typeof message_1);

if (typeof message_1 === 'string') {
  console.log('message_1 is a string');
} else {
  console.log('message_1 is not a string, message_2 is a ' + typeof message_1);
}

console.log('-------------x-------------');

// Error: incorrect type
let message_2: string = 43110;

console.log(message_2);

//return: number
console.log(typeof message_2);

if (typeof message_2 === 'string') {
  console.log('message_2 is a string');
} else {
  console.log('message_2 is not a string, message2 is a ' + typeof message_2);
}

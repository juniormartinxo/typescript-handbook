// How it's done in Javascript
/**
 * let myName = "Junior Martins";
 */

// How it's done in Typescript
let myName: string = 'Junior Martins';

console.log(myName);

//return: string
console.log(typeof myName);

if (typeof myName === 'string') {
  console.log('myName is a string');
} else {
  console.log('myName is not a string, myName is a ' + typeof myName);
}

console.log('-------------x-------------');

/*
// Error: incorrect type
let myNameIncorrectType: string = 43110;

console.log(myNameIncorrectType);

//return: number
console.log(typeof myNameIncorrectType);

if (typeof myNameIncorrectType === 'string') {
  console.log('myNameIncorrectType is a string');
} else {
  console.log(
    'myNameIncorrectType is not a string, myNameIncorrectType is a ' +
      typeof myNameIncorrectType
  );
}
*/

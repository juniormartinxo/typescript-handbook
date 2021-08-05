// How it's done in Javascript
/**
 * let simpleNumber = 15897; // number
 * let hexadecimalNumber = 0x3e19; // hexadecimal
 * let octalNumber = 0o37031; // octal
 * let binaryNumber = 0b11111000011001; // octal
 */

// How it's done in Typescript
let simpleNumber = 15897;
console.log('Number: ' + simpleNumber);
// return: number
console.log(typeof simpleNumber);

if (typeof simpleNumber === 'number') {
  console.log('simpleNumber is a number');
} else {
  console.log(
    'simpleNumber is not a number, simpleNumber is a ' + typeof simpleNumber
  );
}

console.log('-------------x-------------');

let hexadecimalNumber = 0x3e19;
console.log('Hexadecimal number: ' + hexadecimalNumber);
// return: number
console.log(typeof hexadecimalNumber);

if (typeof hexadecimalNumber === 'number') {
  console.log('hexadecimalNumber is a number');
} else {
  console.log(
    'hexadecimalNumber is not a number, hexadecimalNumber is a ' +
      typeof hexadecimalNumber
  );
}

console.log('-------------x-------------');

let octalNumber = 0o37031;
console.log('Octal number: ' + octalNumber);
// return: number
console.log(typeof octalNumber);

if (typeof octalNumber === 'number') {
  console.log('octalNumber is a number');
} else {
  console.log(
    'octalNumber is not a number, octalNumber is a ' + typeof hexadecimalNumber
  );
}

console.log('-------------x-------------');

let binaryNumber = 0b11111000011001;
console.log('Binary number: ' + binaryNumber);
// return: number
console.log(typeof binaryNumber);

if (typeof octalNumber === 'number') {
  console.log('binaryNumber is a number');
} else {
  console.log(
    'binaryNumber is not a number, binaryNumber is a ' +
      typeof hexadecimalNumber
  );
}

console.log('-------------x-------------');

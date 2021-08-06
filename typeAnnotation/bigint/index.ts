// How it's done in Javascript
/**
 * let simpleNumber = 15897987654321987654321000000000n; // number
 * let hexadecimalNumber = 0x3e19987654321987654321000000000n; // hexadecimal
 * let octalNumber = 0o37031987654321987654321000000000n; // octal
 * let binaryNumber = 0b11111000011001987654321987654321000000000n; // octal
 */

// How it's done in Typescript
let simpleNumberBigint = 15897987654321987654321000000000n;
console.log('Number: ' + simpleNumberBigint);
// return: number
console.log(typeof simpleNumberBigint);

if (typeof simpleNumberBigint === 'number') {
  console.log('simpleNumberBigint is a number');
} else {
  console.log(
    'simpleNumberBigint is not a number, simpleNumberBigint is a ' + typeof simpleNumberBigint
  );
}

console.log('-------------x-------------');

let hexadecimalNumberBigint = 0x3e19987654321987654321000000000n;
console.log('HexadecimalBigint number: ' + hexadecimalNumberBigint);
// return: number
console.log(typeof hexadecimalNumberBigint);

if (typeof hexadecimalNumberBigint === 'number') {
  console.log('hexadecimalNumberBigint is a number');
} else {
  console.log(
    'hexadecimalNumberBigint is not a number, hexadecimalNumberBigint is a ' +
      typeof hexadecimalNumberBigint
  );
}

console.log('-------------x-------------');

let octalNumberBigint = 0o37031987654321987654321000000000n;
console.log('OctalNumberBigint number: ' + octalNumberBigint);
// return: number
console.log(typeof octalNumberBigint);

if (typeof octalNumberBigint === 'number') {
  console.log('octalNumberBigint is a number');
} else {
  console.log(
    'octalNumberBigint is not a number, octalNumberBigint is a ' + typeof octalNumberBigint
  );
}

console.log('-------------x-------------');

let binaryNumberBigint = 0b11111000011001987654321987654321000000000n;
console.log('binaryNumberBigint number: ' + binaryNumberBigint);
// return: number
console.log(typeof binaryNumberBigint);

if (typeof octalNumber === 'number') {
  console.log('binaryNumber is a number');
} else {
  console.log(
    'binaryNumber is not a number, binaryNumber is a ' +
      typeof hexadecimalNumber
  );
}

console.log('-------------x-------------');

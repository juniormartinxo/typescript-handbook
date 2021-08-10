"use strict";
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
if (typeof simpleNumberBigint === 'bigint') {
    console.log('simpleNumberBigint is a bigint');
}
else {
    console.log('simpleNumberBigint is not a bigint, simpleNumberBigint is a ' + typeof simpleNumberBigint);
}
console.log('-------------x-------------');
let hexadecimalNumberBigint = 0x3e19987654321987654321000000000n;
console.log('Hexadecimal bigint: ' + hexadecimalNumberBigint);
// return: number
console.log(typeof hexadecimalNumberBigint);
if (typeof hexadecimalNumberBigint === 'bigint') {
    console.log('hexadecimalNumberBigint is a bigint');
}
else {
    console.log('hexadecimalNumberBigint is not a bigint, hexadecimalNumberBigint is a ' +
        typeof hexadecimalNumberBigint);
}
console.log('-------------x-------------');
let octalNumberBigint = 0o37031;
987654321987654321000000000n;
console.log('OctalNumberBigint bigint: ' + octalNumberBigint);
// return: number
console.log(typeof octalNumberBigint);
if (typeof octalNumberBigint === 'bigint') {
    console.log('octalNumberBigint is a bigint');
}
else {
    console.log('octalNumberBigint is not a bigint, octalNumberBigint is a ' + typeof octalNumberBigint);
}
console.log('-------------x-------------');
let binaryNumberBigint = 0b11111000011001;
987654321987654321000000000n;
console.log('binaryNumberBigint bigint: ' + binaryNumberBigint);
// return: number
console.log(typeof binaryNumberBigint);
if (typeof binaryNumberBigint === 'bigint') {
    console.log('binaryNumberBigint is a bigint');
}
else {
    console.log('binaryNumberBigint is not a bigint, binaryNumber is a ' +
        typeof binaryNumberBigint);
}
console.log('-------------x-------------');

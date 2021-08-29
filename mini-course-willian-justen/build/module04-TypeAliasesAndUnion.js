"use strict";
function logDetails(uid, name, age) {
    console.log(`uid: ${uid}, Name: ${name}, Age: ${age}`);
}
function logInfoProduct(uid, description) {
    console.log(`uid: ${uid}, Description: ${description}`);
}
function renderPlatform(platform) {
    console.log(`Plataform: ${platform}`);
    return platform;
}
renderPlatform('Windows'); // no error
renderPlatform('Linux'); // no error
renderPlatform('Mac'); // no error
/*renderPlatform('Android') // error*/
logDetails(1, 'Willian', 30);
logInfoProduct(1, 'Laptop');

"use strict";
const iptNumber1 = document.getElementById('iptNum1');
const iptNumber2 = document.getElementById('iptNum2');
const button = document.getElementById('button');
function sum(a, b) {
    return a + b;
}
button.addEventListener('click', () => {
    console.log(sum(Number(iptNumber1.value), Number(iptNumber2.value)));
});

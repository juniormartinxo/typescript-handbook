const iptNumber1 = document.getElementById('iptNum1') as HTMLInputElement;
const iptNumber2 = document.getElementById('iptNum2') as HTMLInputElement;
const button = document.getElementById('button') as HTMLButtonElement;

function sum(a: number, b: number) {
  return a + b;
}

button.addEventListener('click', () => {
  console.log(sum(Number(iptNumber1.value), Number(iptNumber2.value)));
});

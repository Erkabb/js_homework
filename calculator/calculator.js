// let numofArr = [one, two, three, four, five, six, seven, eight, nine, zero];

// console.log("num:", numofArr[0]);
// function digitbtn() {
//   display.innerText = Number.parseInt("1");
// }
// function digitTwo() {
//   display.innerText = Number.parseInt("2");
// }
// function digitThree() {
//   display.innerText = Number.parseInt("3");
// }
// function equal() {
//   display.value = eval(display.value);
// }

// function digitbtn(input) {
//   display.value = display.value + input;
// }

// function digitDivide() {}

const display = document.getElementById("display");
const digitbtn = document.getElementsByClassName("digit")[0];
const operatorbtn = document.getElementsByClassName("operatorBtn")[0];

digitbtn = [];

digitbtn.addEventListener("click", function () {
  for (let i = 0; i < digitbtn.length; i++) {
    display.textContent.innerText = digitbtn.textContent;
  }
});

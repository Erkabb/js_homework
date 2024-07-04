const display = document.getElementById("display");
// let one = document.getElementById("one");
// let two = document.getElementById("two");
// let three = document.getElementById("three");
// let six = document.getElementById("four");
// let seven = document.getElementById("five");
// let eight = document.getElementById("eight");
// let nine = document.getElementById("nine");
// let zero = document.getElementById("zero");

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

function digitbtn(input) {
  display.value += input;
}
function equal() {
  display.value = eval(display.value);
}

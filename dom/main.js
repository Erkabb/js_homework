// document.getElementById("text").style.color = "green";
// document.getElementById("text").style.fontSize = "60px";
// document.getElementById("text").style.backgroundColor = "black";
// document.getElementById("text").textContent = "black";
// document.getElementById("text").innerText = "<h1>ttx</h1>";
// document.getElementById("text").innerHTML = "<h1>ttx</h1>";
const textEl = document.getElementById("text");

const myElement = document.createElement("h1");
myElement.textContent = "white";
document.getElementById("addelement").appendChild(myElement);
console.log(myElement);
const els = document.getElementsByClassName("demo");
console.log("el:", els[0].children);

function handleClick() {
  textEl.style.color = "green";
  textEl.style.backgroundColor = "black";
  textEl.style.fontSize = "60px";
  console.log("button ");
}

function change() {
  console.log("button clicked");
}

const btnEl = document.getElementById("btn");
console.log(btnEl);
btnEl.addEventListener("click", change);

function greeting(name) {
  `alert("hello", ${name})`;
}
function greetings(callback) {
  const name = prompt("your name:");
  callback(name);
}
greetings(greeting);

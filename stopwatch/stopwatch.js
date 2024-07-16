// const myInterval = setInterval(timer, 3600);
// function timer() {
//   const second = 0;
// }

let counter = 0;
let timeout;
let timer_on = 0;

function timedCount() {
  document.getElementById("time").value = counter;
  counter++;
  timeout = setTimeout(timedCount, 3600);
}

function startFunc() {
  if (!timer_on) {
    timer_on = 1;
    counter = 0;
    timedCount();
  }
}

function stopFunc() {
  clearTimeout(timeout);
  timer_on = 0;
}

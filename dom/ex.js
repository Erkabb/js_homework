const box = document.getElementById("con");
// const littleboxes = document.getElementById("box1");
// const littleboxes2 = document.getElementById("box2");
// const littleboxes3 = document.getElementById("box3");
// const littleboxes4 = document.getElementById("box4");
// const littleboxes5 = document.getElementById("box5");
// const littleboxes6 = document.getElementById("box6");
// const littleboxes7 = document.getElementById("box7");
// const littleboxes8 = document.getElementById("box8");
// const littleboxes9 = document.getElementById("box9");

const littleboxes = document.getElementsByClassName("box");
console.log(littleboxes);
const btnel = document.getElementById("button");

function generatecolor() {
  const rColor = Math.floor(Math.random() * 256);
  const gColor = Math.floor(Math.random() * 256);
  const bColor = Math.floor(Math.random() * 256);
  //   return "rgb(" + rColor + "," + gColor + "," + bColor + ")";
  return `rgb(${rColor}, ${gColor}, ${bColor})`;
}
function changeBcolor() {
  for (let i = 0; i < littleboxes.length; i++) {
    littleboxes[i].style.backgroundColor = generatecolor();
  }
  //   littleboxes2.style.backgroundColor = generatecolor();
  //   littleboxes3.style.backgroundColor = generatecolor();
  //   littleboxes4.style.backgroundColor = generatecolor();
  //   littleboxes5.style.backgroundColor = generatecolor();
  //   littleboxes6.style.backgroundColor = generatecolor();
  //   littleboxes7.style.backgroundColor = generatecolor();
  //   littleboxes8.style.backgroundColor = generatecolor();
  //   littleboxes9.style.backgroundColor = generatecolor();
}

btnel.addEventListener("click", changeBcolor);

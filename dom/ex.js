const box = document.getElementById("con");

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
}

btnel.addEventListener("click", changeBcolor);

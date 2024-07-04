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
  const div = document.createElement("div");
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.backgroundColor = generatecolor();

  document.getElementById("con").appendChild(div);
}

// function createBox(newBox) {
//   const div = document.createElement("div");
//   div.style.width = "100px";
//   div.style.height = "100px";
//   div.style.backgroundColor = "lightcoral";
//   div.style.innerHTML = "hi";
//   document.getElementById("con").appendChild(div);
//   return div;
// }
btnel.addEventListener("click", changeBcolor);

//const playbtn-document.getElementById("playbtn");
//playbtn.addEventListener("click", ()=>);
//const audio=document.getElementsByTagName("audio")[0];
//audio.src=""
// Audio.play();
// console.log("aud:", audio);

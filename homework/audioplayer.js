const playbutton = document.getElementById("playandpausebtn");
const audio = document.getElementById("audio");
const nextbtn = document.getElementById("next");
const playaud = document.getElementById("play");
const pauseaud = document.getElementById("pause");
const songTitle = document.getElementById("songTitle");
// playbutton.addEventListener("click", () => {
//   audio.play();
// });

const playlist = [
  {
    name: "Aluminum",
    src: "./audio/Roie Shpigler - Aluminum.mp3",
  },
  {
    name: "Pole Position",
    src: "./audio/Ace - Pole Position.mp3",
  },
];

let currentsong = 0;

playbutton.addEventListener("click", () => {
  console.log("aud:", audio.paused);
  if (audio.paused) {
    audio.play();
    playbutton.innerHTML = `<i id="pause" class="fa-solid fa-pause fa-2xl hide"></i>`;
    song;
    songTitle.textContent = playlist[currentsong].name;
    playaud.classList.add("hide");
    pauseaud.classList.remove("hide");
  } else {
    audio.pause();
    playbutton.innerHTML = `<i id="play" class="fa-solid fa-play fa-2xl"></i>`;

    playaud.classList.remove("hide");
    pauseaud.classList.add("hide");
  }
  console.log("audio:", audio);
});
// function playAud() {
//   playbutton.play();
// }
// function pauseAud() {
//   playbutton.pause();
// }
nextbtn.addEventListener("click", () => {
  currentsong++;
  if (currentsong === playlist.length) {
    currentsong = 0;
  }
  audio.src = playlist[currentsong].src;
  songTitle.textContent = playlist[currentsong].name;
  audio.play();
});

const playbutton = document.getElementById("playandpausebtn");
const audio = document.getElementById("audio");
const nextbtn = document.getElementById("next");
const playaud = document.getElementById("play");
const pauseaud = document.getElementById("pause");
const songTitle = document.getElementById("songTitle");
const songduration = document.getElementById("durationline");
const artistname = document.getElementById("artist");
const songIMG = document.getElementById("img");
let coverimg = "";
// playbutton.addEventListener("click", () => {
//   audio.play();
// });

const playlist = [
  {
    artist: "Roie Shpigler",
    name: "Aluminum",
    src: "./audio/Roie Shpigler - Aluminum.mp3",
    coverIMG:
      "https://images.unsplash.com/photo-1719145177916-1b19e965af72?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Ace",
    name: "Pole Position",
    src: "./audio/Ace - Pole Position.mp3",
    coverIMG:
      "https://images.unsplash.com/photo-1719244720568-40136cd0b36e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5Mnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    artist: "Rex Banner",
    name: "Human",
    src: "./audio/Rex Banner - Human.mp3",
    coverIMG:
      "https://images.unsplash.com/photo-1719242086474-426087b8e0d3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3Ds",
  },
];

let currentsong = 0;

playbutton.addEventListener("click", () => {
  console.log("aud:", audio.paused);
  if (audio.paused) {
    audio.play();
    playbutton.innerHTML = `<i id="pause" class="fa-solid fa-pause fa-2xl hide"></i>`;

    songTitle.textContent = playlist[currentsong].name;
    playaud.classList.add("hide");
    pauseaud.classList.remove("hide");
  } else {
    audio.pause();
    playbutton.innerHTML = `<i id="play" class="fa-solid fa-play fa-2xl"></i>`;

    // playaud.classList.remove("hide");
    // pauseaud.classList.add("hide");
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
  artistname.textContent = playlist[currentsong].artist;
  songIMG.style.backgroundImage = "url()";

  audio.play();

  playbutton.innerHTML = `<i id="pause" class="fa-solid fa-pause fa-2xl hide"></i>`;
});
// songduration = (aud) => {
//   aud = audio.duration;
//   return aud;
// };
// songduration(audio.length);
// const songduration=()=>{
//   alert(audio.duration);
// }
// songduration

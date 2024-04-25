let index;

let greenPlayButton = document.querySelectorAll(".playbutton");
let audio = document.querySelector(".audio");
let audioPlayer = document.querySelector(".audioPlayer");
let previous = document.querySelector(".previous");
let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let next = document.querySelector(".next");
let audioscroll = document.querySelector(".audioscroll");
let songName = document.querySelectorAll(".songName");
let playList1 = document.querySelector(".playlist1");

//Song List
songList = [
  "Suna-Kanchi",
  "Sasto-mutu",
  "Chithi-Vitra",
  "Je-Chhau-Timi",
  "Dhairya",
  "Bhikaari",
];

//Writing the song name in the inner HTML
for (let i = 0; i < songList.length; i++) {
  let finalName = songList[i].replace(/-/g, " ");
  songName[i].innerHTML = finalName;

  playlistSongName = document.createElement("li");
  playList1.insertAdjacentElement("beforeend", playlistSongName).innerHTML =
    finalName;
}

//Working with the song scroller
audio.onloadedmetadata = () => {
  audioscroll.max = audio.duration;
  audioscroll.value = audio.currentTime;
};

//working with the play and pause buttons
const playMusic = (index) => {
  greenPlayButton[index].addEventListener("click", () => {
    console.log("greenPlayButton");
    audio.src = `audios/${songList[index]}.mp3`;
    audio.play();
    setInterval(() => {
      audioscroll.value = audio.currentTime;
    }, 300);
    for (let i = 0; i < songList.length; i++) {
      greenPlayButton[i].classList.toggle("hide");
    }
    // greenPlayButton.classList.toggle("hide");
    audioPlayer.classList.toggle("showPlaybar");

    audioscroll.onchange = () => {
      if (audio.pause()) {
        audio.pause();
      }
      audio.currentTime = audioscroll.value;
      audio.play();
    };
    console.log(index);
  });
};

//pause the music
pause.addEventListener("click", () => {
  console.log("pause button");
  audio.pause();
  play.classList.toggle("show");
  pause.classList.toggle("hide");
});

//play the music
play.addEventListener("click", () => {
  console.log("play button");
  audio.play();
  play.classList.toggle("show");
  pause.classList.toggle("hide");
});

//working with the next button
next.addEventListener("click", () => {
  index++;
  console.log(index);
  if (index < songList.length) {
    console.log("moving to the song " + (index + 1));
    audio.src = `audios/${songList[index]}.mp3`;
  } else {
    console.log("i am rewinded");
    index = 0;
    audio.src = `audios/${songList[index]}.mp3`;
  }
  if (play.classList.contains("show")) {
    play.classList.remove("show");
    pause.classList.remove("hide");
  }
  audio.play();
});

//Working with the previous button
previous.addEventListener("click", () => {
  index--;
  while (index < songList.length && index >= 0) {
    console.log("i am previous button " + index);
    audio.src = `audios/${songList[index]}.mp3`;
    break;
  }
  if (index < 0) {
    console.log("i am rewinded ny the previous button");
    index = songList.length - 1;
    audio.src = `audios/${songList[index]}.mp3`;
  }
  if (play.classList.contains("show")) {
    play.classList.remove("show");
    pause.classList.remove("hide");

  }
  audio.play();
});

greenPlayButton[0].addEventListener("click", () => {
  index = 0;
  playMusic(index);
});
greenPlayButton[1].addEventListener("click", () => {
  index = 1;
  playMusic(index);
});
greenPlayButton[2].addEventListener("click", () => {
  index = 2;
  playMusic(index);
});
greenPlayButton[3].addEventListener("click", () => {
  index = 3;
  playMusic(index);
});
greenPlayButton[4].addEventListener("click", () => {
  index = 4;
  playMusic(index);
});
greenPlayButton[5].addEventListener("click", () => {
  index = 5;
  playMusic(index);
});

//Hamburger
let hamburger = document.querySelector(".hamburger");
let crossButton = document.querySelector(".crossButton");
let leftContainer = document.querySelector(".leftcontainer");
hamburger.addEventListener("click", () => {
  console.log("cliked the hammy");
  hamburger.classList.toggle("hidehamburger");
  leftContainer.classList.toggle("leftcontainercomesagain");
});
crossButton.addEventListener("click", () => {
  console.log("cliked the crossy");
  hamburger.classList.toggle("hidehamburger");
  leftContainer.classList.toggle("leftcontainercomesagain");
});

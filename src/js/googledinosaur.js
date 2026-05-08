const dino = document.querySelector(".dinosaur__dino");
const cactus = document.querySelector(".dinosaur__cactus");
const game = document.querySelector(".dinosaur__game");
const gameOver = document.querySelector(".dinosaur__text");
const timer = document.querySelector(".dinosaur__timer");

let compter = 0;
let timerInterval = null;
let gameStarted = false;


function jump() {
  if (!dino.classList.contains("jump")) {
    dino.classList.add("jump");

    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
}


let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left"),
  );


  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    gameOver.textContent = "Game Over";

    cactus.classList.remove("line");

  
    clearInterval(timerInterval);
    timerInterval = null;

    
    compter = 0;
    timer.textContent = compter;

    gameStarted = false;
  }
}, 10);


game.addEventListener("click", () => {
  jump();

  if (!gameStarted) {
    gameStarted = true;

    gameOver.textContent = "";

    cactus.classList.add("line");

    
    timerInterval = setInterval(() => {
      compter++;
      timer.textContent = compter;
    }, 1000);
  }
});

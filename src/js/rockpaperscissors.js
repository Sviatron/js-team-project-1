const listStonePaperScissor = document.querySelector(
  ".stonePaperScissor__list",
);
const itemStonePaperScissor = listStonePaperScissor.querySelectorAll(
  ".stonePaperScissor__image",
);
const imageStone = listStonePaperScissor.querySelector(".stone");
const imagePaper = listStonePaperScissor.querySelector(".paper");
const imageScissor = listStonePaperScissor.querySelector(".scissor");
const itemStone = listStonePaperScissor.querySelector(
  ".stonePaperScissor__button[data-action='stone']",
);
const itemPaper = listStonePaperScissor.querySelector(
  ".stonePaperScissor__button[data-action='paper']",
);
const itemScissor = listStonePaperScissor.querySelector(
  ".stonePaperScissor__button[data-action='scissor']",
);
const userNumberStonePaperScissor = document.querySelector(
  ".stonePaperScissor__user",
);
const computerNumberStonePaperScissor = document.querySelector(
  ".stonePaperScissor__computer",
);
const computerVersion = document.querySelector(
  ".stonePaperScissor__button--final",
);
const colorText = document.querySelector(".stonePaperScissor__text");
let compteUser = 0;
let compteComputer = 0;
let userElement = "";
let computerElement = "";

const battleElement = function () {
  if (
    (userElement === imageStone.alt && computerElement === imageScissor.alt) ||
    (userElement === imagePaper.alt && computerElement === imageStone.alt) ||
    (userElement === imageScissor.alt && computerElement === imagePaper.alt)
  ) {
    compteUser += 1;
   colorText.textContent="Ви виграли раунд!" 
   colorText.style.color = "#039900";
    
  } else if (userElement === computerElement) {
    compteComputer += 1;
    compteUser += 1;
     colorText.textContent = "Ви виграли раунд!"; 
    colorText.style.color = "#039900";
  } else {
    compteComputer += 1;
     colorText.textContent = "Комп’ютер виграв раунд!"; 
    colorText.style.color = "#990000";
  }
  return (
    (userNumberStonePaperScissor.textContent = compteUser),
    (computerNumberStonePaperScissor.textContent = compteComputer)
  );
};

itemStone.addEventListener("click", () => {
  computerElement =
    itemStonePaperScissor[
      Math.floor(Math.random() * itemStonePaperScissor.length)
    ].alt;
  userElement = imageStone.alt;
  battleElement();
});

itemPaper.addEventListener("click", () => {
  computerElement =
    itemStonePaperScissor[
      Math.floor(Math.random() * itemStonePaperScissor.length)
    ].alt;
  userElement = imagePaper.alt;
  battleElement();
});

itemScissor.addEventListener("click", () => {
  computerElement =
    itemStonePaperScissor[
      Math.floor(Math.random() * itemStonePaperScissor.length)
    ].alt;
  userElement = imageScissor.alt;
  battleElement();
});
computerVersion.addEventListener("click",()=>{
  alert (computerElement)
})
const listStonePaperScissor = document.querySelector(
  ".stonePaperScissor__list",
);
const itemStonePaperScissor = listStonePaperScissor.querySelectorAll(
  ".stonePaperScissor__button",
);
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
let compteUser = 0;
let compteComputer = 0;
let userElement = "";
let computerElement = "";

const battleElement = function () {
  console.log(userElement);
  console.log(computerElement);

  if (
    (userElement === itemStone.textContent &&
      computerElement === itemScissor.textContent) ||
    (userElement === itemPaper.textContent &&
      computerElement === itemStone.textContent) ||
    (userElement === itemScissor.textContent &&
      computerElement === itemPaper.textContent)
  ) {
    compteUser += 1;
  } else if (userElement === computerElement) {
    compteComputer += 1;
    compteUser += 1;
  } else {
    compteComputer += 1;
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
    ].textContent;
  userElement = itemStone.textContent;
  battleElement();
});

itemPaper.addEventListener("click", () => {
  computerElement =
    itemStonePaperScissor[
      Math.floor(Math.random() * itemStonePaperScissor.length)
    ].textContent;
  userElement = itemPaper.textContent;
  battleElement();
});

itemScissor.addEventListener("click", () => {
  computerElement =
    itemStonePaperScissor[
      Math.floor(Math.random() * itemStonePaperScissor.length)
    ].textContent;
  userElement = itemScissor.textContent;
  battleElement();
});

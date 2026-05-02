const guessworkForm = document.querySelector("#guesswork-form");
const guessworkInput = document.querySelector("#guesswork-input");
const guessworkBtn = document.querySelector("#guesswork-submit");
const guessworkP = document.querySelector("#guesswork-text");
const randomNumberGenerator = function () {
  return Math.round(Math.random() * 9 + 1);
};
const randomCheck = function (numUser, numComputer) {
  if (numUser === numComputer) {
    guessworkP.textContent = `You guessed the correct number!(${numComputer})`;
  } else {
    guessworkP.textContent = `You didn't guess the correct number!(${numComputer})`;
  }
};
let inputValue;
guessworkForm.addEventListener("submit", (e) => {
  e.preventDefault();
  randomNumberGenerator();
  inputValue = Number(guessworkInput.value.trim());
  randomCheck(inputValue, randomNumberGenerator());
});

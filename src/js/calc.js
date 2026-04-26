const firstNumber = document.querySelector(".calculator__Input-First");
const secondNumber = document.querySelector(".calculator__Input-Second");
const resultNumber = document.querySelector(".calculator__Result");
const buttonEgal = document.querySelector(".calculator__Egal");
const buttonPlus = document.querySelector(
  ".calculator__Operator[data-action='plus']",
);
const buttonMinus = document.querySelector(
  ".calculator__Operator[data-action='minus']",
);
const buttonMultiple = document.querySelector(
  ".calculator__Operator[data-action='multiple']",
);
const buttonDivide = document.querySelector(
  ".calculator__Operator[data-action='divide']",
);

let action = "";

const calculat = function () {
  let numfirst = Number(firstNumber.value.trim());
  let numSecond = Number(secondNumber.value.trim());
  let result = 0;

  switch (action) {
    case "+":
      result = numfirst + numSecond;
      break;
    case "-":
      result = numfirst - numSecond;
      break;
    case "*":
      result = numfirst * numSecond;
      break;
    case "/":
      if (numSecond !== 0) {
        result = numfirst / numSecond;
      } else {
        result = "nul";
      }
      break;
  }
  resultNumber.textContent = result;
};

buttonPlus.addEventListener("click", () => {
  //hover button
  action = "+";
});
buttonMinus.addEventListener("click", () => {
  //hover button
  action = "-";
});
buttonDivide.addEventListener("click", () => {
  //hover button
  action = "/";
});
buttonMultiple.addEventListener("click", () => {
  //hover button
  action = "*";
});
buttonEgal.addEventListener("click", calculat);

let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let n3 = document.getElementById("num3");
let threeResult = document.getElementById("threeResult");

function findMax() {
  let firstValue = Number(n1.value.trim());
  let secondValue = Number(n2.value.trim());
  let thirdValue = Number(n3.value.trim());

  if (n1.value === "" || n2.value === "" || n3.value === "") {
    threeResult.textContent = "Введіть всі три числа!";
    return;
  }

  if (isNaN(firstValue) || isNaN(secondValue) || isNaN(thirdValue)) {
    threeResult.textContent = "Всі значення мають бути числами";
    return;
  }

  let max = Math.max(firstValue, secondValue, thirdValue);

  threeResult.textContent = "Найбільше число:" + max;
}
[n1, n2, n3].forEach((item) => {
  item.addEventListener("input", findMax);
});

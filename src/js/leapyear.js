let year = document.getElementById("leapInput");
let result = document.getElementById("leapResult");

function checkYear() {
  let value = Number(year.value.trim());
  if (value === "") {
    result.textContent = " Обов'язково введіть свій рік народження";
    return;
  } else if (value % 4 === 0) {
    result.textContent = "Ви народилися у високосний рік!!!";
  } else {
    result.textContent = " Ви народилися не у високосний рік!";
  }
}

// console.log(year);

document.getElementById("leapForm").addEventListener("submit", (e) => {
  e.preventDefault();
  checkYear();
});

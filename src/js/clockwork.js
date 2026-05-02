const timecountForm = document.querySelector("#timecount-form");
const timecountInput = document.querySelector("#timecount-input");
const timecountBtn = document.querySelector("#timecount-btn");
const timecountText = document.querySelector("#timecount-text");
// console.log(typeof timecountInput.value); <-- string, be careful

const timeCalc = function (mins) {
  let hrs = Math.floor(mins / 60);
  let minutes = mins - hrs * 60;
  return (timecountText.textContent = `${hrs} hours : ${String(
    minutes
  ).padStart(2, 0)} minutes`);
};
timecountForm.addEventListener("submit", (e) => {
  let timecountInputValue = Number(timecountInput.value.trim());
  e.preventDefault();
  timeCalc(timecountInputValue);
});

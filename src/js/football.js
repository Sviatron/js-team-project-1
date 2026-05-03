const soccerField = document.querySelector(".football-field");
const soccerBall = document.querySelector(".football-ball");

soccerField.addEventListener("click", (event) => {
  const rect = soccerField.getBoundingClientRect();
  let x = event.clientX - rect.left - soccerBall.offsetWidth / 2;
  let y = event.clientY - rect.top - soccerBall.offsetHeight / 2;
  //   console.log(event.clientX, event.clientY);
//   if (soccerBall.position.) {
//   }

  soccerBall.style.left = `${x}px`;
  soccerBall.style.top = `${y}px`;
});

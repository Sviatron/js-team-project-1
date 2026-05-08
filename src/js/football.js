const soccerField = document.querySelector(".football-field");
const soccerBall = document.querySelector(".football-ball");

soccerField.addEventListener("click", (event) => {
  const rect = soccerField.getBoundingClientRect();
  let x = event.clientX - rect.left - soccerBall.offsetWidth / 2;
  let y = event.clientY - rect.top - soccerBall.offsetHeight / 2;

  const maxX = soccerField.clientWidth - soccerBall.offsetWidth;
  const maxY = soccerField.clientHeight - soccerBall.offsetHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  soccerBall.style.left = `${x}px`;
  soccerBall.style.top = `${y}px`;
});

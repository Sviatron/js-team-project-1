document.querySelector(".eyes").addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    const pupil = eye.querySelector(".pupil");

    const rect = eye.getBoundingClientRect();

    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;
   
  });
});

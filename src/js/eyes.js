document.querySelector(".eyes__game").addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".eye");

  eyes.forEach((eye) => {
    const pupil = eye.querySelector(".pupil");

    const rect = eye.getBoundingClientRect();

    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const dx = e.clientX - eyeX;
    const dy = e.clientY - eyeY;

    const angleInRad = Math.atan2(dy, dx);

    // const angleInDeg = angleInRad * (180 / Math.PI);

    const move = 20;

    const x = Math.cos(angleInRad) * move;
    const y = Math.sin(angleInRad) * move;

    pupil.style.transform = `translate(-50%, -50%) translate(${x}px,${y}px)`;
  });
});

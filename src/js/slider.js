// const team = [
//   {
//     name: "Поліна",
//     img: "./img/polina.jpg",
//     info: "Виконала секції: Високосний/Невисокосний рік, три числа, Слайдер команди, очі",
//   },

//   {
//     name: "Ілля",
//     img: "./img/default.png",
//     info: "Виконав секції: Камінь-ножиці-папір, калькулятор, динозавр, вчені, модальне вікно, футер",
//   },

//   {
//     name: "Святослав",
//     img: "./img/default.png",
//     info: "Виконав секції: Число яке загадав комп'ютер, Калькулятор часу, Футбол",
//   },

//   {
//     name: "Катерина",
//     img: "./img/kateryna.jpg",
//     info: "Викладач Frontend, допомагала з труднощами які виникли, Project Supporter",
//   },

//   {
//     name: "Марія",
//     img: "./img/mariya.png",
//     info: "Викладач SoftSkills, допомагала розвивати лідерські якості",
//   },
// ];

// let markUp = "";
// const teamBox = document.querySelector(".team__box");
// team.forEach((member, index) => {
//   markUp = `
//     <div class="team__card " data-index="${index}">
//       <img src="${member.img}" alt="${member.name}" class="team__img">
//       <h3 class="team__name">${member.name}</h3>
//       <p class="team__info">${member.info}</p>
//     </div>
//   `;
// });

// teamBox.innerHTML = markUp;

// const teamImg = document.querySelector(".team__img");
// showMember(card.dataset.index);
// function showMember(index) {
//   teamImg.src = team[index].img;
//   teamImg.alt = team[index].name;
// }

// teamBox.addEventListener("click", (e) => {
//   const card = e.target.closest(".team__card");

//   if (!card) return;
//   showMember(card.dataset.index);
// });
const team = [
  {
    name: "Поліна",
    img: "./img/polina.jpg",
    info: "Виконала секції: Високосний/Невисокосний рік, три числа, Слайдер команди, очі",
  },

  {
    name: "Ілля",
    img: "./img/illia.jpg ",
    info: "Виконав секції: Камінь-ножиці-папір, калькулятор, динозавр, вчені, модальне вікно, футер",
  },

  {
    name: "Святослав",
    img: "./img/sviat.jpg",
    info: "Виконав секції: Число яке загадав комп'ютер, Калькулятор часу, Футбол",
  },

  {
    name: "Катерина",
    img: "./img/kateryna.jpg",
    info: "Викладач Frontend, допомагала з труднощами які виникли, Project Supporter",
  },

  {
    name: "Марія",
    img: "./img/mariya.png",
    info: "Викладач SoftSkills, допомагала розвивати лідерські якості",
  },
];

const teamBox = document.querySelector(".team__box");

let currentIndex = 0;

function showMember(index) {
  teamBox.innerHTML = `
  
    <div class="team__card">

      <img 
        src="${team[index].img}" 
        alt="${team[index].name}" 
        class="team__img"
      >

      <h3 class="team__name">
        ${team[index].name}
      </h3>

      <p class="team__info">
        ${team[index].info}
      </p>

    </div>
  
  `;
}

showMember(currentIndex);

teamBox.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= team.length) {
    currentIndex = 0;
  }

  showMember(currentIndex);
});

let i=[{name:"Поліна",img:"./img/polina.jpg",info:"Виконала секції: Високосний/Невисокосний рік, три числа, Слайдер команди, очі"},{name:"Ілля",img:"./img/illia.jpg ",info:"Виконав секції: Камінь-ножиці-папір, калькулятор, динозавр, вчені, модальне вікно, футер"},{name:"Святослав",img:"./img/sviat.jpg",info:"Виконав секції: Число яке загадав комп'ютер, Калькулятор часу, Футбол"},{name:"Катерина",img:"./img/kateryna.jpg",info:"Викладач Frontend, допомагала з труднощами які виникли, Project Supporter"},{name:"Марія",img:"./img/mariya.png",info:"Викладач SoftSkills, допомагала розвивати лідерські якості"}],m=document.querySelector(".team__box"),n=0;function a(n){m.innerHTML=`
  
    <div class="team__card">

      <img 
        src="${i[n].img}" 
        alt="${i[n].name}" 
        class="team__img"
      >

      <h3 class="team__name">
        ${i[n].name}
      </h3>

      <p class="team__info">
        ${i[n].info}
      </p>

    </div>
  
  `}a(0),m.addEventListener("click",()=>{++n>=i.length&&(n=0),a(n)});
//# sourceMappingURL=js-team-project-1.05385025.js.map

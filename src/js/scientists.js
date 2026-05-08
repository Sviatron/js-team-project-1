const list = document.querySelector(".scientists__list");

const actionSiecle = document.querySelector(
  ".scientists__button[data-action='siecle']",
);
const actionSortLived = document.querySelector(
  ".scientists__button[data-action='sortLived']",
);
const actionSortName = document.querySelector(
  ".scientists__button[data-action='sortName']",
);
const actionBornLast = document.querySelector(
  ".scientists__button[data-action='bornLast']",
);
const actionBornAlbert = document.querySelector(
  ".scientists__button[data-action='bornAlbert']",
);
const actionFirstLetterC = document.querySelector(
  ".scientists__button[data-action='firstLetterC']",
);
const actionRemoveFirstLetterA = document.querySelector(
  ".scientists__button[data-action='removeFirstLetterA']",
);
const actionMinMax = document.querySelector(
  ".scientists__button[data-action='minMax']",
);
const actionFirstLetterNameSurname = document.querySelector(
  ".scientists__button[data-action='firstLetterNameSurname']",
);

const scientists = [
  { name: "Albert", surname: "Einstein", born: 1879, dead: 1955 },
  { name: "Isaac", surname: "Newton", born: 1643, dead: 1727 },
  { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642 },
  { name: "Marie", surname: "Curie", born: 1867, dead: 1934 },
  { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630 },
  { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543 },
  { name: "Max", surname: "Planck", born: 1858, dead: 1947 },
  { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979 },
  { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852 },
  { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905 },
  { name: "Lise", surname: "Meitner", born: 1878, dead: 1968 },
  { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909 },
];

const getLived = (s) => s.dead - s.born;

const render = (data) => {
  list.innerHTML = "";

  for (const scientist of data) {
    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.textContent = `${scientist.name} ${scientist.surname}`;
    p.textContent = `${scientist.born} - ${scientist.dead} (${getLived(scientist)} вік)`;
    li.classList.add("scientists__item");
    li.appendChild(h3);
    li.appendChild(p);
    list.appendChild(li);
  }
};

const itemsSiecle = () => {
  render(scientists.filter((s) => s.born > 1801));
};

const itemsSortName = () => {
  render([...scientists].sort((a, b) => a.name.localeCompare(b.name)));
};

const sortLived = () => {
  render([...scientists].sort((a, b) => getLived(b) - getLived(a)));
};

const lastBorn = () => {
  let max = scientists[0];

  for (const s of scientists) {
    if (s.born > max.born) max = s;
  }

  render([max]);
};

const bornAlbert = () => {
  render(
    scientists.filter((s) => s.name === "Albert" || s.surname === "Einstein"),
  );
};

const firstLetter = () => {
  render(scientists.filter((s) => s.surname[0] === "C"));
};

const remove = () => {
  render(scientists.filter((s) => s.name[0] !== "A"));
};

const minMaxLived = () => {
  let min = scientists[0];
  let max = scientists[0];

  for (const s of scientists) {
    if (getLived(s) > getLived(max)) max = s;
    if (getLived(s) < getLived(min)) min = s;
  }

  render([min, max]);
};

const firstLetterNameAndSurname = () => {
  render(scientists.filter((s) => s.name[0] === s.surname[0]));
};

document.addEventListener("DOMContentLoaded", () => {
  render(scientists);

  actionSiecle.addEventListener("click", itemsSiecle);
  actionSortLived.addEventListener("click", sortLived);
  actionSortName.addEventListener("click", itemsSortName);
  actionBornLast.addEventListener("click", lastBorn);
  actionBornAlbert.addEventListener("click", bornAlbert);
  actionFirstLetterC.addEventListener("click", firstLetter);
  actionRemoveFirstLetterA.addEventListener("click", remove);
  actionMinMax.addEventListener("click", minMaxLived);
  actionFirstLetterNameSurname.addEventListener(
    "click",
    firstLetterNameAndSurname,
  );
});

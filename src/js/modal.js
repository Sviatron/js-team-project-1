const modal = document.querySelector("[data-modal]");
const saveBtn = document.querySelector("[data-modal-save]");
const closeBtn = document.querySelector("[data-modal-close]");
const finalCloseBtn = document.querySelector("[data-final-modal-close]");
const finalModal = document.querySelector("[data-final-modal]");
const inputModal = document.querySelector(".modal__input");
const nameTitle = document.querySelector(".greeting__title");
let nameUser = "";

saveBtn.addEventListener("click", changeModal);
closeBtn.addEventListener("click", closeModal);
finalCloseBtn.addEventListener("click", closeModal);

function changeModal() {
  modal.classList.add("is-hidden");
  finalModal.classList.remove("is-hidden");
}
function closeModal() {
  finalModal.classList.add("is-hidden");
  modal.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
  changeName();
}

function changeName() {
  nameUser = inputModal.value;
  console.log(nameUser);
  if (nameUser.length > 0) {
    return (nameTitle.textContent = `Вітаємо, ${nameUser}`);
  }
}

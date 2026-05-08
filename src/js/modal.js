const modal = document.querySelector("[data-modal]");
const saveBtn = document.querySelector("[data-modal-save]");
const closeBtn = document.querySelector("[data-modal-close]");
const finalCloseBtn = document.querySelector("[data-final-modal-close]");
const finalModal = document.querySelector("[data-final-modal]");
saveBtn.addEventListener("click", changeModal);
closeBtn.addEventListener("click", closeModal);
finalCloseBtn.addEventListener("click", closeModal);
function changeModal() {
  modal.classList.add("is-hidden");
  finalModal.classList.remove("is-hidden");
}
function closeModal() {
    modal.classList.add("is-hidden");
  finalModal.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
}

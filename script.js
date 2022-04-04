'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModalList = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
};
for (let i = 0; i < showModalList.length; i++) {
  showModalList[i].addEventListener('click', openModal);
}
closeModalBtn.addEventListener('click', () => {
  closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

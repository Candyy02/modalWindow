'use strict';
const { id, version } = await document.interestCohort();
console.log('FLoC ID:', id);
console.log('FLoC version:', version);
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModalList = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const random = () => Math.floor(Math.random() * 6) + 1;
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const rollDice = i => {
  let sum = 0;
  openModal();
  setTimeout(closeModal, 4000);
  for (let i = 0; i < showModalList.length - 1; i++) {
    let num = random();
    showModalList[i].textContent = num;
    sum += num;
    console.log(num);
  }
  console.log(sum);

  if (sum >= 4 && sum <= 10) {
    setTimeout(() => {
      alert('Xỉu ngang xỉu dọc nhé pạn ơi');
    }, 4000);
  } else if (sum >= 11 && sum <= 17) {
    setTimeout(() => {
      alert('Tài vận đổi thay nhé pạn ơi');
    }, 4000);
  }
};
const openRandomModal = i => {
  let randNum = random();
  modal.textContent = randNum;
  showModalList[i].textContent = randNum;
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModalList.length; i++) {
  showModalList[i].addEventListener('click', rollDice);
}
closeModalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

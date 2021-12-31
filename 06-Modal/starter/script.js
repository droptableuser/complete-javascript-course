'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

btnsOpenModal.forEach(element => element.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !overlay.classList.contains('hidden')) {
    closeModal();
  }
});

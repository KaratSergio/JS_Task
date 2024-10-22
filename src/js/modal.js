(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  const showModalBtns = document.querySelectorAll('.show-modal-btn');

  showModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      refs.modal.classList.remove('is-hidden');
    });
  });
})();

(() => {
  const hideModalBtns = document.querySelectorAll('.hide-modal-btn');

  hideModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      refs.modal.classList.remove('is-hidden');
    });
  });
})();

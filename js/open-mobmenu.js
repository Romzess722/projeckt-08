(() => {
  const refs = {
    openMenulBtn: document.querySelector('[data-menu-open]'),
    closeMenulBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenulBtn.addEventListener('click', toggleMenul);
  refs.closeMenulBtn.addEventListener('click', toggleMenul);

  function toggleMenul() {
    document.body.classList.toggle('modal-open');
    refs.menu.classList.toggle('is-hidden');
  }
})();
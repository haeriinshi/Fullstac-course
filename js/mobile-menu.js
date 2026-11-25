const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const menuLinks = document.querySelectorAll('.mobile-menu__link');

const toggleMenu = () => {
  if (mobileMenu) {
    mobileMenu.classList.toggle('is-open');
  }
};

if (menuBtnOpen) {
  menuBtnOpen.addEventListener('click', toggleMenu);
}

if (menuBtnClose) {
  menuBtnClose.addEventListener('click', toggleMenu);
}

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileMenu) {
      mobileMenu.classList.remove('is-open');
    }
  });
});

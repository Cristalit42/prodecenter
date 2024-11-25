const headerLink = document.querySelector('.js-header__link');
const headerSubMenu = document.querySelector('.js-header__submenu');
const burgerMenu = document.querySelector('.js-burger');
const burgerMenuBtn = document.querySelectorAll('.js-burger__btn');


if (headerLink) {
  headerLink.addEventListener('click', (e) => {
    e.preventDefault();
    headerSubMenu.classList.toggle('header__nav-submenu--hidden')
    headerLink.classList.toggle('header__link--active')
  })
}

if (burgerMenu) {
  burgerMenuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      burgerMenu.classList.toggle('header__top-burger--hidden')
    })
  })
}
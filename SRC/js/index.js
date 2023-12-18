const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');
const navbarMenu2 = document.querySelector('#nav-links2');
const navbarMenu3 = document.querySelector('#nav-links3');
const navbarMenu4 = document.querySelector('#nav-links4');
const navbarMenu5 = document.querySelector('#nav-links5');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
  navbarMenu2.classList.toggle('show');
  navbarMenu3.classList.toggle('show');
  navbarMenu4.classList.toggle('show');
  navbarMenu5.classList.toggle('show');
});
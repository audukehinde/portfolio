const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const close = document.querySelector('.close');
const open = document.querySelector('.fa-bars');
const navLink = document.querySelectorAll('.nav-link');

function toggleDisplay(element, val) {
  element.style.display = val;
}

function closeMenu() {
  navMenu.classList.remove('active');
  toggleDisplay(open, 'block');
  toggleDisplay(close, 'none');
}

function mobileMenu() {
  navMenu.classList.toggle('active');
  toggleDisplay(open, 'none');
  toggleDisplay(close, 'block');
}

function switchIcons() {
  toggleDisplay(open, 'block');
  toggleDisplay(close, 'none');
  closeMenu();
}

hamburger.addEventListener('click', mobileMenu);
close.addEventListener('click', switchIcons);
navLink.forEach((n) => n.addEventListener('click', closeMenu));

// Form Vaidation
const form = document.getElementById('form');
const mail = document.getElementById('my-email');
form.addEventListener('submit', (e) => {
  const regx = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  const myMail = mail.value;
  if (myMail.match(regx)) {
    document.querySelector('.error-Message').innerHTML = '';
  } else {
    e.preventDefault();
    document.querySelector('.error-Message').innerHTML = 'Please remove all Uppercase Letter(s) from Email Field';
  }
});

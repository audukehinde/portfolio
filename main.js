const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const close = document.querySelector(".close");
const open = document.querySelector('.fa-bars');
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener("click", mobileMenu);
close.addEventListener("click", switchIcons)
navLink.forEach((n) => n.addEventListener('click', closeMenu));

function mobileMenu() {
    navMenu.classList.toggle("active");
    toggleDisplay(open, 'none');
    toggleDisplay(close, 'block');
}

function closeMenu() { navMenu.classList.remove("active"); }

function switchIcons() {
    toggleDisplay(open, 'block');
    toggleDisplay(close, 'none');
    closeMenu();
}

function toggleDisplay(element, val) { element.style.display = val; }
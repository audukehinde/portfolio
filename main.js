const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const close = document.querySelector('.close');
const open = document.querySelector('.fa-bars');
const navLink = document.querySelectorAll('.nav-link');
const form = document.getElementById('form');
const mail = document.getElementById('my-email');
const name = document.getElementById('full-name');
const msg = document.getElementById('my-message');

hamburger.addEventListener('click', mobileMenu);
close.addEventListener('click', switchIcons);
navLink.forEach((n) => n.addEventListener('click', closeMenu));

function mobileMenu() {
  navMenu.classList.toggle('active');
  toggleDisplay(open, 'none');
  toggleDisplay(close, 'block');
}

function closeMenu() {
  navMenu.classList.remove('active');
  toggleDisplay(open, 'block');
  toggleDisplay(close, 'none');
}

function switchIcons() {
  toggleDisplay(open, 'block');
  toggleDisplay(close, 'none');
  closeMenu();
}

function toggleDisplay(element, val) {
  element.style.display = val;
}

// Form Vaidation
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

// localStorage

const addDataToLocalStorage = () => {
  const myFormData = {
    fullName: name.value,
    email: mail.value,
    message: msg.value,
  };
  localStorage.setItem('myFormData', JSON.stringify(myFormData));
};
form.addEventListener('change', addDataToLocalStorage);

window.addEventListener('DOMContentLoaded', () => {
  let getLocalStorageData = localStorage.getItem('myFormData');
  getLocalStorageData = JSON.parse(getLocalStorageData);
  document.getElementById('full-name').value = getLocalStorageData.fullName;
  document.getElementById('my-email').value = getLocalStorageData.email;
  document.getElementById('my-message').value = getLocalStorageData.message;
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-submit').addEventListener('click', addDataToLocalStorage);
});
// Pop ups

// let projectData = {
//   projectTitle: '',
//   projectDescription: '',
//   projectLanguages: {
//     firstLang: '',
//     secondLag: '',
//     thirdLang: '',
//     fourthLang: '',
//   },
// };
// btnProject.addEventListener('click', console.log(projectData.projectLanguages));

// console.log(projectData.projectLanguages.thirdLang);

// let modal = document.createElement('div');
let bodyElement = document.body;
let projectSection = document.getElementById('portfolio');
let projectSectionTitle = document.createElement('h2');
let underLineImage = document.createElement('img');
let projectCard = document.createElement('div');
let projectImage = document.createElement('img');
let projectDetails = document.createElement('div');
let projectHeader = document.createElement('h2');
let projectDecription = document.createElement('p');
let projecttools = document.createElement('div');
let toolsunoredered = document.createElement('ul');
let list = document.createElement('li');
let projectButton = document.createElement('button');

projectSectionTitle.className = 'recent';
underLineImage.className = 'line-divider2';

underLineImage.src = 'img/Vector4.png';
underLineImage.setAttribute('alt', 'Project Image');
projectSectionTitle.innerText = 'MY RECENT PROJECT';
projectSection.append(projectSectionTitle, underLineImage);
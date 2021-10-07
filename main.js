const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const close = document.querySelector('.close');
const open = document.querySelector('.fa-bars');
const navLink = document.querySelectorAll('.nav-link');
// const btnProject = document.querySelector('.btnsee');
// Initializing our body
// const bodyElement = document.body;

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

// localStorage
const formData = [];
const addDataToLocalStorage = (e) => {
  const myFormData = {
    fullName: document.getElementById('full-name').value,
    email: mail.value,
    message: document.getElementById('my-message').value,
  };
  formData.push(myFormData);
  e.preventDefault();
  // document.querySelector('form').reset();
  // console.warn('added', { formData });

  // eslint-disable-next-line no-undef
  localStorage.setItem('MyformData', JSON.stringify(formData));
}
form.addEventListener('click', addDataToLocalStorage);

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementById('btn-submit').addEventListener('click', addDataToLocalStorage);
// });
// Pop ups

// let projectData = {
//   projectTitle : 'MARKETING AGENCY',
// eslint-disable-next-line max-len
//   projectDescription :"A website created for a digital marketing agency to help improve sales and give information about company's product. This website also helps the client to contact the company for a business deal and showcases the company's different services and packages",
//   projectLanguages : {
//     firstLang : 'CSS',
//     secondLag : 'Html',
//     thirdLang : 'JavaScript',
//     fourthLang : 'Ruby'
//   }
// };
// btnProject.addEventListener('click', console.log(projectData.projectLanguages));

// // console.log(projectData.projectLanguages.thirdLang);

// let modal = document.createElement('div');
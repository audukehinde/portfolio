const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const close = document.querySelector('.close');
const open = document.querySelector('.fa-bars');
const navLink = document.querySelectorAll('.nav-link');
const form = document.getElementById('form');
const mail = document.getElementById('my-email');
const name = document.getElementById('full-name');
const msg = document.getElementById('my-message');
const modal = document.getElementById('card');

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

  let closeButton = document.querySelector('.class-close');
  closeButton.addEventListener('click', () => {
    modal.classList.toggle('card');
  });

  let reloadPage = document.querySelectorAll('btncheck');
  reloadPage.forEach((e) => e.addEventListener('click', () => {
    modal.classList.toggle('card');
  }));
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-submit').addEventListener('click', addDataToLocalStorage);
});

// Generating HTML content using JavaScript
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

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('project-image1').src = projectData[3].imag1;
  document.getElementById('project-image2').src = projectData[3].image2;
  document.getElementById('project-image3').src = projectData[3].image3;
  document.getElementById('project-image4').src = projectData[3].image4;

  let allbutton = document.querySelectorAll('.project-link');

  allbutton.forEach((e) => e.addEventListener('click', () => {
    modal.classList.toggle('card');
  }));
});

projectSectionTitle.className = 'recent';
underLineImage.className = 'line-divider2';
projectCard.className = 'inner-element';

underLineImage.src = 'img/Vector4.png';
underLineImage.setAttribute('alt', 'Project Image');
projectSectionTitle.innerText = 'MY RECENT PROJECT';
projectSection.append(projectSectionTitle, underLineImage);

const projectData = [
  4,
  {
    projectTitle: '',
    projectDescription: "A website created for a digital marketing agency to help improve sales and give information about company's product. This website also helps the client to contact the company for a business deal and showcases the company's different services and packages.",
  },
  {
    firstLang: 'CSS',
    secondLang: 'HTML',
    thirdLang: 'JavaScript',
    fourthLang: 'Ruby',
  },
  {
    imag1: 'img/fola2.PNG',
    image2: 'img/fola3.PNG',
    image3: 'img/spike.PNG',
    image4: 'img/fola2.PNG',
  },
];
// eslint-disable-next-line no-plusplus
for (let i = 1; i <= projectData[0]; i++) {
  const projects = `<div class="proof proof-space">
          <img id="project-image${i}" class="project-img" src="" alt="Project33" />
          <div class="inner-element">
            <h3>MARKETING AGENCY</h3>
            <p>${projectData[1].projectDescription}</p>
            <div class="tools">
              <ul>
                <li class="line">${projectData[2].firstLang}</li>
                <li class="line">${projectData[2].secondLang}</li>
                <li class="line">${projectData[2].thirdLang}</li>
                <li>${projectData[2].fourthLang}</li>
              </ul>
            </div>
            <button class="project-link btnsee btncheck">See Project</button>
          </div>
        </div>`;

  projectSection.innerHTML += projects;
}

// eslint-disable-next-line no-multi-assign
const popupcard = document.getElementById('card');
const popcard = `<div class="card-header">
    <h2>Multi Post Story</h2>
  <div class="class-close">&times;</div>
  </div>
  <img src="img/card-img.png" class="card-img" alt="">
  <p class="card-desc">${projectData[1].projectDescription}</p>

    <div class="tool">
            <ul>
              <li class="line">${projectData[2].firstLang}</li>
              <li class="line">${projectData[2].secondLang}</li>
              <li class="line">${projectData[2].thirdLang}</li>
              <li>${projectData[2].fourthLang}</li>
            </ul>
    </div>
    <div class="card-button">
      <button class="project-link btnsee">See Project</button>
      <button class="project-link">See Project</button>
    </div>`;
popupcard.innerHTML += popcard;

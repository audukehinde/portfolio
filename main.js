const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const close = document.querySelector('.close');
const open = document.querySelector('.fa-bars');
const navLink = document.querySelectorAll('.nav-link');
const btnProject = document.querySelector('.btnsee');
// Initializing our body
const bodyElement = document.body;



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


// Pop ups

let projectData = {
    projectTitle : 'MARKETING AGENCY',
    projectDescription :"A website created for a digital marketing agency to help improve sales and give information about company's product. This website also helps the client to contact the company for a business deal and showcases the company's different services and packages",
    projectLanguages : {
        firstLang : 'CSS',
        secondLag : 'Html',
        thirdLang : 'JavaScript',
        fourthLang : 'Ruby'
    }
};
btnProject.addEventListener('click', console.log(projectData.projectLanguages));

// console.log(projectData.projectLanguages.thirdLang);


let modal = document.createElement('div');
/*==================== HERO TITLE ANIMATION ====================*/
const typed = new Typed('.typed', {
  strings: ['Digital', 'Agil', 'Eficaz'],
  typeSpeed: 300,
  startDelay: 300,
  backSpeed: 75,
  smartBackspace: true,
  shuffle: false,
  backDelay: 1500,
  loop: true,
  loopCount: false,
  showCursor: true,
  cursorChar: '_',
  contentType: 'html',
});
/*==================== SERVICES ANIMATION ====================*/
const servicesList = document.querySelector('.services__list-second');
const servicesIcon = document.querySelector('.flecha');

function openServicesBar() {
  servicesList.classList.toggle('crolled');
}

servicesIcon.addEventListener('click', openServicesBar);

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
  navToogle = document.getElementById('nav-toogle'),
  navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
if (navToogle) {
  navToogle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
console.log(navLink);
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS  ====================*/

const skillList = document.getElementById('services__list-first');
const skillsIcon = document.getElementById('services__arrow-first');

function openSkillsBar() {
  skillList.classList.toggle('services__list-second-open');
  // skillsIcon.classList.toggle('skills__icon-down-opened');
}
skillsIcon.addEventListener('click', openSkillsBar);
/*==================== ACCORDION SERVICES 2 ====================*/
const skillList2 = document.getElementById('services__list-second');
const skillsIcon2 = document.getElementById('services__arrow-second');

function openSkillsBar2() {
  skillList2.classList.toggle('services__list-second-open');
  // skillsIcon.classList.toggle('skills__icon-down-opened');
}
skillsIcon2.addEventListener('click', openSkillsBar2);

/*==================== SEND CONTACT INFORMATION ====================*/

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.classList.add('cargando');

  const serviceID = 'default_service';
  const templateID = 'template_bh65hvn';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.classList.remove('cargando');
      alert('Message sent correctly!');
    },
    (err) => {
      btn.classList.remove('cargando');
      alert(JSON.stringify(err));
    }
  );
});

/*==================== TRADUCCION EN/ES ====================*/

const traductionBtn = document.getElementsByClassName('traductionBtn');
const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async (language) => {
  const requestJson = await fetch(`../assets/languages/${language}.json`);
  const texts = await requestJson.json();
  for (const textToChange of textsToChange) {
    const fromTextSection = textToChange.dataset.section;
    const textValue = textToChange.dataset.value;
    textToChange.innerHTML = texts[fromTextSection][textValue];
  }
};

for (let i = 0; i < traductionBtn.length; i++) {
  traductionBtn[i].addEventListener('click', (e) => {
    changeLanguage(e.target.dataset.language);
  });
}

const languageToggle = document.getElementById('languageToggle');
const content = document.getElementById('content');

languageToggle.addEventListener('click', function () {
  content.textContent =
    content.textContent === 'Hola, bienvenido a mi página.'
      ? 'Hello, welcome to my page.'
      : 'Hola, bienvenido a mi página.';
  languageToggle.classList.toggle('active');
});

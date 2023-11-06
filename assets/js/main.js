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

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
  navToogle = document.getElementById('nav-toogle');

/*===== MENU TOGGLE =====*/
if (navToogle) {
  navToogle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToogle.classList.toggle('show-menu-icon');
    //NOTE - Agregar clase para que cambie el background svg
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
  navToogle.classList.remove('show-menu-icon');
}
console.log(navLink);
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS  ====================*/

const skillList = document.getElementById('services__list-first');
const skillsIcon = document.getElementById('services__arrow-first');

function openSkillsBar() {
  skillList.classList.toggle('services__list-second-open');
  skillsIcon.classList.toogle('services__arrow-first-up');
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
  const templateID = 'template_yfoa119';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.classList.remove('cargando');
      alert('Sent!');
    },
    (err) => {
      btn.value = 'Send Email';
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

/*==================== TRADUCCION CAMBIO BACKGROUND ====================*/
const esButtons = document.querySelectorAll('.traductionBtn-es');
const enButtons = document.querySelectorAll('.traductionBtn-en');

// Función para quitar la clase seleccionada de todos los botones de una clase
function removeSelectedClass(buttons) {
  buttons.forEach((button) => {
    button.classList.remove('navbar__language--selected');
  });
}

function handleEsButtonClick() {
  alert('toque el boton');
  enButtons.forEach((button) => {
    button.classList.remove('navbar__language--selected');
  });
  esButtons.forEach((button) => {
    button.classList.add('navbar__language--selected');
  });
}

function handleEnButtonClick() {
  esButtons.forEach((button) => {
    button.classList.remove('navbar__language--selected');
  });
  enButtons.forEach((button) => {
    button.classList.add('navbar__language--selected');
  });
}

esButtons.forEach((button) => {
  button.addEventListener('click', handleEsButtonClick);
});

enButtons.forEach((button) => {
  button.addEventListener('click', handleEnButtonClick);
});

/*==================== HERO TITLE ANIMATION ====================*/
const typed = new Typed('.typedEs', {
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
const typed2 = new Typed('.typedEn', {
  strings: ['Digital', 'Agile', 'Eficaz'],
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
  skillsIcon.classList.toggle('services__arrow-first-up');
  // skillsIcon.classList.toggle('skills__icon-down-opened');
}
skillsIcon.addEventListener('click', openSkillsBar);
/*==================== ACCORDION SERVICES 2 ====================*/
const skillList2 = document.getElementById('services__list-second');
const skillsIcon2 = document.getElementById('services__arrow-second');

function openSkillsBar2() {
  skillList2.classList.toggle('services__list-second-open');
  skillsIcon2.classList.toggle('services__arrow-second-up');
  // skillsIcon.classList.toggle('skills__icon-down-opened');
}
skillsIcon2.addEventListener('click', openSkillsBar2);

/*==================== SEND CONTACT INFORMATION ====================*/

const btn = document.getElementById('button');

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  btn.classList.add('cargando');

  const serviceID = 'default_service';
  const templateID = 'template_jlzyxinXXXX';

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.classList.remove('cargando');
      alert('Sent!');
    },
    (err) => {
      btn.value = 'Send Email';
      alert('Error!');
    }
  );
});

/*==================== TRADUCCION EN/ES ====================*/

const traductionBtn = document.getElementsByClassName('traductionBtn');
const textsToChange = document.querySelectorAll('[data-section]');
const esTitle = document.getElementById('home_titleEs');
const enTitle = document.getElementById('home_titleEn');
const esMetogology = document.getElementById('metodology__id--es');
const enMetogology = document.getElementById('metodology__id--en');
const esAboutBloy = document.getElementById('about__bloy--es');
const enAboutBloy = document.getElementById('about__bloy--en');

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
    let language = e.target.dataset.language;
    changeLanguage(language);
    const esButtons = document.querySelectorAll('[data-language="es"]');
    const enButtons = document.querySelectorAll('[data-language="en"]');
    if (language === 'es') {
      for (const esButton of esButtons) {
        esButton.classList.add('navbar__languague--selected');
        for (const enButton of enButtons) {
          enButton.classList.remove('navbar__languague--selected');
        }
      }
      enTitle.classList.add('disabled');
      esTitle.classList.remove('disabled');

      esMetogology.classList.remove('disabled');
      enMetogology.classList.add('disabled');

      esAboutBloy.classList.remove('disabled');
      enAboutBloy.classList.add('disabled');
    } else {
      for (const enButton of enButtons) {
        enButton.classList.add('navbar__languague--selected');
        for (const esButton of esButtons) {
          esButton.classList.remove('navbar__languague--selected');
        }
      }
      esTitle.classList.add('disabled');
      enTitle.classList.remove('disabled');

      enMetogology.classList.remove('disabled');
      esMetogology.classList.add('disabled');

      enAboutBloy.classList.remove('disabled');
      esAboutBloy.classList.add('disabled');
    }
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

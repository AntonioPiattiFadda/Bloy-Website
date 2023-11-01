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

/*==================== ACCORDION SKILLS ====================*/
const skillList = document.getElementById('skills__list');
const skillsIcon = document.getElementById('skills__icon-down');

function openSkillsBar() {
  skillList.classList.toggle('skills__list-open');
  skillsIcon.classList.toggle('skills__icon-down-opened');
}
/*==================== ACCORDION SKILLS 2 ====================*/
skillsIcon.addEventListener('click', openSkillsBar);

const skillList2 = document.getElementById('skills__list2');
const skillsIcon2 = document.getElementById('skills__icon-down2');

function openSkillsBar2() {
  skillList2.classList.toggle('skills__list-open2');
  skillsIcon2.classList.toggle('skills__icon-down-opened');
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

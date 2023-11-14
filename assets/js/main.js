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
  strings: ['Digital', 'Agile', 'Effective'],
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
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
  navToogle.classList.remove('show-menu-icon');
}
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

const sendButtonEs = document.getElementById('send--button--es');
const sendButtonEn = document.getElementById('send--button--en');

function mostrarMensajeEnviado(language) {
  var modal = document.getElementById('mensajeEnviadoModal');
  if (language === 'es') {
    modal.innerHTML = '<p><span>✔</span> Mensaje Enviado</p>';
  } else if (language === 'en') {
    modal.innerHTML = '<p><span>✔</span> Message Sent</p>';
  }
  modal.style.display = 'block';
  setTimeout(function () {
    modal.style.display = 'none';
  }, 3000);
}

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const serviceID = 'default_service';
  const templateID = 'template_jlzyxin';

  if (sendButtonEn.classList.contains('disabled')) {
    sendButtonEs.classList.add('cargando');
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        sendButtonEs.classList.remove('cargando');
        mostrarMensajeEnviado('es');
      },
      (err) => {
        sendButtonEs.classList.remove('cargando');
        alert('Error!');
      }g
    );
  } else if (sendButtonEs.classList.contains('disabled')) {
    sendButtonEn.classList.add('charging');
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        sendButtonEn.classList.remove('charging');
        mostrarMensajeEnviado('en');
      },
      (err) => {
        sendButtonEn.classList.remove('charging');
        alert('Error!');
      }
    );
  }
});

/*==================== TRADUCCION EN/ES ====================*/

const traductionBtn = document.getElementsByClassName('traductionBtn');
const textsToChange = document.querySelectorAll('[data-section]');

const esTitle = document.getElementById('home_titleEs');
const enTitle = document.getElementById('home_titleEn');

const esAboutBloy = document.getElementById('about__bloy--es');
const enAboutBloy = document.getElementById('about__bloy--en');

const nameInput = document.getElementById('name__input');
const emailInput = document.getElementById('email__input');
const messageInput = document.getElementById('message__input');

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

      esAboutBloy.classList.remove('disabled');
      enAboutBloy.classList.add('disabled');

      nameInput.placeholder = 'Ingrese su nombre';
      emailInput.placeholder = 'Ingrese su email';
      messageInput.placeholder = 'Ingrese su mensaje';

      sendButtonEs.classList.remove('disabled');
      sendButtonEn.classList.add('disabled');
    } else {
      for (const enButton of enButtons) {
        enButton.classList.add('navbar__languague--selected');
        for (const esButton of esButtons) {
          esButton.classList.remove('navbar__languague--selected');
        }
      }
      esTitle.classList.add('disabled');
      enTitle.classList.remove('disabled');

      enAboutBloy.classList.remove('disabled');
      esAboutBloy.classList.add('disabled');

      nameInput.placeholder = 'Enter your name';
      emailInput.placeholder = 'Enter your email';
      messageInput.placeholder = 'Enter your message';

      sendButtonEs.classList.add('disabled');
      sendButtonEn.classList.remove('disabled');
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

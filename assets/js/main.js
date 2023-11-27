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

const nameInput = document.getElementById('name__input');
const emailInput = document.getElementById('email__input');
const messageInput = document.getElementById('message__input');

function validarFormulario(language) {
  var errorMessage = document.getElementById('error__message');
  let nameError = 'Por favor rellena los datos faltantes';
  let emailError = 'Por favor rellena los datos faltantes';
  let messageError = 'Por favor rellena los datos faltantes';

  if (language === 'en') {
    nameError = 'Please fill in the missing data';
    emailError = 'Please fill in the missing data';
    messageError = 'Please fill in the missing data';
  }

  if (nameInput.value === '') {
    errorMessage.innerHTML = nameError;
    nameInput.focus();
    nameInput.classList.add('error');
    setTimeout(function () {
      errorMessage.innerHTML = '';
      nameInput.classList.remove('error');
    }, 2000);
  }
  if (emailInput.value === '') {
    errorMessage.innerHTML = emailError;
    emailInput.focus();
    emailInput.classList.add('error');
    setTimeout(function () {
      errorMessage.innerHTML = '';
      emailInput.classList.remove('error');
    }, 2000);
  }
  if (messageInput.value === '') {
    errorMessage.innerHTML = messageError;
    messageInput.focus();
    messageInput.classList.add('error');
    setTimeout(function () {
      errorMessage.innerHTML = '';
      messageInput.classList.remove('error');
    }, 2000);
    if (
      nameInput.value === '' ||
      emailInput.value === '' ||
      messageInput.value === ''
    ) {
      return;
    }
  }
  return 'OK';
}

function mostrarMensajeEnviado(language) {
  var modal = document.getElementById('mensajeEnviadoModal');
  if (language === 'es') {
    modal.innerHTML = '<p>Gracias por tu mensaje!</p>';
  } else if (language === 'en') {
    modal.innerHTML = '<p>Thank you for your message!</p>';
  }
  modal.style.display = 'block';
  setTimeout(function () {
    modal.style.display = 'none';
  }, 3000);
}
{
  /* <span>✔</span> */
}

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();

  const serviceID = 'default_service';
  const templateID = 'template_jlzyxin';

  form.addEventListener('submit', function (event) {
    event.preventDefault();
  });

  if (sendButtonEn.classList.contains('disabled')) {
    const validator = validarFormulario('es');
    if (validator !== 'OK') return;
    sendButtonEs.classList.add('cargando');
    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        sendButtonEs.classList.remove('cargando');
        mostrarMensajeEnviado('es');
        emailInput.value = '';
        nameInput.value = '';
        messageInput.value = '';
      },
      (err) => {
        sendButtonEs.classList.remove('cargando');

        alert('Error!');
      }
    );
  } else if (sendButtonEs.classList.contains('disabled')) {
    validarFormulario('en');
    if (validator !== 'OK') return;
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

const homeSubEn = document.getElementById('home_subtitle--en');
const homeSubEs = document.getElementById('home_subtitle--es');

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

      nameInput.placeholder = 'Ingrese su nombre';
      emailInput.placeholder = 'Ingrese su email';
      messageInput.placeholder = 'Ingrese su mensaje';

      sendButtonEs.classList.remove('disabled');
      sendButtonEn.classList.add('disabled');

      homeSubEn.classList.add('disabled');
      homeSubEs.classList.remove('disabled');

      navMenu.classList.remove('show-menu');
      navToogle.classList.remove('show-menu-icon');
    } else {
      for (const enButton of enButtons) {
        enButton.classList.add('navbar__languague--selected');
        for (const esButton of esButtons) {
          esButton.classList.remove('navbar__languague--selected');
        }
      }
      esTitle.classList.add('disabled');
      enTitle.classList.remove('disabled');

      nameInput.placeholder = 'Enter your name';
      emailInput.placeholder = 'Enter your email';
      messageInput.placeholder = 'Enter your message';

      sendButtonEs.classList.add('disabled');
      sendButtonEn.classList.remove('disabled');

      homeSubEn.classList.remove('disabled');
      homeSubEs.classList.add('disabled');

      navMenu.classList.remove('show-menu');
      navToogle.classList.remove('show-menu-icon');
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

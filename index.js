const vector = document.querySelector('.vector');
const popwrap = document.querySelector('.Popwrapper');
const xmenu = document.querySelector('.Xmenu');

vector.addEventListener('click', () => {
  // vector.style.display = "none";
  popwrap.style.left = '0';
});

document.querySelectorAll('.nav-links > li').forEach((sync) => sync.addEventListener('click', () => {
  popwrap.style.left = '100%';
  vector.style.display = 'block';
}));

xmenu.addEventListener('click', () => {
  popwrap.style.left = '100%';
  vector.style.display = 'block';
});

// Mobile Version of Popup Window

const projectsMobile = [
  {
    id: '1',
    heading: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
  },
  {
    id: '2',
    heading: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
  },
  {
    id: '3',
    heading: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
  },
  {
    id: '4',
    heading: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
  },
  {
    id: '5',
    heading: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
  },
  {
    id: '6',
    heading: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'HTML'],
    button: 'See Project',
  },
];

projectsMobile.forEach((mobileProjects) => {
  const projects = document.querySelector('.container');

  const cardyB = document.createElement('div');
  cardyB.classList.add('card');

  const cardyC = document.createElement('div');
  cardyC.classList.add('title');

  cardyB.appendChild(cardyC);

  const cardhead = document.createElement('h2');
  cardhead.classList.add('text');
  cardhead.innerText = mobileProjects.heading;

  cardyC.appendChild(cardhead);

  const tech = document.createElement('ul');
  tech.classList.add('server');

  mobileProjects.technologies.forEach((techtrans) => {
    const li = document.createElement('li');
    li.innerHTML = techtrans;
    tech.appendChild(li);
  });

  cardyC.appendChild(tech);
  const btn = document.createElement('button');
  btn.classList.add('button1');
  btn.setAttribute('id', mobileProjects.id);
  btn.innerHTML = mobileProjects.button;

  cardyC.appendChild(btn);

  projects.appendChild(cardyB);
});

const projectPopupWindow = [
  {
    id: '1',
    image: '/Images/Snapshoot-Portfolio.png',
    alt: 'Popup Window Image',
    heading: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'Bootstrap'],
    paragraph:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br/> <br/> Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    button1: 'https://github.com/Mike47ip/mobilePortfolioWeb',
    button2: 'https://github.com/Mike47ip/mobilePortfolioWeb',
  },

  {
    id: '2',
    image: '/Images/Snapshoot-Portfolio.png',
    alt: 'Popup Window Image',
    heading: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'Bootstrap'],
    paragraph:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br/> <br/> Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    button1: 'https://github.com/Mike47ip/mobilePortfolioWeb',
    button2: 'https://github.com/Mike47ip/mobilePortfolioWeb',
  },
  {
    id: '3',
    image: '/Images/Snapshoot-Portfolio.png',
    alt: 'Popup Window Image',
    heading: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'Bootstrap'],
    paragraph:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br/> <br/> Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    button1: 'https://github.com/Mike47ip/mobilePortfolioWeb',
    button2: 'https://github.com/Mike47ip/mobilePortfolioWeb',
  },
  {
    id: '4',
    image: '/Images/Snapshoot-Portfolio.png',
    alt: 'Popup Window Image',
    heading: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'Bootstrap'],
    paragraph:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br/> <br/> Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    button1: 'https://github.com/Mike47ip/mobilePortfolioWeb',
    button2: 'https://github.com/Mike47ip/mobilePortfolioWeb',
  },
  {
    id: '5',
    image: '/Images/Snapshoot-Portfolio.png',
    alt: 'Popup Window Image',
    heading: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'Bootstrap'],
    paragraph:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br/> <br/> Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    button1: 'https://github.com/Mike47ip/mobilePortfolioWeb',
    button2: 'https://github.com/Mike47ip/mobilePortfolioWeb',
  },
  {
    id: '6',
    image: '/Images/Snapshoot-Portfolio.png',
    alt: 'Popup Window Image',
    heading: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'Bootstrap'],
    paragraph:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. <br/> <br/> Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    button1: 'https://github.com/Mike47ip/mobilePortfolioWeb',
    button2: 'https://github.com/Mike47ip/mobilePortfolioWeb',
  },
];

const openpop = document.querySelectorAll('.button1');
const secpop = document.querySelector('.Secpopupwin');
const closepop = document.querySelector('.Closepop');
const popupimage = document.querySelector('.popupWindowImage');
const popuppara = document.querySelector('.headingpop');
const popupServer = document.querySelector('#serverWin');
const popupLorem = document.querySelector('.Lorem');
const live = document.querySelector('#live');
const source = document.querySelector('#source');

const openpopwin = () => {
  secpop.classList.add('active');
};

const closepopwin = () => {
  secpop.classList.remove('active');
};

closepop.addEventListener('click', closepopwin);

openpop.forEach((windowpop) => {
  windowpop.addEventListener('click', () => {
    openpopwin();

    projectPopupWindow.forEach((windowpopup) => {
      if (windowpopup.id === windowpop.id) {
        popupimage.src = windowpopup.image;
        popuppara.textContent = windowpopup.heading;
        popupServer.textContent = '';
        windowpopup.technologies.forEach((tech) => {
          const techlist = document.createElement('li');
          techlist.innerText = tech;
          popupServer.appendChild(techlist);
        });
        popupLorem.innerHTML = windowpopup.paragraph;
        live.href = windowpopup.button1;
        source.href = windowpopup.button2;
      }
    });
  });
});

const formValidation = document.querySelector('form');
const error = document.querySelector('.display-error');

const isUpperCaseEmail = (email) => {
  if (/[A-Z]/.test(email)) {
    return true;
  }
  return false;
};

formValidation.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const validEmail = !isUpperCaseEmail(email);

  if (validEmail) {
    error.innerHTML = '';
    formValidation.submit();
  } else {
    error.style.color = 'blue';
    error.innerHTML = 'Please Email should be in lowercase';
  }
});
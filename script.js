/* eslint-disable linebreak-style */
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 50);
  document.querySelector('.nav-item1').classList.toggle('text-scroll', window.scrollY > 50);
  document.querySelector('.nav-item2').classList.toggle('text-scroll', window.scrollY > 50);
  document.querySelector('.nav-item3').classList.toggle('text-scroll', window.scrollY > 50);
  document.querySelector('.nav-item4').classList.toggle('text-scroll', window.scrollY > 50);
});

const menu = document.querySelector('.nav-menu');
const harmbugerMenu = document.querySelector('#open-menu-btn');
const closeMenu = document.querySelector('#close-menu-btn');

harmbugerMenu.addEventListener('click', () => {
  menu.classList.toggle('open');
  harmbugerMenu.classList.toggle('close');
  closeMenu.classList.toggle('open');
});

closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
  harmbugerMenu.classList.remove('close');
  closeMenu.classList.remove('open');
});

// VIEW MORE
const speakerbox = document.querySelector('#WebDevSpeakers');
const speakerbox2 = document.querySelector('#WebDevSpeakers1');

const speakers2 = [
  {
    name: 'Barack Obama',
    image: './assets/images/spaeaker1.svg',
    background: ' Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: ' As the main venue for new media art production in Korea,Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  {
    name: 'Phil Jones',
    image: './assets/images/spaeaker2.svg',
    background: ' Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: ' As the main venue for new media art production in Korea,Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
];

const speakers = [

  {
    name: 'Barack Obama',
    image: './assets/images/spaeaker3.svg',
    background: ' Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: ' As the main venue for new media art production in Korea,Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  {
    name: 'Phil Jones',
    image: './assets/images/spaeaker4.svg',
    background: ' Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: ' As the main venue for new media art production in Korea,Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  {
    name: 'Barack Obama',
    image: './assets/images/spaeaker5.svg',
    background: ' Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: ' As the main venue for new media art production in Korea,Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  {
    name: 'Phil Jones',
    image: './assets/images/spaeaker6.svg',
    background: ' Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: ' As the main venue for new media art production in Korea,Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
];

let container = '';

speakers.forEach((speaker) => {
  const speakerSection = `
        <li class="speaker-box">
            <div class=" speaker-box_img"><img src="${speaker.image}" alt="speaker-image"></div>
            <div class="speaker-box_content">
                <h2 class="speaker-name">${speaker.name}</h2>
                <p class="speaker-background">
                    ${speaker.background}
                </p>
                <p class="speaker-description">
                    ${speaker.description}
                </p>
            </div>
        </li>
    `;

  container += speakerSection;
});

speakerbox.innerHTML = container;

let container2 = '';

speakers2.forEach((speaker) => {
  const speakerSection2 = `
        <li class="speaker-box">
            <div class=" speaker-box_img"><img src="${speaker.image}" alt="speaker-image"></div>
            <div class="speaker-box_content">
                <h2 class="speaker-name">${speaker.name}</h2>
                <p class="speaker-background">
                    ${speaker.background}
                </p>
                <p class="speaker-description">
                    ${speaker.description}
                </p>
            </div>
        </li>
    `;

  container2 += speakerSection2;
});

speakerbox2.innerHTML = container2;

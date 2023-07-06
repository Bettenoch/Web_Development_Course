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

const speakers = [

  {
    name: 'Barack Obama',
    image: './assets/images/barack Obama.png',
    background: ' Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: ' As the main venue for new media art production in Korea,Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  {
    name: 'Phil Jones',
    image: './assets/images/cvimage2.JPG',
    background: ' Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: ' As the main venue for new media art production in Korea,Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  {
    name: 'Barack Obama',
    image: './assets/images/barack Obama.png',
    background: ' Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: ' As the main venue for new media art production in Korea,Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },

  {
    name: 'Phil Jones',
    image: './assets/images/cvimage2.JPG',
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

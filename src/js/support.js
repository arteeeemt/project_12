import saveChildrenImg from '/img/support/save-the-children@x2.png';
import projectHopeImg from '/img/support/project-hope@x2.png';
import internationalMedicalImg from '/img/support/international-medical-corps@x2.png';
import razomImg from '/img/support/razom@x2.png';
import actionAgainstImg from '/img/support/action-against-hunger@x2.png';
import sergiyPrytulaImg from '/img/support/sergiy-prytula@x2.png';
import medecinsFrontiresImg from '/img/support/medecins-sans-frontires@x2.png';
import worldVisionImg from '/img/support/world-vision@x2.png';
import uniImg from '/img/support/uni24.png';

const supports = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: saveChildrenImg,
    width: '131',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: projectHopeImg,
    width: '62',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: internationalMedicalImg,
    width: '101',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razomImg,
    width: '82',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: actionAgainstImg,
    width: '55',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: sergiyPrytulaImg,
    width: '115',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medecinsFrontiresImg,
    width: '102',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: worldVisionImg,
    width: '81',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: uniImg,
    width: '114',
  },
];

const fondsContainer = document.querySelector('.js-support-list');
let counter = 1;
const markup = supports.map(item => {
  let numberCounter;
  numberCounter = '0' + counter;
  fondsContainer.innerHTML += `<div class="swiper-slide support-slider__item"><a href=${item.url} 
  target='_blank'><span>${numberCounter}</span><img src="${item.img}" alt="${item.title}" width="${item.width}" /></a></div>`;
  counter++;
});

import Swiper from 'swiper/bundle';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const newSwiper = new Swiper('.swiper', {
    modules: [Navigation],
    direction: 'vertical',
    slidesPerView: 6,
    spaceBetween: 20,
    slidesPerGroup: 3,
    navigation: {
      nextEl: '.btn-swap-next',
      prevEl: '.btn-swap-prev',
    },
  });
});

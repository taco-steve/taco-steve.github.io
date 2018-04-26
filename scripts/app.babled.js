'use strict';

// google maps setup

window.initMap = function () {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 38.286748, lng: -85.822597 },
    zoom: 19,
    disableDefaultUI: true,
    scrollwheel: false
  });
  var marker = new google.maps.Marker({
    position: { lat: 38.286748, lng: -85.822597 },
    map: map,
    title: 'Taco Steve!',
    icon: {
      url: 'imgs/taco_marker.png'
    }
  });
};

//
var menuButton = document.getElementById('menu');
var contactButton = document.getElementById('contact');
var backButton = document.querySelector('.back-button');

var siteWrapper = document.querySelector('.site-wrapper');
var menu = document.querySelector('.steve-menu');
var contact = document.querySelector('.steve-contact');

// nav menu and back button handlers
function backButtonHandler(activesSection) {
  activesSection.classList.toggle('section-active');
  backButton.classList.toggle('back-button-visible');
  siteWrapper.classList.remove('dark-bg');
}

function menuButtonHandler(e) {
  e.preventDefault();
  menu.classList.add('section-active');
  backButton.classList.add('back-button-visible');
  if (window.innerWidth > 750) siteWrapper.classList.add('dark-bg');
}

function contactButtonHandler(e) {
  e.preventDefault();
  contact.classList.add('section-active');
  backButton.classList.add('back-button-visible');
  if (window.innerWidth > 750) siteWrapper.classList.add('dark-bg');
}

// click event to handle site navigation
siteWrapper.addEventListener('click', function (e) {
  var activesSection = document.querySelector('.section-active');

  if (activesSection && e.target.className === 'site-wrapper dark-bg') {
    activesSection.classList.remove('section-active');
    backButton.classList.remove('back-button-visible');
    siteWrapper.classList.remove('dark-bg');
  }

  if (e.target === backButton) {
    backButtonHandler(activesSection);
  } else if (e.target === menuButton) {
    menuButtonHandler(e);
  } else if (e.target === contactButton) {
    contactButtonHandler(e);
  }
});

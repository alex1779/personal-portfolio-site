function restoreView() {
  const element = document.getElementById("mobile-menu");
  element.remove();
  document.querySelector('#icon-button-button').style.display = 'flex';
  document.querySelector('#div-logo').style.display = 'flex';
  document.querySelector('#headline').style.display = 'block';
  document.querySelector('#div-logo').scrollIntoView();
}

function portfolioClick() {
  restoreView()
  document.querySelector('#works-section-div1').scrollIntoView();
}

function aboutClick() {
  restoreView()
  document.querySelector('#about-myself').scrollIntoView();
}

function contactClick() {
  restoreView()
  document.querySelector('#contact-form-data-h1').scrollIntoView();
}

function shutdownBackground() {
  document.querySelector('#icon-button-button').style.display = 'none';
  document.querySelector('#div-logo').style.display = 'none';
  document.querySelector('#headline').style.display = 'none';
}

function hamburgClick() {
  const container = document.querySelector('#container');
  shutdownBackground()
  const menu = document.createElement('div');
  menu.id = 'mobile-menu';
  menu.setAttribute('class', 'mobile-menu');
  container.appendChild(menu);
  const button = document.createElement('button');
  button.id = 'mobile-menu-button';
  button.setAttribute('class', 'mobile-menu-button-close');
  button.onclick = function () { restoreView(); };
  menu.appendChild(button);
  const navbar = document.createElement('nav');
  const buttonPortfolio = document.createElement('button');
  const buttonAbout = document.createElement('button');
  const buttonContact = document.createElement('button');
  navbar.setAttribute('class', 'mobile-menu-navbar');
  buttonPortfolio.setAttribute('class', 'mobile-menu-buttons');
  buttonAbout.setAttribute('class', 'mobile-menu-buttons');
  buttonContact.setAttribute('class', 'mobile-menu-buttons');
  buttonPortfolio.appendChild(document.createTextNode('Portfolio'));
  buttonAbout.appendChild(document.createTextNode('About'));
  buttonContact.appendChild(document.createTextNode('Contact'));
  buttonPortfolio.addEventListener('click',portfolioClick);
  buttonAbout.addEventListener('click',aboutClick);
  buttonContact.addEventListener('click',contactClick);
  navbar.appendChild(buttonPortfolio);
  navbar.appendChild(buttonAbout);
  navbar.appendChild(buttonContact);
  menu.appendChild(navbar);
}
const menuhamb = document.querySelector('#icon-button-button');
menuhamb.onclick = function () { hamburgClick(); };

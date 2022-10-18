function myFunction() {

  const container = document.querySelector('#container');

  document.querySelector('#icon-button-button').style.display = "none";
  document.querySelector('#div-logo').style.display = "none";
  document.querySelector('#headline').style.display = "none";

  const menu = document.createElement('div');
  menu.id = 'mobile-menu';
  menu.style.width = '100%';
  menu.style.height = '100%';
  menu.style.background = '#6070ff';
  menu.style.position = 'absolute';
  menu.style.top = '0';
  menu.style.left = '0';
  menu.style['mix-blend-mode'] = 'multiply';

  container.appendChild(menu);

  let button = document.createElement('button');
  button.id = 'mobile-menu-button';
  button.style.position = 'absolute';
  button.style.width = '6.4%';
  button.style['aspect-ratio'] = '1 / 1';
  button.style.top = '1%';
  button.style.left = '84.9%';
  button.style.border = 'none';
  button.style.background = 'url("images/Icon - Cancel.svg")';
  button.style['background-size'] = 'cover';
  button.style['background-position'] = 'center';
  button.style['z-index'] = '5';
  button.onclick = function() {myFunction2()}

  menu.appendChild(button);

  const navbar = document.createElement('nav');
  let buttonPortfolio = document.createElement('button');
  let buttonAbout = document.createElement('button');
  let buttonContact = document.createElement('button');

  navbar.style.position = 'absolute';
  navbar.style['aspect-ratio'] = '351 / 184';
  navbar.style.width = '93.6%';
  navbar.style.top = '2%';
  navbar.style.left = '3.2%';

  navbar.style.display = 'flex';
  navbar.style['flex-direction'] = 'column';
  navbar.style['align-items'] = 'center';
  navbar.style['justify-content'] = 'space-between';

  buttonPortfolio.style['aspect-ratio'] = '251 / 24';
  buttonPortfolio.style.width = '90%';
  buttonPortfolio.style.background = 'transparent';
  buttonPortfolio.style.color = 'white';
  buttonPortfolio.style['font-size'] = '9.5vw';
  buttonPortfolio.style['font-weight'] = '600';
  buttonPortfolio.style['line-height'] = '1.5vw';
  buttonPortfolio.style['text-align'] = 'left';
  buttonPortfolio.style.border = 'none';

  buttonAbout.style['aspect-ratio'] = '251 / 24';
  buttonAbout.style.width = '90%';
  buttonAbout.style.background = 'transparent';
  buttonAbout.style.color = 'white';
  buttonAbout.style['font-size'] = '9.5vw';
  buttonAbout.style['font-weight'] = '600';
  buttonAbout.style['line-height'] = '1.5vw';
  buttonAbout.style['text-align'] = 'left';
  buttonAbout.style.border = 'none';

  buttonContact.style['aspect-ratio'] = '251 / 24';
  buttonContact.style.width = '90%';
  buttonContact.style.background = 'transparent';
  buttonContact.style.color = 'white';
  buttonContact.style['font-size'] = '9.5vw';
  buttonContact.style['font-weight'] = '600';
  buttonContact.style['line-height'] = '1.5vw';
  buttonContact.style['text-align'] = 'left';
  buttonContact.style.border = 'none';

  buttonPortfolio.appendChild(document.createTextNode('Portfolio'));
  buttonAbout.appendChild(document.createTextNode('About'));
  buttonContact.appendChild(document.createTextNode('Contact'));

  buttonPortfolio.onclick = function() {portfolioClick()}
  buttonAbout.onclick = function() {aboutClick()}
  buttonContact.onclick = function() {contactClick()}

  navbar.appendChild(buttonPortfolio);
  navbar.appendChild(buttonAbout);
  navbar.appendChild(buttonContact);
  menu.appendChild(navbar);

}

function myFunction2() {
  document.querySelector('#mobile-menu').style.display = "none";
  document.querySelector('#icon-button-button').style.display = "flex";
  document.querySelector('#div-logo').style.display = "flex";
  document.querySelector('#headline').style.display = "block";
}

function portfolioClick() {
  document.querySelector('#mobile-menu').style.display = "none";
  document.querySelector('#icon-button-button').style.display = "flex";
  document.querySelector('#div-logo').style.display = "flex";
  document.querySelector('#headline').style.display = "block";
  document.querySelector('#works-section-div1').scrollIntoView();
}

function aboutClick() {
  document.querySelector('#mobile-menu').style.display = "none";
  document.querySelector('#icon-button-button').style.display = "flex";
  document.querySelector('#div-logo').style.display = "flex";
  document.querySelector('#headline').style.display = "block";
  document.querySelector('#about-myself').scrollIntoView();
}

function contactClick() {
  document.querySelector('#mobile-menu').style.display = "none";
  document.querySelector('#icon-button-button').style.display = "flex";
  document.querySelector('#div-logo').style.display = "flex";
  document.querySelector('#headline').style.display = "block";
  document.querySelector('#contact-form-data-h1').scrollIntoView();
}

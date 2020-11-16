const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const menuLinks = document.querySelectorAll('.menu-item__link');
const anchors = document.querySelectorAll('a[href*="#"]');
const body = document.body;

function toggleActive() {                                          
  hamburger.classList.toggle('hamburger--active'); 
  navigation.classList.toggle('nav--active');
}

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    for (let i = 0; i < menuLinks.length; i++) {
      menuLinks[i].classList.remove('menu-item__link--active');
    }
    e.target.classList.add('menu-item__link--active');                                           
    toggleActive();
  });
});

hamburger.addEventListener('click', toggleActive);
overlay.addEventListener('click', toggleActive);
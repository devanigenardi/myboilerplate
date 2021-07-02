const getLocation = location.href;
const getNavLocations = document.querySelectorAll('.nav__location');
const getNavLength = getNavLocations.length;
const hideHambuerLine = document.querySelector('.hamburger__lines--middle');
const rotateTopLine = document.querySelector('.hamburger__lines--top');
const rotateBottomLine = document.querySelector('.hamburger__lines--bottom');
const hamburger = document.querySelector('.hamburger');
const links = document.querySelector('.nav__list');
const lines = document.querySelectorAll('.hamburger__lines');

hamburger.addEventListener('click', hamburgerEvents)

function hamburgerEvents() {
   hamburgerIconAnimation.showMessage();
   hamburgerIconAnimation.rotateTop();
   hamburgerIconAnimation.rotateBottom();
   links.classList.toggle('nav__list--hide');
   lines.forEach(link => {
      link.classList.toggle('hamburger__lines--active')
   });
};

const hamburgerIconAnimation = {
   showMessage: function() {
      hideHambuerLine.classList.toggle('hide')
   },
   rotateTop: function() {
      rotateTopLine.classList.toggle('rotateTopLine')
   },
   rotateBottom: function() {
      rotateBottomLine.classList.toggle('rotateBottomLine')
   }
};

getNavLocations.forEach((item, i) => {
   if (item.href === getLocation) {
      console.log(item.href)
      item.className = "active"
   }
});
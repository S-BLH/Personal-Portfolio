const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const menuItems = document.getElementsByClassName('menu-item');
const sections = document.getElementsByClassName('section'); // Assuming you have sections to toggle

hamburgerMenu.addEventListener('click', function() {
  mobileMenu.classList.toggle('active');
  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.toggle('hidden');
  }
});

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    for (let j = 0; j < sections.length; j++) {
      sections[j].classList.add('hidden');
    }
  });
}
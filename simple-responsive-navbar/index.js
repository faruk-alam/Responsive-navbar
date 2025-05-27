const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const navbarLinks = document.querySelectorAll('.links');
const menuOverlay = document.querySelector('.menu-overlay');
menuOverlay.classList.add('nav-links');
menuOverlay.addEventListener('click', toggleMenu);
hamburgerMenu.addEventListener('click', toggleMenu);
function toggleMenu(){
    navMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}
// Close navbar when clicking on links
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(navMenu.classList.contains('active')) {
            toggleMenu();
        }
        // navMenu.classList.remove('active');
        // hamburgerMenu.classList.remove('active');
    })
})
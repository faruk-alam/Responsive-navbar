const hamburgerMenu = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
console.log(hamburgerMenu);
hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
})
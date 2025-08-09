  // DOM Elements
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-links');
  // Toggle mobile menu
  function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
  };
  //Event Listeners
  menuToggle.addEventListener('click',toggleMenu);
closeMenu.addEventListener('click',toggleMenu);
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
  
  // Close mobile menu on outside click
  document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      mobileMenu.classList.add('hidden');
    }
  });
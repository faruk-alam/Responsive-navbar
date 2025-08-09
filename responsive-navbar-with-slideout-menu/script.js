          // DOM Elements
        const menuToggle = document.getElementById('menuToggle');
        const closeMenu = document.getElementById('closeMenu');
        const mobileMenu = document.getElementById('mobileMenu');
        const overlay = document.getElementById('overlay');
        const navLinks = document.querySelectorAll('.mobile-menu-links a');

        // Toggle mobile menu
        function toggleMenu() {
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        }

        // Event Listeners
        menuToggle.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Close menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

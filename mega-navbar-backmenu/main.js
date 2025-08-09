document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const overlay = document.querySelector('.navbar-overlay');
    const megamenuItems = document.querySelectorAll('.has-megamenu');
    const submenuItems = document.querySelectorAll('.has-submenu');
    const backButtons = document.querySelectorAll('.back-button');
    
    // Toggle mobile menu
    navbarToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navbarMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Close all open submenus when closing main menu
        if (!navbarMenu.classList.contains('active')) {
            closeAllSubmenus();
        }
    });
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
        navbarToggle.classList.remove('active');
        navbarMenu.classList.remove('active');
        this.classList.remove('active');
        closeAllSubmenus();
    });
    
    // Handle megamenu toggle on desktop
    megamenuItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const megamenu = item.querySelector('.megamenu');
        
        // Desktop hover
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth > 992) {
                closeAllSubmenus();
                megamenu.style.maxHeight = megamenu.scrollHeight + 'px';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (window.innerWidth > 992) {
                megamenu.style.maxHeight = '0';
            }
        });
        
        // Mobile click
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                toggleSubmenu(megamenu);
            }
        });
    });
    
    // Handle submenu toggle
    submenuItems.forEach(item => {
        const link = item.querySelector('a');
        const submenu = item.querySelector('.submenu');
        
        // Desktop hover
        item.addEventListener('mouseenter', function() {
            if (window.innerWidth > 992) {
                closeAllSubmenus();
                submenu.style.maxHeight = submenu.scrollHeight + 'px';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (window.innerWidth > 992) {
                submenu.style.maxHeight = '0';
            }
        });
        
        // Mobile click
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                toggleSubmenu(submenu);
            }
        });
    });
    
    // Handle back buttons
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const menu = this.closest('.megamenu, .submenu');
            if (menu) {
                menu.style.maxHeight = '0';
                
                // If this is a nested submenu, reopen parent menu
                if (menu.classList.contains('submenu')) {
                    const parentItem = menu.closest('.has-submenu');
                    if (parentItem) {
                        const parentMenu = parentItem.closest('.megamenu, .submenu');
                        if (parentMenu) {
                            parentMenu.style.maxHeight = parentMenu.scrollHeight + 'px';
                        }
                    }
                }
            }
        });
    });
    
    // Close submenus when clicking outside on desktop
    document.addEventListener('click', function(e) {
        if (window.innerWidth > 992) {
            const isNavItem = e.target.closest('.nav-item');
            const isSubmenu = e.target.closest('.megamenu, .submenu');
            
            if (!isNavItem && !isSubmenu) {
                closeAllSubmenus();
            }
        }
    });
    
    // Close all submenus when resizing to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            navbarToggle.classList.remove('active');
            navbarMenu.classList.remove('active');
            overlay.classList.remove('active');
            closeAllSubmenus();
        }
    });
    
    // Helper function to toggle submenu
    function toggleSubmenu(menu) {
        if (menu.style.maxHeight === '0px' || !menu.style.maxHeight) {
            closeAllSubmenus();
            menu.style.maxHeight = menu.scrollHeight + 'px';
        } else {
            menu.style.maxHeight = '0';
        }
    }
    
    // Helper function to close all submenus
    function closeAllSubmenus() {
        document.querySelectorAll('.megamenu, .submenu').forEach(menu => {
            menu.style.maxHeight = '0';
        });
    }
});
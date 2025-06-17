document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu   = document.getElementById('navMenu');

    const MENU_OPEN_CLASS = 'show';
    const BTN_ACTIVE_CLASS = 'is-active';

    function toggleMenu () {
        const isOpen = navMenu.classList.toggle(MENU_OPEN_CLASS);
        hamburger.classList.toggle(BTN_ACTIVE_CLASS, isOpen);
        hamburger.setAttribute('aria-expanded', isOpen);
    }

    function closeMenu () {
        navMenu.classList.remove(MENU_OPEN_CLASS);
        hamburger.classList.remove(BTN_ACTIVE_CLASS);
        hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener('click', (evt) => {
        const clickInsideNav      = navMenu.contains(evt.target);
        const clickOnHamburgerBtn = hamburger.contains(evt.target);

        if (!clickInsideNav && !clickOnHamburgerBtn && navMenu.classList.contains(MENU_OPEN_CLASS)) {
      closeMenu();
        }
    });
});
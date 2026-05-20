/**
 * Header — scroll effect & mobile menu
 */
(function () {
  function initHeader() {
    const header = document.querySelector('.header');
    const toggle = document.querySelector('.header__toggle');
    const mobileMenu = document.querySelector('.header__mobile-menu');
    if (!header) return;

    // Scroll effect
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    });

    // Mobile menu
    if (toggle && mobileMenu) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
      });

      mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          toggle.classList.remove('active');
          mobileMenu.classList.remove('open');
          document.body.style.overflow = '';
        });
      });
    }
  }

  // Header is in index.html, not loaded dynamically
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeader);
  } else {
    initHeader();
  }
})();

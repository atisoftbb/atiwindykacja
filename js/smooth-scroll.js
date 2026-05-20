/**
 * Smooth scroll for anchor links
 */
(function () {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: 'smooth',
    });
  });
})();

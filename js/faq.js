/**
 * FAQ Accordion
 */
(function () {
  function initAccordion() {
    const items = document.querySelectorAll('.accordion__item');
    if (!items.length) return;

    items.forEach((item) => {
      const header = item.querySelector('.accordion__header');
      const body = item.querySelector('.accordion__body');

      header.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close all
        items.forEach((i) => {
          i.classList.remove('active');
          i.querySelector('.accordion__body').style.maxHeight = null;
        });

        // Open clicked (if was closed)
        if (!isOpen) {
          item.classList.add('active');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });
  }

  document.addEventListener('sections:loaded', initAccordion);
})();

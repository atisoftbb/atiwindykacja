/**
 * Section Loader — dynamically loads HTML sections into the page
 */
(function () {
  const sectionSlots = document.querySelectorAll('[data-section]');

  async function loadSection(slot) {
    const name = slot.getAttribute('data-section');
    try {
      const response = await fetch(`sections/${name}.html`);
      if (!response.ok) throw new Error(`Section "${name}" not found`);
      slot.innerHTML = await response.text();
    } catch (err) {
      console.error(`Failed to load section: ${name}`, err);
    }
  }

  async function loadAll() {
    await Promise.all(Array.from(sectionSlots).map(loadSection));
    document.dispatchEvent(new CustomEvent('sections:loaded'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAll);
  } else {
    loadAll();
  }
})();

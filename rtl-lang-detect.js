// Detects language changes (e.g., by Google Translate) and applies RTL if needed

(function() {
  const rtlLangs = ['ar', 'he', 'fa', 'ur', 'ps', 'dv', 'ku', 'yi', 'ug', 'sd'];
  function setDirByLang() {
    const lang = document.documentElement.lang || navigator.language || 'en';
    document.documentElement.dir = rtlLangs.includes(lang.substring(0, 2)) ? 'rtl' : 'ltr';
  }

  // Observe changes to the lang attribute (e.g., by Google Translate)
  const observer = new MutationObserver(setDirByLang);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  // Also check periodically in case of dynamic changes
  setInterval(setDirByLang, 1000);

  // Initial check
  setDirByLang();
})();

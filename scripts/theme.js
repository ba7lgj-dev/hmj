(function () {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem('hmj-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('hmj-theme', theme);
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  document.addEventListener('DOMContentLoaded', () => {
    setTheme(initialTheme);
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', toggleTheme);
    }
  });
})();

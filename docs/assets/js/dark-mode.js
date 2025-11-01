(function () {
  const storageKey = 'preferred-theme';
  const toggleButton = document.querySelector('[data-theme-toggle]');
  if (!toggleButton) return;

  const applyTheme = (theme) => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      toggleButton.textContent = '☀️';
    } else {
      root.removeAttribute('data-theme');
      toggleButton.textContent = '🌙';
    }
  };

  const storedTheme = localStorage.getItem(storageKey);
  if (storedTheme) {
    applyTheme(storedTheme);
  }

  toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  });
})();

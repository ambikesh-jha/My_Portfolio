// theme.js
// Default theme is DARK. Toggling adds/removes body.light-theme.
// The dark-mode class (dark-theme) is no longer used — dark is
// the CSS default in :root, light is the override class.

export function initTheme() {
    const themeButton = document.getElementById('theme-button');
    if (!themeButton) return;

    const themeIcon  = themeButton.querySelector('i');
    const lightTheme = 'light-theme';

    // ── Sync icon to current theme state ──
    // light-theme class already applied to body by theme-init.js if needed
    function syncIcon() {
        const isLight = document.body.classList.contains(lightTheme);
        themeIcon.classList.toggle('uil-moon', isLight);  // light mode → show moon
        themeIcon.classList.toggle('uil-sun',  !isLight); // dark mode  → show sun
    }

    syncIcon();

    // ── Toggle on click ──
    themeButton.addEventListener('click', () => {
        const isLight = document.body.classList.toggle(lightTheme);
        syncIcon();
        localStorage.setItem('selected-theme', isLight ? 'light' : 'dark');
    });
}
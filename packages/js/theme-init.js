// theme-init.js
// ─────────────────────────────────────────────────────────────
// Load synchronously in <head> BEFORE any CSS <link> tags.
//
// Default is DARK. Only switches to light if user explicitly
// saved 'light' in localStorage.
//
// Applies light-theme to <html> immediately (body doesn't exist
// yet during <head> parsing). On DOMContentLoaded moves it to
// <body> so all JS continues to work via body.light-theme.
// ─────────────────────────────────────────────────────────────
(function () {
    if (localStorage.getItem('selected-theme') !== 'light') return;

    // User wants light — apply to <html> right now
    document.documentElement.classList.add('light-theme');

    // Move to <body> once it exists
    document.addEventListener('DOMContentLoaded', function () {
        document.body.classList.add('light-theme');
        document.documentElement.classList.remove('light-theme');
    }, { once: true });
})();
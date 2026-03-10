// loadSections.js
document.addEventListener('DOMContentLoaded', async () => {
    const sections = [
        { id: 'header-placeholder',        file: 'sections/header.html' },
        { id: 'home-placeholder',          file: 'sections/home.html' },
        { id: 'about-placeholder',         file: 'sections/about.html' },
        { id: 'qualification-placeholder', file: 'sections/qualification.html' },
        { id: 'certificates-placeholder',  file: 'sections/certificates.html' },
        { id: 'project-placeholder',       file: 'sections/projects.html' },
        { id: 'contact-placeholder',       file: 'sections/contact.html' },
        { id: 'footer-placeholder',        file: 'sections/footer.html' }
    ];

    // ── 1. Hide body until sections are ready (prevents blank flash) ──
    document.body.classList.add('sections-loading');

    // ── 2. Load all HTML sections in parallel ──
    try {
        await Promise.all(
            sections.map(async ({ id, file }) => {
                const el = document.getElementById(id);
                if (!el) return;
                const response = await fetch(file);
                if (!response.ok) throw new Error(`Failed to load ${file}`);
                el.innerHTML = await response.text();
            })
        );
        console.log('All sections loaded!');
    } catch (error) {
        console.error('Section loading error:', error);
    }

    // ── 3. Stamp footer year ──
    const footerYear = document.getElementById('footerYear');
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    // ── 4. Reveal body with a smooth fade-in ──
    document.body.classList.remove('sections-loading');
    document.body.classList.add('sections-ready');

    // ── 5. Fire event so page modules know DOM is ready ──
    document.dispatchEvent(new Event('sectionsLoaded'));
    console.log('sectionsLoaded event fired!');
});
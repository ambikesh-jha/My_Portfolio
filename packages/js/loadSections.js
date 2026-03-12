// loadSections.js
document.addEventListener('DOMContentLoaded', async () => {

    // ── Resolve base path so fetches work on GitHub Pages AND locally ──
    // e.g. on GH Pages your site might live at /your-repo-name/
    // Strips the current filename to get the directory, then navigates up
    // to the root where /sections/ lives.
    const getBase = () => {
        const path = location.pathname;
        // If we're on a subpage like /projects.html, go up one level
        const dir = path.endsWith('/') ? path : path.substring(0, path.lastIndexOf('/') + 1);
        return `${location.origin}${dir}`;
    };

    const base = getBase();

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

    document.body.classList.add('sections-loading');

    try {
        await Promise.all(
            sections.map(async ({ id, file }) => {
                const el = document.getElementById(id);
                if (!el) return;
                // Use absolute URL built from base
                const response = await fetch(`${base}${file}`);
                if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
                el.innerHTML = await response.text();
            })
        );
        console.log('All sections loaded!');
    } catch (error) {
        console.error('Section loading error:', error);
    }

    const footerYear = document.getElementById('footerYear');
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    document.body.classList.remove('sections-loading');
    document.body.classList.add('sections-ready');

    document.dispatchEvent(new Event('sectionsLoaded'));
    console.log('sectionsLoaded event fired!');
});

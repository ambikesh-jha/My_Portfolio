// nav.js — Redesigned
// Handles: drawer open/close, scroll-aware frosted header, active link highlight

export function initNav() {
    const header     = document.getElementById('header');
    const navMenu    = document.getElementById('nav-menu');
    const navToggle  = document.getElementById('nav-toggle');
    const navClose   = document.getElementById('nav-close');
    const navOverlay = document.getElementById('nav-overlay');
    const navLinks   = document.querySelectorAll('.nav__link');

    /* ── Close drawer ── */
    function closeDrawer() {
        navMenu?.classList.remove('show-menu');
        navToggle?.classList.remove('open');
        document.body.style.overflow = '';
    }

    /* ── Open drawer ── */
    navToggle?.addEventListener('click', () => {
        navMenu?.classList.add('show-menu');
        navToggle.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    navClose?.addEventListener('click', closeDrawer);
    navOverlay?.addEventListener('click', closeDrawer);

    /* ── Close on link click (mobile) ── */
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) closeDrawer();
        });
    });

    /* ── Close on Escape ── */
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeDrawer();
    });

    /* ── Scroll-aware frosted header ── */
    function handleScroll() {
        header?.classList.toggle('scrolled', window.scrollY > 60);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run on load

    /* ── Active link highlight ──
       Matches current page filename OR current hash section.
       hrefs with anchors (e.g. about.html#skills) are matched
       by their page component so the parent page stays highlighted.
    ── */
    function setActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const currentHash = window.location.hash;

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            const href     = link.getAttribute('href') || '';
            const hrefPage = href.split('#')[0];
            const hrefHash = href.includes('#') ? '#' + href.split('#')[1] : '';

            // Exact page match (with or without anchor)
            if (hrefPage === currentPage) {
                link.classList.add('active-link');
                return;
            }

            // Hash-only match (same-page anchor navigation)
            if (currentHash && hrefHash === currentHash && hrefPage === '') {
                link.classList.add('active-link');
                return;
            }

            // index.html / root match
            if ((currentPage === '' || currentPage === 'index.html') && href === 'index.html') {
                link.classList.add('active-link');
            }
        });
    }

    setActiveLink();
    window.addEventListener('hashchange', setActiveLink);
}
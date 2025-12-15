// loadSections.js (Updated for JS Modules)
document.addEventListener('DOMContentLoaded', async () => {
    const sections = [
        { id: 'header-placeholder', file: 'sections/header.html' },
        { id: 'home-placeholder', file: 'sections/home.html' },
        { id: 'about-placeholder', file: 'sections/about.html' },
        { id: 'qualification-placeholder', file: 'sections/qualification.html' },
        { id: 'skills-placeholder', file: 'sections/skills.html' },
        { id: 'services-placeholder', file: 'sections/services.html' },
        { id: 'portfolio-placeholder', file: 'sections/portfolio.html' },
        { id: 'project-placeholder', file: 'sections/project.html' },
        { id: 'contact-placeholder', file: 'sections/contact.html' },
        { id: 'footer-placeholder', file: 'sections/footer.html' }
    ];

    // Load sections
    try {
        await Promise.all(
            sections.map(async ({ id, file }) => {
                const response = await fetch(file);
                if (!response.ok) throw new Error(`Failed to load ${file}`);
                const html = await response.text();
                document.getElementById(id).innerHTML = html;
            })
        );
        console.log('All sections loaded!');
    } catch (error) {
        console.error('Section loading error:', error);
    }

    // NEW: Load JS modules dynamically as ES6 modules
    const modules = [
        { src: './packages/js/modules/nav.js', init: 'initNav' },
        { src: './packages/js/modules/qualification.js', init: 'initQualification' },
        { src: './packages/js/modules/certificates.js', init: 'initCertificates' },
        { src: './packages/js/modules/portfolio.js', init: 'initPortfolio' },
        { src: './packages/js/modules/scroll.js', init: 'initScroll' },
        { src: './packages/js/modules/theme.js', init: 'initTheme' }
    ];

    await Promise.all(
        modules.map(async ({ src, init }) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.type = 'module';
                script.src = src;
                script.onload = () => {
                    // Auto-init if function exported
                    import(src).then(module => {
                        if (typeof module[init] === 'function') {
                            module[init]();
                            console.log(`${init} initialized!`);
                        }
                        resolve();
                    }).catch(reject);
                };
                script.onerror = reject;
                document.head.appendChild(script);
            });
        })
    );

    console.log('All JS modules loaded and initialized!');
});
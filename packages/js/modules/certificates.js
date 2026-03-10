// certificates.js
// Sections:
// 1. renderCertificates  – stamps featured + grid cards from data
// 2. initCertificates    – filters, view all, sticky pill, lightbox

import { FEATURED_CERT, GRID_CERTS } from './certificates-data.js';


/* ============================================================
   1. RENDER CERTIFICATES
   ============================================================ */

export function renderCertificates() {

    /* ── Featured card ── */
    const featuredWrapper = document.getElementById('certFeatured');
    if (featuredWrapper) {
        const f = FEATURED_CERT;
        const card = document.createElement('div');
        card.className = 'cert__card cert__card--featured';
        card.dataset.category = f.category;
        card.dataset.name     = f.name;
        card.dataset.src      = f.src;

        card.innerHTML = `
            <div class="cert__card-img-wrap">
                <img src="${f.src}" alt="${f.name}" loading="lazy">
            </div>
            <div class="cert__card-overlay">
                <div class="cert__card-overlay-inner">
                    <span class="cert__card-badge">${f.badge}</span>
                    <h3 class="cert__card-name">${f.title}</h3>
                    <p class="cert__card-desc">${f.desc}</p>
                    <button class="cert__card-view" aria-label="View certificate">
                        <i class="uil uil-expand-arrows-alt"></i>
                        View Certificate
                    </button>
                </div>
            </div>
            <div class="cert__card-featured-badge">
                <i class="uil uil-award"></i> Featured
            </div>
        `;

        featuredWrapper.appendChild(card);
    }

    /* ── Grid cards ── */
    const gridEl = document.getElementById('certGrid');
    if (gridEl) {
        const fragment = document.createDocumentFragment();

        GRID_CERTS.forEach(cert => {
            const card = document.createElement('div');
            card.className        = 'cert__card';
            card.dataset.category = cert.category;
            card.dataset.name     = cert.name;
            card.dataset.src      = cert.src;

            card.innerHTML = `
                <div class="cert__card-img-wrap">
                    <img src="${cert.src}" alt="${cert.alt}" loading="lazy">
                </div>
                <div class="cert__card-overlay">
                    <div class="cert__card-overlay-inner">
                        <span class="cert__card-badge">${cert.badge}</span>
                        <h3 class="cert__card-name">${cert.name}</h3>
                        <button class="cert__card-view">
                            <i class="uil uil-expand-arrows-alt"></i> View
                        </button>
                    </div>
                </div>
            `;

            fragment.appendChild(card);
        });

        gridEl.appendChild(fragment);
    }
}


/* ============================================================
   2. INIT CERTIFICATES
   Features: filter tabs with correct counts, hover overlay,
             View All / Show Less (threshold 12),
             lightbox with prev/next nav
   ============================================================ */

export function initCertificates() {

    const filterBtns      = document.querySelectorAll('.cert__filter-btn');
    const allCards        = document.querySelectorAll('.cert__grid .cert__card');
    const featuredCard    = document.querySelector('.cert__card--featured');
    const featuredWrapper = document.getElementById('certFeatured');
    const gridEl          = document.getElementById('certGrid');

    const lightbox   = document.getElementById('certLightbox');
    const lbImg      = document.getElementById('certLightboxImg');
    const lbName     = document.getElementById('certLightboxName');
    const lbCounter  = document.getElementById('certLightboxCounter');
    const lbClose    = document.getElementById('certLightboxClose');
    const lbBackdrop = document.getElementById('certLightboxBackdrop');
    const lbPrev     = document.getElementById('certLightboxPrev');
    const lbNext     = document.getElementById('certLightboxNext');

    if (!filterBtns.length) return;

    const THRESHOLD   = 12;
    let isExpanded    = false;
    let currentFilter = 'all';

    /* ── Build count badges — include featured card in totals ── */
    const countMap = { all: allCards.length + 1 }; // +1 for featured
    allCards.forEach(card => {
        const cat = card.dataset.category;
        countMap[cat] = (countMap[cat] || 0) + 1;
    });
    // Add featured card to its category count
    if (featuredCard) {
        const cat = featuredCard.dataset.category;
        countMap[cat] = (countMap[cat] || 0) + 1;
    }

    filterBtns.forEach(btn => {
        const countEl = btn.querySelector('.cert__filter-count');
        if (countEl) countEl.textContent = countMap[btn.dataset.filter] || 0;
    });

    /* ── Inject View All button ── */
    const viewAllWrap = document.createElement('div');
    viewAllWrap.className = 'cert__viewall-wrap';
    viewAllWrap.innerHTML = `
        <button class="cert__viewall-btn" id="certViewAllBtn">
            <span class="cert__viewall-text">View All Certificates</span>
            <i class="uil uil-angle-down cert__viewall-icon"></i>
        </button>`;
    gridEl?.after(viewAllWrap);

    /* ── Inject sticky Show Less pill ── */
    const pillWrap = document.createElement('div');
    pillWrap.className = 'cert__sticky-wrap';
    pillWrap.innerHTML = `
        <button class="cert__sticky-pill" id="certStickyPill">
            <i class="uil uil-angle-up"></i> Show Less
        </button>`;
    viewAllWrap.after(pillWrap);

    const viewAllBtnEl = document.getElementById('certViewAllBtn');
    const stickyPill   = document.getElementById('certStickyPill');

    /* ── Core render ── */
    function renderCards() {
        const matching = [...allCards].filter(
            c => currentFilter === 'all' || c.dataset.category === currentFilter
        );
        const total   = matching.length;
        const showAll = isExpanded || total <= THRESHOLD;

        allCards.forEach(card => {
            card.classList.add('cert__hidden');
            card.classList.remove('cert__visible');
            card.style.animationDelay = '0s';
        });

        matching.forEach((card, i) => {
            if (showAll || i < THRESHOLD) {
                card.classList.remove('cert__hidden');
                card.classList.add('cert__visible');
                card.style.animationDelay = `${(i % 12) * 0.04}s`;
            }
        });

        /* Featured visibility */
        if (featuredWrapper) {
            const show = currentFilter === 'all' ||
                featuredCard?.dataset.category === currentFilter;
            featuredWrapper.style.display = show ? '' : 'none';
        }

        /* View All button */
        viewAllWrap.style.display = (!isExpanded && total > THRESHOLD) ? '' : 'none';
        if (viewAllBtnEl) {
            viewAllBtnEl.querySelector('.cert__viewall-text').textContent =
                `View All ${total} Certificates`;
        }

        /* Sticky pill */
        pillWrap.style.display = (isExpanded && total > THRESHOLD) ? '' : 'none';
    }

    /* ── View All ── */
    viewAllBtnEl?.addEventListener('click', () => {
        isExpanded = true;
        renderCards();
        const cards = [...allCards].filter(c => !c.classList.contains('cert__hidden'));
        cards[THRESHOLD]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    /* ── Show Less ── */
    stickyPill?.addEventListener('click', () => {
        isExpanded = false;
        renderCards();
        gridEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    /* ── Filter tabs ── */
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            isExpanded    = false;
            renderCards();
        });
    });

    /* Initial render */
    renderCards();


    /* ============================================================
       LIGHTBOX
       ============================================================ */
    let visibleCards = [];
    let currentIndex = 0;

    function getVisibleCards() {
        const gridVisible = [...allCards].filter(
            c => !c.classList.contains('cert__hidden')
        );
        const featuredVis = (featuredCard && featuredWrapper?.style.display !== 'none')
            ? [featuredCard] : [];
        return [...featuredVis, ...gridVisible];
    }

    function openLightbox(card) {
        visibleCards = getVisibleCards();
        currentIndex = visibleCards.indexOf(card);
        if (currentIndex === -1) currentIndex = 0;
        renderLightbox();
        lightbox?.classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function renderLightbox() {
        const card = visibleCards[currentIndex];
        if (!card || !lbImg) return;
        lbImg.src = card.dataset.src || card.querySelector('img')?.src || '';
        if (lbName)    lbName.textContent    = card.dataset.name || '';
        if (lbCounter) lbCounter.textContent = `${currentIndex + 1} / ${visibleCards.length}`;
        if (lbPrev)    lbPrev.disabled  = currentIndex === 0;
        if (lbNext)    lbNext.disabled  = currentIndex === visibleCards.length - 1;
    }

    function closeLightbox() {
        lightbox?.classList.remove('open');
        document.body.style.overflow = '';
    }

    /* Wire card clicks */
    allCards.forEach(card => {
        card.addEventListener('click', () => openLightbox(card));
        card.querySelector('.cert__card-view')?.addEventListener('click', e => {
            e.stopPropagation();
            openLightbox(card);
        });
    });

    featuredCard?.addEventListener('click', () => openLightbox(featuredCard));
    featuredCard?.querySelector('.cert__card-view')?.addEventListener('click', e => {
        e.stopPropagation();
        openLightbox(featuredCard);
    });

    lbPrev?.addEventListener('click', () => {
        if (currentIndex > 0) { currentIndex--; renderLightbox(); }
    });
    lbNext?.addEventListener('click', () => {
        if (currentIndex < visibleCards.length - 1) { currentIndex++; renderLightbox(); }
    });

    lbClose?.addEventListener('click', closeLightbox);
    lbBackdrop?.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', e => {
        if (!lightbox?.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft'  && currentIndex > 0)
            { currentIndex--; renderLightbox(); }
        if (e.key === 'ArrowRight' && currentIndex < visibleCards.length - 1)
            { currentIndex++; renderLightbox(); }
    });
}
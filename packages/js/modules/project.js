// project.js
// Sections:
// 1. renderProjects  – stamps hero, grid cards, mini cards from data
// 2. initProjects    – filter, search, sort, playground toggle

import { HERO_PROJECT, GRID_PROJECTS, MINI_PROJECTS } from './project-data.js';


/* ============================================================
   HELPERS
   ============================================================ */

function buildActions(actions, extraClass = '') {
    return actions.map(a => {
        const target = a.target ? `target="${a.target}" rel="noopener noreferrer"` : '';
        return `
            <a href="${a.href}" ${target}
               class="proj__btn proj__btn--sm proj__btn--${a.style} ${extraClass}">
                <i class="uil ${a.icon}"></i> ${a.label}
            </a>`;
    }).join('');
}

function buildStackChips(stack, wrapClass = 'proj__card-stack') {
    return `<div class="${wrapClass}">${stack.map(s => `<span class="proj__stack-chip">${s}</span>`).join('')}</div>`;
}


/* ============================================================
   1. RENDER PROJECTS
   ============================================================ */

export function renderProjects() {

    /* ── Hero ── */
    const heroEl = document.getElementById('projHero');
    if (heroEl) {
        const h = HERO_PROJECT;
        heroEl.innerHTML = `
            <div class="proj__hero-img-wrap">
                <img src="${h.img}" alt="${h.alt}" class="proj__hero-img">
                <div class="proj__hero-img-overlay"></div>
                <span class="proj__hero-featured-badge">
                    <i class="uil uil-star"></i> Featured
                </span>
            </div>
            <div class="proj__hero-body">
                <div class="proj__hero-meta">
                    <span class="proj__tag proj__tag--${h.tagClass}">${h.tagLabel}</span>
                    <span class="proj__hero-year">${h.year}</span>
                </div>
                <h2 class="proj__hero-title">${h.title}</h2>
                <p class="proj__hero-desc">${h.desc}</p>
                <div class="proj__hero-stats">
                    ${h.stats.map(s => {
                        const valueHTML = s.icon
                            ? `<a href="${s.link}" class="proj__hero-stat-link"><i class="uil ${s.icon} proj__hero-stat-icon"></i></a>`
                            : `<span class="proj__hero-stat-value" ${s.expAttr ? `data-exp="${s.expAttr}"` : ''}>${s.value ?? ''}</span>`;
                        return `
                            <div class="proj__hero-stat">
                                ${valueHTML}
                                <span class="proj__hero-stat-label">${s.label}</span>
                            </div>`;
                    }).join('')}
                </div>
                ${buildStackChips(h.stack, 'proj__stack')}
                <div class="proj__hero-actions">
                    ${buildActions(h.actions)}
                </div>
            </div>
        `;
    }

    /* ── Grid cards ── */
    const gridEl = document.getElementById('projGrid');
    if (gridEl) {
        const fragment = document.createDocumentFragment();

        GRID_PROJECTS.forEach(p => {
            const article = document.createElement('article');
            article.className        = 'proj__card';
            article.dataset.category = p.category;
            article.dataset.year     = p.year;
            article.dataset.title    = p.title;
            if (p.featured) article.dataset.featured = 'true';

            article.innerHTML = `
                <div class="proj__card-img-wrap">
                    <img src="${p.img}" alt="${p.alt}" loading="lazy" class="proj__card-img">
                    <div class="proj__card-overlay">
                        <p class="proj__card-overlay-desc">${p.overlayDesc}</p>
                        <div class="proj__card-overlay-actions">
                            ${buildActions(p.overlayActions, 'proj__overlay-btn')}
                        </div>
                    </div>
                </div>
                <div class="proj__card-body">
                    <div class="proj__card-top">
                        <span class="proj__tag proj__tag--${p.tagClass}">${p.tagLabel}</span>
                        <span class="proj__card-year">${p.year}</span>
                        ${p.featured ? '<span class="proj__card-featured"><i class="uil uil-star"></i></span>' : ''}
                    </div>
                    <h3 class="proj__card-title">${p.title}</h3>
                    <p class="proj__card-desc">${p.desc}</p>
                    ${buildStackChips(p.stack)}
                    <div class="proj__card-footer">
                        ${buildActions(p.footerActions)}
                    </div>
                </div>
            `;

            fragment.appendChild(article);
        });

        gridEl.appendChild(fragment);
    }

    /* ── Mini cards ── */
    const pgGridEl = document.getElementById('projPlaygroundGrid');
    if (pgGridEl) {
        const fragment = document.createDocumentFragment();

        MINI_PROJECTS.forEach(p => {
            const article = document.createElement('article');
            article.className = 'proj__mini-card';

            article.innerHTML = `
                <div class="proj__mini-img-wrap">
                    <img src="${p.img}" alt="${p.alt}" loading="lazy">
                </div>
                <div class="proj__mini-body">
                    <div class="proj__mini-top">
                        <span class="proj__tag proj__tag--${p.tagClass}">${p.tagLabel}</span>
                        <span class="proj__card-year">${p.year}</span>
                    </div>
                    <h4 class="proj__mini-title">${p.title}</h4>
                    <p class="proj__mini-desc">${p.desc}</p>
                    ${buildStackChips(p.stack)}
                    <div class="proj__mini-actions">
                        ${buildActions(p.actions)}
                    </div>
                </div>
            `;

            fragment.appendChild(article);
        });

        pgGridEl.appendChild(fragment);
    }
}


/* ============================================================
   2. INIT PROJECTS
   Features: filter tabs w/ counts, search, sort,
             scroll-reveal, playground toggle
   ============================================================ */

export function initProjects() {

    const cards       = document.querySelectorAll('.proj__grid .proj__card');
    const filterBtns  = document.querySelectorAll('.proj__filter-btn');
    const searchInput = document.getElementById('projSearch');
    const searchClear = document.getElementById('projSearchClear');
    const sortSelect  = document.getElementById('projSort');
    const emptyState  = document.getElementById('projEmpty');
    const emptyReset  = document.getElementById('projEmptyReset');
    const grid        = document.getElementById('projGrid');
    const playground  = document.getElementById('projPlayground');
    const pgToggle    = document.getElementById('projPlaygroundToggle');
    const pgCount     = document.getElementById('projPlaygroundCount');

    if (!cards.length) return;

    // ── State ──
    let activeFilter   = 'all';
    let searchQuery    = '';
    let sortOrder      = 'newest';
    let initialReveal  = true;

    // ── Build filter counts ──
    const countMap = { all: cards.length };
    cards.forEach(card => {
        (card.dataset.category || '').split(' ').forEach(cat => {
            if (cat) countMap[cat] = (countMap[cat] || 0) + 1;
        });
    });
    filterBtns.forEach(btn => {
        const el = btn.querySelector('.proj__filter-count');
        if (el) el.textContent = countMap[btn.dataset.filter] || 0;
    });

    // ── Playground count ──
    const miniCards = document.querySelectorAll('.proj__mini-card');
    if (pgCount) {
        pgCount.textContent = `${miniCards.length} project${miniCards.length !== 1 ? 's' : ''}`;
    }

    // ── Core render ──
    function renderCards() {
        const cardArr = [...cards];

        // Sort
        cardArr.sort((a, b) => {
            if (sortOrder === 'newest') return (b.dataset.year || 0) - (a.dataset.year || 0);
            if (sortOrder === 'oldest') return (a.dataset.year || 0) - (b.dataset.year || 0);
            if (sortOrder === 'az')     return (a.dataset.title || '').localeCompare(b.dataset.title || '');
            return 0;
        });

        // Re-order DOM
        cardArr.forEach(card => grid?.appendChild(card));

        let visibleCount = 0;

        cardArr.forEach(card => {
            const cats  = (card.dataset.category || '').split(' ');
            const title = (card.dataset.title || '').toLowerCase();
            const desc  = card.querySelector('.proj__card-desc')?.textContent.toLowerCase() || '';
            const stack = [...card.querySelectorAll('.proj__stack-chip')]
                .map(c => c.textContent.toLowerCase()).join(' ');

            const matchFilter = activeFilter === 'all' || cats.includes(activeFilter);
            const matchSearch = !searchQuery ||
                title.includes(searchQuery) ||
                desc.includes(searchQuery) ||
                stack.includes(searchQuery);

            if (matchFilter && matchSearch) {
                card.classList.remove('hidden');
                if (!initialReveal) {
                    // Subsequent renders (filter/search/sort): animate immediately
                    card.classList.remove('revealed');
                    card.style.animationDelay = `${(visibleCount % 6) * 0.08}s`;
                    void card.offsetWidth;
                    card.classList.add('revealed');
                }
                visibleCount++;
            } else {
                card.classList.add('hidden');
                card.classList.remove('revealed');
            }
        });

        if (emptyState) {
            emptyState.classList.toggle('visible', visibleCount === 0);
        }
    }

    // ── Scroll reveal via IntersectionObserver (initial load only) ──
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('hidden')) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    cards.forEach(card => observer.observe(card));

    // Initial render — does NOT add 'revealed', observer handles it
    renderCards();
    initialReveal = false;

    // ── Filter tabs ──
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            renderCards();
        });
    });

    // ── Search ──
    searchInput?.addEventListener('input', () => {
        searchQuery = searchInput.value.trim().toLowerCase();
        searchClear?.classList.toggle('visible', searchQuery.length > 0);
        renderCards();
    });

    searchClear?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        searchClear.classList.remove('visible');
        searchInput?.focus();
        renderCards();
    });

    // ── Sort ──
    sortSelect?.addEventListener('change', () => {
        sortOrder = sortSelect.value;
        renderCards();
    });

    // ── Reset from empty state ──
    emptyReset?.addEventListener('click', () => {
        activeFilter = 'all';
        searchQuery  = '';
        if (searchInput) searchInput.value = '';
        searchClear?.classList.remove('visible');
        filterBtns.forEach(b => {
            b.classList.toggle('active', b.dataset.filter === 'all');
        });
        renderCards();
    });

    // ── Playground toggle ──
    pgToggle?.addEventListener('click', () => {
        playground?.classList.toggle('open');
    });
}
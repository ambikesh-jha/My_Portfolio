// project.js  –  render + init for the projects page
import { HERO_PROJECT, GRID_PROJECTS, MINI_PROJECTS } from './project-data.js';

/* ============================================================
   CATEGORY → icon map  (used in text-first placeholder)
   ============================================================ */
const CATEGORY_ICON = {
    aiml:          'uil-brain',
    datascience:   'uil-chart-bar',
    webdev:        'uil-web-grid',
    fullstack:     'uil-layers',
    computervision:'uil-camera',
    tools:         'uil-wrench',
    creative:      'uil-palette',
};

/* ============================================================
   HELPERS
   ============================================================ */
function buildActions(actions, extraClass = '') {
    return actions.map(a => {
        const target = a.target ? `target="${a.target}" rel="noopener noreferrer"` : '';
        return `<a href="${a.href}" ${target}
                   class="proj__btn proj__btn--sm proj__btn--${a.style} ${extraClass}">
                    <i class="uil ${a.icon}"></i> ${a.label}
                </a>`;
    }).join('');
}

function buildStackChips(stack, wrapClass = 'proj__card-stack', clickable = false) {
    return `<div class="${wrapClass}">
        ${stack.map(s =>
            `<span class="proj__stack-chip${clickable ? ' proj__stack-chip--clickable' : ''}"
                   data-tech="${s.toLowerCase()}">${s}</span>`
        ).join('')}
    </div>`;
}

function statusBadge(status) {
    if (!status || status === 'live') return '';
    const map = {
        'in-progress': { icon: 'uil-spinner', label: 'In Progress', cls: 'inprogress' },
        'archived':    { icon: 'uil-archive',  label: 'Archived',    cls: 'archived'   },
    };
    const s = map[status];
    return s ? `<span class="proj__status proj__status--${s.cls}"><i class="uil ${s.icon}"></i>${s.label}</span>` : '';
}

function metricBadge(metric) {
    if (!metric) return '';
    return `<span class="proj__metric"><i class="uil uil-chart-line"></i>${metric}</span>`;
}

/* gradient colours per category for placeholder bg */
const PLACEHOLDER_GRADIENT = {
    aiml:           '139,92,246',
    datascience:    '16,185,129',
    webdev:         '59,130,246',
    fullstack:      '59,130,246',
    computervision: '244,114,182',
    tools:          '245,158,11',
    creative:       '251,113,133',
};

function placeholderBg(category, icon) {
    const firstCat = (category || 'tools').split(' ')[0];
    const rgb = PLACEHOLDER_GRADIENT[firstCat] || '23,171,207';
    const ic  = icon || CATEGORY_ICON[firstCat] || 'uil-apps';
    return `
        <div class="proj__card-placeholder" style="--ph-rgb:${rgb}">
            <div class="proj__card-placeholder-glow"></div>
            <i class="uil ${ic} proj__card-placeholder-icon"></i>
        </div>`;
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
                <span class="proj__hero-featured-badge"><i class="uil uil-star"></i> Featured</span>
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
                        let valueHTML = s.icon
                            ? `<a href="${s.link}" class="proj__hero-stat-link"><i class="uil ${s.icon} proj__hero-stat-icon"></i></a>`
                            : `<span class="proj__hero-stat-value">${s.value}</span>`;
                        return `<div class="proj__hero-stat">${valueHTML}<span class="proj__hero-stat-label">${s.label}</span></div>`;
                    }).join('')}
                </div>
                ${buildStackChips(h.stack, 'proj__stack')}
                <div class="proj__hero-actions">${buildActions(h.actions)}</div>
            </div>`;
    }

    /* ── Grid cards ── */
    const gridEl = document.getElementById('projGrid');
    if (gridEl) {
        const fragment = document.createDocumentFragment();

        GRID_PROJECTS.forEach((p, i) => {
            const article = document.createElement('article');
            const isWide  = p.size === 'wide';
            const hasImg  = !!p.img;

            article.className   = `proj__card${isWide ? ' proj__card--wide' : ''}${!hasImg ? ' proj__card--text' : ''}`;
            article.dataset.category = p.category || '';
            article.dataset.year     = p.year     || '';
            article.dataset.title    = p.title    || '';
            article.dataset.index    = i;
            article.style.animationDelay = `${(i % 6) * 0.07}s`;
            if (p.featured) article.dataset.featured = 'true';

            const imageZone = hasImg ? `
                <div class="proj__card-img-wrap">
                    <img src="${p.img}" alt="${p.alt}" loading="lazy" class="proj__card-img">
                    <div class="proj__card-overlay">
                        <p class="proj__card-overlay-desc">${p.overlayDesc || ''}</p>
                        <div class="proj__card-overlay-actions">
                            ${buildActions(p.overlayActions || [], 'proj__overlay-btn')}
                        </div>
                    </div>
                    ${p.featured ? '<span class="proj__card-img-badge"><i class="uil uil-star"></i></span>' : ''}
                </div>`
            : `<div class="proj__card-ph-wrap">${placeholderBg(p.category, p.icon)}</div>`;

            // Details panel — text-first cards only, when overlayDesc is defined
            const hasOverlay   = !hasImg && p.overlayDesc;
            const detailsPanel = hasOverlay ? `
                <div class="proj__card-details" id="proj-details-${i}" aria-hidden="true">
                    <p class="proj__card-details-text">${p.overlayDesc}</p>
                </div>` : '';
            const detailsBtn = hasOverlay ? `
                <button class="proj__card-details-btn"
                        aria-expanded="false"
                        aria-controls="proj-details-${i}"
                        aria-label="Show technical details">
                    <i class="uil uil-info-circle"></i> Details
                </button>` : '';

            article.innerHTML = `
                ${imageZone}
                <div class="proj__card-body">
                    <div class="proj__card-top">
                        <span class="proj__tag proj__tag--${p.tagClass}">${p.tagLabel}</span>
                        <span class="proj__card-year">${p.year}</span>
                        ${p.featured && !hasImg ? '<span class="proj__card-featured"><i class="uil uil-star"></i></span>' : ''}
                    </div>
                    <h3 class="proj__card-title">${p.title}</h3>
                    <div class="proj__card-desc-wrap">
                        <p class="proj__card-desc">${p.desc}</p>
                        <button class="proj__card-readmore" aria-label="Read more">Read more</button>
                    </div>
                    ${detailsPanel}
                    <div class="proj__card-badges">
                        ${metricBadge(p.metric)}${statusBadge(p.status)}
                    </div>
                    ${buildStackChips(p.stack, 'proj__card-stack', true)}
                    <div class="proj__card-footer">
                        ${detailsBtn}
                        ${buildActions(p.footerActions || [])}
                    </div>
                </div>`;

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
                <div class="proj__mini-body">
                    <div class="proj__mini-top">
                        <span class="proj__tag proj__tag--${p.tagClass}">${p.tagLabel}</span>
                        <span class="proj__card-year">${p.year}</span>
                    </div>
                    <h4 class="proj__mini-title">${p.title}</h4>
                    <p class="proj__mini-desc">${p.desc}</p>
                    ${buildStackChips(p.stack)}
                    <div class="proj__mini-actions">${buildActions(p.actions)}</div>
                </div>`;
            fragment.appendChild(article);
        });
        pgGridEl.appendChild(fragment);
    }
}

/* ============================================================
   2. INIT PROJECTS
   ============================================================ */
export function initProjects() {

    const cards       = document.querySelectorAll('.proj__grid .proj__card');
    const filterBtns  = document.querySelectorAll('.proj__filter-btn');
    const searchInput = document.getElementById('projSearch');
    const searchClear = document.getElementById('projSearchClear');
    const sortSelect  = document.getElementById('projSort');
    const countLabel  = document.getElementById('projCount');
    const emptyState  = document.getElementById('projEmpty');
    const emptyReset  = document.getElementById('projEmptyReset');
    const grid        = document.getElementById('projGrid');
    const playground  = document.getElementById('projPlayground');
    const pgToggle    = document.getElementById('projPlaygroundToggle');
    const pgCount     = document.getElementById('projPlaygroundCount');

    if (!cards.length) return;

    /* ── Date sorter ── */
    const monthMap = {jan:1,feb:2,mar:3,apr:4,may:5,jun:6,jul:7,aug:8,sep:9,oct:10,nov:11,dec:12};
    function getSortValue(y) {
        if (!y) return 0;
        const yr = y.match(/\d{4}/)?.[0] || 0;
        const mm = y.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\b/i);
        return parseInt(yr) * 100 + (mm ? monthMap[mm[0].toLowerCase()] : 1);
    }

    let activeFilter = 'all';
    let searchQuery  = '';
    let sortOrder    = 'newest';
    let activeTech   = '';      // stack-chip filter
    let initialReveal = true;

    /* ── Filter counts ── */
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

    /* ── Playground count ── */
    const miniCards = document.querySelectorAll('.proj__mini-card');
    if (pgCount) pgCount.textContent = `${miniCards.length} project${miniCards.length !== 1 ? 's' : ''}`;

    /* ── Render / filter ── */
    function renderCards() {
        let arr = [...cards];

        arr.sort((a, b) => {
            if (sortOrder === 'newest') return getSortValue(b.dataset.year) - getSortValue(a.dataset.year);
            if (sortOrder === 'oldest') return getSortValue(a.dataset.year) - getSortValue(b.dataset.year);
            if (sortOrder === 'az')     return (a.dataset.title||'').localeCompare(b.dataset.title||'');
            return 0;
        });

        arr.forEach(card => grid.appendChild(card));

        let visible = 0, total = arr.length;

        arr.forEach(card => {
            const cats  = (card.dataset.category || '').split(' ');
            const title = (card.dataset.title    || '').toLowerCase();
            const desc  = card.querySelector('.proj__card-desc')?.textContent.toLowerCase() || '';
            const stack = [...card.querySelectorAll('.proj__stack-chip')].map(c => c.textContent.toLowerCase()).join(' ');

            const filterMatch = activeFilter === 'all' || cats.includes(activeFilter);
            const searchMatch = !searchQuery  || title.includes(searchQuery)  || desc.includes(searchQuery) || stack.includes(searchQuery);
            const techMatch   = !activeTech   || stack.includes(activeTech);

            if (filterMatch && searchMatch && techMatch) {
                card.classList.remove('hidden');
                if (!initialReveal) {
                    card.classList.remove('revealed');
                    void card.offsetWidth;
                    card.classList.add('revealed');
                }
                visible++;
            } else {
                card.classList.add('hidden');
                card.classList.remove('revealed');
            }
        });

        if (countLabel) countLabel.textContent = `Showing ${visible} of ${total} project${total !== 1 ? 's' : ''}`;
        emptyState?.classList.toggle('visible', visible === 0);
    }

    /* ── Scroll reveal with stagger ── */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('hidden')) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => observer.observe(card));

    renderCards();
    initialReveal = false;

    /* ── Filter tabs ── */
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeFilter = btn.dataset.filter;
            activeTech = '';          // clear tech filter when switching category
            document.querySelectorAll('.proj__stack-chip--active').forEach(c => c.classList.remove('proj__stack-chip--active'));
            renderCards();
        });
    });

    /* ── Search ── */
    searchInput?.addEventListener('input', () => {
        searchQuery = searchInput.value.trim().toLowerCase();
        searchClear?.classList.toggle('visible', searchQuery.length > 0);
        renderCards();
    });
    searchClear?.addEventListener('click', () => {
        searchInput.value = ''; searchQuery = '';
        searchClear.classList.remove('visible');
        renderCards();
    });

    /* ── Sort ── */
    sortSelect?.addEventListener('change', () => {
        sortOrder = sortSelect.value;
        renderCards();
    });

    /* ── Stack chip click-to-filter ── */
    grid.addEventListener('click', e => {
        const chip = e.target.closest('.proj__stack-chip--clickable');
        if (!chip) return;
        e.stopPropagation();
        const tech = chip.dataset.tech || chip.textContent.toLowerCase();

        if (activeTech === tech) {
            // deselect
            activeTech = '';
            document.querySelectorAll('.proj__stack-chip--active').forEach(c => c.classList.remove('proj__stack-chip--active'));
        } else {
            activeTech = tech;
            document.querySelectorAll('.proj__stack-chip--active').forEach(c => c.classList.remove('proj__stack-chip--active'));
            document.querySelectorAll(`.proj__stack-chip[data-tech="${CSS.escape(tech)}"]`).forEach(c => c.classList.add('proj__stack-chip--active'));
        }

        // also populate search box for visibility
        if (searchInput) {
            searchInput.value = activeTech;
            searchQuery = activeTech;
            searchClear?.classList.toggle('visible', !!activeTech);
        }

        renderCards();
    });

    /* ── Empty reset ── */
    emptyReset?.addEventListener('click', resetAll);
    function resetAll() {
        activeFilter = 'all'; searchQuery = ''; activeTech = '';
        if (searchInput) { searchInput.value = ''; }
        searchClear?.classList.remove('visible');
        filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
        document.querySelectorAll('.proj__stack-chip--active').forEach(c => c.classList.remove('proj__stack-chip--active'));
        renderCards();
    }

    /* ── Read-more toggle ── */
    grid.addEventListener('click', e => {
        const btn = e.target.closest('.proj__card-readmore');
        if (!btn) return;
        const wrap = btn.closest('.proj__card-desc-wrap');
        if (!wrap) return;
        const expanded = wrap.classList.toggle('expanded');
        btn.textContent = expanded ? 'Show less' : 'Read more';
    });

    /* ── Details panel toggle ── */
    grid.addEventListener('click', e => {
        const btn = e.target.closest('.proj__card-details-btn');
        if (!btn) return;
        const panelId = btn.getAttribute('aria-controls');
        const panel   = panelId ? document.getElementById(panelId) : null;
        if (!panel) return;
        const open = panel.classList.toggle('open');
        panel.setAttribute('aria-hidden', String(!open));
        btn.setAttribute('aria-expanded', String(open));
        btn.innerHTML = open
            ? '<i class="uil uil-times-circle"></i> Hide'
            : '<i class="uil uil-info-circle"></i> Details';
    });

    /* ── Playground toggle ── */
    pgToggle?.addEventListener('click', () => playground?.classList.toggle('open'));

    /* ── Keyboard navigation for filter tabs ── */
    const filterBar = document.getElementById('projFilters');
    filterBar?.addEventListener('keydown', e => {
        const btns = [...filterBar.querySelectorAll('.proj__filter-btn')];
        const idx  = btns.indexOf(document.activeElement);
        if (idx === -1) return;
        if (e.key === 'ArrowRight') { e.preventDefault(); btns[(idx + 1) % btns.length].focus(); }
        if (e.key === 'ArrowLeft')  { e.preventDefault(); btns[(idx - 1 + btns.length) % btns.length].focus(); }
    });

    /* ── Reduced motion support ── */
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
        cards.forEach(c => { c.style.animationDelay = '0s'; c.style.transition = 'none'; });
    }
}
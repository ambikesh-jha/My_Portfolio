/* ============================================================
   about.js
   Sections:
   1.  About  – Read More Toggle       ┐
   2.  About  – Certificate Modal      ├─ initAbout()
   6.  Experience – updateAllExperience┘
   3.  Qualification – Tabs, Modals & Scroll Observer
   4.  Skills – Grid, Filters & Flip Cards
   5.  Skills – Helper: getProficiency
   ============================================================ */

import { updateAllExperience } from './experience.js';


/* ============================================================
   1 + 2 + experience stamp — initAbout()
   Wraps the Read More toggle, Certificate Modal, and the
   experience date stamp so nothing runs at import time.
   Called explicitly from about.html after DOMContentLoaded.
   ============================================================ */

export function initAbout() {

    /* ── 1. Read More Toggle ── */
    const btn  = document.querySelector('.about__read-more-btn');
    const more = document.querySelector('.about__description-more');
    if (btn && more) {
        btn.addEventListener('click', () => {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            btn.querySelector('.about__read-more-label').textContent =
                expanded ? 'Read More' : 'Read Less';
            more.classList.toggle('expanded', !expanded);
        });
    }

    /* ── 2. Certificate Modal ── */
    const certCards         = document.querySelectorAll('.about__cert-card');
    const certModal         = document.getElementById('certModal');
    const certModalImg      = certModal?.querySelector('.cert__modal-img');
    const certModalClose    = certModal?.querySelector('.cert__modal-close');
    const certModalBackdrop = certModal?.querySelector('.cert__modal-backdrop');

    if (certModal) {
        certCards.forEach(card => {
            card.addEventListener('click', () => {
                certModalImg.src = card.dataset.certImg;
                certModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') card.click();
            });
        });

        function closeCertModal() {
            certModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        certModalClose?.addEventListener('click', closeCertModal);
        certModalBackdrop?.addEventListener('click', closeCertModal);

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && certModal.classList.contains('active')) {
                closeCertModal();
            }
        });
    }

    /* ── Experience stamp ── */
    updateAllExperience();
    setInterval(updateAllExperience, 21_600_000); // refresh every 6 hours
}


/* ============================================================
   3. QUALIFICATION – TABS, MODALS & SCROLL OBSERVER
   ============================================================ */

export function initQualification() {
    const tabs        = document.querySelectorAll('[data-target]');
    const tabContents = document.querySelectorAll('[data-content]');

    /* ── Tab switching ── */
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach(tc => {
                tc.classList.remove('qualification__active');
                tc.style.opacity = '0';
            });
            tabs.forEach(t => t.classList.remove('qualification__active'));

            setTimeout(() => {
                target.classList.add('qualification__active');
                target.style.opacity = '1';
                tab.classList.add('qualification__active');
                observeItems();
            }, 100);
        });
    });

    /* ── Modal open ── */
    document.querySelectorAll('.services__button').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            const modal = document.getElementById(btn.dataset.modal);
            if (modal) modal.classList.add('active-modal');
        });
    });

    /* ── Modal close – X button ── */
    document.querySelectorAll('.services__modal-close').forEach(close => {
        close.addEventListener('click', () => {
            close.closest('.services__modal').classList.remove('active-modal');
        });
    });

    /* ── Modal close – backdrop click ── */
    document.querySelectorAll('.services__modal').forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal) modal.classList.remove('active-modal');
        });
    });

    /* ── Modal close – Escape key ── */
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.services__modal.active-modal')
                    .forEach(m => m.classList.remove('active-modal'));
        }
    });

    /* ── Scroll observer: animate items into view ── */
    function observeItems() {
        const items = document.querySelectorAll(
            '.qualification__content.qualification__active .qualification__item'
        );
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        items.forEach(item => io.observe(item));
    }

    observeItems();
}


/* ============================================================
   4. SKILLS – GRID, FILTERS & FLIP CARDS
   ============================================================ */

export function initSkillsGrid() {
    const THRESHOLD  = 12;
    const filterBtns = document.querySelectorAll('.skills__filter-btn');
    const cards      = Array.from(document.querySelectorAll('.skill__card'));
    const hintBanner = document.getElementById('skillsHintBanner');
    const grid       = document.getElementById('skillsGrid');

    /* ── 4a. Filter count labels ── */
    filterBtns.forEach(btn => {
        const filter = btn.dataset.filter;
        const count  = filter === 'all'
            ? cards.length
            : cards.filter(c => c.dataset.category.split(' ').includes(filter)).length;

        const originalText = btn.textContent.trim();
        btn.innerHTML = `${originalText}<span class="skills__filter-count">${count}</span>`;
    });

    /* ── 4b. Inject View All button (below grid) ── */
    const bottomWrapper = document.createElement('div');
    bottomWrapper.className = 'skills__viewall-wrapper';
    bottomWrapper.innerHTML = `
        <button class="skills__viewall-btn" id="skillsViewAllBtn" aria-expanded="false">
            <span class="skills__viewall-label">View All Skills</span>
            <span class="skills__viewall-icon"><i class="uil uil-angle-down"></i></span>
        </button>
    `;
    grid.parentNode.insertBefore(bottomWrapper, grid.nextSibling);
    const viewAllBtn = document.getElementById('skillsViewAllBtn');

    /* ── 4c. Inject sticky collapse pill ── */
    const stickyPill = document.createElement('div');
    stickyPill.className = 'skills__sticky-pill';
    stickyPill.id        = 'skillsStickyPill';
    stickyPill.innerHTML = `
        <i class="uil uil-angle-up skills__sticky-chevron"></i>
        <span class="skills__sticky-text">Show Less</span>
    `;

    const pillWrapper = document.createElement('div');
    pillWrapper.className = 'skills__pill-wrapper';
    pillWrapper.appendChild(stickyPill);
    grid.parentNode.insertBefore(pillWrapper, grid.nextSibling);

    /* ── 4d. Proficiency badges ── */
    cards.forEach(card => {
        const fill      = parseFloat(card.dataset.fill) || 0;
        const infoEl    = card.querySelector('.skill__card-info');
        const backBadge = card.querySelector('.skill__card-back-badge');
        const { label, cls } = getProficiency(fill);

        const frontBadge = document.createElement('span');
        frontBadge.className   = `skill__card-badge ${cls}`;
        frontBadge.textContent = label;
        infoEl.insertAdjacentElement('afterend', frontBadge);

        if (backBadge) {
            backBadge.className   = `skill__card-back-badge ${cls}`;
            backBadge.textContent = label;
        }
    });

    /* ── 4e. Row-aware stagger ── */
    function applyRowStagger(visibleCards) {
        const rows = {};
        visibleCards.forEach(card => {
            const top = card.offsetTop;
            if (!rows[top]) rows[top] = [];
            rows[top].push(card);
        });

        let rowIndex = 0;
        Object.values(rows).forEach(row => {
            row.forEach((card, colIndex) => {
                card.style.animation = 'none';
                void card.offsetWidth;
                card.style.animationDelay = `${rowIndex * 0.1 + colIndex * 0.06}s`;
                card.style.animation = '';
            });
            rowIndex++;
        });
    }

    applyRowStagger(cards);

    /* ── 4f. Core render – single source of truth ── */
    let isExpanded     = false;
    let currentFilter  = 'all';
    let currentFlipped = null;

    function renderCards() {
        const matched = cards.filter(card => {
            if (currentFilter === 'all') return true;
            return card.dataset.category.split(' ').includes(currentFilter);
        });

        const needsBtn = matched.length > THRESHOLD;

        const prevFlipped = currentFlipped;
        if (prevFlipped) {
            prevFlipped.classList.remove('flipped');
            currentFlipped = null;
        }

        cards.forEach(card => {
            if (card === prevFlipped) {
                setTimeout(() => card.classList.add('hidden'), 650);
            } else {
                card.classList.add('hidden');
            }
        });

        matched.forEach((card, i) => {
            const beyond = i >= THRESHOLD;
            if (!needsBtn || isExpanded || !beyond) {
                if (card === prevFlipped) {
                    setTimeout(() => card.classList.remove('hidden'), 650);
                } else {
                    card.classList.remove('hidden');
                }
                if (isExpanded && beyond) {
                    card.style.animationDelay = `${(i - THRESHOLD) * 0.045}s`;
                    card.classList.remove('skill-revealed');
                    void card.offsetWidth;
                    card.classList.add('skill-revealed');
                }
            }
        });

        const nowVisible = matched.filter((_, i) =>
            !needsBtn || isExpanded || i < THRESHOLD
        );
        requestAnimationFrame(() => applyRowStagger(nowVisible));

        if (needsBtn && !isExpanded) {
            bottomWrapper.style.display = 'flex';
            viewAllBtn.setAttribute('aria-expanded', 'false');
            viewAllBtn.classList.remove('expanded');
            viewAllBtn.innerHTML = `
                <span class="skills__viewall-label">View All Skills</span>
                <span class="skills__viewall-icon"><i class="uil uil-angle-down"></i></span>
            `;
        } else {
            bottomWrapper.style.display = 'none';
        }

        stickyPill.classList.toggle('visible', needsBtn && isExpanded);
    }

    /* ── 4g. Collapse helper ── */
    function collapseAndScroll() {
        isExpanded = false;
        renderCards();
        const gridTop = grid.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: gridTop, behavior: 'smooth' });
    }

    /* ── 4h. View All button ── */
    bottomWrapper.addEventListener('click', () => {
        isExpanded = !isExpanded;
        isExpanded ? renderCards() : collapseAndScroll();
    });

    /* ── 4i. Sticky pill ── */
    stickyPill.addEventListener('click', collapseAndScroll);

    /* ── 4j. Filter buttons ── */
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            isExpanded    = false;
            renderCards();
        });
    });

    /* ── 4k. Flip cards ── */
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const isFlipped = card.classList.contains('flipped');

            if (currentFlipped && currentFlipped !== card) {
                const prev = currentFlipped;
                currentFlipped = null;
                setTimeout(() => prev.classList.remove('flipped'), 50);
            }

            if (isFlipped) {
                card.classList.remove('flipped');
                currentFlipped = null;
            } else {
                card.classList.add('flipped');
                currentFlipped = card;
            }
        });
    });

    /* ── 4l. Close flipped card on outside click ── */
    document.addEventListener('click', e => {
        if (!currentFlipped) return;
        if (e.target.closest('.skill__card')) return;
        currentFlipped.classList.remove('flipped');
        currentFlipped = null;
    });

    /* ── 4m. Hint banner ── */
    if (hintBanner) {
        if (localStorage.getItem('skillsHintSeen')) {
            hintBanner.classList.add('hidden');
        } else {
            setTimeout(() => {
                hintBanner.classList.add('hidden');
                localStorage.setItem('skillsHintSeen', '1');
            }, 4000);
        }
    }

    /* ── 4n. Initial render ── */
    renderCards();
}


/* ============================================================
   5. SKILLS – HELPER: getProficiency
   ============================================================ */

function getProficiency(pct) {
    if (pct >= 85) return { label: 'Expert',       cls: 'expert'       };
    if (pct >= 70) return { label: 'Advanced',     cls: 'advanced'     };
    if (pct >= 50) return { label: 'Intermediate', cls: 'intermediate' };
    return              { label: 'Beginner',      cls: 'beginner'     };
}
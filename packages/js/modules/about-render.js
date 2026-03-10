/* ============================================================
   about-render.js
   Reads the data arrays from about-data.js and stamps
   HTML into the page shell. Called once on DOMContentLoaded.

   Sections:
   1.  renderInfoCards     – about info cards (left column)
   2.  renderExpectCards   – what you can expect grid
   3.  renderSkills        – skills grid cards
   4.  renderQualification – experience + education timelines
   5.  renderModals        – all qualification modals
   ============================================================ */

import { INFO_CARDS, EXPECT_CARDS, SKILLS, EXPERIENCE, EDUCATION, MODALS } from './about-data.js';


/* ============================================================
   1. RENDER INFO CARDS
   Target: <div class="about__info">
   ============================================================ */

export function renderInfoCards() {
    const container = document.querySelector('.about__info');
    if (!container) return;

    const fragment = document.createDocumentFragment();

    INFO_CARDS.forEach(item => {
        const card = document.createElement('div');
        card.className = 'about__info-card' + (item.cert ? ' about__cert-card' : '');

        if (item.cert) {
            card.dataset.certImg = item.certImg;
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'button');
            card.setAttribute('aria-label', 'View Azure AI-102 Certificate');
        }

        const titleHtml = item.expAttr
            ? `<span class="about__info-title" data-exp="${item.expAttr}"></span>`
            : `<span class="about__info-title">${item.title}</span>`;

        const hintHtml = item.cert
            ? `<span class="about__cert-click-hint">
                   <i class="uil uil-expand-arrows-alt"></i>
               </span>`
            : '';

        card.innerHTML = `
            <div class="about__info-icon">${item.iconHtml}</div>
            <div>
                ${titleHtml}
                <span class="about__info-name">${item.subtitle}</span>
            </div>
            ${hintHtml}
        `;

        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}


/* ============================================================
   2. RENDER EXPECT CARDS
   Target: <div class="about__expect-grid">
   ============================================================ */

export function renderExpectCards() {
    const grid = document.querySelector('.about__expect-grid');
    if (!grid) return;

    const fragment = document.createDocumentFragment();

    EXPECT_CARDS.forEach(item => {
        const card = document.createElement('div');
        card.className = 'about__expect-card';

        card.innerHTML = `
            <div class="about__expect-icon"><i class="uil ${item.icon}"></i></div>
            <div class="about__expect-body">
                <span class="about__expect-heading">${item.heading}</span>
                <span class="about__expect-text">${item.text}</span>
            </div>
        `;

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}


/* ============================================================
   3. RENDER SKILLS
   Target: <div id="skillsGrid">
   ============================================================ */

export function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    const fragment = document.createDocumentFragment();

    SKILLS.forEach(skill => {
        const card = document.createElement('div');
        card.className        = 'skill__card';
        card.dataset.category = skill.category;
        card.dataset.fill     = skill.fill;

        card.innerHTML = `
            <div class="skill__card-inner">

                <div class="skill__card-front">
                    <div class="skill__card-glow"></div>
                    <div class="skill__card-hint">
                        <i class="uil uil-info-circle"></i>
                    </div>
                    <div class="skill__card-icon">${skill.icon}</div>
                    <div class="skill__card-info">
                        <span class="skill__card-name">${skill.name}</span>
                        <span class="skill__card-tag">${skill.tag}</span>
                    </div>
                </div>

                <div class="skill__card-back">
                    <div class="skill__card-back-icon">${skill.icon}</div>
                    <h4 class="skill__card-back-name">${skill.name}</h4>
                    <span class="skill__card-back-badge"></span>
                    <div class="skill__card-back-divider"></div>
                    <p class="skill__card-back-desc">${skill.desc}</p>
                    <span class="skill__card-back-close">click to close</span>
                </div>

            </div>
        `;

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}


/* ============================================================
   4. RENDER QUALIFICATION TIMELINES
   Targets:
     <div id="work">      — experience items
     <div id="education"> — education items
   ============================================================ */

export function renderQualification() {
    renderTimeline('work',      EXPERIENCE);
    renderTimeline('education', EDUCATION);
}

function renderTimeline(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const timeline = document.createElement('div');
    timeline.className = 'qualification__timeline';

    const fragment = document.createDocumentFragment();

    items.forEach(item => {
        const el = document.createElement('div');
        el.className = `qualification__item${item.active ? ' active-job' : ''}`;

        el.innerHTML = `
            <div class="qualification__dot"></div>
            <div class="qualification__item-content">
                <div class="qualification__item-header">
                    <div class="qualification__item-top">
                        <div class="qualification__item-icon">
                            <i class="uil ${item.iconClass}"></i>
                        </div>
                        <div class="qualification__item-title-group">
                            <h3 class="qualification__title">${item.title}</h3>
                            <span class="qualification__badge">
                                <i class="uil uil-calendar-alt"></i>
                                ${item.date}
                            </span>
                        </div>
                    </div>
                </div>
                <span class="qualification__subtitle">${item.subtitle}</span>
                <p class="qualification__description">${item.desc}</p>
                <button class="button button--small button--link services__button"
                        data-modal="${item.id}">
                    View Details <i class="uil uil-arrow-right button__icon"></i>
                </button>
            </div>
        `;

        fragment.appendChild(el);
    });

    timeline.appendChild(fragment);
    container.appendChild(timeline);
}


/* ============================================================
   5. RENDER MODALS
   Target: <div id="modalsMount">
   ============================================================ */

export function renderModals() {
    const mount = document.getElementById('modalsMount');
    if (!mount) return;

    const fragment = document.createDocumentFragment();

    MODALS.forEach(modal => {
        const el = document.createElement('div');
        el.className = 'services__modal';
        el.id        = modal.id;

        const pointsHTML = modal.points
            .map(p => `
                <li class="services__modal-service">
                    <i class="uil uil-check-circle services__modal-icon"></i>
                    <p>${p}</p>
                </li>`)
            .join('');

        el.innerHTML = `
            <div class="services__modal-content">
                <h4 class="services__modal-title">${modal.title}</h4>
                <i class="uil uil-times services__modal-close"></i>
                <ul class="services__modal-services">
                    ${pointsHTML}
                </ul>
            </div>
        `;

        fragment.appendChild(el);
    });

    mount.appendChild(fragment);
}
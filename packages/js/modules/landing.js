/* ============================================================
   landing.js
   Imports content from landing-data.js.

   Sections:
   1.  Render – Stats
   2.  Render – Highlights
   3.  Render – Tech Stack
   4.  Render – Featured Projects
   5.  Animation – Typing Effect
   6.  Animation – Counters
   7.  Interactions
   8.  Init (exported)
   ============================================================ */

import {
    STATS_DATA,
    HIGHLIGHTS_DATA,
    TECH_STACK_DATA,
    PROJECTS_DATA
} from './landing-data.js';

import { updateAllExperience } from './experience.js';


/* ============================================================
   1. RENDER – STATS
   Target: <div class="stats__container">
   ============================================================ */

function renderStats() {
    const container = document.querySelector('.stats__container');
    if (!container) return;

    const fragment = document.createDocumentFragment();

    STATS_DATA.forEach((item, i) => {
        const el = document.createElement(item.link ? 'a' : 'div');
        el.className = `stats__item${item.link ? ' stats__item--link' : ''}`;
        el.style.animationDelay = `${i * 0.1}s`;
        if (item.link) el.href = item.link;

        const numberContent = item.counter
            ? `<span class="counter" data-target="${item.target}">0</span>${item.suffix}`
            : `<span data-exp="${item.expAttr}"></span>`;

        el.innerHTML = `
            <div class="stats__icon">
                <i class="uil ${item.icon}"></i>
            </div>
            <div class="stats__data">
                <h3 class="stats__number">${numberContent}</h3>
                <p class="stats__label">${item.label}</p>
            </div>
        `;

        fragment.appendChild(el);
    });

    container.appendChild(fragment);
}


/* ============================================================
   2. RENDER – HIGHLIGHTS
   Target: <div class="highlights__grid">
   ============================================================ */

function renderHighlights() {
    const grid = document.querySelector('.highlights__grid');
    if (!grid) return;

    const fragment = document.createDocumentFragment();

    HIGHLIGHTS_DATA.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'highlights__card';
        card.style.animationDelay = `${(i + 1) * 0.1}s`;

        card.innerHTML = `
            <div class="highlights__icon">
                <i class="uil ${item.icon}"></i>
            </div>
            <h3 class="highlights__name">${item.name}</h3>
            <p class="highlights__description">${item.description}</p>
        `;

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}


/* ============================================================
   3. RENDER – TECH STACK
   Target: <div class="tech-stack__grid">
   Each group gets a "My Skills" badge link automatically.
   ============================================================ */

function renderTechStack() {
    const grid = document.querySelector('.tech-stack__grid');
    if (!grid) return;

    const fragment = document.createDocumentFragment();

    TECH_STACK_DATA.forEach((group, i) => {
        const el = document.createElement('div');
        el.className = 'tech-stack__group';
        el.style.animationDelay = `${(i + 1) * 0.1}s`;

        const badgesHTML = group.badges
            .map(badge => `<span class="tech-stack__badge">${badge}</span>`)
            .join('');

        el.innerHTML = `
            <div class="tech-stack__group-header">
                <h3 class="tech-stack__group-title">${group.title}</h3>
                <a href="about.html#skills" class="skills-badge" title="View My Skills">
                    <i class="uil uil-star skills-badge__icon"></i>
                    <span class="skills-badge__text">My Skills</span>
                    <i class="uil uil-arrow-right skills-badge__arrow"></i>
                </a>
            </div>
            <div class="tech-stack__items">
                ${badgesHTML}
            </div>
        `;

        fragment.appendChild(el);
    });

    grid.appendChild(fragment);
}


/* ============================================================
   4. RENDER – FEATURED PROJECTS
   Target: <div class="featured-projects__grid">
   ============================================================ */

function renderProjects() {
    const grid = document.querySelector('.featured-projects__grid');
    if (!grid) return;

    const fragment = document.createDocumentFragment();

    PROJECTS_DATA.forEach((project, i) => {
        const card = document.createElement('div');
        card.className = 'featured-projects__card';
        card.style.animationDelay = `${(i + 1) * 0.1}s`;

        card.innerHTML = `
            <div class="featured-projects__img">
                <img src="${project.img}" alt="${project.alt}">
            </div>
            <div class="featured-projects__content">
                <h3 class="featured-projects__name">${project.name}</h3>
                <p class="featured-projects__description">${project.description}</p>
                <div class="featured-projects__buttons">
                    <a href="${project.link}" class="button button--small button--primary">View All</a>
                </div>
            </div>
        `;

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}


/* ============================================================
   5. ANIMATION – TYPING EFFECT
   ============================================================ */

function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const texts = [
        'AI & ML Engineer',
        'Backend Systems Developer',
        'Data Processing Specialist'
    ];

    let currentIndex = 0;
    let currentText  = '';
    let isDeleting   = false;

    function typeText() {
        const fullText = texts[currentIndex];

        currentText = isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1);

        typingElement.textContent = currentText;

        if (!isDeleting && currentText === fullText) {
            isDeleting = true;
            setTimeout(typeText, 2000);
        } else if (isDeleting && currentText === '') {
            isDeleting   = false;
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(typeText, 500);
        } else {
            setTimeout(typeText, isDeleting ? 50 : 100);
        }
    }

    typeText();
}


/* ============================================================
   6. ANIMATION – COUNTERS
   ============================================================ */

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                animateCounter(entry.target);
                entry.target.dataset.animated = 'true';
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target    = parseInt(element.dataset.target, 10);
    const increment = target / (2000 / 16); // 2s at ~60fps
    let current     = 0;

    const update = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    };

    update();
}


/* ============================================================
   7. INTERACTIONS
   ============================================================ */

function initInteractions() {
    const scrollIndicator = document.querySelector('.hero__scroll');

    // Scroll indicator click → scroll to stats section
    scrollIndicator?.addEventListener('click', () => {
        document.querySelector('.stats')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Fade out scroll indicator after 100px
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            const hidden = window.scrollY > 100;
            scrollIndicator.style.opacity       = hidden ? '0' : '1';
            scrollIndicator.style.pointerEvents = hidden ? 'none' : 'auto';
        });
    }
}


/* ============================================================
   8. INIT  (exported — called from index.html script block)
   Renders all data-driven sections first so DOM elements
   exist before animations are wired up.
   ============================================================ */

export function initLandingAnimations() {
    renderStats();
    renderHighlights();
    renderTechStack();
    renderProjects();

    // Populate all [data-exp] elements (stats card + any inline uses)
    updateAllExperience();

    initTypingEffect();
    initCounters();
    initInteractions();
}
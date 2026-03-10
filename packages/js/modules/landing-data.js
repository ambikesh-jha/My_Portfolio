/* ============================================================
   landing-data.js
   All landing page content lives here.
   To add / edit / reorder any entry — only touch this file.

   Sections:
   1.  Stats
   2.  Highlights
   3.  Tech Stack
   4.  Featured Projects
   ============================================================ */


/* ============================================================
   1. STATS
   Fields:
     icon      – uil icon class
     counter   – true = animated number counter
     target    – number to count up to (if counter: true)
     suffix    – appended after the number e.g. '+'
     expAttr   – data-exp attribute value (if counter: false)
     label     – text below the number
     link      – href string or null (null = plain div, not anchor)
   ============================================================ */

export const STATS_DATA = [
    {
        icon:    'uil-briefcase-alt',
        counter: true,
        target:  4,
        suffix:  '+',
        label:   'Enterprise Projects',
        link:    null
    },
    {
        icon:     'uil-calendar-alt',
        counter:  false,
        expAttr:  'full',
        label:    'Experience',
        link:     'about.html#qualification'
    },
    {
        icon:    'uil-award',
        counter: true,
        target:  15,
        suffix:  '+',
        label:   'Certifications',
        link:    'certificates.html'
    },
    {
        icon:    'uil-code-branch',
        counter: true,
        target:  5,
        suffix:  '+',
        label:   'Personal Projects',
        link:    'projects.html'
    }
];


/* ============================================================
   2. HIGHLIGHTS
   Fields:
     icon        – uil icon class
     name        – card heading
     description – card body text
   ============================================================ */

export const HIGHLIGHTS_DATA = [
    {
        icon:        'uil-brain',
        name:        'AI & Machine Learning',
        description: 'Building predictive models, NLP solutions, and intelligent automation systems'
    },
    {
        icon:        'uil-server-network',
        name:        'Backend Engineering',
        description: 'Designing scalable APIs, microservices, and robust database architectures'
    },
    {
        icon:        'uil-rocket',
        name:        'System Design',
        description: 'Creating efficient, production-ready solutions that solve complex problems'
    },
    {
        icon:        'uil-database',
        name:        'Data Processing',
        description: 'ETL pipelines, data analysis, and transforming raw data into insights'
    }
];


/* ============================================================
   3. TECH STACK
   Fields:
     title  – group heading
     badges – array of badge label strings
   ============================================================ */

export const TECH_STACK_DATA = [
    {
        title:  'Specialties',
        badges: ['Python', 'Machine Learning', 'NLP', 'LLM Integration', 'Agentic AI']
    },
    {
        title:  'Languages',
        badges: ['Python', 'C++', 'C', 'SQL', 'JavaScript']
    },
    {
        title:  'Frameworks',
        badges: ['FastAPI', 'Flask']
    }
];


/* ============================================================
   4. FEATURED PROJECTS
   Fields:
     img         – relative path to project image
     alt         – image alt text
     name        – project title
     description – short project summary
     link        – href for the "View All" button
   ============================================================ */

export const PROJECTS_DATA = [
    {
        img:         'packages/images/Portfolio.jpg',
        alt:         'My Portfolio',
        name:        'My Portfolio',
        description: 'A responsive web portfolio with animations and smooth interactions built with HTML, CSS, and JavaScript.',
        link:        'projects.html'
    },
    {
        img:         'packages/images/NLP image.png',
        alt:         'Natural Language Processing Toolkit',
        name:        'NLP Toolkit',
        description: 'End-to-end NLP pipeline for text preprocessing and feature engineering using classical and neural word-embedding techniques.',
        link:        'projects.html'
    },
    {
        img:         'packages/images/Crop recommendation.png',
        alt:         'Crop Recommendation',
        name:        'Crop Recommendation AI',
        description: 'Machine learning model that recommends suitable crops based on soil and environmental conditions.',
        link:        'projects.html'
    }
];
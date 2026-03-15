/* ============================================================
   project-data.js
   All project content lives here.
   To add / edit / reorder — only touch this file.

   Sections:
   1.  Hero Project
   2.  Grid Projects
   3.  Playground (Mini) Projects
   ============================================================ */


/* ============================================================
   1. HERO PROJECT
   Fields:
     img        – image path
     alt        – img alt text
     tagClass   – proj__tag modifier (aiml | backend | datascience | tools)
     tagLabel   – tag display text
     year       – string
     title      – heading
     desc       – paragraph
     stats      – array of { value, label }
     stack      – array of chip strings
     actions    – array of { href, icon (uil class), label }
   ============================================================ */

export const HERO_PROJECT = {
    img:      'packages/images/Profile_img.jpeg',
    alt:      'My Portfolio',
    tagClass: 'tools',
    tagLabel: 'Creative',
    year:     'March, 2026',
    title:    'My Portfolio',
    desc:     'I build intelligent systems that combine AI, backend engineering, and data processing. Transforming complex problems into scalable, production-ready solutions.',
    stats: [
        { value: '4+',     label: 'Enterpris<br>Projects' },
        { expAttr: 'full', label: 'Of Industry<br>Experience' },
        { icon: 'uil-graduation-cap', link: 'about.html#education', label: 'Domain<br>Education' }
    ],
    stack:   ['Python','ML', 'NLP', 'LLM','Grn AI', 'Agentic AI', ],
    actions: [
        {
            href: 'index.html',
            icon: 'uil-external-link-alt',
            label: 'Live Demo',
            style: 'primary'
        },
        {
            href:  'https://github.com/ambikesh-jha/My_Portfolio.git',
            icon:  'uil-github-alt',
            label: 'View on GitHub',
            style: 'primary'
        }
    ]
};


/* ============================================================
   2. GRID PROJECTS
   Fields:
     img           – card image path
     alt           – img alt text
     category      – space-separated filter keys (aiml | backend | datascience | tools)
     year          – string
     title         – data-title + card heading
     tagClass      – proj__tag modifier
     tagLabel      – tag display text
     featured      – bool (shows star badge)
     desc          – card body description
     overlayDesc   – text shown on image hover
     stack         – array of chip strings
     overlayActions – array of { href, icon, label, style }
     footerActions  – array of { href, icon, label, style }
   ============================================================ */

export const GRID_PROJECTS = [
    {
        img:         './packages\\images\\NLP image.png',
        alt:         'Natural Language Processing Toolkit',
        category:    'aiml datascience',
        year:        'Jan, 2025',
        title:       'NLP Toolkit',
        tagClass:    'aiml',
        tagLabel:    'AI / ML /Data Science',
        featured:    true,
        desc:        'End-to-end NLP pipeline for text preprocessing and feature engineering using classical and neural word-embedding techniques.',
        overlayDesc: 'Implemented text cleaning, normalization, and representation using BoW, N-grams, TF-IDF, Word2Vec, GloVe, and FastText for downstream NLP tasks.',
        stack:       ['Python', 'NLTK', 'scikit-learn', 'Gensim', 'Pandas', 'Jupyter'],
        overlayActions: [
            { href: 'https://github.com/ambikesh-jha/NLP.git', icon: 'uil-github-alt', label: 'GitHub', style: 'ghost', target: '_blank' }
        ],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/NLP.git', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        img:         './packages\\images\\Job recommendation system.png',
        alt:         'Job Recommendation Engine',
        category:    'aiml datascience',
        year:        'Nov, 2024',
        title:       'Job Recommendation Engine',
        tagClass:    'aiml',
        tagLabel:    'AI / ML /Data Science',
        featured:    true,
        desc:        'Content-based job recommendation system that suggests relevant roles by analyzing similarity between job titles and descriptions.',
        overlayDesc: 'Built a Flask-based recommendation engine using TF-IDF vectorization and cosine similarity to rank and suggest jobs similar to a selected role.',
        stack:       ['Python', 'Flask', 'scikit-learn', 'Pandas', 'NLP', 'Cosine Similarity'],
        overlayActions: [
            { href: 'https://github.com/ambikesh-jha/Job-Recommendation-Engine.git', icon: 'uil-github-alt', label: 'GitHub', style: 'ghost', target: '_blank' }
        ],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/Job-Recommendation-Engine.git', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        img:         './packages\\images\\Crop recommendation.png',
        alt:         'Crop Recommendation',
        category:    'aiml datascience',
        year:        'Jan, 2024',
        title:       'Crop Recommendation',
        tagClass:    'aiml',
        tagLabel:    'AI / ML /Data Science',
        featured:    true,
        desc:        'Multi-model ML system recommending crops from soil & environment data. 97.5% accuracy across 22 crop classes.',
        overlayDesc: 'ML pipeline benchmarking 4 classifiers on soil & climate data to recommend crops with 97.5% accuracy.',
        stack:       ['Python', 'scikit-learn', 'Pandas', 'Jupyter'],
        overlayActions: [
            { href: 'https://github.com/ambikesh-jha/HarvestWise-Predictor', icon: 'uil-github-alt', label: 'GitHub', style: 'ghost', target: '_blank' }
        ],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/HarvestWise-Predictor', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        img:         './packages/images/StudentManagement.png',
        alt:         'Student Management System',
        category:    'tools',
        year:        '2024',
        title:       'Student Management System',
        tagClass:    'tools',
        tagLabel:    'Tools',
        featured:    true,
        desc:        'OOP-driven C++ system for full CRUD operations on student records with file-based persistence and a clean console UI.',
        overlayDesc: 'Console-based C++ application using OOP principles — create, search, update, delete student records with persistent file storage.',
        stack:       ['C++', 'OOP', 'File I/O'],
        overlayActions: [
            { href: 'https://www.linkedin.com/feed/update/urn:li:activity:7180992243523051521/', icon: 'uil-linkedin-alt', label: 'LinkedIn', style: 'primary', target: '_blank' },
            { href: 'https://github.com/ambikesh-jha/Students-record-management',               icon: 'uil-github-alt',   label: 'GitHub',   style: 'ghost',   target: '_blank' }
        ],
        footerActions: [
            { href: 'https://www.linkedin.com/feed/update/urn:li:activity:7180992243523051521/', icon: 'uil-linkedin-alt', label: 'View', style: 'primary', target: '_blank' },
            { href: 'https://github.com/ambikesh-jha/Students-record-management',               icon: 'uil-github-alt',   label: 'Code', style: 'ghost',   target: '_blank' }
        ]
    },
    {
        img:         './packages/images/BnkingSystem.png',
        alt:         'Banking System',
        category:    'tools',
        year:        '2023',
        title:       'Banking System',
        tagClass:    'tools',
        tagLabel:    'Tools',
        featured:    false,
        desc:        'Basic OOP banking application implementing account creation, transactions, and record handling.',
        overlayDesc: 'Console-based C++ banking system demonstrating OOP concepts such as encapsulation, class design, and transaction management.',
        stack:       ['C++', 'OOP', 'File I/O'],
        overlayActions: [
            { href: 'https://www.linkedin.com/feed/update/urn:li:activity:7153033029794283521/', icon: 'uil-linkedin-alt', label: 'LinkedIn', style: 'primary', target: '_blank' },
            { href: 'https://github.com/ambikesh-jha/Banking-system', icon: 'uil-github-alt', label: 'GitHub', style: 'ghost', target: '_blank' }
        ],
        footerActions: [
            { href: 'https://www.linkedin.com/feed/update/urn:li:activity:7153033029794283521/', icon: 'uil-linkedin-alt', label: 'View', style: 'primary', target: '_blank' },
            { href: 'https://github.com/ambikesh-jha/Banking-system', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
];


/* ============================================================
   3. PLAYGROUND (MINI) PROJECTS
   Fields:
     img      – image path
     alt      – img alt text
     tagClass – proj__tag modifier
     tagLabel – tag display text
     year     – string
     title    – heading
     desc     – body description
     stack    – array of chip strings
     actions  – array of { href, icon, label, style, target? }
   ============================================================ */

export const MINI_PROJECTS = [
    // Auto-include all grid projects except Job Recommendation Engine
    ...GRID_PROJECTS
        .filter(p => p.title !== 'Job Recommendation Engine')
        .map(p => ({
            img:      p.img,
            alt:      p.alt,
            tagClass: p.tagClass,
            tagLabel: p.tagLabel,
            year:     p.year,
            title:    p.title,
            desc:     p.desc,
            stack:    p.stack,
            actions:  p.footerActions
        })),

    // Mini-only projects
    {
        img:      './packages/images/StonePaperScissors.png',
        alt:      'Stone Paper Scissors',
        tagClass: 'tools',
        tagLabel: 'Tools',
        year:     '2023',
        title:    'Stone Paper Scissors',
        desc:     'Classic browser game vs computer AI. Built to practice DOM manipulation, event handling and game state logic in JS.',
        stack:    ['HTML', 'CSS', 'JavaScript'],
        actions:  [
            { href: 'https://ambikesh-jha.github.io/Stone-paper-scissors/', icon: 'uil-play',       label: 'Play', style: 'primary', target: '_blank' },
            { href: 'https://github.com/ambikesh-jha/Stone-paper-scissors', icon: 'uil-github-alt', label: 'Code', style: 'ghost',   target: '_blank' }
        ]
    },
];
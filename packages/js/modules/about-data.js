/* ============================================================
   about-data.js
   All page content lives here.
   To add / edit / reorder any entry — only touch this file.

   Sections:
   1.  Info Cards
   2.  Expect Cards
   3.  Skills
   4.  Experience (Qualification timeline)
   5.  Education  (Qualification timeline)
   6.  Qualification Modals
   ============================================================ */


/* ============================================================
   1. INFO CARDS
   Fields:
     iconHtml   – HTML string for the icon (uil class or svg)
     title      – main value shown (or null for data-exp stamp)
     expAttr    – data-exp attribute value if dynamic (else null)
     subtitle   – label beneath the title
     cert       – true = cert-card styling + click-to-view
     certImg    – path to cert image (cert cards only)
   ============================================================ */

export const INFO_CARDS = [
    {
        iconHtml: '<i class="uil uil-briefcase-alt"></i>',
        title:    null,
        expAttr:  'full',
        subtitle: 'Total Experience',
        cert:     false,
        certImg:  null
    },
    {
        iconHtml: '<i class="uil uil-check-circle"></i>',
        title:    '4+',
        expAttr:  null,
        subtitle: 'Enterprise Projects',
        cert:     false,
        certImg:  null
    },
    {
        iconHtml: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 23 23">
                       <rect x="1"  y="1"  width="10" height="10" fill="#F25022"/>
                       <rect x="12" y="1"  width="10" height="10" fill="#7FBA00"/>
                       <rect x="1"  y="12" width="10" height="10" fill="#00A4EF"/>
                       <rect x="12" y="12" width="10" height="10" fill="#FFB900"/>
                   </svg>`,
        title:    'Certified',
        expAttr:  null,
        subtitle: 'Microsoft Azure AI-102',
        cert:     true,
        certImg:  'packages/images/Microsoft Certification.jpg'
    }
];


/* ============================================================
   2. EXPECT CARDS
   Fields:
     icon     – uil icon class string
     heading  – card title
     text     – card body
   ============================================================ */

export const EXPECT_CARDS = [
    {
        icon:    'uil-layers-alt',
        heading: 'End-to-End Ownership',
        text:    'Full accountability from conception through deployment.'
    },
    {
        icon:    'uil-shield-check',
        heading: 'Technical Excellence',
        text:    'Scalable, optimised solutions built for reliability and longevity.'
    },
    {
        icon:    'uil-search-alt',
        heading: 'Proactive Problem-Solving',
        text:    'Risks identified and resolved before they reach delivery.'
    },
    {
        icon:    'uil-comments-alt',
        heading: 'Clear Communication',
        text:    'Structured engagement with stakeholders at every stage.'
    },
    {
        icon:    'uil-clock-three',
        heading: 'Timely Delivery',
        text:    'Deadlines met without compromising quality or scope.'
    },
    {
        icon:    'uil-chart-growth',
        heading: 'Continuous Improvement',
        text:    'Committed to learning, refinement, and team growth.'
    }
];


/* ============================================================
   3. SKILLS
   Fields:
     name       – display name
     tag        – shown under the name on the front face
     category   – space-separated filter keys (must match
                  data-filter values on the filter buttons)
     icon       – HTML string: <img> or inline <svg>
     fill       – 0-100, drives the proficiency badge
     desc       – back-face description
   ============================================================ */

export const SKILLS = [

    /* ── AI / ML ── */
    {
        name: 'Python',
        tag:  'AI / ML · Language',
        category: 'ai Language',
        icon: `<img src="https://img.icons8.com/color/48/python.png" alt="Python">`,
        fill: 92,
        desc: 'Primary language for all AI pipelines, backend services & data processing'
    },
    {
        name: 'Machine Learning',
        tag:  'AI / ML',
        category: 'ai',
        icon: `<img src="https://img.icons8.com/color/48/brain.png" alt="Machine Learning">`,
        fill: 85,
        desc: 'Built classification, NLP & predictive models for enterprise healthcare data'
    },
    {
        name: 'LangChain',
        tag:  'AI / ML',
        category: 'ai',
        icon: `<img src="https://img.icons8.com/color/48/artificial-intelligence.png" alt="LangChain">`,
        fill: 88,
        desc: 'Architected multi-agent systems & LLM orchestration pipelines for 4 enterprise projects'
    },
    {
        name: 'Azure AI',
        tag:  'AI / ML',
        category: 'ai',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 23 23">
                 <rect x="1"  y="1"  width="10" height="10" fill="#F25022"/>
                 <rect x="12" y="1"  width="10" height="10" fill="#7FBA00"/>
                 <rect x="1"  y="12" width="10" height="10" fill="#00A4EF"/>
                 <rect x="12" y="12" width="10" height="10" fill="#FFB900"/>
               </svg>`,
        fill: 82,
        desc: 'Microsoft Azure AI-102 Certified — deployed cognitive services & AI search at scale'
    },
    {
        name: 'RAG Systems',
        tag:  'AI / ML',
        category: 'ai',
        icon: `<img src="https://img.icons8.com/color/48/database.png" alt="RAG">`,
        fill: 87,
        desc: 'Reduced pipeline execution from 40 mins to 8 secs using RAG + DSA optimisation'
    },
    {
        name: 'Exploratory Data Analysis',
        tag:  'AI / ML',
        category: 'ai',
        icon: `<img src="https://img.icons8.com/color/48/combo-chart--v1.png" alt="EDA">`,
        fill: 83,
        desc: 'Applied during ISRO apprenticeship — geospatial data analysis & urban feature extraction'
    },
    {
        name: 'Prompt Engineering',
        tag:  'AI / ML',
        category: 'ai',
        icon: `<img src="https://img.icons8.com/color/48/chatgpt.png" alt="Prompt Engineering">`,
        fill: 90,
        desc: 'Designing precise, context-aware prompts to maximise LLM output quality in production'
    },

    /* ── Backend ── */
    {
        name: 'Flask',
        tag:  'Backend',
        category: 'backend',
        icon: `<img src="https://img.icons8.com/color/48/flask.png" alt="Flask">`,
        fill: 85,
        desc: 'Built RESTful AI service APIs & real-time WebSocket integrations for enterprise clients'
    },
    {
        name: 'FastAPI',
        tag:  'Backend',
        category: 'backend',
        icon: `<img src="https://img.icons8.com/color/48/api-settings.png" alt="FastAPI">`,
        fill: 80,
        desc: 'High-performance async APIs with automatic validation for medical data platforms'
    },
    {
        name: 'MongoDB',
        tag:  'Backend',
        category: 'backend',
        icon: `<img src="https://img.icons8.com/color/48/mongodb.png" alt="MongoDB">`,
        fill: 78,
        desc: 'Flexible document storage for unstructured AI outputs & dynamic data schemas'
    },
    {
        name: 'MySQL',
        tag:  'Backend',
        category: 'backend',
        icon: `<img src="https://img.icons8.com/color/48/mysql-logo.png" alt="MySQL">`,
        fill: 75,
        desc: 'Relational data modelling for structured business logic & reporting queries'
    },
    {
        name: 'PostgreSQL',
        tag:  'Backend',
        category: 'backend',
        icon: `<img src="https://img.icons8.com/color/48/postgreesql.png" alt="PostgreSQL">`,
        fill: 76,
        desc: 'Advanced relational DB — used for complex joins, JSONB storage & full-text search'
    },
    {
        name: 'Neo4J',
        tag:  'Backend',
        category: 'backend',
        icon: `<img src="https://img.icons8.com/color/48/graph.png" alt="Neo4J">`,
        fill: 60,
        desc: 'Graph DB for modelling connected medical entities & relationship-driven queries'
    },
    {
        name: 'SQLite',
        tag:  'Backend',
        category: 'backend',
        icon: `<img src="https://img.icons8.com/ios-filled/48/17abcf/database.png" alt="SQLite">`,
        fill: 78,
        desc: 'Lightweight embedded DB for local data persistence & rapid prototyping'
    },
    {
        name: 'Redis',
        tag:  'Backend',
        category: 'backend',
        icon: `<img src="https://img.icons8.com/color/48/redis.png" alt="Redis">`,
        fill: 72,
        desc: 'In-memory caching & pub/sub messaging to reduce API latency in high-throughput systems'
    },

    /* ── Tools ── */
    {
        name: 'Git',
        tag:  'Tools',
        category: 'tools',
        icon: `<img src="https://img.icons8.com/color/48/git.png" alt="Git">`,
        fill: 88,
        desc: 'Daily driver for version control, branching strategies & collaborative code management'
    },
    {
        name: 'GitHub',
        tag:  'Tools',
        category: 'tools',
        icon: `<img src="https://img.icons8.com/ios-glyphs/48/ffffff/github.png" alt="GitHub">`,
        fill: 85,
        desc: 'All enterprise projects hosted here — PRs, code reviews & CI/CD workflow management'
    },
    {
        name: 'VS Code',
        tag:  'Tools',
        category: 'tools',
        icon: `<img src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="VS Code">`,
        fill: 90,
        desc: 'Primary IDE — extensions, debugging & workspace config tuned for AI development'
    },
    {
        name: 'Postman',
        tag:  'Tools',
        category: 'tools',
        icon: `<img src="https://img.icons8.com/dusk/48/postman-api.png" alt="Postman">`,
        fill: 85,
        desc: 'API testing, collection management & endpoint documentation across all backend projects'
    },

    /* ── Frontend ── */
    {
        name: 'HTML',
        tag:  'Frontend',
        category: 'frontend',
        icon: `<img src="https://img.icons8.com/color/48/html-5.png" alt="HTML">`,
        fill: 80,
        desc: 'Semantic, accessible markup — structure behind this portfolio and client-facing UIs'
    },
    {
        name: 'CSS',
        tag:  'Frontend',
        category: 'frontend',
        icon: `<img src="https://img.icons8.com/color/48/css3.png" alt="CSS">`,
        fill: 65,
        desc: 'Custom animations, responsive layouts & theming — applied throughout this portfolio'
    },
    {
        name: 'JavaScript',
        tag:  'Frontend · Language',
        category: 'frontend Language',
        icon: `<img src="https://img.icons8.com/color/48/javascript.png" alt="JavaScript">`,
        fill: 40,
        desc: 'DOM manipulation, async logic & modular JS — powers all interactivity on this site'
    },
    {
        name: 'Bootstrap',
        tag:  'Frontend',
        category: 'frontend',
        icon: `<img src="https://img.icons8.com/color/48/bootstrap.png" alt="Bootstrap">`,
        fill: 74,
        desc: 'Rapid responsive UI scaffolding for dashboards & client-facing web interfaces'
    },

    /* ── Languages ── */
    {
        name: 'C Programming',
        tag:  'Language',
        category: 'Language',
        icon: `<img src="https://img.icons8.com/color/48/c-programming.png" alt="C Programming">`,
        fill: 70,
        desc: 'Foundation in pointers, memory management & low-level systems programming'
    },
    {
        name: 'SQL',
        tag:  'Language',
        category: 'Language',
        icon: `<img src="https://img.icons8.com/color/48/sql.png" alt="SQL">`,
        fill: 85,
        desc: 'Proficient in structured query writing, joins, subqueries, indexing & database performance optimization'
    },
    {
        name: 'C++',
        tag:  'Language',
        category: 'Language',
        icon: `<img src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="C++">`,
        fill: 72,
        desc: 'OOP, STL & DSA — used extensively for competitive programming & algorithm design'
    }
];


/* ============================================================
   4. EXPERIENCE  (Qualification – Work tab)
   Fields:
     id         – matches the modal id, e.g. 'modal-1'
     iconClass  – uil icon class for the card icon
     title      – role title
     date       – badge text
     subtitle   – company name
     desc       – short paragraph shown on the card
     active     – true = active-job styling on the dot & card
   ============================================================ */

export const EXPERIENCE = [
    {
        id:        'modal-1',
        iconClass: 'uil-building',
        title:     'Associate Software Engineer – AI',
        date:      'Jan 2025 – Present',
        subtitle:  'Netsmartz',
        desc:      'Leading enterprise-grade AI solutions with expertise in Agentic AI, LLM integration, and scalable backend systems end-to-end, including high-impact medical data platforms.',
        active:    true
    },
    {
        id:        'modal-2',
        iconClass: 'uil-laptop-cloud',
        title:     'Junior Software Engineer – AI Intern',
        date:      'Jul 2024 – Jan 2025',
        subtitle:  'Netsmartz',
        desc:      'Specialised in Python, Machine Learning, NLP and Generative AI solutions with Flask/FastAPI and databases.',
        active:    false
    },
    {
        id:        'modal-3',
        iconClass: 'uil-rocket',
        title:     'Apprenticeship – Machine Learning & AI',
        date:      'Jun 2023',
        subtitle:  'IIRS, ISRO – Dehradun',
        desc:      'Specialised training in AI/ML for remote sensing and urban studies. Hands-on geospatial data analysis and predictive modelling.',
        active:    false
    }
];


/* ============================================================
   5. EDUCATION  (Qualification – Education tab)
   Same fields as EXPERIENCE minus `active`.
   ============================================================ */

export const EDUCATION = [
    {
        id:        'modal-4',
        iconClass: 'uil-graduation-cap',
        title:     'Bachelor of Technology – CSE',
        date:      '2020 – 2024',
        subtitle:  'JUIT, Solan',
        desc:      'Major: Computer Science & Engineering · Proficiency: Data Science · Minor: Electronics and Communication Engineering'
    },
    {
        id:        'modal-5',
        iconClass: 'uil-book-open',
        title:     'Senior Secondary – Non Medical',
        date:      '2019 – 2020',
        subtitle:  'DAV, Solan (ISC)',
        desc:      'Scored 84.6% — Winner of Uday Mittal Award, Student of the Year.'
    },
    {
        id:        'modal-6',
        iconClass: 'uil-book',
        title:     'Matriculation – Science',
        date:      '2017 – 2018',
        subtitle:  'DAV, Solan (ICSE)',
        desc:      'Scored 83.3% — participated in national-level academic competitions, debates and Olympiads.'
    }
];


/* ============================================================
   6. QUALIFICATION MODALS
   Fields:
     id      – must match the id used in EXPERIENCE / EDUCATION
     title   – modal heading
     points  – array of bullet strings
   ============================================================ */

export const MODALS = [
    {
        id:    'modal-1',
        title: 'Associate Software Engineer – AI | Netsmartz',
        points: [
            'Designed multi-agent systems for automated data validation and transformation. Leading end-to-end AI platform development for sensitive medical data with regulatory compliance.',
            'Engineered RAG-based solutions to improve search accuracy and optimized data pipelines using DSA and automata, reducing execution time from minutes to seconds.',
            'Architected real-time chatbot-ticketing integrations via WebSockets and webhooks with intelligent workload distribution. Built scalable backend services with REST APIs.',
            'Manage end-to-end project lifecycles from requirement analysis to client presentations.'
        ]
    },
    {
        id:    'modal-2',
        title: 'Junior Software Engineer – AI Intern | Netsmartz',
        points: [
            'Qualified Microsoft Azure AI-102: Designing and Implementing an Azure AI Solution.',
            'Applied Machine Learning and NLP concepts in AI-driven applications.',
            'Implemented backend services using Flask and FastAPI. Managed relational and NoSQL databases.',
            'Collaborated on scalable backend and AI-based solutions.'
        ]
    },
    {
        id:    'modal-3',
        title: 'ML & AI Apprentice | IIRS, ISRO',
        points: [
            'Urban Feature Extraction: Automated built-up area mapping using ML-based classification of satellite imagery.',
            'Thermal Analysis: Modelled Land Surface Temperature and Urban Heat Island effects.',
            'Flood Analysis: Applied AI techniques for urban flood risk assessment using Earth Observation data.',
            'Spatial Modelling: Utilised deep learning for 3D urban land use modelling.',
            'Received lectures from distinguished scientists on applying AI/ML to remote sensing for sustainable urban development.'
        ]
    },
    {
        id:    'modal-4',
        title: 'Bachelor of Technology – CSE | JUIT, Solan',
        points: [
            'CGPA: 7.8',
            'Strong foundation in Data Science, Deep Learning, Machine Learning & Analytics.',
            'Developed Crop Recommendation System (ML) and Diabetic Retinopathy Detection using Transfer Learning & Computer Vision.',
            'Earned multiple certifications in CS, Development, Data Analytics, and Machine Learning.'
        ]
    },
    {
        id:    'modal-5',
        title: 'Senior Secondary (XII) | DAV, Solan',
        points: [
            'Achieved 84.6% under ISC curriculum.',
            'Winner – Uday Mittal Award (Student of the Year).',
            'Participant – National Children\'s Science Congress (Science Quiz).',
            'Second Prize – Inter-School Science Quiz Competition.'
        ]
    },
    {
        id:    'modal-6',
        title: 'Secondary Education (X) | DAV, Solan',
        points: [
            'Achieved 83.3% under ICSE curriculum.',
            'National-level participation – All India Interschool Debate Competition.',
            'Mathematics Competition – National Children\'s Science Congress.',
            'Qualified First Round – Space Olympiad.',
            'Commendable performance in Mathematics & Science Olympiads.'
        ]
    }
];
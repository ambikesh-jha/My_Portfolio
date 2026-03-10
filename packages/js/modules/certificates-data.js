/* ============================================================
   certificates-data.js
   All certificate content lives here.
   To add / edit / reorder — only touch this file.

   Sections:
   1.  Featured Certificate
   2.  Grid Certificates
   ============================================================ */


/* ============================================================
   1. FEATURED CERTIFICATE
   Fields:
     category  – filter key
     name      – display name
     src       – image path
     badge     – badge label text
     title     – large heading in overlay
     desc      – description shown on featured card
   ============================================================ */

export const FEATURED_CERT = {
    category: 'tools',
    name:     'Microsoft Azure AI-102',
    src:      'packages/images/Microsoft Certification.jpg',
    badge:    'Microsoft · Azure',
    title:    'Azure AI Engineer AI-102',
    desc:     'Industry-recognised certification validating expertise in Azure AI services and solutions.'
};


/* ============================================================
   2. GRID CERTIFICATES
   Fields:
     category  – filter key (Data_Sci | Web_Dev | tools | Course_work)
     name      – display name
     src       – image path
     alt       – img alt text
     badge     – badge label shown in overlay
   ============================================================ */

export const GRID_CERTS = [

    /* ── AI / ML ── */
    {
        category: 'Data_Sci',
        name:     'LLM in Artificial Intelligence',
        src:      'packages/images/LLM in AI.png',
        alt:      'LLM in AI Certificate',
        badge:    'AI / ML'
    },
    {
        category: 'Data_Sci',
        name:     'Generative AI',
        src:      'packages/images/GenAI.png',
        alt:      'Generative AI Certificate',
        badge:    'AI / ML'
    },
    {
        category: 'Data_Sci',
        name:     'Data Science',
        src:      'packages/images/Data Science.jpg',
        alt:      'Data Science Certificate',
        badge:    'AI / ML'
    },
    {
        category: 'Data_Sci',
        name:     'Machine Learning',
        src:      'packages/images/Machine Learning.jpg',
        alt:      'Machine Learning Certificate',
        badge:    'AI / ML'
    },
    {
        category: 'Data_Sci',
        name:     'Data Visualization',
        src:      'packages/images/Data Visualization.jpg',
        alt:      'Data Visualization Certificate',
        badge:    'AI / ML'
    },
    {
        category: 'Data_Sci',
        name:     'Exploratory Data Analysis',
        src:      'packages/images/EDA.jpg',
        alt:      'EDA Certificate',
        badge:    'AI / ML'
    },
    {
        category: 'Data_Sci',
        name:     'Statistical Inference',
        src:      'packages/images/Statistical Inference.jpg',
        alt:      'Statistical Inference Certificate',
        badge:    'AI / ML'
    },
    {
        category: 'Data_Sci',
        name:     'Probability & Statistics',
        src:      'packages/images/Probability and Statistics.jpg',
        alt:      'Probability and Statistics Certificate',
        badge:    'AI / ML'
    },

    /* ── Tools ── */
    {
        category: 'tools',
        name:     'Git Version Control',
        src:      'packages/images/Git Certificate.jpg',
        alt:      'Git Certificate',
        badge:    'Tools'
    }, 
    {
        category: 'tools',
        name:     'Github Copilot Fundamentals',
        src:      'packages/images/Github Copilot.png',
        alt:      'Github Copilot Certificate',
        badge:    'Tools'
    },
    {
        category: 'tools',
        name:     'SQL Databases',
        src:      'packages/images/SQL Certificate.jpg',
        alt:      'SQL Certificate',
        badge:    'Tools'
    },
    /* ── Server ── */
    {
        category: 'Server & Deployment',
        name:     'Server deployment',
        src:      'packages/images/server deployment.png',
        alt:      'Server Deployment Certificate',
        badge:    'Server & Deployment'
    }, 
        /* ── Web Dev ── */
    {
        category: 'Web_Dev',
        name:     'HTML Fundamentals',
        src:      'packages/images/HTML Certificate.jpg',
        alt:      'HTML Certificate',
        badge:    'Web Dev'
    },
    {
        category: 'Web_Dev',
        name:     'Angular Framework',
        src:      'packages/images/Angular.jpg',
        alt:      'Angular Certificate',
        badge:    'Web Dev'
    },
    /* ── Course Work ── */
    {
        category: 'Course_work',
        name:     'C++ Programming',
        src:      'packages/images/Cpp Certificate.jpg',
        alt:      'C++ Certificate',
        badge:    'Course Work'
    },
    {
        category: 'Course_work',
        name:     'Data Structures & Algorithms',
        src:      'packages/images/DSA.jpg',
        alt:      'DSA Certificate',
        badge:    'Course Work'
    },
    {
        category: 'Course_work',
        name:     'Object Oriented Programming',
        src:      'packages/images/OOPs Certificate.jpg',
        alt:      'OOPs Certificate',
        badge:    'Course Work'
    },
    {
        category: 'Course_work',
        name:     'Database Management Systems',
        src:      'packages/images/DBMS Certificate.jpg',
        alt:      'DBMS Certificate',
        badge:    'Course Work'
    }
];
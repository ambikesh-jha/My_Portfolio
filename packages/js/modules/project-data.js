/* ============================================================
   project-data.js  –  All project content lives here.
   Fields:
     img?        – path to screenshot (optional)
     icon        – uil icon class used when no img
     size?       – 'wide' | 'normal' (default: 'normal')
     category    – space-separated filter keys
     tagClass    – CSS modifier for the pill colour
     tagLabel    – human-readable pill text
     featured?   – shows star badge
     metric?     – single standout number / stat shown on card
     status?     – 'live' | 'archived' | 'in-progress'
   ============================================================ */


/* ============================================================
   1. HERO PROJECT
   ============================================================ */

export const HERO_PROJECT = {
    img:      'packages/images/Project_profile.jpeg',
    alt:      'My Portfolio',
    tagClass: 'creative',
    tagLabel: 'Creative',
    year:     'March, 2026',
    title:    'My Portfolio',
    desc:     'I build intelligent systems that combine AI, backend engineering, and data processing. Transforming complex problems into scalable, production-ready solutions.',
    stats: [
        { value: '4+',  label: 'Enterprise<br>Projects' },
        { value: '1+',  label: 'Years of Industry<br>Experience' },
        { icon: 'uil-graduation-cap', link: 'about.html#education', label: 'Domain<br>Education' }
    ],
    stack:   ['Python', 'ML', 'NLP', 'LLM', 'Generative AI', 'Agentic AI'],
    actions: [
        { href: 'index.html',                                    icon: 'uil-external-link-alt', label: 'Live Demo',      style: 'primary' },
        { href: 'https://github.com/ambikesh-jha/My_Portfolio.git', icon: 'uil-github-alt',    label: 'View on GitHub', style: 'primary' }
    ]
};


/* ============================================================
   2. GRID PROJECTS  (image cards + text-first cards together)
   ============================================================ */

export const GRID_PROJECTS = [
    {
        img:         null,
        icon:        'uil-book-alt',
        alt:         'OSTEP Offline Textbook Builder',
        category:    'webdev',
        year:        'Mar, 2026',
        title:       'OSTEP Offline Textbook Builder',
        tagClass:    'webdev',
        tagLabel:    'Web / tools',
        size:        'normal',
        featured:    true,
        metric:      'Full textbook pipeline',
        status:      'live',
        desc:        'Production-grade FastAPI app that compiles the entire OSTEP textbook into offline HTML/PDF. Sequential pipeline with WebSocket progress tracking, intelligent asset management, and robots.txt-compliant rate-limited scraping.',
        overlayDesc: 'Pipeline stages run sequentially — chapter discovery -> asset scraping (PDFs, images, code, homework) -> HTML assembly -> PDF compilation. WebSockets push per-stage progress to the client in real time. A thread-safe state manager prevents concurrent build conflicts. Full REST API with auto-generated Swagger docs.',
        stack:       ['Python', 'FastAPI', 'WebSockets', 'Pydantic', 'BeautifulSoup', 'PyPDF2', 'Asyncio'],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/OSTEP-Extractor.git', icon: 'uil-github-alt', label: 'Code',     style: 'ghost',   target: '_blank' },
            ]
    },
    {
        img:         null,
        icon:        'uil-brain',
        alt:         'Natural Language Processing Toolkit',
        category:    'aiml datascience',
        year:        'Dec, 2024',
        title:       'NLP Text Preprocessing Workshop',
        tagClass:    'aiml',
        tagLabel:    'AI / ML',
        size:        'normal',
        featured:    true,
        metric:      null,
        status:      'live',
        desc:        'End-to-end NLP pipeline for text preprocessing and feature engineering using classical and neural word-embedding techniques.',
        overlayDesc: 'Implemented text cleaning, normalisation, and representation using BoW, N-grams, TF-IDF, Word2Vec, GloVe, and FastText for downstream NLP tasks.',
        stack:       ['Python', 'NLTK', 'scikit-learn', 'Gensim', 'Pandas', 'Jupyter'],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/nlp-preprocessing-workshop.git', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        img:         null,
        icon:        'uil-briefcase-alt',
        alt:         'Job Recommendation Engine',
        category:    'aiml datascience',
        year:        'Nov, 2024',
        title:       'Job Recommendation Engine',
        tagClass:    'aiml',
        tagLabel:    'AI / ML',
        size:        'normal',
        featured:    true,
        metric:      null,
        status:      'live',
        desc:        'Content-based job recommendation system that suggests relevant roles by analysing similarity between job titles and descriptions.',
        overlayDesc: 'Built a Flask-based recommendation engine using TF-IDF vectorisation and cosine similarity to rank and suggest jobs similar to a selected role.',
        stack:       ['Python', 'Flask', 'scikit-learn', 'Pandas', 'NLP', 'Cosine Similarity'],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/Job-Recommendation-Engine.git', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        img:         null,
        icon:        'uil-trees',
        alt:         'Crop Recommendation',
        category:    'aiml datascience',
        year:        'Jan, 2024',
        title:       'Crop Recommendation',
        tagClass:    'aiml',
        tagLabel:    'AI / ML',
        size:        'normal',
        featured:    true,
        metric:      '97.5% accuracy',
        status:      'live',
        desc:        'Multi-model ML system recommending crops from soil & environment data. 97.5% accuracy across 22 crop classes.',
        overlayDesc: 'ML pipeline benchmarking 4 classifiers on soil & climate data to recommend crops with 97.5% accuracy.',
        stack:       ['Python', 'scikit-learn', 'Pandas', 'Jupyter'],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/HarvestWise-Predictor', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        img:         null,
        icon:        'uil-dashboard',
        alt:         'Training Dashboard – Task Management System',
        category:    'webdev fullstack',
        year:        'Sep, 2024',
        title:       'Task Management System',
        tagClass:    'webdev',
        tagLabel:    'Web / Backend',
        size:        'normal',
        featured:    true,
        metric:      null,
        status:      'live',
        desc:        'Flask-based web app for managing training tasks between trainers and trainees with role-based access control.',
        overlayDesc: 'Secure auth, separate trainer/student interfaces, real-time task status (To-Do -> In Progress -> Done), and MongoDB Atlas persistence.',
        stack:       ['Python', 'Flask', 'MongoDB', 'JWT', 'HTML5/CSS3', 'Jinja2'],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/Task-Management-System.git', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        img:         null,
        icon:        'uil-file-search-alt',
        alt:         'RAG Document Q&A System',
        category:    'aiml',
        year:        'Nov, 2024',
        title:       'RAG Document Q&A System',
        tagClass:    'aiml',
        tagLabel:    'AI / ML',
        size:        'wide',
        featured:    true,
        metric:      'FAISS + Llama 3.2',
        status:      'live',
        desc:        'Intelligent document Q&A using Retrieval-Augmented Generation. Upload PDFs or Word files and ask questions — semantic search via FAISS vector database with local Llama 3.2 LLM fallback via Ollama. Features smart chunking, real-time embedding generation, and a clean web interface.',
        overlayDesc: 'Documents are split into overlapping chunks, embedded via Sentence Transformers, and stored in FAISS. At query time, top-k chunks are retrieved and injected as context into Llama 3.2. Falls back gracefully to keyword search when the vector index is empty.',
        stack:       ['Python', 'Flask', 'FAISS', 'Sentence Transformers', 'Ollama', 'Llama 3.2', 'pdfplumber'],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/RAG-Document-Q-A-System.git', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        img:         null,
        icon:        'uil-robot',
        alt:         'NLP & LLM Application Suite',
        category:    'aiml',
        year:        'jan, 2025',
        title:       'NLP & LLM Application Suite',
        tagClass:    'aiml',
        tagLabel:    'AI / ML',
        size:        'wide',
        featured:    true,
        metric:      '3 production pipelines',
        status:      'live',
        desc:        'Three advanced NLP/LLM projects in one suite: Hybrid Search RAG combining dense (OpenAI) and sparse (BM25) embeddings with Pinecone for industrial hardware search; Conversational AI with LangChain + Groq Llama 3.1 with memory management; Intelligent DAT file processing agent with automated binary analysis and hex parsing.',
        overlayDesc: 'Hybrid RAG uses reciprocal rank fusion to merge dense and sparse results before passing to the LLM. The conversational agent maintains windowed memory via LangChain\'s ConversationBufferWindowMemory. The DAT agent auto-detects file encoding, parses hex headers, and logs structured output for downstream analysis.',
        stack:       ['Python', 'LangChain', 'Pinecone', 'Groq', 'OpenAI', 'BM25', 'Vector Databases', 'RAG', 'Agents'],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/NLP-LLM-Projects-Collection.git', icon: 'uil-github-alt', label: 'Code',  style: 'ghost',   target: '_blank' },
            { href: 'https://colab.research.google.com/drive/19iZJ1Oq9AHQqaigprVjeNp32u0H-Lvdq', icon: 'uil-google',    label: 'Colab', style: 'primary', target: '_blank' }
        ]
    },
    {
        img:         null,
        icon:        'uil-file-check-alt',
        alt:         'Intelligent ATS Resume Scorer',
        category:    'aiml',
        year:        'Mar, 2025',
        title:       'Intelligent ATS Resume Scorer',
        tagClass:    'aiml',
        tagLabel:    'AI / ML',
        size:        'normal',
        featured:    true,
        metric:      '4-factor weighted scoring',
        status:      'live',
        desc:        'AI-powered ATS using Groq\'s Mixtral LLM to evaluate resumes against job descriptions. Weighted scoring: 40% Skills, 30% Experience, 20% Qualifications, 10% Keywords. Batch PDF processing, missing keyword identification, and comprehensive JSON output.',
        overlayDesc: 'Each resume is extracted via PyPDF2, then sent to Mixtral-8x7b with a structured prompt that enforces JSON output. The model returns per-criterion scores, matched and missing keywords, and a hiring recommendation. Batch mode processes entire folders and aggregates results into a ranked shortlist.',
        stack:       ['Python', 'Groq', 'Mixtral-8x7b', 'PyPDF2', 'LLM', 'JSON'],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/ATS-Resume.git',                          icon: 'uil-github-alt', label: 'Code',  style: 'ghost',   target: '_blank' },
        ]
    },
    {
        img:         null,
        icon:        'uil-headphones',
        alt:         'Zendesk AI Chatbot with Human Handover',
        category:    'webdev aiml',
        year:        'May, 2025',
        title:       'Zendesk Chatbot Integration',
        tagClass:    'webdev',
        tagLabel:    'Web / AI Integration',
        size:        'normal',
        featured:    true,
        metric:      null,
        status:      'live',
        desc:        'Customer-support chatbot integrated with Zendesk via FastAPI. Automatic ticket creation, intelligent agent assignment by workload, real-time WebSocket comms, and seamless human handover with full chat transcripts.',
        overlayDesc: 'Incoming messages are matched against a rule engine; unmatched intents trigger ticket creation via the Zendesk REST API. Agent assignment queries open ticket counts across agents and routes to the least-loaded. WebSocket channels keep the browser UI in sync without polling. ngrok exposes the local webhook endpoint during development.',
        stack:       ['Python', 'FastAPI', 'WebSockets', 'Webhook', 'Zendesk API', 'ngrok', 'Asyncio'],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/Human-Handover.git', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        img:         null,
        icon:        'uil-video',
        alt:         'Video Compression & Frame Extraction',
        category:    'computervision',
        year:        'feb, 2025',
        title:       'Video Compression & Frame Extraction',
        tagClass:    'computervision',
        tagLabel:    'Computer Vision',
        size:        'normal',
        featured:    false,
        metric:      'PSNR-optimised',
        status:      'live',
        desc:        'Video processing system that auto-optimises compression quality using PSNR metrics and binary search. FPS-adaptive frame extraction (skip rates 3–10 based on 30–120+ FPS) with organised, timestamped output directories.',
        overlayDesc: 'Compression quality is determined by binary search over the CRF range — a sample of frames is encoded at each candidate quality, PSNR is computed against the original, and search halts when the target quality threshold is met. Frame skip rate is calculated from the detected FPS so motion-dense videos are sampled proportionally.',
        stack:       ['Python', 'OpenCV', 'NumPy', 'PSNR Metrics', 'Binary Search'],
        footerActions: [
            { href: 'https://github.com/yourusername/video-compression-system', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        img:         null,
        icon:        'uil-comment-alt-dots',
        alt:         'Sentiment and Emotion Analysis Chatbot',
        category:    'aiml',
        year:        'Nov, 2024',
        title:       'Sentiment & Emotion Chatbot',
        tagClass:    'aiml',
        tagLabel:    'AI / ML',
        size:        'normal',
        featured:    false,
        metric:      'Dual analysis',
        status:      'live',
        desc:        'Real-time sentiment and emotion analysis powered by Llama 3.2 via Ollama. Dual classification: sentiment (positive/negative/neutral) + specific emotion detection (angry, happy, threatening…). Thread-safe concurrency with streaming responses.',
        overlayDesc: 'Each message is sent to Llama 3.2 with two separate structured prompts — one for sentiment polarity, one for fine-grained emotion — run concurrently via Python threading. A queue ensures responses are streamed to the client in order. All inference stays local; no data leaves the machine.',
        stack:       ['Python', 'Flask', 'Ollama', 'Llama 3.2', 'Threading', 'JavaScript'],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/Sentiment-Emotion-Analysis-Chatbot.git', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        img:         null,
        icon:        'uil-vector-square',
        alt:         'FastAPI Vector Image Converter',
        category:    'webdev',
        year:        'feb, 2025',
        title:       'FastAPI Vector Image Converter',
        tagClass:    'webdev',
        tagLabel:    'Web / Tools',
        size:        'normal',
        featured:    false,
        metric:      null,
        status:      'live',
        desc:        'Web service converting raster images (PNG, JPG, BMP, GIF) to vector formats (AI, EPS) via Inkscape. Async FastAPI endpoints, batch processing, two-stage conversion (image -> SVG -> target), and automatic cleanup.',
        overlayDesc: 'Uploaded images are first traced to SVG using Inkscape\'s autotrace engine, then re-exported to the target vector format in a second Inkscape pass. Async background tasks handle both stages so the API stays responsive during long conversions. Temp files are cleaned up on a TTL timer.',
        stack:       ['Python', 'FastAPI', 'Jinja2', 'Inkscape', 'Uvicorn'],
        footerActions: [
            { href: 'https://github.com/ambikesh-jha/Image-To-vector.git', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        img:         null,
        icon:        'uil-database',
        alt:         'Session Memory Chatbot',
        category:    'aiml webdev',
        year:        'Nov, 2024',
        title:       'Session Memory bot',
        tagClass:    'aiml',
        tagLabel:    'AI / ML',
        size:        'normal',
        featured:    false,
        metric:      null,
        status:      'live',
        desc:        'Flask chatbot with persistent MongoDB storage and local LLM integration. Session management, dual history system (real-time + dedicated viewer), powered by Mistral via Ollama.',
        overlayDesc: 'Each conversation is stored as a document in MongoDB with a session UUID. LangChain retrieves the last N messages to build the context window before each Mistral call. A separate /history route queries the full session log and renders it in a paginated viewer — independent of the live chat UI.',
        stack:       ['Python', 'Flask', 'MongoDB', 'LangChain', 'Ollama', 'Mistral'],
        footerActions: [
            { href: 'https://github.com/yourusername/smart-bot', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    }
];


/* ============================================================
   3. PLAYGROUND (MINI) PROJECTS — genuine learning builds only
   ============================================================ */

export const MINI_PROJECTS = [
    {
        alt:      'LangChain Chatbot',
        tagClass: 'aiml',
        tagLabel: 'AI / ML',
        year:     '2024',
        title:    'LangChain Chatbot',
        desc:     'Lightweight Flask interface for Hugging Face LLMs using LangChain. Configurable prompt templates and API endpoint. Powered by Mistral-7B-Instruct.',
        stack:    ['Python', 'Flask', 'LangChain', 'HuggingFace', 'Mistral-7B'],
        actions:  [
            { href: 'https://github.com/ambikesh-jha/LangChain-Chatbot-Interface.git', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        alt:      'Grammar Check Bot',
        tagClass: 'aiml',
        tagLabel: 'AI / ML',
        year:     '2024',
        title:    'Grammar Check Bot',
        desc:     'Privacy-focused grammar checker running Llama 3.2 1B locally via Ollama. Real-time correction with conversation history — no external API calls.',
        stack:    ['Python', 'Flask', 'LangChain', 'Ollama', 'Llama 3.2'],
        actions:  [
            { href: 'https://github.com/ambikesh-jha/Grammar-Check-Bot.git', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        alt:      'Text Summarization Tool',
        tagClass: 'aiml',
        tagLabel: 'AI / ML',
        year:     '2024',
        title:    'Text Summarization Tool',
        desc:     'Extractive summarisation with NLTK. Frequency-based sentence scoring, customisable summary length, and real-time processing.',
        stack:    ['Python', 'Flask', 'NLTK', 'JavaScript'],
        actions:  [
            { href: 'https://github.com/ambikesh-jha/Text-Summarization-NLP.git', icon: 'uil-github-alt', label: 'Code', style: 'ghost', target: '_blank' }
        ]
    },
    {
        alt:      'NLP Preprocessing Workshop',
        tagClass: 'aiml',
        tagLabel: 'AI / ML',
        year:     '2024',
        title:    'NLP Preprocessing & Feature Extraction',
        desc:     '11+ text preprocessing techniques and feature extraction (BoW, N-grams, TF-IDF) on the IMDB dataset. Includes stemming vs lemmatisation comparisons.',
        stack:    ['Python', 'NLTK', 'spaCy', 'scikit-learn', 'Jupyter'],
        actions:  [
            { href: 'https://github.com/ambikesh-jha/nlp-preprocessing-workshop.git', icon: 'uil-github-alt', label: 'Code',  style: 'ghost',   target: '_blank' },
            { href: 'https://colab.research.google.com/drive/1UOhhpeWfdx994mQubrqRZ6eesOm58Tz5', icon: 'uil-google',    label: 'Colab', style: 'primary', target: '_blank' }
        ]
    },
    {
        alt:      'Student Management System',
        tagClass: 'tools',
        tagLabel: 'Tools',
        year:     '2024',
        title:    'Student Management System',
        desc:     'OOP-driven C++ system for full CRUD on student records with file-based persistence and a clean console UI.',
        stack:    ['C++', 'OOP', 'File I/O'],
        actions:  [
            { href: 'https://www.linkedin.com/feed/update/urn:li:activity:7180992243523051521/', icon: 'uil-linkedin-alt', label: 'LinkedIn', style: 'primary', target: '_blank' },
            { href: 'https://github.com/ambikesh-jha/Students-record-management.git',                icon: 'uil-github-alt',   label: 'GitHub',   style: 'ghost',   target: '_blank' }
        ]
    },
    {
        alt:      'Banking System',
        tagClass: 'tools',
        tagLabel: 'Tools',
        year:     '2023',
        title:    'Banking System',
        desc:     'Console-based C++ OOP banking app — account creation, transactions, and record handling.',
        stack:    ['C++', 'OOP', 'File I/O'],
        actions:  [
            { href: 'https://www.linkedin.com/feed/update/urn:li:activity:7153033029794283521/', icon: 'uil-linkedin-alt', label: 'LinkedIn', style: 'primary', target: '_blank' },
            { href: 'https://github.com/ambikesh-jha/Banking-system.git', icon: 'uil-github-alt',   label: 'GitHub',   style: 'ghost',   target: '_blank' }
        ]
    }
];
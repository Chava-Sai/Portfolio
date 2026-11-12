/**
 * Single source of truth for portfolio content.
 * Figures here are traceable to a repo, a leaderboard or a paper — nothing
 * is rounded up or invented.
 */

export const personal = {
  name: "Srinivasa Sai Chava",
  initials: "SC",
  title: "M.S. Artificial Intelligence · AI/ML Engineer · NLP · Computer Vision",
  tagline:
    "Building production-focused AI systems across ML/DL, NLP, computer vision and retrieval-augmented generation, at the point where research turns into something that ships.",
  location: "Boston, MA · Open to relocation",
  email: "srinivassaichava@gmail.com",
  phone: "+1 (857) 498-5012",
  availability: "Open to Summer 2027 AI/ML and Research Internships",
  roles: [
    "AI/ML Engineer",
    "NLP Engineer",
    "Computer Vision Engineer",
    "Research Engineer",
    "Data Scientist",
  ],
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Chava-Sai",
    linkedin: "https://www.linkedin.com/in/chava-srinivasa-sai/",
    email: "mailto:srinivassaichava@gmail.com",
    anthology: "https://aclanthology.org/people/s/srinivasa-sai-chava/",
  },
} as const;

export const education = [
  {
    school: "Boston University",
    degree: "Master of Science in Artificial Intelligence",
    location: "Boston, MA",
    period: "Sep 2025 – Expected Dec 2026",
    courses: [
      "Machine Learning",
      "Reinforcement Learning",
      "Data Science Tools",
      "AI Systems",
    ],
  },
  {
    school: "Indian Institute of Information Technology Dharwad",
    degree: "B.Tech. in Data Science and Artificial Intelligence",
    location: "Dharwad, India",
    period: "Nov 2021 – May 2025 · CGPA 7.93/10",
    courses: [
      "Multilingual NLP",
      "Computer Vision",
      "Applied Machine Learning",
      "Data Structures",
    ],
  },
] as const;

export const stats = [
  { label: "DravidianCodeMix 2026", value: "1st" },
  { label: "Papers & submissions", value: "4" },
  { label: "Hackathons won", value: "5+" },
  { label: "Shipped projects", value: "7" },
] as const;

export const techStack = {
  Languages: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL", "Dart"],
  "Machine Learning": [
    "Scikit-Learn",
    "XGBoost",
    "Pandas",
    "NumPy",
    "SciPy",
    "Matplotlib",
    "Feature Engineering",
  ],
  "Deep Learning": [
    "PyTorch",
    "TensorFlow",
    "Keras",
    "Hugging Face",
    "LoRA / QLoRA",
    "Transformers",
    "VideoMAE",
  ],
  "NLP & Vision": [
    "XLM-R",
    "MuRIL",
    "IndicTrans2",
    "OpenCV",
    "spaCy",
    "NLTK",
    "Tokenizers",
  ],
  "LLM Systems": ["RAG", "LangChain", "ChromaDB", "FAISS", "BM25", "OpenAI", "Gemini"],
  Backend: [
    "FastAPI",
    "Flask",
    "Node.js",
    "REST APIs",
    "PostgreSQL",
    "MySQL",
    "SQLAlchemy",
  ],
  Frontend: ["React", "Next.js", "Vite", "Flutter", "Tailwind", "HTML", "CSS"],
  "Cloud & Tooling": [
    "AWS",
    "Google Cloud Run",
    "Docker",
    "Git",
    "Firebase",
    "Vercel",
    "Jupyter",
  ],
} as const;

export const experience = [
  {
    role: "Technical Project Manager",
    company: "BU Spark!",
    location: "Boston, MA",
    period: "Sep 2026 – Present",
    summary:
      "Selected as Technical Project Manager for DS 549 (Machine Learning Practicum), supporting client-sponsored ML projects delivered by student teams.",
    bullets: [
      "Upcoming responsibilities include technical scoping, code review, and student-team support for client-sponsored ML projects.",
    ],
    stack: ["Code Review", "Scrum", "GitHub", "Mentoring"],
    logo: "/logos/BU-spark.png",
  },
  {
    role: "AI Engineer Intern",
    company: "American Green Solutions",
    location: "Remote",
    period: "May 2026 – Aug 2026",
    summary:
      "Worked within the AGS Astra platform team to design and develop internal AI-powered tools for solar operations and O&M teams.",
    bullets: [
      "Designed and implemented RAG pipelines for enterprise knowledge retrieval using LangChain, vector databases, and OpenAI LLMs.",
      "Built REST API backends with FastAPI including authentication, role-based access control, and async task processing.",
      "Developed React + Next.js frontends integrated with AI backends and semantic search pipelines.",
    ],
    stack: ["FastAPI", "LangChain", "ChromaDB", "React", "Next.js", "OpenAI"],
    logo: "/logos/ags-logo.png",
  },
  {
    role: "Machine Learning and Flutter Trainer (Contract)",
    company: "Datavalley.ai",
    location: "India",
    period: "Jan 2025 – Jul 2025",
    summary:
      "Led contract ML and Flutter training programs for partner colleges, focused on deployable, industry-style project delivery.",
    bullets: [
      "Designed hands-on workshop tracks and lab modules aligned to real production workflows.",
      "Built and demonstrated a Flutter app with role-based auth, ZegoCloud video, and UPI payments.",
      "Mentored teams on architecture, debugging, testing, and end-to-end release readiness.",
    ],
    stack: ["Python", "PyTorch", "Flutter", "Firebase", "Teaching"],
    logo: "/logos/Datavalley Logo.png",
  },
  {
    role: "Machine Learning Research Assistant",
    company: "IIIT Dharwad",
    location: "Dharwad, India",
    period: "Aug 2023 – Jul 2024",
    summary:
      "Served as Machine Learning Research Assistant and led a team evaluating Hindi–English machine translation quality.",
    bullets: [
      "Built evaluation pipelines comparing Google Translate and IndicTrans2 on IIT Bombay Hindi-English parallel text.",
      "Used Semantic Textual Similarity (STS) and BLEU to assess translation quality.",
      "Coordinated team implementation and analysis of translation errors and evaluation results.",
    ],
    stack: ["Python", "IndicTrans2", "BLEU", "STS", "NLP"],
    logo: "/logos/iiit-dharwad.png",
  },
  {
    role: "AI/ML Developer (Freelance)",
    company: "Upwork",
    location: "Remote",
    period: "Jan 2023 – Dec 2024",
    summary:
      "Delivered freelance AI/ML solutions spanning computer vision automation and data-driven decision support.",
    bullets: [
      "Built object-detection pipelines for logo, brand, and payment-page identification using PyTorch and TensorFlow.",
      "Developed Python market-signal automation prototypes with real-time ingestion and alerting logic.",
      "Packaged reproducible client deliverables with documentation, configurable pipelines, and deployment guidance.",
    ],
    stack: ["PyTorch", "TensorFlow", "OpenCV", "Python"],
    logo: "/logos/upwork-log.png",
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  highlights: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  links: { label: string; href: string }[];
  featured?: boolean;
  category: "AI / ML" | "Full-Stack" | "Mobile" | "Research" | "Data Science";
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
  /** Real architecture figure, shown in the dialog instead of the ASCII fallback. */
  architectureImage?: string;
  architectureWidth?: number;
  architectureHeight?: number;
  /** True when the figure is drawn on white (a paper extract) and needs a light
   *  plate behind it. Figures drawn for this site are already dark. */
  architectureOnWhite?: boolean;
  accentHue: number;
};

export const projects: Project[] = [
  {
    slug: "violence-detection",
    title: "Weakly-Supervised Violence Event Detection and Temporal Localization",
    subtitle: "Weakly supervised video · VideoMAE-B · UCF-Crime",
    problem:
      "Frame-level violence annotations are prohibitively expensive, so detectors have to learn from video-level tags alone — and most reported numbers come from a single seed on a single dataset, which hides how brittle they are.",
    solution:
      "Built a weakly supervised pipeline on frozen VideoMAE-B features with RTFM-style multiple-instance learning, then measured it across three seeds and transferred one checkpoint to three unseen datasets with no retraining.",
    highlights: [
      "0.922 mean AUC on the UCF-Crime violence subset across three seeds (s.d. 0.010).",
      "Single-checkpoint transfer reached 0.836 AUC on XD-Violence and 0.862 on RWF-2000 without retraining.",
      "ShanghaiTech exposed a domain-shift failure at 0.371 AUC, which bounds what the model can claim.",
    ],
    stack: ["Python", "PyTorch", "OpenCV", "NumPy", "Pandas"],
    metrics: [
      { label: "UCF-Crime AUC", value: "0.922" },
      { label: "3-seed s.d.", value: "± 0.010" },
      { label: "RWF-2000", value: "0.862" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Chava-Sai/frozen-videomae-weakly-supervised",
      },
    ],
    featured: true,
    category: "AI / ML",
    accentHue: 265,
    image: "/projects/ivc.png",
  },
  {
    slug: "codemix-rag",
    title: "Faithful but Wrong — Silent Failure in Code-Mixed RAG",
    subtitle: "Romanized code-mixed retrieval · ta · te · hi · 421 validated queries",
    problem:
      "Hundreds of millions of people type their own language in Latin script, mixing in English, and retrieval-augmented generation handles it badly. Worse, the faithfulness metrics production systems watch cannot see the damage: they score an answer against the passages that were retrieved, which says nothing about whether the right passages were retrieved at all.",
    solution:
      "Built a 421-query testbed in Tamil, Telugu and Hindi with every romanized query validated by a native speaker, then measured what romanization costs end to end — retrieval, answer correctness, and both lexical groundedness and NLI faithfulness — across dense encoders and BM25, and tested rule-based transliteration, LLM rewriting and reciprocal rank fusion as mitigations.",
    highlights: [
      "Romanizing a query costs more than asking it in a different language altogether.",
      "Answer correctness falls 21.6 points while lexical groundedness does not move at all.",
      "NLI faithfulness is three to five times less sensitive to the same intervention.",
      "421/421 rows human-validated at 96.4% annotator agreement.",
    ],
    stack: ["Python", "PyTorch", "Hugging Face", "RAG", "BM25", "Transformers"],
    metrics: [
      { label: "Correctness drop", value: "21.6 pts" },
      { label: "Human agreement", value: "96.4%" },
      { label: "Faithfulness lag", value: "3–5×" },
    ],
    links: [],
    category: "Research",
    accentHue: 0,
    image: "/projects/codemix-rag.svg",
    architectureImage: "/projects/codemix-rag-architecture.png",
    architectureWidth: 2400,
    architectureHeight: 840,
    architectureOnWhite: true,
  },
  {
    slug: "rag-faithfulness",
    title: "Evaluating Faithfulness and Attribution in RAG Systems",
    subtitle: "NLI-grounded evaluation · NQ · ASQA · FEVER · five ablations",
    problem:
      "A retrieval-augmented system can answer correctly while ignoring everything it retrieved, falling back on parametric memory — and the faithfulness metrics meant to catch that are themselves barely validated.",
    solution:
      "Built an NLI-grounded evaluation pipeline that splits each answer into claims and scores entailment against the retrieved passages, then ran five ablations across retrievers, generators, prompt styles, top-k and adversarial passages, publishing the limitations of each measure alongside its numbers.",
    highlights: [
      "Faithfulness is low throughout: 0.089 plain, 0.100 grounded, 0.068 with chain-of-thought — so grounded prompting helps 12% and CoT hurts 24%.",
      "Inserting random FEVER distractors more than doubles reported support, 0.086 to 0.205 — a property of the metric, not robustness.",
      "NLI scores and manual labels disagree (κ = −0.18), from one annotator over 50 examples, reported as exploratory.",
      "Limitations stated with the results: attribution precision is currently equivalent to the faithfulness score, and RFG's sign is not causal evidence.",
    ],
    stack: ["Python", "PyTorch", "Hugging Face", "RAG", "BM25", "FAISS", "Transformers"],
    metrics: [
      { label: "Plain faithfulness", value: "0.089" },
      { label: "Grounded vs plain", value: "+12%" },
      { label: "CoT vs plain", value: "−24%" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Chava-Sai/Evaluating-Faithfulness-and-Attribution-in-Retrieval-Augmented-Generation-Systems",
      },
    ],
    category: "Research",
    accentHue: 290,
    image: "/projects/rag-faithfulness.svg",
    architectureImage: "/projects/rag-faithfulness-architecture.svg",
    architectureWidth: 2000,
    architectureHeight: 1000,
  },
  {
    slug: "parksure",
    title: "ParkSure — Read the Whole Pole, Know If You Can Park",
    subtitle: "Android · Kotlin · Jetpack Compose · Gemini · on-device first",
    problem:
      "A driver at a pole with four signs — a two-hour limit, Tuesday street cleaning, a resident permit window, a tow warning — has about ten seconds to work out whether they will be ticketed, and getting it wrong costs the car.",
    solution:
      "Gemini only reads: it turns one photograph into structured JSON describing the signs. A pure-Kotlin rule engine with no Android dependencies then decides what that means right now — stacked signs, opposing arrows, midnight crossings, week-of-month cleaning, seasons, holidays, permits and daylight saving — because models read well and do date arithmetic badly, and that split makes the hard half testable with no network, phone or API key.",
    highlights: [
      "0 false 'allowed' across 34 hand-labelled sign poles, with 31/31 decisive verdicts correct.",
      "The benchmark's headline metric is false-allowed rather than accuracy, because the two errors do not cost the same.",
      "Measuring the offline path showed it refused parking on 11 of 36 legal kerbs — a phone reads words, not arrows — so it now shows the rules it read and gives no verdict.",
      "Boston's 6,955 meters and 8,422 road fragments ship as offline assets; 287 instrumented tests plus the full unit suite.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Gemini", "Room", "CameraX", "Hilt", "ML Kit"],
    metrics: [
      { label: "False allowed", value: "0" },
      { label: "Decisive verdicts", value: "31/31" },
      { label: "Instrumented tests", value: "287" },
    ],
    links: [],
    category: "Mobile",
    accentHue: 95,
    image: "/projects/parksure.png",
    architectureImage: "/projects/parksure-architecture.svg",
    architectureWidth: 2000,
    architectureHeight: 1040,
  },
  {
    slug: "hatelens",
    title: "HateLens — Hierarchical Tamil Hate-Speech Detection",
    subtitle: "DravidianCodeMix 2026 · 1st of 9 ranked teams",
    problem:
      "Tamil code-mixed hate speech is labelled across five hierarchy levels, and the rare classes at the deeper levels collapse under a single flat classifier.",
    solution:
      "Combined fine-tuned MuRIL and XLM-R encoders with QLoRA-adapted 7B models, using factorized classification heads, prior-based calibration and per-level ensembles to hold up on the sparse classes.",
    highlights: [
      "Ranked 1st of 9 ranked teams in DravidianCodeMix 2026 Subtask 1 (Tamil).",
      "0.4603 official-test mean macro-F1 across five hierarchy levels.",
      "Working notes submitted to DravidianCodeMix @ FIRE 2026 and currently under review.",
    ],
    stack: ["Python", "PyTorch", "Hugging Face", "QLoRA", "XLM-R"],
    metrics: [
      { label: "Leaderboard", value: "1st / 9" },
      { label: "Mean macro-F1", value: "0.4603" },
      { label: "Hierarchy levels", value: "5" },
    ],
    links: [
      {
        label: "Competition",
        href: "https://www.codabench.org/competitions/15232/",
      },
    ],
    category: "Research",
    accentHue: 150,
    image: "/projects/hatelens.svg",
  },
  {
    slug: "auto-grader",
    title: "AI Auto Grader — Automated Assignment Grading with LLMs",
    subtitle: "Multimodal RAG · OCR + vision · three LLM providers",
    problem:
      "Grading mixed-format submissions by hand is slow and inconsistent, and a naive LLM grader drifts badly from the instructor's own marks.",
    solution:
      "Built a full-stack grading system using OCR and vision extraction, ChromaDB lecture retrieval, and OpenAI, Claude and Gemini models, then calibrated it against real instructor marks.",
    highlights: [
      "Processes real PDF, PPTX and XLSX submissions in about 3 minutes each, excluding instructor review.",
      "Runs at roughly $0.03 per submission across three LLM providers.",
      "Calibration reduced the observed AI–instructor grading gap from 14 points to 2.",
    ],
    stack: ["Python", "Flask", "ChromaDB", "RAG", "OpenAI", "Gemini"],
    metrics: [
      { label: "Per submission", value: "~3 min" },
      { label: "Unit cost", value: "$0.03" },
      { label: "Grading gap", value: "14 → 2" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/BU-Spark/ml-bu-autograder" }],
    category: "AI / ML",
    accentHue: 210,
    image: "/projects/AI_Auto_Grader.png",
  },
  {
    slug: "sidewalk-validator",
    title: "Sidewalk Accessibility Validator",
    subtitle: "ADA compliance · GeoJSON audits · PyTorch + Llama advisor",
    problem:
      "Civic teams need to find ADA sidewalk violations across a whole city, but manual survey does not scale and raw geometry alone misses context.",
    solution:
      "Paired a rule-based GeoJSON audit engine with a PyTorch + Llama vision advisor so the system both detects issues and explains what to do about them, location by location.",
    highlights: [
      "Prize winner at BU Civics Hack 2026 for Cyvl's civic accessibility problem statement.",
      "Rule-based GeoJSON audits flag geometry violations across the sidewalk network.",
      "Vision advisor generates actionable, location-aware recommendations for civic teams.",
    ],
    stack: ["FastAPI", "React", "Vite", "PyTorch", "Llama"],
    metrics: [
      { label: "Rule engine", value: "GeoJSON" },
      { label: "Advisor", value: "Llama" },
      { label: "Hackathon", value: "Winner" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Chava-Sai/Sidewalk-Acessibility-Validator-Cyvl",
      },
    ],
    category: "Full-Stack",
    accentHue: 160,
    image: "/projects/sidewalk.png",
  },
  {
    slug: "transit-equity",
    title: "Boston Transit Equity Intelligence",
    subtitle: "MBTA ridership · reliability · demographic signals",
    problem:
      "Service gaps in a transit network fall unevenly across neighbourhoods, and headline reliability numbers hide which routes carry the cost.",
    solution:
      "Built an analytics pipeline joining MBTA ridership, reliability and demographic signals, then used clustering and predictive modelling to surface route-level risk and explain the main delay drivers.",
    highlights: [
      "Joined ridership, reliability and demographic signals into a single route-level view.",
      "Clustering surfaced groups of routes carrying disproportionate service risk.",
      "Explainable modelling identified the dominant delay drivers for planning use.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
    metrics: [
      { label: "Source", value: "MBTA" },
      { label: "Method", value: "Clustering" },
      { label: "Output", value: "Route risk" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Chava-Sai/Boston-Bus-Equity-CS506-Final-Project",
      },
      { label: "Presentation", href: "https://youtu.be/rE_8_-GRwgw" },
    ],
    category: "Data Science",
    accentHue: 35,
    image: "/projects/boston_bus.png",
  },
  {
    slug: "fakehate",
    title: "FakeHate Multitask Detection",
    subtitle: "Multitask deep learning · multilingual · cluster features",
    problem:
      "Fake narratives and the hateful reactions they provoke are usually modelled separately, which throws away the signal each task carries for the other.",
    solution:
      "Built a multitask system over transliteration, translation and transformer embeddings, with cluster-based feature engineering to shore up the weaker classes.",
    highlights: [
      "Multitask architecture models fake-news and hate-speech detection jointly.",
      "Transliteration and translation extend coverage across multilingual inputs.",
      "Cluster-based features improved class-wise robustness and F1 across both tasks.",
    ],
    stack: ["Python", "PyTorch", "TensorFlow", "NLP", "Scikit-learn"],
    metrics: [
      { label: "Architecture", value: "Multitask" },
      { label: "Coverage", value: "Multilingual" },
      { label: "Gain", value: "Class-wise F1" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Chava-Sai/Fake-Hate-Investigating-the-role-of-fake-narratives-in-spreading-hateful-reactions",
      },
    ],
    category: "Research",
    accentHue: 330,
    image: "/projects/fakehate.svg",
  },
  {
    slug: "chat-buddy",
    title: "Chat Buddy",
    subtitle: "Flutter · Firebase · ZegoCloud video",
    problem:
      "A chat app is only useful if presence, delivery and calling all hold up on a real device with a flaky connection.",
    solution:
      "Built a cross-platform Flutter client on Firebase auth and realtime sync, with ZegoCloud video calling layered on top.",
    highlights: [
      "Firebase authentication and realtime sync keep presence and delivery reliable.",
      "ZegoCloud integration adds one-to-one video calling.",
      "Responsive chat UI built once and shipped to both platforms.",
    ],
    stack: ["Flutter", "Firebase", "Python", "Zego Cloud"],
    metrics: [
      { label: "Platform", value: "Flutter" },
      { label: "Backend", value: "Firebase" },
      { label: "Calling", value: "ZegoCloud" },
    ],
    links: [{ label: "GitHub", href: "https://github.com/Chava-Sai/Chat-Buddy" }],
    category: "Mobile",
    accentHue: 190,
    image: "/projects/chat_buddy.png",
  },
];

export const research = [
  {
    title:
      "ByteBreaker@DravidianLangTech 2026: XLM-RoBERTa Large with Sliding-Window Chunking and Top-K Mean Pooling for Writing Style Classification",
    venue: "DravidianLangTech workshop · ACL 2026",
    year: "2026",
    doi: "2026.dravidianlangtech-1.19",
    href: "https://aclanthology.org/2026.dravidianlangtech-1.19/",
    abstract:
      "Builds a writing style classifier on XLM-RoBERTa Large, using sliding-window chunking to handle long-form documents and top-k mean pooling to keep only the most informative chunks for the final document-level prediction.",
    tags: ["NLP", "XLM-RoBERTa", "Document Classification", "Indic Languages"],
  },
  {
    title:
      "HateLens@DravidianCodeMix 2026: Hierarchical Hate and Hope Speech Detection in Dravidian Languages",
    venue: "Working notes · DravidianCodeMix shared task, FIRE 2026",
    year: "2026",
    doi: "Under review",
    href: "https://www.codabench.org/competitions/15232/",
    abstract:
      "Ranked 1st of 9 ranked teams in Subtask 1 for Tamil with 0.4603 mean macro-F1 across five hierarchy levels, combining fine-tuned MuRIL and XLM-R encoders with QLoRA-adapted 7B models, factorized heads and prior-based calibration.",
    tags: ["Shared Task", "QLoRA", "Code-Mixed", "Tamil"],
  },
  {
    title:
      "IIITDWD_SVC@DravidianLangTech 2024: Hate Speech Detection in Telugu-English Code-Mixed Text",
    venue: "DravidianLangTech workshop · EACL 2024",
    year: "2024",
    doi: "2024.dravidianlangtech-1.19",
    href: "https://aclanthology.org/2024.dravidianlangtech-1.19/",
    abstract:
      "A transformer-based hate speech detection system for Telugu-English code-mixed social media text, submitted to the DravidianLangTech shared task at EACL 2024 and published in the ACL Anthology proceedings.",
    tags: ["Hate Speech", "Code-Mixed", "Telugu", "Transformers"],
  },
] as const;

export const inFlight = [
  {
    label: "Code-mixed retrieval study",
    detail: "Romanization penalty + correctness/faithfulness decoupling",
    status: "Drafting",
  },
  {
    label: "SemEval 2027 · Agent Risk",
    detail: "Shared task participation",
    status: "Planned",
  },
  {
    label: "AAAI 2027 workshop",
    detail: "Submission in preparation",
    status: "In prep",
  },
  {
    label: "HateLens working notes",
    detail: "DravidianCodeMix @ FIRE 2026",
    status: "Under review",
  },
] as const;

export const currentlyExploring = [
  "Romanization penalty in multilingual retrieval — code-mixed IR",
  "Correctness vs faithfulness decoupling in RAG evaluation",
  "Agent risk — SemEval 2027 shared task",
  "AAAI 2027 workshop submission",
  "Weakly supervised video understanding",
  "QLoRA-adapted LLMs for low-resource languages",
] as const;

export const awards = [
  {
    title: "CC-MMD 2026 Grand Challenge @ ICMI 2026",
    detail:
      "Team ByteBreaker placed 2nd (Tamil), 3rd (Chinese) and 2nd (English) for Cross-Cultural Misogynistic Meme Detection, fine-tuning Qwen2.5-VL-7B-Instruct with LoRA and a multi-head MLP classifier.",
    href: "https://lnkd.in/eEWNtWPQ",
    logo: "/logos/acl.png",
  },
  {
    title: "Winner — BU MedAI Hackathon (Team MedMax)",
    detail:
      "Built a non-invasive ATI risk model on 6,592 SomaScan proteins plus clinical covariates from the Boston Kidney Biopsy Cohort, reaching a winning log loss of 0.427.",
    href: "https://github.com/vkola-lab/medaihack/tree/main",
    logo: "/logos/boston-university.png",
  },
  {
    title: "Prize Winner — BU Civics Hack 2026",
    detail:
      "Won for the Sidewalk Accessibility Validator built for Cyvl's civic accessibility problem statement.",
    href: "https://github.com/Chava-Sai/Sidewalk-Acessibility-Validator-Cyvl",
    logo: "/logos/BU-spark.png",
  },
] as const;

export const pinnedRepos = [
  {
    name: "frozen-videomae-weakly-supervised",
    description: "Weakly supervised violence detection on frozen VideoMAE-B features",
    language: "Python",
    hue: 265,
    href: "https://github.com/Chava-Sai/frozen-videomae-weakly-supervised",
  },
  {
    name: "HateLens-DravidianCodeMix-2026",
    description: "1st of 9 — hierarchical Tamil hate-speech detection",
    language: "Python",
    hue: 150,
    href: "https://github.com/Chava-Sai/HateLens-DravidianCodeMix-2026",
  },
  {
    name: "Sidewalk-Acessibility-Validator-Cyvl",
    description: "ADA compliance auditing with a vision advisor",
    language: "Python",
    hue: 160,
    href: "https://github.com/Chava-Sai/Sidewalk-Acessibility-Validator-Cyvl",
  },
  {
    name: "Chat-Buddy",
    description: "Flutter messaging app with Firebase and ZegoCloud video",
    language: "Dart",
    hue: 190,
    href: "https://github.com/Chava-Sai/Chat-Buddy",
  },
] as const;

export const githubStats = {
  username: "Chava-Sai",
  metrics: [
    { label: "Public repos", value: "20+" },
    { label: "Languages", value: "Python · TS · Dart" },
    { label: "Focus", value: "AI · NLP · Vision" },
    { label: "Open to", value: "Research · Internships" },
  ],
} as const;

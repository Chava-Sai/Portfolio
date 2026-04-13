/* Personal portfolio content */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 1500
};

const illustration = {
  animated: true
};

const greeting = {
  username: "SRINIVASA SAI CHAVA",
  title: "Hi, I'm Sai",
  subTitle: emoji(
    "M.S. Artificial Intelligence student at Boston University with hands-on experience building production-focused AI systems across ML/DL, NLP, Computer Vision, RAG, and full-stack deployment. I enjoy translating research into practical products that solve real-world problems in accessibility, trust, and social impact."
  ),
  terminal: {
    display: true,
    title: "profile.txt — bash",
    command: "cat profile.txt",
    lines: [
      "M.S. Artificial Intelligence student at Boston University",
      "Building production-focused AI systems across ML/DL, NLP, Computer Vision, and RAG",
      "Delivering end-to-end full-stack AI deployment from research to production",
      "Focused on practical impact in accessibility, trust, and social good"
    ],
    followUpCommand: 'echo "Translating research into real-world products"',
    followUpOutput: "Translating research into real-world products"
  },
  tagline: "Multimodal ML  ·  NLP  ·  Agentic AI   ·  RAG",
  profileImage: require("./assets/images/profile/Profile.png"),
  greetingAnimation: "landingPerson",
  resumeLink: "resume",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Chava-Sai",
  linkedin: "https://www.linkedin.com/in/chava-srinivasa-sai/",
  gmail: "srinivassaichava@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle:
    "ML/DL | NLP | COMPUTER VISION | RAG | PYTHON | AWS | FLUTTER/FIREBASE",
  skills: [
    emoji(
      "⚡ Build end-to-end AI products from data preparation and modeling to deployment, evaluation, and iteration"
    ),
    emoji(
      "⚡ Design and train ML/DL systems for NLP and computer vision using PyTorch, TensorFlow, Hugging Face, and modern transformer workflows"
    ),
    emoji(
      "⚡ Develop explainable AI pipelines with QLoRA + RAG for multilingual hate-speech and fake-news analysis"
    ),
    emoji(
      "⚡ Build full-stack AI applications with FastAPI, React/Vite, Flutter, Firebase, and cloud-ready architecture"
    ),
    emoji(
      "⚡ Apply data science to public-interest problems like mobility equity, accessibility, and responsible AI decision support"
    )
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "NLP",
      fontAwesomeClassname: "fas fa-language"
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "Data Science",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Boston University",
      logo: require("./assets/images/logos/boston-university.png"),
      subHeader: "Master of Science in Artificial Intelligence",
      duration: "September 2025 - Expected December 2026",
      desc: "Graduate program focused on applied machine learning, reinforcement learning, and AI systems engineering.",
      descBullets: [
        "Coursework: Machine Learning, Reinforcement Learning, Data Science Tools, AI Systems"
      ]
    },
    {
      schoolName: "IIIT Dharwad",
      logo: require("./assets/images/logos/iiit-dharwad.png"),
      subHeader: "Bachelor of Technology in Data Science and AI",
      duration: "November 2021 - May 2025",
      desc: "Focused on multilingual NLP, computer vision, and applied machine learning.",
      descBullets: ["Graduated with CGPA 7.82/10"]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  proficiencyAnimation: "build",
  skillSnapshot: {
    title: "Skill Snapshot",
    subTitle: "Top strengths I apply in production and research",
    highlights: [
      "ML / Deep Learning",
      "NLP",
      "Computer Vision",
      "RAG + LLM Systems"
    ],
    latestUpdates: [
      {
        date: "Apr 2026",
        title:
          "Weakly-Supervised Violence Event Detection and Temporal Localization",
        highlight:
          "Built a full UCF-Crime pipeline with TRN/boundary refinement and achieved zero-shot XD-Violence transfer (AUC 0.8357, AP 0.8847)."
      },
      {
        date: "Mar 2026",
        title: "Building AI Auto Grader (CS581 x Spark Collaboration)",
        highlight:
          "Developing a modular multimodal grading pipeline with extract/describe/compare modes across PDF, Excel, HTML, OCR, and vision workflows.",
        cta: "GitHub Repo",
        url: "https://github.com/Chava-Sai/Final-AI-Auto_Grader"
      },
      {
        date: "Mar 2026",
        title: "In Progress: Telugu LLM Research Publication",
        highlight:
          "Working on a new publication focused on Telugu LLM evaluation and research insights.",
        cta: "View Draft PDF",
        url: `${process.env.PUBLIC_URL}/papers/Final_LLM_telugu.pdf`
      },
      {
        date: "Feb 2026",
        title: "Prize Winner, BU Civics Hack 2026",
        highlight:
          "Built Sidewalk Accessibility Validator for civic ADA compliance with AI guidance."
      },
      {
        date: "Jan 2026",
        title: "Journal Publication",
        highlight:
          "Published ML-based risk scoring research in the Journal of Propulsion Technology."
      },
      {
        date: "Dec 2025",
        title: "Boston Transit Equity Intelligence",
        highlight:
          "Completed MBTA service-equity modeling with predictive analysis and explainable insights."
      },
      {
        date: "Nov 2024",
        title: "Explainable Hate Speech Detection",
        highlight:
          "Delivered multilingual QLoRA + RAG system with improved explanation quality."
      }
    ]
  },
  experience: [
    {
      Stack: "Machine Learning / Deep Learning",
      progressPercentage: "92%"
    },
    {
      Stack: "Natural Language Processing",
      progressPercentage: "90%"
    },
    {
      Stack: "Computer Vision",
      progressPercentage: "84%"
    },
    {
      Stack: "AI Systems (RAG, QLoRA, LLM Workflows)",
      progressPercentage: "88%"
    },
    {
      Stack: "Python",
      progressPercentage: "93%"
    },
    {
      Stack: "AWS / Cloud",
      progressPercentage: "78%"
    },
    {
      Stack: "Flutter",
      progressPercentage: "82%"
    },
    {
      Stack: "Firebase",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Machine Learning and Flutter Trainer (Contract)",
      company: "Datavalley.ai",
      companylogo: require("./assets/images/logos/Datavalley Logo.png"),
      date: "Jan 2025 - Jul 2025",
      desc: "Led contract ML and Flutter training programs for partner colleges, focused on deployable, industry-style project delivery.",
      descBullets: [
        "Designed hands-on workshop tracks and lab modules aligned to real production workflows.",
        "Built and demonstrated a Flutter app with role-based auth, ZegoCloud video, and UPI payments.",
        "Mentored teams on architecture, debugging, testing, and end-to-end release readiness."
      ]
    },
    {
      role: "Team Lead, AI-Driven Text Analytics",
      company: "IIIT Dharwad",
      companylogo: require("./assets/images/logos/iiit-dharwad.png"),
      date: "Aug 2023 - Jul 2024",
      desc: "Led AI-driven text analytics research on Indian-language machine translation quality and semantic reliability.",
      descBullets: [
        "Built evaluation pipelines comparing Google Translate and IndicTrans2 on IIT Bombay multilingual datasets.",
        "Implemented Semantic Textual Similarity (STS) workflows to quantify semantic preservation across languages.",
        "Reported stronger nuance retention and semantic fidelity for IndicTrans2 in low-resource settings."
      ]
    },
    {
      role: "AI/ML Developer (Freelance)",
      company: "Upwork",
      companylogo: require("./assets/images/logos/upwork-log.png"),
      date: "Jan 2023 - Dec 2024",
      desc: "Delivered freelance AI/ML solutions spanning computer vision automation and data-driven decision support.",
      descBullets: [
        "Built object-detection pipelines for logo, brand, and payment-page identification using PyTorch and TensorFlow.",
        "Developed Python market-signal automation prototypes with real-time ingestion and alerting logic.",
        "Packaged reproducible client deliverables with documentation, configurable pipelines, and deployment guidance."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Featured Projects",
  subtitle:
    "Selected projects across AI engineering, accessibility, multilingual NLP, and public-interest data science",
  projects: [
    {
      projectName:
        "Weakly-Supervised Violence Event Detection and Temporal Localization",
      projectDesc:
        "Built a weakly supervised surveillance-video pipeline with frozen I3D features, RTFM-style MIL, top-k pseudo-label classification, temporal refinement, and boundary-aware localization. Completed UCF-Crime ablations and achieved zero-shot XD-Violence transfer with AUC 0.8357 and AP 0.8847 (90.1% UCF AUC retention).",
      techStack: ["Python", "PyTorch", "OpenCV", "NumPy", "Pandas"]
    },
    {
      image: require("./assets/images/project-covers/AI_Auto_Grader.png"),
      projectName: "AI Auto Grader — Automated Assignment Grading with LLMs",
      projectDesc:
        "Built a full-stack grading system for BU MET CS581 that evaluates PDF/DOCX/PPTX/XLSX submissions using GPT-4o-mini, Claude, and Gemini with OCR/vision extraction and ChromaDB-based lecture RAG. Added rubric-fallback parsing, grade calibration, and batch Excel grading, reducing the AI-professor gap from -14 to -2 at about $0.03 per student.",
      techStack: ["Python", "FastAPI", "LangChain", "RAG", "OpenAI", "Gemini"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Chava-Sai/Final-AI-Auto_Grader"
        }
      ]
    },
    {
      image: require("./assets/images/project-covers/sidewalk.png"),
      projectName: "Sidewalk Accessibility Validator",
      projectDesc:
        "Built a prize-winning ADA compliance platform (BU Civics Hack 2026) combining rule-based GeoJSON sidewalk audits with a PyTorch + Llama vision advisor. The system detects accessibility issues and generates actionable, location-aware recommendations for civic teams.",
      techStack: ["FastAPI", "React", "Vite", "PyTorch", "Llama"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Chava-Sai/Sidewalk-Acessibility-Validator-Cyvl"
        }
      ]
    },
    {
      image: require("./assets/images/project-covers/boston_bus.png"),
      projectName: "Boston Transit Equity Intelligence",
      projectDesc:
        "Built an MBTA transit equity analytics pipeline combining ridership, reliability, and demographic signals to identify service gaps. Developed clustering and predictive modeling workflows to surface route-level risks and explain key delay drivers for planning.",
      techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Chava-Sai/Boston-Bus-Equity-CS506-Final-Project"
        },
        {
          name: "Presentation",
          url: "https://youtu.be/rE_8_-GRwgw"
        }
      ]
    },
    {
      image: require("./assets/images/project-covers/explainable_hate_speech.png"),
      projectName: "Explainable Hate Speech Detection with RAG",
      projectDesc:
        "Engineered a multilingual QLoRA + RAG pipeline for hate-speech and fake-news detection with grounded, explainable outputs. Combined transliteration, transformer embeddings, and retrieval to improve context relevance, reduce hallucinations, and strengthen macro-F1 performance.",
      techStack: ["Python", "PyTorch", "NLP", "LangChain", "RAG"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Chava-Sai/Explainable-Hate-Speech-Detection-using-Generative-AI"
        }
      ]
    },
    {
      image: require("./assets/images/project-covers/fake_hate_multitask.png"),
      projectName: "FakeHate Multitask Detection",
      projectDesc:
        "Developed a multitask deep learning system for multilingual fake-news and hate-speech detection using transliteration, translation, and transformer embeddings. Added cluster-based feature engineering to improve class-wise robustness and deliver strong F1 gains across tasks.",
      techStack: ["Python", "PyTorch", "TensorFlow", "NLP", "Scikit-learn"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Chava-Sai/Fake-Hate-Investigating-the-role-of-fake-narratives-in-spreading-hateful-reactions"
        }
      ]
    },
    {
      image: require("./assets/images/project-covers/chat_buddy.png"),
      projectName: "Chat Buddy",
      projectDesc:
        "Built a production-style Flutter communication app with role-based access, real-time group messaging, and integrated voice/video calling via Firebase and Zego Cloud. Implemented secure authentication flows and session management for reliable low-latency collaboration.",
      techStack: ["Flutter", "Firebase", "Python", "Zego Cloud"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Chava-Sai/Chat-Buddy"
        }
      ]
    }
  ],
  display: true
};

const publicationsSection = {
  title: "Publications",
  subtitle:
    "Research contributions in NLP, multimodal AI, and applied machine learning",
  display: true,
  publications: [
    {
      venue: "EACL 2024",
      venueType: "conference",
      venueColor: "#2563eb",
      title: "Hate Speech Detection in Telugu-English Code-Mixed Text",
      image: require("./assets/images/dravidian2024.png"),
      imageAlt: "ACL Anthology — DravidianLangTech @ EACL 2024",
      bullets: [
        "Developed a transformer-based hate speech detection system for Telugu-English code-mixed social media text",
        "Submitted as Team IIITDWD_SVC to the DravidianLangTech shared task at EACL 2024",
        "Published in the ACL Anthology proceedings — one of the top NLP venues globally"
      ],
      links: [
        {
          name: "Paper",
          url: "https://aclanthology.org/2024.dravidianlangtech-1.19/",
          icon: "fas fa-file-alt"
        },
        {
          name: "Code",
          url: "https://github.com/Chava-Sai/IIITDWD_SVC-DravidianLangTech-2024",
          icon: "fab fa-github"
        }
      ]
    },
    {
      venue: "JPT 2026",
      venueType: "journal",
      venueColor: "#d97706",
      title:
        "Impact of IDIOT Syndrome: ML-Based Risk Scoring for Health Anxiety",
      image: require("./assets/images/logos/Journal.png"),
      imageAlt: "Journal of Propulsion Technology",
      bullets: [
        "Designed an ML-based clinical risk scoring pipeline to assess health anxiety severity (IDIOT Syndrome)",
        "Applied classification and regression techniques for patient-level risk stratification",
        "Published in Tuijin Jishu / Journal of Propulsion Technology (peer-reviewed)"
      ],
      links: [
        {
          name: "Journal",
          url: "https://www.propulsiontechjournal.com/index.php/journal/article/view/10395",
          icon: "fas fa-external-link-alt"
        }
      ]
    }
  ]
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Awards and certifications reflecting hands-on technical depth",
  achievementsCards: [
    {
      title: "Winner - BU MedAI Hackathon (Team MedMax)",
      subtitle:
        "Built a non-invasive ATI risk model using 6,592 SomaScan proteins + clinical covariates from the Boston Kidney Biopsy Cohort. Trained a stacking ensemble with Platt calibration and achieved winning log loss 0.427 at BU MedAI Hackathon.",
      image: require("./assets/images/logos/boston-university.png"),
      imageAlt: "BU MedAI Hackathon Winner",
      footerLink: [
        {
          name: "Hackathon Repo",
          url: "https://github.com/vkola-lab/medaihack/tree/main"
        }
      ]
    },
    {
      title: "Prize Winner - BU Civics Hack 2026",
      subtitle:
        "Won for the Sidewalk Accessibility Validator project developed for Cyvl's civic accessibility problem statement.",
      image: require("./assets/images/logos/BU-spark.png"),
      imageAlt: "BU Civics Hack Prize",
      footerLink: [
        {
          name: "Project Repo",
          url: "https://github.com/Chava-Sai/Sidewalk-Acessibility-Validator-Cyvl"
        }
      ]
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      subtitle:
        "Built and trained supervised ML models for regression and binary classification tasks including linear and logistic regression.",
      image: require("./assets/images/logos/courseera.png"),
      imageAlt: "Machine Learning Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/VZQZWHMFQLRB"
        }
      ]
    },
    {
      title: "Deep Learning with PyTorch : Generative Adversarial Network",
      subtitle:
        "Implemented discriminator and generator architectures, and trained GAN models to synthesize image outputs from MNIST data.",
      image: require("./assets/images/logos/deeplearning.png"),
      imageAlt: "Machine Learning Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/NCVCS6FMFVGF"
        }
      ]
    },

    {
      title: "Advanced Learning Algorithms",
      subtitle:
        "Built and trained TensorFlow neural networks for multi-class classification and practical model optimization.",
      image: require("./assets/images/logos/courseera.png"),
      imageAlt: "Machine Learning Certification",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/BRN7G3RGRUJS"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "Technical writing and notes",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("Community talks and workshops"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Podcast episodes and interviews",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or say hello.",
  number: "+1 (857) 498-5012",
  email_address: "srinivassaichava@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  publicationsSection,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

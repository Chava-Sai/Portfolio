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
    "AI/ML developer and researcher; B.Tech. in Data Science and AI from IIIT Dharwad with hands-on experience building production-focused AI systems across ML/DL, NLP, Computer Vision, RAG, and full-stack deployment. I enjoy translating research into practical products that solve real-world problems in accessibility, trust, and social impact."
  ),
  terminal: {
    display: true,
    title: "profile.txt — bash",
    command: "cat profile.txt",
    lines: [
      "AI/ML developer and researcher; B.Tech. in Data Science and AI from IIIT Dharwad",
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
      schoolName: "IIIT Dharwad",
      logo: require("./assets/images/logos/iiit-dharwad.png"),
      subHeader: "Bachelor of Technology in Data Science and AI",
      duration: "November 2021 - May 2025",
      desc: "Focused on multilingual NLP, computer vision, and applied machine learning.",
      descBullets: ["Graduated with CGPA 7.93/10"]
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
        date: "May 2026",
        title: "Started AI Engineer Internship at American Green Solutions",
        highlight:
          "Joined the AGS Astra platform team as AI Engineer Intern — building RAG pipelines, FastAPI backends, and React/Next.js frontends for solar operations and O&M teams."
      },
      {
        date: "May 2026",
        title:
          "Joint 1st (Tamil), 1st (English), 2nd (Chinese) — CC-MMD 2026 Grand Challenge @ ICMI 2026",
        highlight:
          "ByteBreaker achieved joint 1st in Tamil, 1st in English, and 2nd in Chinese on Task B for Cross-Cultural Misogynistic Meme Detection. Fine-tuned Qwen2.5-VL-7B-Instruct with LoRA + multi-head MLP classifier and cultural context prompting — achieving up to 2.3× above zero-shot baseline.",
        cta: "View on LinkedIn",
        url: "https://drive.google.com/file/d/1-1u3UgpwVu1nD-YuLzXBU_oO4O4LHxdJ/view"
      },
      {
        date: "Apr 2026",
        title:
          "Paper Published: ByteBreaker@DravidianLangTech 2026 (Writing Style Classification)",
        highlight:
          "Accepted paper: 'ByteBreaker@DravidianLangTech 2026: XLM-RoBERTa Large with Sliding-Window Chunking and Top-K Mean Pooling for Writing Style Classification.'",
        cta: "View Paper",
        url: "https://aclanthology.org/2026.dravidianlangtech-1.19/"
      },
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
      role: "AI Engineer Intern",
      company: "American Green Solutions",
      companylogo: require("./assets/images/logos/ags-logo.png"),
      logoClass: "logo-ags",
      date: "May 2026 – Aug 2026",
      desc: "Working within the AGS Astra platform team to design and develop internal AI-powered tools for solar operations and O&M teams.",
      descBullets: [
        "Designing and implementing RAG pipelines for enterprise knowledge retrieval using LangChain, vector databases, and OpenAI LLMs.",
        "Building REST API backends with FastAPI including authentication, role-based access control, and async task processing.",
        "Developing React + Next.js frontends integrated with AI backends and semantic search pipelines."
      ]
    },
    {
      role: "AI Developer and Trainer (Full-time)",
      company: "Datavalley.ai",
      companylogo: require("./assets/images/logos/Datavalley Logo.png"),
      date: "Jan 2025 – Present (break: May–Aug 2026)",
      desc: "Taught deep learning, NLP, agentic AI tools, and Flutter/Firebase app development through hands-on student projects. Took a break for the American Green Solutions internship.",
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
      image: require("./assets/images/project-covers/ivc.png"),
      projectName:
        "Weakly-Supervised Violence Event Detection and Temporal Localization",
      projectDesc:
        "Built a weakly supervised video pipeline with frozen VideoMAE-B features and RTFM-style learning. Mean video-level AUC on the UCF-Crime violence subset was 0.922 across three seeds (s.d. 0.010). A single checkpoint transferred without retraining to XD-Violence (AUC 0.836) and RWF-2000 (0.862); ShanghaiTech exposed a domain-shift failure (0.371).",
      techStack: ["Python", "PyTorch", "OpenCV", "NumPy", "Pandas"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Chava-Sai/frozen-videomae-weakly-supervised.git"
        }
      ]
    },
    {
      image: require("./assets/images/project-covers/AI_Auto_Grader.png"),
      projectName: "AI Auto Grader — Automated Assignment Grading with LLMs",
      projectDesc:
        "Worked on a full-stack assignment-grading system with OCR/vision extraction, ChromaDB retrieval, rubric-based LLM grading, calibration, and batch processing. Instructor review remains part of the workflow.",
      techStack: ["Python", "FastAPI", "LangChain", "RAG", "OpenAI", "Gemini"],
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/BU-Spark/ml-bu-autograder"
        }
      ]
    },
    {
      image: require("./assets/images/project-covers/sidewalk.png"),
      projectName: "Sidewalk Accessibility Validator",
      projectDesc:
        "Built a sidewalk-accessibility audit prototype combining rule-based GeoJSON sidewalk audits with a PyTorch + Llama vision advisor. The system detects accessibility issues and generates actionable, location-aware recommendations for civic teams.",
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
        "Explored multilingual hate-speech and fake-news classification using transliteration, translation, QLoRA fine-tuning, and retrieval. Explanation generation and its evaluation are directions for further work.",
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
        "Developed a multitask deep learning system for multilingual fake-news and hate-speech detection using transliteration, translation, and transformer embeddings. Explored cluster-distance features; evaluation methodology and held-out generalization require further validation.",
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
      venue: "DravidianCodeMix @ FIRE 2026",
      venueType: "conference",
      venueColor: "#2563eb",
      title:
        "HateLens: Hierarchical Hate-Speech Detection for Tamil Code-Mixed Text",
      image: require("./assets/images/dravidian.png"),
      imageAlt: "DravidianCodeMix 2026",
      bullets: [
        "Accepted working-notes paper, DravidianCodeMix shared task at FIRE 2026",
        "Ranked 1st of 9 ranked teams in Subtask 1 (Tamil); official mean macro-F1 0.4603",
        "Designed, implemented, trained, and evaluated the model ensemble"
      ],
      links: [
        {
          label: "Code",
          url: "https://github.com/Chava-Sai/HateLens-DravidianCodeMix-2026",
          icon: "fab fa-github"
        }
      ]
    },
    {
      venue: "DravidianLangTech 2026",
      venueType: "conference",
      venueColor: "#2563eb",
      title:
        "ByteBreaker@DravidianLangTech 2026: XLM-RoBERTa Large with Sliding-Window Chunking and Top-K Mean Pooling for Writing Style Classification",
      image: require("./assets/images/logos/acl.png"),
      imageAlt: "DravidianLangTech 2026",
      bullets: [
        "Published in the Sixth DravidianLangTech Workshop proceedings at ACL 2026 (July 2026)",
        "Built a pipeline using XLM-RoBERTa Large with sliding-window chunking for long-form text handling",
        "Applied top-k mean pooling to capture the most informative chunks for final document-level prediction"
      ],
      links: [
        {
          label: "ACL Anthology",
          url: "https://aclanthology.org/2026.dravidianlangtech-1.19/",
          icon: "fas fa-book-open"
        }
      ]
    },
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
        "Published in the Fourth DravidianLangTech Workshop proceedings at EACL 2024 (March 2024)"
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
        "Impact of Internet Derived Information Obstruction Treatment (IDIOT) Syndrome-a student cohort study",
      image: require("./assets/images/logos/Journal.png"),
      imageAlt: "Journal of Propulsion Technology",
      bullets: [
        "Studied health-related internet searching in a survey of 450 technical students",
        "Implemented classification and regression models for exploratory risk-score prediction",
        "Published in Tuijin Jishu / Journal of Propulsion Technology, 47(01), January 2026"
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
  number: "+91 74164 13438",
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

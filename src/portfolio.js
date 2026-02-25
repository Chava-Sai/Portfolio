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
  username: "Srinivasa Sai Chava",
  title: "Hi, I'm Sai",
  subTitle: emoji(
    "M.S. Artificial Intelligence student at Boston University with hands-on experience building production-focused AI systems across ML/DL, NLP, Computer Vision, RAG, and full-stack deployment. I enjoy translating research into practical products that solve real-world problems in accessibility, trust, and social impact."
  ),
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
      desc: "Delivered contract-based ML and Flutter training programs for partner colleges, with a strong focus on practical implementation and deployment readiness.",
      descBullets: [
        "Conducted hands-on workshops and designed industry-aligned lab modules for student teams.",
        "Built and demoed a production-grade Flutter app with role-based authentication, secure ZegoCloud video, and UPI payment integration.",
        "Mentored teams through end-to-end project delivery, covering architecture, debugging, and release workflows."
      ]
    },
    {
      role: "Team Lead, AI-Driven Text Analytics",
      company: "IIIT Dharwad",
      companylogo: require("./assets/images/logos/iiit-dharwad.png"),
      date: "Aug 2023 - Jul 2024",
      desc: "Led Indian language machine translation evaluation initiatives focused on semantic reliability and language-specific nuance.",
      descBullets: [
        "Implemented comparative evaluation pipelines for Google Translate vs. AI4Bharat IndicTrans2 on IIT Bombay multilingual data.",
        "Designed Semantic Textual Similarity (STS) analysis workflows to quantify semantic preservation.",
        "Demonstrated stronger semantic fidelity for IndicTrans2 on low-resource Indian language scenarios."
      ]
    },
    {
      role: "AI/ML Developer (Freelance)",
      company: "Upwork",
      companylogo: require("./assets/images/logos/upwork-log.png"),
      date: "Jan 2023 - Dec 2024",
      desc: "Delivered freelance AI/ML prototypes spanning computer vision automation and decision-support tooling.",
      descBullets: [
        "Built object-detection pipelines for brand/logo/payment-page identification using TensorFlow and PyTorch.",
        "Developed Python-based market-signal automation prototypes with real-time data ingestion and alert logic."
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
      //image: require("./assets/images/project-covers/sidewalk-validator-cover.svg"),
      projectName: "Sidewalk Accessibility Validator",
      projectDesc:
        "Prize-winning full-stack ADA compliance system (BU Civics Hack 2026) combining rule-based GeoJSON sidewalk audits with a PyTorch + Llama vision advisor to assess accessibility and generate actionable improvements.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Chava-Sai/Sidewalk-Acessibility-Validator-Cyvl"
        }
      ]
    },
    {
      //image: require("./assets/images/project-covers/mbta-equity-cover.svg"),
      projectName: "Boston Transit Equity Intelligence",
      projectDesc:
        "Built a transit reliability and equity analysis pipeline for MBTA routes by combining ridership, operational reliability, and demographic signals with clustering and predictive modeling.",
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
      //image: require("./assets/images/project-covers/rag-explainable-cover.svg"),
      projectName: "Explainable Hate Speech Detection with RAG",
      projectDesc:
        "Engineered a multilingual QLoRA + RAG pipeline for hate-speech and fake-news detection, achieving strong Macro-F1 while improving explanation quality and reducing hallucinations.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Chava-Sai/Explainable-Hate-Speech-Detection-using-Generative-AI"
        }
      ]
    },
    {
      //image: require("./assets/images/project-covers/fakehate-cover.svg"),
      projectName: "FakeHate Multitask Detection",
      projectDesc:
        "Developed a multitask deep learning architecture for multilingual fake-news and hate-speech detection using transliteration, translation, transformer embeddings, and cluster-based feature engineering.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Chava-Sai/Fake-Hate-Investigating-the-role-of-fake-narratives-in-spreading-hateful-reactions"
        }
      ]
    },
    {
      //image: require("./assets/images/project-covers/chatbuddy-cover.svg"),
      projectName: "Chat Buddy",
      projectDesc:
        "Built a production-style Flutter communication app with role-based access, real-time group messaging, and integrated voice/video calling using Firebase and Zego Cloud.",
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

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Publications, awards, and certifications that reflect technical depth and impact",
  achievementsCards: [
    {
      title: "Prize Winner - BU Civics Hack 2026",
      subtitle:
        "Won for the Sidewalk Accessibility Validator project developed for Cyvl's civic accessibility problem statement.",
      image: require("/Users/sai/Documents/Portfolio/src/assets/images/logos/BU-spark.png"),
      imageAlt: "BU Civics Hack Prize",
      footerLink: [
        {
          name: "Project Repo",
          url: "https://github.com/Chava-Sai/Sidewalk-Acessibility-Validator-Cyvl"
        }
      ]
    },
    {
      title: "Tuijin Jishu/Journal of Propulsion Technology",
      subtitle:
        "Published 'Impact of IDIOT Syndrome: ML-Based Risk Scoring for Health Anxiety' in the Journal of Propulsion Technology.",
      image: require("/Users/sai/Documents/Portfolio/src/assets/images/logos/Journal.png"),
      imageAlt: "Journal Publication",
      footerLink: [
        {
          name: "Journal Link",
          url: "https://www.propulsiontechjournal.com/index.php/journal/article/view/10395"
        }
      ]
    },
    {
      title: "DravidianLangTech @ EACL 2024 Publication",
      subtitle:
        "Co-authored paper on hate speech detection in Telugu-English code-mixed text (Team IIITDWD_SVC).",
      image: require("./assets/images/logos/acl.png"),
      imageAlt: "DravidianLangTech Publication",
      footerLink: [
        {
          name: "Publication",
          url: "https://aclanthology.org/2024.dravidianlangtech-1.19/"
        },
        {
          name: "Code",
          url: "https://github.com/Chava-Sai/IIITDWD_SVC-DravidianLangTech-2024"
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
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

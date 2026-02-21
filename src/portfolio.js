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
    "M.S. Artificial Intelligence student at Boston University focused on machine learning, multilingual NLP, and vision-language systems."
  ),
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
  subTitle: "MACHINE LEARNING ENGINEER | NLP | VISION-LANGUAGE AI",
  skills: [
    emoji(
      "⚡ Build explainable AI systems for multilingual NLP, hate-speech detection, and trustworthy content analysis"
    ),
    emoji(
      "⚡ Develop end-to-end machine learning pipelines with PyTorch, TensorFlow, Hugging Face, and FastAPI"
    ),
    emoji(
      "⚡ Apply data science to public-interest problems like transit equity and responsible AI evaluation"
    )
  ],
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
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
      duration: "September 2025 - Present",
      desc: "Specializing in machine learning and AI systems.",
      descBullets: [
        "Coursework: Machine Learning, Reinforcement Learning, Data Science, AI Systems"
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
  experience: [
    {
      Stack: "Machine Learning / NLP",
      progressPercentage: "90%"
    },
    {
      Stack: "Python / Data Science",
      progressPercentage: "88%"
    },
    {
      Stack: "MLOps / Cloud",
      progressPercentage: "78%"
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
      desc: "Conducted hands-on ML and Flutter workshops across partner colleges and mentored teams through deployment. Built and demoed a production-grade Flutter app with role-based auth, ZegoCloud video, and UPI payments."
      // descBullets: [
      //   "Built and demoed a production-grade Flutter app with role-based auth, ZegoCloud video, and UPI payments."
      // ]
    },
    {
      role: "Team Lead, AI-Driven Text Analytics",
      company: "IIIT Dharwad",

      companylogo: require("./assets/images/logos/iiit-dharwad.png"),
      date: "Aug 2023 - Jul 2024",
      desc: "Led comparative MT evaluation of Google Translate and IndicTrans2 on IIT Bombay multilingual datasets. Implemented STS-based evaluation and showed stronger semantic fidelity for IndicTrans2 on Indian languages."
      // descBullets: [
      //   "Implemented STS-based evaluation and showed stronger semantic fidelity for IndicTrans2 on Indian languages."
      // ]
    },
    {
      role: "AI/ML Developer (Freelance)",
      company: "Upwork",
      companylogo: require("./assets/images/logos/upwork-log.png"),
      date: "Jan 2023 - Dec 2024",
      desc: "Delivered machine learning prototypes in computer vision and automation. Built object-detection pipelines and real-time market-signal automation prototypes in Python."
      // descBullets: [
      //   "Built object-detection pipelines and real-time market-signal automation prototypes in Python."
      // ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Selected work in AI, NLP, and public-interest data science",
  projects: [
    {
      image: require("./assets/images/project-covers/mbta-equity-cover.svg"),
      projectName: "Boston Transit Equity Intelligence",
      projectDesc:
        "Built a data-driven transit equity and reliability analysis pipeline for MBTA routes using clustering, time-series indicators, and demographic overlays.",
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
      image: require("./assets/images/project-covers/rag-explainable-cover.svg"),
      projectName: "Explainable Hate Speech Detection with RAG",
      projectDesc:
        "Engineered a multilingual QLoRA + RAG workflow that produces grounded, explainable hate-speech and fake-news predictions with reduced hallucination risk.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Chava-Sai/Explainable-Hate-Speech-Detection-using-Generative-AI"
        }
      ]
    },
    {
      image: require("./assets/images/project-covers/fakehate-cover.svg"),
      projectName: "FakeHate Multitask Detection",
      projectDesc:
        "Designed a multitask transformer architecture for code-mixed multilingual fake-news and hate-speech detection, improving macro-F1 across both tasks.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Chava-Sai/Fake-Hate-Investigating-the-role-of-fake-narratives-in-spreading-hateful-reactions"
        }
      ]
    },
    {
      image: require("./assets/images/project-covers/chatbuddy-cover.svg"),
      projectName: "Chat Buddy",
      projectDesc:
        "Built a production-style Flutter app with real-time group chat, role-aware access, and integrated voice/video communication using Firebase and Zego Cloud.",
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
    "Publications, research milestones, and recognized project outcomes",
  achievementsCards: [
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
      title: "MT Evaluation Lead - IndicTrans2 vs Google",
      subtitle:
        "Led semantic and BLEU-based comparison on IIT Bombay multilingual data, showing stronger semantic retention for IndicTrans2.",
      image: require("./assets/images/translators.png"),
      imageAlt: "Translation Comparison",
      footerLink: [
        {
          name: "Project Repo",
          url: "https://github.com/Chava-Sai/Translators_Comparsion"
        }
      ]
    },
    {
      title: "Advanced Learning Algorithms",
      subtitle:
        "Completed advanced machine learning coursework with emphasis on practical model design and optimization.",
      image: require("./assets/images/llm-architecture.png"),
      imageAlt: "Machine Learning Certification",
      footerLink: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/chava-srinivasa-sai/"
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

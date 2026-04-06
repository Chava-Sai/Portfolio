import React, {useContext, useEffect, useRef, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import sampleProjectCover from "../../assets/images/project-covers/sample-project-cover.svg";

const normalizeTechName = value =>
  (value || "").toLowerCase().replace(/[^a-z0-9]/g, "");

const techLogoMap = {
  python: {type: "devicon", className: "devicon-python-plain colored"},
  pytorch: {type: "devicon", className: "devicon-pytorch-original colored"},
  opencv: {type: "devicon", className: "devicon-opencv-plain colored"},
  numpy: {type: "devicon", className: "devicon-numpy-original colored"},
  pandas: {type: "devicon", className: "devicon-pandas-original colored"},
  fastapi: {type: "devicon", className: "devicon-fastapi-plain colored"},
  react: {type: "devicon", className: "devicon-react-original colored"},
  vite: {type: "devicon", className: "devicon-vitejs-plain colored"},
  tensorflow: {
    type: "devicon",
    className: "devicon-tensorflow-original colored"
  },
  scikitlearn: {
    type: "devicon",
    className: "devicon-scikitlearn-plain colored"
  },
  flutter: {type: "devicon", className: "devicon-flutter-plain colored"},
  firebase: {type: "devicon", className: "devicon-firebase-plain colored"},

  openai: {
    type: "simple",
    slug: "openai",
    color: "ffffff"
  },
  gemini: {
    type: "simple",
    slug: "googlegemini",
    color: "8B5CF6"
  },
  langchain: {
    type: "simple",
    slug: "langchain",
    color: "22C55E"
  },

  rag: {type: "fa", className: "fas fa-link"},
  llama: {type: "fa", className: "fas fa-robot"},
  nlp: {type: "fa", className: "fas fa-language"},
  zegocloud: {type: "fa", className: "fas fa-video"}
};

export default function StartupProject() {
  const projectsContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const pauseAutoScrollRef = useRef(false);
  const [pauseAutoScroll, setPauseAutoScroll] = useState(false);
  const projectCount = bigProjects.projects.length;

  useEffect(() => {
    pauseAutoScrollRef.current = pauseAutoScroll;
  }, [pauseAutoScroll]);

  useEffect(() => {
    const container = projectsContainerRef.current;
    if (!container) {
      return undefined;
    }

    if (projectCount === 0) {
      return undefined;
    }

    let previousTimestamp = 0;
    const speedPxPerSecond = 72;

    const run = timestamp => {
      if (!previousTimestamp) {
        previousTimestamp = timestamp;
      }

      const deltaSeconds = (timestamp - previousTimestamp) / 1000;
      previousTimestamp = timestamp;

      if (!pauseAutoScrollRef.current) {
        const singleCycleWidth = container.scrollWidth / 2;
        if (singleCycleWidth <= container.clientWidth) {
          animationFrameRef.current = window.requestAnimationFrame(run);
          return;
        }

        container.scrollLeft += speedPxPerSecond * deltaSeconds;

        if (container.scrollLeft >= singleCycleWidth) {
          container.scrollLeft -= singleCycleWidth;
        }
      }

      animationFrameRef.current = window.requestAnimationFrame(run);
    };

    animationFrameRef.current = window.requestAnimationFrame(run);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [projectCount]);

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    if (win) {
      win.focus();
    }
  }

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  const displayProjects = [...bigProjects.projects, ...bigProjects.projects];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="projects-container" ref={projectsContainerRef}>
            {displayProjects.map((project, i) => {
              const projectImage = project.image || sampleProjectCover;
              const techItems = project.techStack || [];
              const projectLinks = project.footerLink || [];
              const isLoopCopy = i >= projectCount;

              return (
                <div
                  key={`${project.projectName}-${i}`}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                  aria-hidden={isLoopCopy}
                  onMouseEnter={() => setPauseAutoScroll(true)}
                  onMouseLeave={() => setPauseAutoScroll(false)}
                  onFocusCapture={() => setPauseAutoScroll(true)}
                  onBlurCapture={event => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setPauseAutoScroll(false);
                    }
                  }}
                >
                  <div className="project-image">
                    <img
                      src={projectImage}
                      alt={project.projectName}
                      className="card-image"
                      onError={event => {
                        event.currentTarget.src = sampleProjectCover;
                      }}
                    ></img>
                    <div className="project-image-overlay"></div>
                  </div>
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    <div
                      className={
                        techItems.length
                          ? "project-tech-row"
                          : "project-tech-row project-tech-row-empty"
                      }
                    >
                      {techItems.map((tech, techIndex) => {
                        const normalizedName = normalizeTechName(tech);
                        const logoMeta = techLogoMap[normalizedName];

                        return (
                          <span
                            key={`${tech}-${techIndex}`}
                            className="project-tech-logo"
                            title={tech}
                            aria-label={tech}
                          >
                            {logoMeta && logoMeta.type === "devicon" ? (
                              <i
                                className={`${logoMeta.className} project-tech-devicon`}
                                aria-hidden="true"
                              ></i>
                            ) : null}
                            {logoMeta && logoMeta.type === "simple" ? (
                              <img
                                src={`https://cdn.simpleicons.org/${logoMeta.slug}/${logoMeta.color}`}
                                alt={`${tech} logo`}
                                className="project-tech-simple"
                                loading="lazy"
                              />
                            ) : null}
                            {logoMeta && logoMeta.type === "fa" ? (
                              <i
                                className={`${logoMeta.className} project-tech-fa`}
                                aria-hidden="true"
                              ></i>
                            ) : null}
                            {!logoMeta ? (
                              <i
                                className="fas fa-circle project-tech-fa"
                                aria-hidden="true"
                              ></i>
                            ) : null}
                          </span>
                        );
                      })}
                    </div>
                    <div
                      className={
                        projectLinks.length
                          ? "project-card-footer"
                          : "project-card-footer project-card-footer-empty"
                      }
                    >
                      {projectLinks.map((link, i) => {
                        return (
                          <span
                            key={i}
                            className={
                              isDark ? "dark-mode project-tag" : "project-tag"
                            }
                            onClick={() => openUrlInNewTab(link.url)}
                          >
                            {link.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

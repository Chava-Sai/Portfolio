import React, {useContext, useMemo, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
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
  const {isDark} = useContext(StyleContext);
  const [activeTag, setActiveTag] = useState("All");

  const projects = bigProjects.projects || [];

  // derive filters from the tech stacks already on each project
  const tags = useMemo(() => {
    const priority = ["PyTorch", "RAG", "FastAPI", "React", "Flutter"];
    const present = priority.filter(tag =>
      projects.some(p => (p.techStack || []).includes(tag))
    );
    return ["All", ...present];
  }, [projects]);

  const shown =
    activeTag === "All"
      ? projects
      : projects.filter(p => (p.techStack || []).includes(activeTag));

  function openUrl(url) {
    if (!url) return;
    const win = window.open(url, "_blank");
    if (win) win.focus();
  }

  if (!bigProjects.display) return null;

  return (
    <section className="sec sec-projects" id="projects">
      <Fade bottom duration={900} distance="26px">
        <SectionHeader
          index="05"
          label="Projects"
          title="Research prototypes and"
          accent="systems that shipped."
          subtitle={bigProjects.subtitle}
        />

        {tags.length > 1 && (
          <div
            className="pj-filters"
            role="tablist"
            aria-label="Filter projects"
          >
            {tags.map(tag => (
              <button
                key={tag}
                role="tab"
                aria-selected={activeTag === tag}
                className={
                  activeTag === tag ? "pj-filter pj-filter-on" : "pj-filter"
                }
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="pj-grid">
          {shown.map((project, i) => {
            const cover = project.image || sampleProjectCover;
            const tech = project.techStack || [];
            const links = project.footerLink || [];

            return (
              <article
                className={isDark ? "pj-card dark-mode" : "pj-card"}
                key={`${project.projectName}-${i}`}
              >
                <div className="pj-cover">
                  <img
                    src={cover}
                    alt={project.projectName}
                    loading="lazy"
                    onError={e => {
                      e.currentTarget.src = sampleProjectCover;
                    }}
                  />
                  <span className="pj-cover-fade" aria-hidden="true"></span>
                  <span className="pj-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="pj-body">
                  <h3 className="pj-title">{project.projectName}</h3>
                  <p className="pj-desc">{project.projectDesc}</p>

                  {tech.length > 0 && (
                    <div className="pj-tech">
                      {tech.map(t => {
                        const meta = techLogoMap[normalizeTechName(t)];
                        return (
                          <span className="pj-tech-pill" key={t} title={t}>
                            {meta && meta.type === "devicon" && (
                              <i
                                className={meta.className}
                                aria-hidden="true"
                              ></i>
                            )}
                            {meta && meta.type === "simple" && (
                              <img
                                src={`https://cdn.simpleicons.org/${meta.slug}/${meta.color}`}
                                alt=""
                                className="pj-tech-icon"
                                loading="lazy"
                              />
                            )}
                            {meta && meta.type === "fa" && (
                              <i
                                className={meta.className}
                                aria-hidden="true"
                              ></i>
                            )}
                            {t}
                          </span>
                        );
                      })}
                    </div>
                  )}

                  {links.length > 0 && (
                    <div className="pj-links">
                      {links.map(link => (
                        <button
                          className="pj-link"
                          key={link.name}
                          onClick={() => openUrl(link.url)}
                        >
                          {link.name} <span aria-hidden="true">↗</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}

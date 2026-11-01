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

function TechPills({stack, hue}) {
  return (
    <div className="pj-tech">
      {stack.map(t => {
        const meta = techLogoMap[normalizeTechName(t)];
        return (
          <span className="pj-tech-pill" key={t} title={t}>
            <span
              className="pj-tech-dot"
              style={{background: `hsl(${hue} 85% 65%)`}}
            />
            {meta && meta.type === "devicon" && (
              <i className={meta.className} aria-hidden="true"></i>
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
              <i className={meta.className} aria-hidden="true"></i>
            )}
            {t}
          </span>
        );
      })}
    </div>
  );
}

function Metrics({metrics, hue, className}) {
  if (!metrics || metrics.length === 0) return null;
  return (
    <div className={className}>
      {metrics.map(m => (
        <div
          className="pj-metric"
          key={m.label}
          style={{
            boxShadow: `inset 0 0 0 1px hsl(${hue} 80% 60% / 0.18), 0 12px 30px -22px hsl(${hue} 80% 40% / 0.55)`
          }}
        >
          <span
            className="pj-metric-val"
            style={{color: `hsl(${hue} 90% 72%)`}}
          >
            {m.value}
          </span>
          <span className="pj-metric-label">{m.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  const [activeTag, setActiveTag] = useState("All");

  const projects = bigProjects.projects || [];

  const tags = useMemo(() => {
    const seen = [];
    projects.forEach(p => {
      if (p.category && !seen.includes(p.category)) seen.push(p.category);
    });
    return ["All", ...seen];
  }, [projects]);

  const visible =
    activeTag === "All"
      ? projects
      : projects.filter(p => p.category === activeTag);

  const featured = visible.find(p => p.featured);
  const rail = visible.filter(p => p !== featured);

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

        {/* ── featured ──────────────────────────────────────────────── */}
        {featured && (
          <article
            className="pj-featured"
            style={{"--hue": featured.accentHue}}
          >
            <span className="pj-featured-glow" aria-hidden="true" />
            <span className="pj-featured-grid" aria-hidden="true" />

            <div className="pj-featured-inner">
              <div className="pj-featured-main">
                <span
                  className="pj-badge"
                  style={{
                    color: `hsl(${featured.accentHue} 90% 70%)`,
                    borderColor: `hsl(${featured.accentHue} 80% 70% / 0.4)`,
                    background: `hsl(${featured.accentHue} 80% 60% / 0.08)`
                  }}
                >
                  <i className="fas fa-star" aria-hidden="true"></i>
                  Featured · {featured.category}
                </span>

                <h3 className="pj-featured-title">{featured.projectName}</h3>
                {featured.subtitle && (
                  <p className="pj-featured-sub">{featured.subtitle}</p>
                )}

                {featured.problem && (
                  <div className="pj-block">
                    <p className="pj-block-label">Problem</p>
                    <p className="pj-block-text">{featured.problem}</p>
                  </div>
                )}
                {featured.solution && (
                  <div className="pj-block">
                    <p className="pj-block-label">Solution</p>
                    <p className="pj-block-text">{featured.solution}</p>
                  </div>
                )}

                {featured.highlights && (
                  <ul className="pj-highlights">
                    {featured.highlights.map(h => (
                      <li key={h}>
                        <span
                          className="pj-highlight-dot"
                          style={{
                            background: `hsl(${featured.accentHue} 90% 65%)`
                          }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <TechPills
                  stack={featured.techStack || []}
                  hue={featured.accentHue}
                />

                <div className="pj-featured-links">
                  {(featured.footerLink || []).length > 0 ? (
                    featured.footerLink.map(link => (
                      <button
                        className="pj-cta"
                        key={link.name}
                        onClick={() => openUrl(link.url)}
                      >
                        <i className="fas fa-arrow-up-right-from-square"></i>
                        Link · {link.name}
                      </button>
                    ))
                  ) : (
                    <span className="pj-no-link">
                      Internal / academic — code on request
                    </span>
                  )}
                </div>
              </div>

              <div className="pj-featured-aside">
                <div className="pj-preview">
                  <img
                    src={featured.image || sampleProjectCover}
                    alt={featured.projectName}
                    onError={e => {
                      e.currentTarget.src = sampleProjectCover;
                    }}
                  />
                  <span className="pj-preview-fade" aria-hidden="true" />
                  <span className="pj-preview-bar">
                    <span>{featured.category}</span>
                    <span>Preview · v1</span>
                  </span>
                </div>

                <Metrics
                  metrics={featured.metrics}
                  hue={featured.accentHue}
                  className="pj-metrics pj-metrics-3"
                />
              </div>
            </div>
          </article>
        )}

        {/* ── rail ──────────────────────────────────────────────────── */}
        {rail.length > 0 && (
          <>
            <div className="pj-rail-head">
              <div>
                <p className="pj-rail-label">More projects</p>
                <p className="pj-rail-note">
                  Everything else, with the numbers that came out of it.
                </p>
              </div>
            </div>

            <div className="pj-grid">
              {rail.map((project, i) => (
                <article
                  className={isDark ? "pj-card dark-mode" : "pj-card"}
                  key={`${project.projectName}-${i}`}
                  style={{"--hue": project.accentHue}}
                >
                  <div className="pj-cover">
                    <img
                      src={project.image || sampleProjectCover}
                      alt={project.projectName}
                      loading="lazy"
                      onError={e => {
                        e.currentTarget.src = sampleProjectCover;
                      }}
                    />
                    <span className="pj-cover-fade" aria-hidden="true" />
                  </div>

                  <div className="pj-body">
                    <div className="pj-card-top">
                      <span
                        className="pj-tag"
                        style={{
                          color: `hsl(${project.accentHue} 90% 72%)`,
                          borderColor: `hsl(${project.accentHue} 80% 70% / 0.35)`,
                          background: `hsl(${project.accentHue} 80% 60% / 0.08)`
                        }}
                      >
                        {project.category}
                      </span>
                      {(project.footerLink || []).length > 0 && (
                        <button
                          className="pj-card-link"
                          onClick={() => openUrl(project.footerLink[0].url)}
                        >
                          Link <span aria-hidden="true">↗</span>
                        </button>
                      )}
                    </div>

                    <h3 className="pj-title">{project.projectName}</h3>
                    {project.subtitle && (
                      <p className="pj-sub">{project.subtitle}</p>
                    )}

                    <TechPills
                      stack={project.techStack || []}
                      hue={project.accentHue}
                    />

                    <Metrics
                      metrics={project.metrics}
                      hue={project.accentHue}
                      className="pj-metrics pj-metrics-card"
                    />
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </Fade>
    </section>
  );
}

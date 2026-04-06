import React, {useState} from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StackProgress() {
  const [hoveredNewsIndex, setHoveredNewsIndex] = useState(null);

  if (techStack.viewSkillBars) {
    const skillSnapshot = techStack.skillSnapshot || {};
    const snapshotUpdates = skillSnapshot.latestUpdates || [];

    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container" id="proficiency">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            <div className="skill-snapshot-card updates-only-card">
              {snapshotUpdates.length > 0 && (
                <div className="skill-snapshot-news skill-snapshot-news-only">
                  <h4 className="skill-snapshot-news-title">Latest Updates</h4>
                  <div className="skill-snapshot-news-list">
                    {snapshotUpdates.map((item, i) => (
                      <article
                        key={i}
                        className={
                          hoveredNewsIndex === null
                            ? "skill-snapshot-news-item"
                            : hoveredNewsIndex === i
                            ? "skill-snapshot-news-item active"
                            : "skill-snapshot-news-item inactive"
                        }
                        onMouseEnter={() => setHoveredNewsIndex(i)}
                        onMouseLeave={() => setHoveredNewsIndex(null)}
                        onFocus={() => setHoveredNewsIndex(i)}
                        onBlur={() => setHoveredNewsIndex(null)}
                        tabIndex={0}
                      >
                        <p className="skill-snapshot-news-date">{item.date}</p>
                        <p className="skill-snapshot-news-headline">
                          {item.title}
                        </p>
                        <p className="skill-snapshot-news-highlight">
                          {item.highlight}
                        </p>
                        {item.url ? (
                          <a
                            className="skill-snapshot-news-link"
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.cta || "Read More"}
                          </a>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}

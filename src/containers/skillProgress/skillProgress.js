import React, {useState} from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import codingPerson from "../../assets/lottie/codingPerson";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

const proficiencyAnimations = {
  build: Build,
  codingPerson,
  landingPerson
};

export default function StackProgress() {
  const [hoveredNewsIndex, setHoveredNewsIndex] = useState(null);

  if (techStack.viewSkillBars) {
    const selectedProficiencyAnimation =
      proficiencyAnimations[techStack.proficiencyAnimation] || Build;
    const skillSnapshot = techStack.skillSnapshot || {};
    const snapshotHighlights = skillSnapshot.highlights || [];
    const snapshotUpdates = skillSnapshot.latestUpdates || [];

    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
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
            <div className="skill-snapshot-card">
              <div className="skill-snapshot-lottie">
                {illustration.animated ? (
                  <DisplayLottie animationData={selectedProficiencyAnimation} />
                ) : (
                  <img
                    alt="Skills"
                    src={require("../../assets/images/skill.svg")}
                  />
                )}
              </div>
              <h3 className="skill-snapshot-title">
                {skillSnapshot.title || "Skill Snapshot"}
              </h3>
              <p className="skill-snapshot-subtitle">
                {skillSnapshot.subTitle || "Core technical strengths"}
              </p>
              {snapshotHighlights.length > 0 && (
                <div className="skill-snapshot-chips">
                  {snapshotHighlights.map((item, i) => (
                    <span key={i} className="skill-snapshot-chip">
                      {item}
                    </span>
                  ))}
                </div>
              )}

              {snapshotUpdates.length > 0 && (
                <div className="skill-snapshot-news">
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

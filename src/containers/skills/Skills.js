import React from "react";
import "./Skills.scss";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";

// the data carries a leading "⚡ " that the new layout replaces with an index
const stripGlyph = text =>
  String(text)
    .replace(/^[^\w(]+\s*/u, "")
    .trim();

export default function Skills() {
  if (!skillsSection.display) return null;

  const stats = skillsSection.stats || [];
  const exploring = skillsSection.exploring || [];

  return (
    <section className="sec sec-about" id="skills">
      <Fade bottom duration={900} distance="26px">
        <SectionHeader
          index="01"
          label="About"
          title={skillsSection.title}
          accent={skillsSection.titleAccent}
          subtitle={skillsSection.subTitle}
        />

        <div className="about-grid">
          {/* capability list */}
          <ol className="cap-list">
            {skillsSection.skills.map((skill, i) => (
              <li className="cap-item" key={i}>
                <span className="cap-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="cap-text">{skill}</span>
              </li>
            ))}
          </ol>

          {/* right rail: figures + what's next */}
          <aside className="about-rail">
            {stats.length > 0 && (
              <div className="stat-grid">
                {stats.map(stat => (
                  <div className="stat-tile" key={stat.label}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            {exploring.length > 0 && (
              <div className="explore-card">
                <p className="explore-title">Currently exploring</p>
                <ul className="explore-list">
                  {exploring.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Fade>
    </section>
  );
}

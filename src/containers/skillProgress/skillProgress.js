import React from "react";
import "./Progress.scss";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {techStack, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function StackProgress() {
  if (!techStack.viewSkillBars) return null;

  const updates = (techStack.skillSnapshot || {}).latestUpdates || [];
  const stacks = techStack.experience || [];
  const tools = skillsSection.softwareSkills || [];

  return (
    <section className="sec sec-stack" id="proficiency">
      <Fade bottom duration={900} distance="26px">
        <SectionHeader
          index="04"
          label="Stack"
          title="The toolchain I've"
          accent="shipped with."
          subtitle="Depth where it counts, and the tools I reach for from prototype notebook through to a deployed service."
        />

        <div className="stack-grid">
          {/* proficiency meters */}
          <div className="stack-col">
            <p className="stack-col-title">Depth</p>
            <ul className="meter-list">
              {stacks.map(item => (
                <li className="meter-row" key={item.Stack}>
                  <div className="meter-head">
                    <span className="meter-name">{item.Stack}</span>
                    <span className="meter-pct">{item.progressPercentage}</span>
                  </div>
                  <div className="meter-track">
                    <span
                      className="meter-fill"
                      style={{width: item.progressPercentage}}
                    ></span>
                  </div>
                </li>
              ))}
            </ul>

            {tools.length > 0 && (
              <>
                <p className="stack-col-title stack-col-title-spaced">
                  Tooling
                </p>
                <div className="tool-cloud">
                  {tools.map(tool => (
                    <span className="tool-pill" key={tool.skillName}>
                      <i className={tool.fontAwesomeClassname}></i>
                      {tool.skillName}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* changelog */}
          <div className="stack-col">
            <p className="stack-col-title">Changelog</p>
            <ol className="log-list">
              {updates.map((item, i) => (
                <li className="log-item" key={`${item.title}-${i}`}>
                  <span className="log-date">{item.date}</span>
                  <div className="log-body">
                    <p className="log-title">{item.title}</p>
                    <p className="log-text">{item.highlight}</p>
                    {item.url && (
                      <a
                        className="log-link"
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.cta || "Read more"}{" "}
                        <span aria-hidden="true">↗</span>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Fade>
    </section>
  );
}

import React from "react";
import "./WorkExperience.scss";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";

export default function WorkExperience() {
  if (!workExperiences.display) return null;

  return (
    <section className="sec sec-experience" id="experience">
      <Fade bottom duration={900} distance="26px">
        <SectionHeader
          index="03"
          label="Experience"
          title="Engineering across research,"
          accent="industry, and teaching."
          subtitle="Roles spanning applied AI engineering, machine translation research, contract instruction, and freelance delivery."
        />

        <ol className="xp-rail">
          {workExperiences.experience.map((job, i) => (
            <li className="xp-item" key={`${job.company}-${i}`}>
              <div className="xp-node" aria-hidden="true">
                {job.companylogo ? (
                  <img src={job.companylogo} alt="" />
                ) : (
                  <span className="xp-node-dot"></span>
                )}
              </div>

              <article className="xp-card">
                <p className="xp-role">{job.role}</p>
                <div className="xp-headline">
                  <h3 className="xp-company">{job.company}</h3>
                  <span className="xp-date">{job.date}</span>
                </div>
                <p className="xp-desc">{job.desc}</p>
                {job.descBullets && job.descBullets.length > 0 && (
                  <ul className="xp-bullets">
                    {job.descBullets.map(bullet => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </Fade>
    </section>
  );
}

import React from "react";
import "./Education.scss";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {educationInfo} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Education() {
  if (!educationInfo.display) return null;

  return (
    <section className="sec sec-education" id="education">
      <Fade bottom duration={900} distance="26px">
        <SectionHeader
          index="02"
          label="Education"
          title="Where the"
          accent="foundations were built."
          subtitle="Graduate work in artificial intelligence, on top of an undergraduate degree in data science and AI."
        />

        <div className="edu-list">
          {educationInfo.schools.map(school => (
            <article className="edu-card" key={school.schoolName}>
              <div className="edu-card-head">
                {school.logo && (
                  <div className="edu-logo">
                    <img src={school.logo} alt={school.schoolName} />
                  </div>
                )}
                <div className="edu-id">
                  <h3 className="edu-school">{school.schoolName}</h3>
                  <p className="edu-degree">{school.subHeader}</p>
                </div>
                <p className="edu-duration">{school.duration}</p>
              </div>

              {school.desc && <p className="edu-desc">{school.desc}</p>}

              {school.descBullets && school.descBullets.length > 0 && (
                <ul className="edu-bullets">
                  {school.descBullets.map(bullet => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Fade>
    </section>
  );
}

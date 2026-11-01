import React from "react";
import {Fade} from "react-reveal";
import "./Publications.scss";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {publicationsSection} from "../../portfolio";

export default function Publications() {
  if (!publicationsSection || !publicationsSection.display) return null;

  const openUrl = url => {
    if (!url) return;
    const win = window.open(url, "_blank");
    if (win) win.focus();
  };

  return (
    <section className="sec sec-pubs" id="publications">
      <Fade bottom duration={900} distance="26px">
        <SectionHeader
          index="06"
          label="Research"
          title="Peer-reviewed work and"
          accent="shared task results."
          subtitle={publicationsSection.subtitle}
        />

        <ol className="pub-list">
          {publicationsSection.publications.map((pub, i) => (
            <li className="pub-row" key={`${pub.venue}-${i}`}>
              <div className="pub-marker">
                <span className="pub-index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {pub.image && (
                  <span className="pub-logo">
                    <img src={pub.image} alt={pub.imageAlt || ""} />
                  </span>
                )}
              </div>

              <div className="pub-content">
                <div className="pub-meta">
                  <span
                    className="pub-venue"
                    style={{
                      color: pub.venueColor,
                      borderColor: `${pub.venueColor}66`,
                      background: `${pub.venueColor}14`
                    }}
                  >
                    {pub.venue}
                  </span>
                  <span className="pub-type">{pub.venueType}</span>
                </div>

                <h3 className="pub-title">{pub.title}</h3>

                <ul className="pub-points">
                  {pub.bullets.map(bullet => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                {pub.links && pub.links.length > 0 && (
                  <div className="pub-links">
                    {pub.links.map(link => (
                      <button
                        className="pub-link"
                        key={link.name}
                        onClick={() => openUrl(link.url)}
                      >
                        <i className={link.icon} aria-hidden="true"></i>
                        {link.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Fade>
    </section>
  );
}

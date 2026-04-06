import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Publications.scss";
import {publicationsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function PublicationCard({pub, isDark}) {
  function openUrl(url) {
    if (!url) return;
    window.open(url, "_blank")?.focus();
  }

  return (
    <div className={`pub-card${isDark ? " dark-mode" : ""}`}>
      {/* Left — image panel */}
      <div className="pub-image-col">
        <img
          src={pub.image}
          alt={pub.imageAlt || "Publication"}
          className="pub-image"
        />
      </div>

      {/* Right — content */}
      <div className="pub-content-col">
        <div className="pub-venue-row">
          <span
            className="pub-venue-badge"
            style={{
              background: pub.venueColor + "22",
              borderColor: pub.venueColor + "99",
              color: pub.venueColor
            }}
          >
            {pub.venue}
          </span>
          <span className={`pub-type-tag ${pub.venueType}`}>
            {pub.venueType}
          </span>
        </div>

        <h3 className="pub-title">{pub.title}</h3>

        <ul className="pub-bullets">
          {pub.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="pub-links">
          {pub.links.map((link, i) => (
            <button
              key={i}
              className="pub-link-btn"
              onClick={() => openUrl(link.url)}
            >
              <i className={link.icon}></i> {link.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Publications() {
  const {isDark} = useContext(StyleContext);
  if (!publicationsSection || !publicationsSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        <div className="pub-section">
          <h1
            className={
              isDark ? "dark-mode heading pub-heading" : "heading pub-heading"
            }
          >
            {publicationsSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle pub-subtitle"
                : "subTitle pub-subtitle"
            }
          >
            {publicationsSection.subtitle}
          </p>
          <div className="pub-list">
            {publicationsSection.publications.map((pub, i) => (
              <PublicationCard key={i} pub={pub} isDark={isDark} />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

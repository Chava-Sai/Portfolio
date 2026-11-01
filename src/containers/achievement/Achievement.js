import React from "react";
import {Fade} from "react-reveal";
import "./Achievement.scss";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {achievementSection} from "../../portfolio";

export default function Achievement() {
  if (!achievementSection.display) return null;

  const openUrl = url => {
    if (!url) return;
    const win = window.open(url, "_blank");
    if (win) win.focus();
  };

  return (
    <section className="sec sec-awards" id="achievements">
      <Fade bottom duration={900} distance="26px">
        <SectionHeader
          index="07"
          label="Honors"
          title="Competition results and"
          accent="certifications."
          subtitle={achievementSection.subtitle}
        />

        <div className="aw-grid">
          {achievementSection.achievementsCards.map((card, i) => (
            <article className="aw-card" key={`${card.title}-${i}`}>
              <div className="aw-head">
                {card.image && (
                  <span className="aw-logo">
                    <img src={card.image} alt={card.imageAlt || ""} />
                  </span>
                )}
                <span className="aw-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="aw-title">{card.title}</h3>
              <p className="aw-text">{card.subtitle}</p>

              {card.footerLink && card.footerLink.length > 0 && (
                <div className="aw-links">
                  {card.footerLink.map(link => (
                    <button
                      className="aw-link"
                      key={link.name}
                      onClick={() => openUrl(link.url)}
                    >
                      {link.name} <span aria-hidden="true">↗</span>
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </Fade>
    </section>
  );
}

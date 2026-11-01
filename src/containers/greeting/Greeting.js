import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import FocusTerminal from "../../components/focusTerminal/FocusTerminal";
import TechMarquee from "../../components/techMarquee/TechMarquee";
import {greeting, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

// "github.com/Chava-Sai" reads more like a terminal than a bare icon does
const stripScheme = url =>
  (url || "").replace(/^https?:\/\//, "").replace(/\/$/, "");

// the data stores the name uppercase; CSS capitalize cannot lower that
const titleCase = str =>
  (str || "")
    .toLowerCase()
    .replace(/(^|[\s-])([a-z])/g, (_, sep, ch) => sep + ch.toUpperCase());

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) return null;

  const roles = (greeting.roles || greeting.tagline || "")
    .split("·")
    .map(r => r.trim())
    .filter(Boolean);

  return (
    <Fade bottom duration={900} distance="30px">
      <section className="hero" id="greeting">
        <div className="hero-grid">
          {/* ── left: identity ─────────────────────────────────────── */}
          <div className="hero-identity">
            {greeting.statusLine && (
              <p className="hero-status">
                <span className="hero-status-dot" aria-hidden="true"></span>
                {greeting.statusLine}
              </p>
            )}

            <h1 className="hero-name">{titleCase(greeting.username)}</h1>

            {roles.length > 0 && (
              <p className="hero-roles">
                {roles.map((role, i) => (
                  <React.Fragment key={role}>
                    {i > 0 && <span className="hero-roles-sep">·</span>}
                    <span>{role}</span>
                  </React.Fragment>
                ))}
              </p>
            )}

            {greeting.headlineWord && (
              <p className="hero-headline">
                {greeting.headlinePrefix}{" "}
                <span className="hero-headline-accent">
                  {greeting.headlineWord}
                </span>
              </p>
            )}

            <p className="hero-blurb">{greeting.subTitle}</p>

            <div id="resume" className="hero-anchor"></div>

            <div className="hero-actions">
              <a className="hero-btn hero-btn-primary" href="#projects">
                View projects <span aria-hidden="true">→</span>
              </a>
              {greeting.resumeLink && (
                <a
                  className="hero-btn hero-btn-ghost"
                  href={require("./resume.pdf")}
                  download="Resume.pdf"
                >
                  <i className="fas fa-file-download" aria-hidden="true"></i>{" "}
                  Resume
                </a>
              )}
              <a className="hero-btn hero-btn-ghost" href="#contact">
                Contact <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="hero-meta">
              {greeting.location && (
                <span className="hero-meta-item">
                  <i className="fas fa-location-dot" aria-hidden="true"></i>
                  {greeting.location}
                </span>
              )}
              {socialMediaLinks.github && (
                <a
                  className="hero-meta-item hero-meta-link"
                  href={socialMediaLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" aria-hidden="true"></i>
                  {stripScheme(socialMediaLinks.github)}
                </a>
              )}
              {socialMediaLinks.linkedin && (
                <a
                  className="hero-meta-item hero-meta-link"
                  href={socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" aria-hidden="true"></i>
                  in/chava-srinivasa-sai
                </a>
              )}
            </div>
          </div>

          {/* ── right: live terminal ───────────────────────────────── */}
          {greeting.terminal && (
            <div className="hero-terminal">
              <FocusTerminal terminalData={greeting.terminal} isDark={isDark} />
            </div>
          )}
        </div>

        <TechMarquee />
      </section>
    </Fade>
  );
}

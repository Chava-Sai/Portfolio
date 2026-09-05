import React, {useContext, useEffect, useRef, useState} from "react";
import {Fade} from "react-reveal";
import "./Publications.scss";
import {publicationsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

function PublicationCard({pub, isDark, ariaHidden}) {
  function openUrl(url) {
    if (!url) return;
    window.open(url, "_blank")?.focus();
  }

  return (
    <div
      className={`pub-card${isDark ? " dark-mode" : ""}`}
      aria-hidden={ariaHidden}
    >
      {/* Left — image panel */}
      <div className="pub-image-col">
        <img
          src={pub.image}
          alt={pub.imageAlt || "Publication"}
          className={
            pub.imageFit === "contain"
              ? "pub-image pub-image-contain"
              : "pub-image"
          }
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
              // keep the duplicated loop copies out of the tab order
              tabIndex={ariaHidden ? -1 : 0}
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
  const listRef = useRef(null);
  const animationFrameRef = useRef(null);
  const pauseAutoScrollRef = useRef(false);
  const [pauseAutoScroll, setPauseAutoScroll] = useState(false);
  const publicationCount = publicationsSection?.publications?.length ?? 0;

  useEffect(() => {
    pauseAutoScrollRef.current = pauseAutoScroll;
  }, [pauseAutoScroll]);

  useEffect(() => {
    const container = listRef.current;
    if (!container || publicationCount === 0) {
      return undefined;
    }

    let previousTimestamp = 0;
    // Sub-pixel position kept here rather than read back off scrollTop, which
    // snaps to device pixels — accumulating on the DOM property rounds away a
    // fifth of the travel every frame and visibly slows the scroll.
    let position = container.scrollTop;
    const speedPxPerSecond = 38;

    const run = timestamp => {
      if (!previousTimestamp) {
        previousTimestamp = timestamp;
      }

      const deltaSeconds = (timestamp - previousTimestamp) / 1000;
      previousTimestamp = timestamp;

      if (pauseAutoScrollRef.current) {
        // Paused — let any manual scrolling stand and resume from there.
        position = container.scrollTop;
      } else {
        // Measure the cycle from the first loop copy rather than halving
        // scrollHeight, which is thrown off by the list padding.
        const cards = container.children;
        const cycle =
          cards.length > publicationCount
            ? cards[publicationCount].offsetTop - cards[0].offsetTop
            : 0;
        const maxScroll = container.scrollHeight - container.clientHeight;

        // Nothing to loop through, or the wrap point sits past the end of
        // the scroll range — leave the list where it is.
        if (cycle <= 0 || cycle > maxScroll) {
          animationFrameRef.current = window.requestAnimationFrame(run);
          return;
        }

        position += speedPxPerSecond * deltaSeconds;
        if (position >= cycle) {
          position -= cycle;
        }
        container.scrollTop = position;
      }

      animationFrameRef.current = window.requestAnimationFrame(run);
    };

    animationFrameRef.current = window.requestAnimationFrame(run);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [publicationCount]);

  if (!publicationsSection || !publicationsSection.display) return null;

  const displayPublications = [
    ...publicationsSection.publications,
    ...publicationsSection.publications
  ];

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
          <div
            className="pub-list"
            ref={listRef}
            onMouseEnter={() => setPauseAutoScroll(true)}
            onMouseLeave={() => setPauseAutoScroll(false)}
            onFocusCapture={() => setPauseAutoScroll(true)}
            onBlurCapture={event => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setPauseAutoScroll(false);
              }
            }}
          >
            {displayPublications.map((pub, i) => (
              <PublicationCard
                key={`${pub.venue}-${i}`}
                pub={pub}
                isDark={isDark}
                ariaHidden={i >= publicationCount}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

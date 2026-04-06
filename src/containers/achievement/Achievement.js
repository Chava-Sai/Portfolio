import React, {useContext, useEffect, useRef, useState} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const cardsContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const pauseAutoScrollRef = useRef(false);
  const [pauseAutoScroll, setPauseAutoScroll] = useState(false);
  const cardCount = achievementSection.achievementsCards.length;

  useEffect(() => {
    pauseAutoScrollRef.current = pauseAutoScroll;
  }, [pauseAutoScroll]);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container || cardCount === 0) {
      return undefined;
    }

    let previousTimestamp = 0;
    const speedPxPerSecond = 62;

    const run = timestamp => {
      if (!previousTimestamp) {
        previousTimestamp = timestamp;
      }

      const deltaSeconds = (timestamp - previousTimestamp) / 1000;
      previousTimestamp = timestamp;

      if (!pauseAutoScrollRef.current) {
        const singleCycleWidth = container.scrollWidth / 2;
        if (singleCycleWidth > container.clientWidth) {
          container.scrollLeft += speedPxPerSecond * deltaSeconds;

          if (container.scrollLeft >= singleCycleWidth) {
            container.scrollLeft -= singleCycleWidth;
          }
        }
      }

      animationFrameRef.current = window.requestAnimationFrame(run);
    };
    animationFrameRef.current = window.requestAnimationFrame(run);

    return () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [cardCount]);

  const {isDark} = useContext(StyleContext);
  if (!achievementSection.display) {
    return null;
  }

  const displayCards = [
    ...achievementSection.achievementsCards,
    ...achievementSection.achievementsCards
  ];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div" ref={cardsContainerRef}>
            {displayCards.map((card, i) => {
              const isLoopCopy = i >= cardCount;
              return (
                <div
                  key={`${card.title}-${i}`}
                  className="achievement-scroll-item"
                  aria-hidden={isLoopCopy}
                  onMouseEnter={() => setPauseAutoScroll(true)}
                  onMouseLeave={() => setPauseAutoScroll(false)}
                  onFocusCapture={() => setPauseAutoScroll(true)}
                  onBlurCapture={event => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setPauseAutoScroll(false);
                    }
                  }}
                >
                  <AchievementCard
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}

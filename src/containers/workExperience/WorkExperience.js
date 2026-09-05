import React, {useContext, useEffect, useRef, useState} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const experienceContainerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const pauseAutoScrollRef = useRef(false);
  const [pauseAutoScroll, setPauseAutoScroll] = useState(false);
  const experienceCount = workExperiences.experience.length;

  useEffect(() => {
    pauseAutoScrollRef.current = pauseAutoScroll;
  }, [pauseAutoScroll]);

  useEffect(() => {
    const container = experienceContainerRef.current;
    if (!container) {
      return undefined;
    }

    if (experienceCount === 0) {
      return undefined;
    }

    let previousTimestamp = 0;
    const speedPxPerSecond = 72;

    const run = timestamp => {
      if (!previousTimestamp) {
        previousTimestamp = timestamp;
      }

      const deltaSeconds = (timestamp - previousTimestamp) / 1000;
      previousTimestamp = timestamp;

      if (!pauseAutoScrollRef.current) {
        // Measure the cycle from the first loop copy rather than halving
        // scrollWidth, which is off by (gap - horizontal padding) / 2 and
        // would make the loop jump on every wrap.
        const slots = container.children;
        const singleCycleWidth =
          slots.length > experienceCount
            ? slots[experienceCount].offsetLeft - slots[0].offsetLeft
            : container.scrollWidth / 2;

        if (singleCycleWidth <= container.clientWidth) {
          animationFrameRef.current = window.requestAnimationFrame(run);
          return;
        }

        container.scrollLeft += speedPxPerSecond * deltaSeconds;

        if (container.scrollLeft >= singleCycleWidth) {
          container.scrollLeft -= singleCycleWidth;
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
  }, [experienceCount]);

  if (!workExperiences.display) {
    return null;
  }

  const displayExperiences = [
    ...workExperiences.experience,
    ...workExperiences.experience
  ];

  return (
    <div id="experience">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">Experiences</h1>
            <div className="experience-cards-div" ref={experienceContainerRef}>
              {displayExperiences.map((card, i) => {
                const isLoopCopy = i >= experienceCount;

                return (
                  <div
                    key={`${card.company}-${i}`}
                    className="experience-card-slot"
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
                    <ExperienceCard
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

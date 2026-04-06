import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import codingPerson from "../../assets/lottie/codingPerson";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import FocusTerminal from "../../components/focusTerminal/FocusTerminal";
import TechMarquee from "../../components/techMarquee/TechMarquee";
import BinaryDecodeText from "../../components/binaryDecodeText/BinaryDecodeText";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const greetingAnimations = {
  landingPerson,
  codingPerson,
  build: Build
};

export default function Greeting() {
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) return null;
  const selectedGreetingAnimation =
    greetingAnimations[greeting.greetingAnimation] || landingPerson;

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                <BinaryDecodeText />
              </h1>

              {greeting.tagline && (
                <p className="greeting-tagline-text">
                  <span className="tl-dot"></span>
                  {greeting.tagline.split("·").map((part, i, arr) => (
                    <React.Fragment key={i}>
                      <span className="tl-word">{part.trim()}</span>
                      {i < arr.length - 1 && <span className="tl-sep">·</span>}
                    </React.Fragment>
                  ))}
                </p>
              )}

              {greeting.terminal ? (
                <FocusTerminal
                  terminalData={greeting.terminal}
                  isDark={isDark}
                />
              ) : (
                <p
                  className={
                    isDark
                      ? "dark-mode greeting-text-p"
                      : "greeting-text-p subTitle"
                  }
                >
                  {greeting.subTitle}
                </p>
              )}

              <div id="resume" className="empty-div"></div>

              <div className="social-resume-row">
                <SocialMedia />
                {greeting.resumeLink && (
                  <a
                    className="resume-pill-btn"
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                  >
                    <i className="fas fa-file-download"></i> Resume
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            {greeting.profileImage ? (
              <div className="profile-frame">
                <img
                  alt={`${greeting.username} profile`}
                  className="greeting-profile-image"
                  src={greeting.profileImage}
                />
              </div>
            ) : illustration.animated ? (
              <DisplayLottie animationData={selectedGreetingAnimation} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              />
            )}
            <TechMarquee />
          </div>
        </div>
      </div>
    </Fade>
  );
}

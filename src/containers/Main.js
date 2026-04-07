import React, {useEffect, useRef, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Publications from "./publications/Publications";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import motionBackgroundVideo from "../assets/videos/motion-background.mp4";
import "./Main.scss";

const Main = () => {
  const isDark = true;
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  const backgroundVideoRef = useRef(null);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  useEffect(() => {
    const videoEl = backgroundVideoRef.current;
    if (!videoEl) return;

    const tryPlay = () => {
      const playPromise = videoEl.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    };

    tryPlay();
    videoEl.addEventListener("canplay", tryPlay);

    return () => {
      videoEl.removeEventListener("canplay", tryPlay);
    };
  }, []);

  const changeTheme = () => {};

  return (
    <div className="app-root dark-mode">
      <div className="global-video-bg" aria-hidden="true">
        <video
          ref={backgroundVideoRef}
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          preload="metadata"
        >
          <source src={motionBackgroundVideo} type="video/mp4" />
        </video>
        <div className="global-video-overlay"></div>
      </div>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        <div className="app-content-layer">
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <Header />
              <Greeting />
              <Skills />
              <StackProgress />
              <Education />
              <WorkExperience />
              <Publications />
              <Projects />
              <StartupProject />
              <Achievement />
              <Blogs />
              <Talks />
              <Twitter />
              <Podcast />
              <Profile />
              <Footer />
              <ScrollToTopButton />
            </>
          )}
        </div>
      </StyleProvider>
    </div>
  );
};

export default Main;

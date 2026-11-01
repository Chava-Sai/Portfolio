import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  techStack,
  bigProjects,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  publicationsSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const homeUrl = `${process.env.PUBLIC_URL || ""}/`;
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewProficiency = techStack.viewSkillBars;
  const viewProjects = bigProjects.display;
  const viewAchievement = achievementSection.display;
  const viewPublications = publicationsSection && publicationsSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  const handleLogoClick = event => {
    event.preventDefault();
    window.location.assign(homeUrl);
  };

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href={homeUrl} className="logo" onClick={handleLogoClick}>
          <span className="logo-name">{greeting.username}</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">About</a>
            </li>
          )}
          <li>
            <a href="#education">Education</a>
          </li>
          {viewExperience && (
            <li>
              <a href="#experience">Experience</a>
            </li>
          )}
          {viewProficiency && (
            <li>
              <a href="#proficiency">Stack</a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {viewPublications && (
            <li>
              <a href="#publications">Research</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Honors</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;

import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(
            "© 2026 Srinivasa Sai Chava | AI & ML Professional | Boston, MA"
          )}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Building intelligent solutions for tomorrow's challenges
        </p>
      </div>
    </Fade>
  );
}

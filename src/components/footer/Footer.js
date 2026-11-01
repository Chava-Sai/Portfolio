import React from "react";
import "./Footer.scss";
import {greeting} from "../../portfolio";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-mark">
          <span className="footer-dot" aria-hidden="true"></span>
          {greeting.username}
        </p>
        <p className="footer-note">
          Built with React · Designed and maintained by Sai ·{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

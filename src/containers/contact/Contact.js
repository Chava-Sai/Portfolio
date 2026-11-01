import React from "react";
import "./Contact.scss";
import {Fade} from "react-reveal";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import {contactInfo, socialMediaLinks} from "../../portfolio";

export default function Contact() {
  const channels = [
    contactInfo.email_address && {
      key: "email",
      label: "Email",
      value: contactInfo.email_address,
      href: `mailto:${contactInfo.email_address}`,
      icon: "fas fa-envelope"
    },
    contactInfo.number && {
      key: "phone",
      label: "Phone",
      value: contactInfo.number,
      href: `tel:${contactInfo.number}`,
      icon: "fas fa-phone"
    },
    socialMediaLinks.linkedin && {
      key: "linkedin",
      label: "LinkedIn",
      value: "in/chava-srinivasa-sai",
      href: socialMediaLinks.linkedin,
      icon: "fab fa-linkedin"
    },
    socialMediaLinks.github && {
      key: "github",
      label: "GitHub",
      value: "github.com/Chava-Sai",
      href: socialMediaLinks.github,
      icon: "fab fa-github"
    }
  ].filter(Boolean);

  return (
    <section className="sec sec-contact" id="contact">
      <Fade bottom duration={900} distance="26px">
        <SectionHeader
          index="08"
          label="Contact"
          title="Open to research roles,"
          accent="internships, and collaboration."
          subtitle={contactInfo.subtitle}
        />

        <div className="ct-grid">
          {channels.map(c => (
            <a
              className="ct-card"
              key={c.key}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={
                c.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              <span className="ct-icon">
                <i className={c.icon} aria-hidden="true"></i>
              </span>
              <span className="ct-label">{c.label}</span>
              <span className="ct-value">{c.value}</span>
              <span className="ct-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </Fade>
    </section>
  );
}

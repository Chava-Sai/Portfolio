import React from "react";
import "./SectionHeader.scss";

/**
 * The numbered section header used across the site:
 *   ── 03 · EXPERIENCE
 *   Big display headline, with `accent` rendered in the gradient.
 *   Dim supporting line underneath.
 */
export default function SectionHeader({index, label, title, accent, subtitle}) {
  return (
    <header className="sec-head">
      <p className="sec-head-eyebrow">
        <span className="sec-head-rule" aria-hidden="true"></span>
        <span className="sec-head-index">{index}</span>
        <span className="sec-head-dot" aria-hidden="true">
          ·
        </span>
        <span className="sec-head-label">{label}</span>
      </p>

      <h2 className="sec-head-title">
        {title}
        {accent && <span className="sec-head-accent"> {accent}</span>}
      </h2>

      {subtitle && <p className="sec-head-sub">{subtitle}</p>}
    </header>
  );
}

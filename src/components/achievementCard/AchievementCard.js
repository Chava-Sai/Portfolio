import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    if (win) win.focus();
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      {/* Uniform image box — dark bg handles both circular logos & square images */}
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="certificate-card-image"
        />
        <div className="certificate-image-fade"></div>
      </div>

      <div className="certificate-detail-div">
        <h5
          className={
            isDark
              ? "dark-mode certificate-card-title"
              : "certificate-card-title"
          }
        >
          {cardInfo.title}
        </h5>
        <p
          className={
            isDark
              ? "dark-mode certificate-card-subtitle"
              : "certificate-card-subtitle"
          }
        >
          {cardInfo.description}
        </p>
      </div>

      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => (
          <span
            key={i}
            className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
            onClick={() => openUrlInNewTab(v.url, v.name)}
          >
            <i className="fas fa-arrow-up-right-from-square"></i>
            {v.name}
          </span>
        ))}
      </div>
    </div>
  );
}

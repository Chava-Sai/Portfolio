import React, {useState, useRef} from "react";
import "./TechMarquee.scss";

/* Full tech stack — devicons (already loaded via CDN) */
const TECHS = [
  {name: "Python", cls: "devicon-python-plain colored"},
  {name: "PyTorch", cls: "devicon-pytorch-original colored"},
  {name: "TensorFlow", cls: "devicon-tensorflow-original colored"},
  {name: "FastAPI", cls: "devicon-fastapi-plain colored"},
  {name: "React", cls: "devicon-react-original colored"},
  {name: "Docker", cls: "devicon-docker-plain colored"},
  {name: "AWS", cls: "devicon-amazonwebservices-plain-wordmark colored"},
  {name: "Flutter", cls: "devicon-flutter-plain colored"},
  {name: "Firebase", cls: "devicon-firebase-plain colored"},
  {name: "OpenCV", cls: "devicon-opencv-plain colored"},
  {name: "NumPy", cls: "devicon-numpy-plain colored"},
  {name: "Pandas", cls: "devicon-pandas-original colored"},
  {name: "Scikit-learn", cls: "devicon-scikitlearn-plain colored"},
  {name: "Git", cls: "devicon-git-plain colored"},
  {name: "Java", cls: "devicon-java-plain colored"},
  {name: "C++", cls: "devicon-cplusplus-plain colored"},
  {name: "Azure", cls: "devicon-azure-plain colored"},
  {name: "MySQL", cls: "devicon-mysql-plain colored"}
];

export default function TechMarquee() {
  const [tooltip, setTooltip] = useState(null);
  const outerRef = useRef(null);

  function handleEnter(e, name) {
    if (!outerRef.current) return;
    const iconRect = e.currentTarget.getBoundingClientRect();
    const outerRect = outerRef.current.getBoundingClientRect();
    setTooltip({
      name,
      x: iconRect.left + iconRect.width / 2 - outerRect.left,
      y: iconRect.top - outerRect.top
    });
  }

  function handleLeave() {
    setTooltip(null);
  }

  return (
    <div className="tm-outer" ref={outerRef}>
      {tooltip && (
        <div className="tm-tooltip" style={{left: tooltip.x, top: tooltip.y}}>
          {tooltip.name}
        </div>
      )}
      <div className="tm-wrapper">
        <div className="tm-track">
          {[...TECHS, ...TECHS].map((t, i) => (
            <div
              key={i}
              className="tm-item"
              onMouseEnter={e => handleEnter(e, t.name)}
              onMouseLeave={handleLeave}
            >
              <i className={t.cls}></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

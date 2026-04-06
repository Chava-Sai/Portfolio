import React from "react";
import "./FocusTerminal.scss";

export default function FocusTerminal({terminalData, isDark}) {
  if (!terminalData || terminalData.display === false) {
    return null;
  }

  const {
    title,
    command,
    lines = [],
    followUpCommand,
    followUpOutput
  } = terminalData;

  return (
    <div className={isDark ? "focus-terminal dark-mode" : "focus-terminal"}>
      <div className="focus-terminal-titlebar">
        <div className="focus-terminal-lights" aria-hidden="true">
          <span className="light red"></span>
          <span className="light yellow"></span>
          <span className="light green"></span>
        </div>
        <span className="focus-terminal-title">{title}</span>
      </div>

      <div className="focus-terminal-body">
        <p className="focus-terminal-line command">
          <span className="prompt">~$</span> {command}
        </p>

        {lines.map((line, index) => (
          <p
            key={`${line}-${index}`}
            className="focus-terminal-line output output-point"
          >
            • {line}
          </p>
        ))}

        <p className="focus-terminal-line command">
          <span className="prompt">~$</span> {followUpCommand}
        </p>
        <p className="focus-terminal-line output output-answer">
          {followUpOutput}
        </p>

        <p className="focus-terminal-line command">
          <span className="prompt">~$</span>
          <span className="cursor" aria-hidden="true"></span>
        </p>
      </div>
    </div>
  );
}

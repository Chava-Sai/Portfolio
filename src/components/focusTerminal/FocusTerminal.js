import React, {useEffect, useState} from "react";
import "./FocusTerminal.scss";

/**
 * Hero terminal. Lines reveal one at a time with a blinking caret, and the
 * whole thing is shown at once when the viewer prefers reduced motion.
 */
export default function FocusTerminal({terminalData}) {
  const lines = (terminalData && terminalData.lines) || [];
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined" || lines.length === 0) return undefined;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      setShown(lines.length);
      return undefined;
    }

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(i);
      if (i >= lines.length) clearInterval(id);
    }, 220);
    return () => clearInterval(id);
  }, [lines.length]);

  if (!terminalData || !terminalData.display) return null;

  return (
    <div className="term">
      <span className="term-sheen" aria-hidden="true"></span>

      <div className="term-bar">
        <span className="term-dot term-dot-red"></span>
        <span className="term-dot term-dot-amber"></span>
        <span className="term-dot term-dot-green"></span>
        <span className="term-title">{terminalData.title}</span>
        <span className="term-live">
          <span className="term-live-dot"></span>
          live
        </span>
      </div>

      <div className="term-body">
        {lines.slice(0, shown).map((l, i) => {
          if (l.kind === "prompt") {
            return (
              <div className="term-line" key={i}>
                <span className="term-arrow">➜</span>{" "}
                <span className="term-path">~/portfolio</span>{" "}
                <span className="term-sigil">$</span>{" "}
                <span className="term-cmd">{l.cmd}</span>
              </div>
            );
          }
          if (l.kind === "kv") {
            return (
              <div className="term-line term-kv" key={i}>
                <span className="term-key">{l.key}</span>
                <span className="term-colon">: </span>
                <span className="term-val">{l.value}</span>
                <span className="term-colon">,</span>
              </div>
            );
          }
          return (
            <div
              className={l.muted ? "term-line term-muted" : "term-line"}
              key={i}
            >
              {l.line}
            </div>
          );
        })}

        {shown < lines.length && <span className="term-caret"></span>}
      </div>
    </div>
  );
}

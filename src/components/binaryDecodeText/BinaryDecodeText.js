import React, {useState, useEffect, useRef} from "react";
import "./BinaryDecodeText.scss";

const TARGET = "Hi, Myself Sai";
const SCRAMBLE_MS = 70; // how fast binary digits flicker
const REVEAL_MS = 180; // delay between each char locking in
const HOLD_MS = 4000; // pause on final text before restarting

function randomBit() {
  return Math.random() > 0.5 ? "1" : "0";
}

export default function BinaryDecodeText() {
  const [locked, setLocked] = useState(0);
  const [scrambled, setScrambled] = useState(() =>
    Array.from({length: TARGET.length}, randomBit)
  );
  const [done, setDone] = useState(false);

  const lockedRef = useRef(0);
  const timers = useRef([]);

  useEffect(() => {
    function clearAll() {
      timers.current.forEach(id => {
        clearInterval(id);
        clearTimeout(id);
      });
      timers.current = [];
    }

    function startCycle() {
      clearAll();
      lockedRef.current = 0;
      setLocked(0);
      setDone(false);
      setScrambled(Array.from({length: TARGET.length}, randomBit));

      // Flicker unresolved chars
      const scrambleId = setInterval(() => {
        setScrambled(
          Array.from({length: TARGET.length}, (_, i) =>
            i < lockedRef.current ? TARGET[i] : randomBit()
          )
        );
      }, SCRAMBLE_MS);

      // Reveal one char at a time
      const revealId = setInterval(() => {
        lockedRef.current += 1;
        setLocked(lockedRef.current);

        if (lockedRef.current >= TARGET.length) {
          clearInterval(scrambleId);
          clearInterval(revealId);
          setDone(true);
          const holdId = setTimeout(startCycle, HOLD_MS);
          timers.current.push(holdId);
        }
      }, REVEAL_MS);

      timers.current.push(scrambleId, revealId);
    }

    startCycle();
    return clearAll;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span className={`bdt-root${done ? " bdt-done" : ""}`}>
      <span className="bdt-prompt">&gt;&gt;&gt;&nbsp;</span>
      {Array.from(TARGET).map((ch, i) => {
        const isLocked = i < locked;
        return (
          <span
            key={i}
            className={`bdt-char ${isLocked ? "locked" : "binary"}`}
          >
            {isLocked ? ch : scrambled[i]}
          </span>
        );
      })}
      <span className="bdt-cursor"></span>
    </span>
  );
}

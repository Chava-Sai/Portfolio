import React, {useEffect, useRef, useState} from "react";
import "./NeuralNetworkAnim.scss";

/* ─── Topology ─────────────────────────────────────────────────────────── */
const LAYERS = [
  {label: "Input", n: 4, x: 72},
  {label: "Hidden 1", n: 5, x: 210},
  {label: "Hidden 2", n: 5, x: 360},
  {label: "Output", n: 3, x: 492}
];
const VW = 564,
  VH = 560;
const NR = 17; // base neuron radius

const TRAVEL_MS = 3200; // ms per layer hop
const HOLD_MS = 1400; // pause after output lights up
const CYCLE_MS = 3 * TRAVEL_MS + HOLD_MS; // one full forward pass

/* ─── Pre-compute positions and connections ─────────────────────────────── */
function spread(n, top = 52, bot = 60) {
  const span = VH - top - bot;
  if (n === 1) return [top + span / 2];
  return Array.from({length: n}, (_, i) => top + (span / (n - 1)) * i);
}

const NET = LAYERS.map(l => ({...l, ys: spread(l.n)}));

const ALL_LINES = []; // static background lines
NET.forEach((layer, li) => {
  if (li >= NET.length - 1) return;
  const next = NET[li + 1];
  layer.ys.forEach((y1, si) => {
    next.ys.forEach((y2, di) => {
      ALL_LINES.push({x1: layer.x, y1, x2: next.x, y2, li, si, di});
    });
  });
});

/* ─── Component ─────────────────────────────────────────────────────────── */
export default function NeuralNetworkAnim() {
  const [ms, setMs] = useState(0);
  const t0 = useRef(null);
  const raf = useRef(null);

  useEffect(() => {
    t0.current = performance.now();
    const tick = now => {
      setMs(now - t0.current);
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  /* ── Derive state from clock ─────────────────────────────────────────── */
  const totalMs = CYCLE_MS * NET[0].n; // full cycle for all input neurons
  const t = ms % totalMs;
  const inIdx = Math.floor(t / CYCLE_MS); // which input neuron (0-3)
  const localT = t % CYCLE_MS;
  const stage = Math.min(Math.floor(localT / TRAVEL_MS), 3); // 0-3
  const prog = (localT % TRAVEL_MS) / TRAVEL_MS; // 0→1

  /* Which neurons are "lit" */
  const lit = new Set();
  lit.add(`0-${inIdx}`);
  if (stage >= 1) NET[1].ys.forEach((_, ni) => lit.add(`1-${ni}`));
  if (stage >= 2) NET[2].ys.forEach((_, ni) => lit.add(`2-${ni}`));
  if (stage >= 3) NET[3].ys.forEach((_, ni) => lit.add(`3-${ni}`));

  /* Moving signal dots this frame */
  const dots = [];
  if (stage === 0) {
    // Input[inIdx] ─► all H1
    const y1 = NET[0].ys[inIdx];
    NET[1].ys.forEach((y2, di) => {
      dots.push({
        x: NET[0].x + (NET[1].x - NET[0].x) * prog,
        y: y1 + (y2 - y1) * prog,
        k: `d0-${di}`
      });
    });
  } else if (stage === 1) {
    // All H1 ─► all H2
    NET[1].ys.forEach((y1, si) => {
      NET[2].ys.forEach((y2, di) => {
        dots.push({
          x: NET[1].x + (NET[2].x - NET[1].x) * prog,
          y: y1 + (y2 - y1) * prog,
          k: `d1-${si}-${di}`
        });
      });
    });
  } else if (stage === 2) {
    // All H2 ─► all Output
    NET[2].ys.forEach((y1, si) => {
      NET[3].ys.forEach((y2, di) => {
        dots.push({
          x: NET[2].x + (NET[3].x - NET[2].x) * prog,
          y: y1 + (y2 - y1) * prog,
          k: `d2-${si}-${di}`
        });
      });
    });
  }

  return (
    <div className="nn-wrapper" aria-hidden="true">
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        className="nn-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Input — orange */}
          <radialGradient id="g-in" cx="37%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#fff3e0" />
            <stop offset="26%" stopColor="#ffaa44" />
            <stop offset="70%" stopColor="#c45200" />
            <stop offset="100%" stopColor="#3d1200" />
          </radialGradient>
          <radialGradient id="g-in-lit" cx="37%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="18%" stopColor="#ffd080" />
            <stop offset="58%" stopColor="#ff8800" />
            <stop offset="100%" stopColor="#3d1200" />
          </radialGradient>

          {/* Hidden — purple */}
          <radialGradient id="g-hid" cx="37%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ece8ff" />
            <stop offset="26%" stopColor="#8474ff" />
            <stop offset="70%" stopColor="#3e34a0" />
            <stop offset="100%" stopColor="#1c185a" />
          </radialGradient>
          <radialGradient id="g-hid-lit" cx="37%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="18%" stopColor="#d4ccff" />
            <stop offset="55%" stopColor="#8474ff" />
            <stop offset="100%" stopColor="#1c185a" />
          </radialGradient>

          {/* Output — green */}
          <radialGradient id="g-out" cx="37%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#e6fff3" />
            <stop offset="26%" stopColor="#3fd68a" />
            <stop offset="70%" stopColor="#1a7a4a" />
            <stop offset="100%" stopColor="#082818" />
          </radialGradient>
          <radialGradient id="g-out-lit" cx="37%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="18%" stopColor="#b0ffe0" />
            <stop offset="55%" stopColor="#3fd68a" />
            <stop offset="100%" stopColor="#082818" />
          </radialGradient>

          {/* Glow filters */}
          <filter id="f-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="f-glow-lg" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Background connection lines ──────────────────────────────── */}
        {ALL_LINES.map((c, i) => {
          const active =
            (stage === 0 && c.li === 0 && c.si === inIdx) ||
            (stage === 1 && c.li === 1) ||
            (stage === 2 && c.li === 2);
          return (
            <line
              key={i}
              x1={c.x1}
              y1={c.y1}
              x2={c.x2}
              y2={c.y2}
              stroke={
                active ? "rgba(168,148,255,0.45)" : "rgba(130,108,255,0.13)"
              }
              strokeWidth={active ? 1.3 : 0.8}
            />
          );
        })}

        {/* ── Moving signal dots ───────────────────────────────────────── */}
        {dots.map(d => (
          <circle key={d.k} cx={d.x} cy={d.y} r="3.4" className="nn-dot" />
        ))}

        {/* ── Neurons ─────────────────────────────────────────────────── */}
        {NET.map((layer, li) => {
          const isIn = li === 0;
          const isOut = li === NET.length - 1;

          const gradNormal = isIn
            ? "url(#g-in)"
            : isOut
            ? "url(#g-out)"
            : "url(#g-hid)";
          const gradLit = isIn
            ? "url(#g-in-lit)"
            : isOut
            ? "url(#g-out-lit)"
            : "url(#g-hid-lit)";
          const ringCol = isIn
            ? "rgba(255,170,68,0.9)"
            : isOut
            ? "rgba(63,214,138,0.9)"
            : "rgba(148,130,255,0.9)";
          const strokeNorm = isIn
            ? "rgba(255,140,0,0.45)"
            : isOut
            ? "rgba(63,214,138,0.45)"
            : "rgba(168,155,255,0.45)";
          const strokeLit = isIn
            ? "rgba(255,170,68,0.85)"
            : isOut
            ? "rgba(63,214,138,0.85)"
            : "rgba(180,165,255,0.85)";

          return layer.ys.map((y, ni) => {
            const active = lit.has(`${li}-${ni}`);
            const r = active ? NR + 4 : NR;

            return (
              <g key={`n${li}-${ni}`}>
                {active && (
                  <>
                    {/* Inner ring */}
                    <circle
                      cx={layer.x}
                      cy={y}
                      r={NR + 9}
                      fill="none"
                      stroke={ringCol}
                      strokeWidth="1.6"
                      opacity="0.65"
                    />
                    {/* Outer halo */}
                    <circle
                      cx={layer.x}
                      cy={y}
                      r={NR + 20}
                      fill="none"
                      stroke={ringCol}
                      strokeWidth="0.9"
                      opacity="0.25"
                    />
                  </>
                )}
                <circle
                  cx={layer.x}
                  cy={y}
                  r={r}
                  fill={active ? gradLit : gradNormal}
                  stroke={active ? strokeLit : strokeNorm}
                  strokeWidth="1.6"
                  filter={active ? "url(#f-glow-lg)" : "url(#f-glow)"}
                />
              </g>
            );
          });
        })}

        {/* ── Labels ──────────────────────────────────────────────────── */}
        {NET.map((layer, li) => (
          <text
            key={`lbl${li}`}
            x={layer.x}
            y={VH - 14}
            textAnchor="middle"
            className="nn-label"
          >
            {layer.label}
          </text>
        ))}
      </svg>
    </div>
  );
}

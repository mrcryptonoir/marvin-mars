import { useEffect, useRef, useState } from 'react';
import { useScrollPass, lerp } from '../lib/scroll';
import Img from './ui/Img';

/** Drift reads as motion on a wide screen and as clipping on a narrow one. */
function useDriftAllowed() {
  const [ok, setOk] = useState(() =>
    typeof window === 'undefined' ? true : window.innerWidth > 760
  );
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 761px)');
    const on = () => setOk(mq.matches);
    on();
    mq.addEventListener('change', on);
    return () => mq.removeEventListener('change', on);
  }, []);
  return ok;
}

/**
 * Type wall: enormous condensed lines with square media set into the letter
 * gaps, each line drifting a different distance as the section passes.
 */
export default function Slab({ lines, invert = false, note, id }) {
  const drift = useDriftAllowed();
  const els = useRef([]);

  const ref = useScrollPass((p) => {
    els.current.forEach((el, i) => {
      if (!el) return;
      const dir = i % 2 === 0 ? -1 : 1;
      const amount = dir * (70 + i * 26);
      el.style.transform = `translate3d(${lerp(p, amount, -amount)}px, 0, 0)`;
    });
  }, drift);

  return (
    <section
      className={`sec sec--tight slabwall ${invert ? 'slabwall--invert sec--bone' : ''}`}
      ref={ref}
      id={id}
    >
      <div className="slabwall__inner">
        {lines.map((parts, li) => (
          <div
            className="slabwall__line slab"
            key={li}
            ref={(el) => { els.current[li] = el; }}
          >
            {parts.map((p, i) =>
              p.img ? (
                <span className="slabwall__tile" key={i}>
                  <Img name={p.img} alt="" />
                </span>
              ) : (
                <span key={i}>{p.t}</span>
              )
            )}
          </div>
        ))}
      </div>
      {note && <p className="slabwall__note mono">{note}</p>}
    </section>
  );
}

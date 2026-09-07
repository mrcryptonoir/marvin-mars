import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
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
 * Sadu-style type wall: enormous condensed lines with square media set into the
 * letter gaps, each line drifting a different distance as the section passes.
 */
export default function Slab({ lines, invert = false, note, id }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const drift = useDriftAllowed();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section
      className={`sec sec--tight slabwall ${invert ? 'slabwall--invert sec--bone' : ''}`}
      ref={ref}
      id={id}
    >
      <div className="slabwall__inner">
        {lines.map((parts, li) => (
          <Line
            key={li}
            parts={parts}
            index={li}
            progress={scrollYProgress}
            still={reduce || !drift}
          />
        ))}
      </div>
      {note && <p className="slabwall__note mono">{note}</p>}
    </section>
  );
}

function Line({ parts, index, progress, still }) {
  const dir = index % 2 === 0 ? -1 : 1;
  const amount = still ? 0 : 70 + index * 26;
  const x = useTransform(progress, [0, 1], [`${dir * amount}px`, `${-dir * amount}px`]);

  return (
    <motion.div className="slabwall__line slab" style={{ x }}>
      {parts.map((p, i) =>
        p.img ? (
          <span className="slabwall__tile" key={i}>
            <Img name={p.img} alt="" ratio="1 / 1" />
          </span>
        ) : (
          <span key={i}>{p.t}</span>
        )
      )}
    </motion.div>
  );
}

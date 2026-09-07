import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import Img from './ui/Img';

/**
 * Sadu-style type wall: enormous condensed lines with square media set into the
 * letter gaps, each line drifting a different distance as the section passes.
 */
export default function Slab({ lines, invert = false, note, id }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  return (
    <section
      className={`sec sec--tight slabwall ${invert ? 'slabwall--invert sec--bone' : ''}`}
      ref={ref}
      id={id}
    >
      <div className="slabwall__inner">
        {lines.map((parts, li) => (
          <Line key={li} parts={parts} index={li} progress={scrollYProgress} reduce={reduce} />
        ))}
      </div>
      {note && <p className="slabwall__note mono">{note}</p>}
    </section>
  );
}

function Line({ parts, index, progress, reduce }) {
  const dir = index % 2 === 0 ? -1 : 1;
  const amount = reduce ? 0 : 70 + index * 26;
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

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import Reveal from './ui/Reveal';
import Plate from './ui/Plate';
import Img from './ui/Img';

const LEGION = [
  { img: 'legion-01', name: 'The Wall', code: 'FORMATION · SCUTUM' },
  { img: 'legion-02', name: 'The Standard', code: 'PLANT · SOL 001' },
  { img: 'legion-03', name: 'The Long Look', code: 'REST · CANYON RIM' },
  { img: 'legion-04', name: 'The Charge', code: 'ADVANCE · 0.38 G' },
];

export default function Legion() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['4%', reduce ? '4%' : '-22%']);

  return (
    <section className="sec sec--bone legion" id="legion" ref={ref}>
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label label--ink">Chapter III — The legion</Reveal>
          <Reveal className="sec-head__n" delay={80}>LEGIO I MARTIA / FIELD PLATES</Reveal>
        </div>

        <div className="legion__top">
          <Reveal>
            <h2 className="legion__h serif-display">
              One dog is a joke.
              <br />
              <em>A legion</em> is a position.
            </h2>
          </Reveal>
          <Reveal delay={90} className="legion__body measure">
            <p>
              Every holder gets the same helmet. There is no tiered art, no rarity
              ladder, no committee deciding who counts. The armour is a uniform on
              purpose — the point of a legion is that the man beside you is carrying
              the identical shield.
            </p>
            <p className="mono legion__meta">
              REFERENCE SHEET · FRONT / REAR / THREE-QUARTER · V3
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal className="legion__sheet wrap" delay={60}>
        <Plate
          name="legion-sheet"
          ratio="1366 / 768"
          alt="Character reference sheet: front, rear and three-quarter views"
          left="MODEL SHEET · I MARTIA"
          right="ISSUE V3 · APPROVED"
        />
      </Reveal>

      <div className="legion__railwrap">
        <motion.div className="legion__rail" style={{ x }}>
          {LEGION.map((l) => (
            <figure className="legion__card" key={l.img}>
              <div className="legion__cardimg">
                <Img name={l.img} alt={l.name} ratio="3 / 4" />
              </div>
              <figcaption>
                <strong>{l.name}</strong>
                <span className="mono">{l.code}</span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

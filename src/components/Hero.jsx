import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import Img from './ui/Img';
import { LINKS } from '../data/site';

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '16%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.14]);
  const titleY = useTransform(scrollYProgress, [0, 1], ['0px', reduce ? '0px' : '-90px']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, reduce ? 1 : 0]);

  return (
    <section className="hero" id="top" ref={ref}>
      <motion.div className="hero__media" style={{ y: imgY, scale: imgScale }}>
        <picture>
          <source media="(max-width: 760px)" srcSet={`${import.meta.env.BASE_URL}art/hero-mobile.webp`} />
          <Img name="hero-mars-ridge" alt="A small legionary figure on a Martian ridge at dusk" eager />
        </picture>
      </motion.div>

      <div className="hero__scrim" />
      <div className="hero__reticle" aria-hidden="true">
        <span className="hero__ret hero__ret--l">LEFT NAVCAM</span>
        <span className="hero__ret hero__ret--r">RIGHT NAVCAM</span>
        <span className="hero__ret hero__ret--t">FRONT HAZCAM</span>
        <span className="hero__ret hero__ret--b">SOL 0001 · JEZERO W</span>
      </div>

      <motion.div className="hero__body wrap" style={{ y: titleY, opacity: fade }}>
        <p className="hero__eyebrow mono">
          <span className="hero__dot" /> Robinhood Chain · Arbitrum Orbit L2
        </p>

        <h1 className="hero__title serif-display">
          FOUR HUNDRED
          <br />
          METERS <em>on</em> MARS
        </h1>

        <div className="hero__foot">
          <p className="hero__lede">
            The first dog to hold ground on another planet — and the first meme
            minted on the chain built for real assets.
          </p>
          <div className="hero__actions">
            <a className="btn btn--neon" href={LINKS.buy}>Buy $MARVIN</a>
            <a className="btn btn--ghost" href="#dossier">Read the dossier</a>
          </div>
        </div>
      </motion.div>

      <div className="hero__scroll mono" aria-hidden="true">SCROLL</div>
    </section>
  );
}

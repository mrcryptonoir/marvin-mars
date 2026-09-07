import { useRef } from 'react';
import { useScrollPass, lerp } from '../lib/scroll';
import { LINKS } from '../data/site';

export default function Hero() {
  const media = useRef(null);
  const body = useRef(null);

  const ref = useScrollPass((p) => {
    if (media.current) {
      media.current.style.transform = `translate3d(0, ${lerp(p, 0, 14)}%, 0) scale(${lerp(p, 1, 1.12)})`;
    }
    if (body.current) {
      body.current.style.transform = `translate3d(0, ${lerp(p, 0, -80)}px, 0)`;
      body.current.style.opacity = String(Math.max(0, 1 - p * 1.5));
    }
  });

  return (
    <section className="hero" id="top" ref={ref}>
      <div className="hero__media" ref={media}>
        <picture>
          <source media="(max-width: 760px)" srcSet="/art/hero-mobile@sm.webp 860w, /art/hero-mobile.webp 1600w" />
          <img
            src="/art/hero-mars-ridge.webp"
            srcSet="/art/hero-mars-ridge@sm.webp 860w, /art/hero-mars-ridge.webp 1600w"
            sizes="100vw"
            alt="A small legionary figure on a Martian ridge at dusk"
            fetchPriority="high"
            decoding="sync"
          />
        </picture>
      </div>

      <div className="hero__scrim" />
      <div className="hero__reticle" aria-hidden="true">
        <span className="hero__ret hero__ret--l">LEFT NAVCAM</span>
        <span className="hero__ret hero__ret--r">RIGHT NAVCAM</span>
        <span className="hero__ret hero__ret--t">FRONT HAZCAM</span>
        <span className="hero__ret hero__ret--b">SOL 0001 · JEZERO W</span>
      </div>

      <div className="hero__body wrap" ref={body}>
        <p className="hero__eyebrow mono">
          <span className="hero__dot" /> Robinhood Chain · Arbitrum Orbit L2
        </p>

        <h1 className="hero__title display">
          MARVIN
          <br />
          <em>goes to</em> MARS
        </h1>

        <div className="hero__foot">
          <p className="hero__lede">
            Elon’s dog in a Roman helmet, on the layer 2 where tokenized stocks settle.
          </p>
          <div className="hero__actions">
            <a className="btn btn--neon" href={LINKS.buy}>Buy $MARVIN</a>
            <a className="btn btn--ghost" href="#dossier">Read the dossier</a>
          </div>
        </div>
      </div>

      <div className="hero__scroll mono" aria-hidden="true">SCROLL</div>
    </section>
  );
}

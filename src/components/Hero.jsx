import { useEffect, useRef } from 'react';
import { useScrollPass, lerp, passOut } from '../lib/scroll';
import { LINKS } from '../data/site';

export default function Hero() {
  const media = useRef(null);
  const body = useRef(null);
  const clip = useRef(null);

  // Held back until after load so the poster, not the video, is the LCP.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const v = clip.current;
    if (!v) return;
    const start = () => {
      v.src = window.matchMedia('(max-width: 760px)').matches
        ? '/video/hero-mobile-loop.mp4'
        : '/video/hero-loop.mp4';
      const p = v.play();
      if (p) p.catch(() => {});
    };
    const t = setTimeout(start, 900);
    return () => {
      clearTimeout(t);
      v.pause();
    };
  }, []);

  const ref = useScrollPass((_, rect) => {
    const p = passOut(rect);
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
        {/* The clip starts on the still above, so it can fade in over the top
            without a jump and without ever delaying the LCP. */}
        <video
          ref={clip}
          className="hero__clip"
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onPlaying={(e) => e.currentTarget.classList.add('is-live')}
        />
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
          <span className="hero__dot" /> Elon's dog · Legio I Martia · Robinhood Chain
        </p>

        <h1 className="hero__title display">
          MARVIN
          <br />
          <em>goes to</em> MARS
        </h1>

        <div className="hero__foot">
          <p className="hero__lede">
            A small black dog in a Roman helmet, owned by the man trying hardest
            to leave this planet. Fixed supply, no presale, no adults in the room.
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

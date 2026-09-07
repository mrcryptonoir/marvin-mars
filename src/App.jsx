import { useEffect } from 'react';
import Lenis from 'lenis';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Dossier from './components/Dossier';
import Slab from './components/Slab';
import Chain from './components/Chain';
import Legion from './components/Legion';
import MissionLog from './components/MissionLog';
import Supply from './components/Supply';
import Transmissions from './components/Transmissions';
import HowToBuy from './components/HowToBuy';
import Faq from './components/Faq';
import Footer from './components/Footer';

import './styles/global.css';
import './styles/sections.css';

const SLAB_A = [
  [{ t: 'HE PUT ON' }, { img: 'slab-tile-1' }, { t: 'A HELMET' }],
  [{ t: 'AND THE WHOLE' }, { img: 'slab-tile-3' }, { t: 'MARKET' }],
  [{ t: 'FOLLOWED HIM' }, { img: 'slab-tile-2' }, { t: 'OFF-WORLD.' }],
];

const SLAB_B = [
  [{ t: 'ONE HUNDRED' }, { img: 'sol-04' }, { t: 'MILLISECONDS' }],
  [{ t: 'PER BLOCK.' }, { img: 'transmission-02' }, { t: 'ZERO' }],
  [{ t: 'PERMISSION' }, { img: 'legion-04' }, { t: 'REQUIRED.' }],
];

export default function App() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, touchMultiplier: 1.6 });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onAnchor = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -70 });
    };
    document.addEventListener('click', onAnchor);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('click', onAnchor);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      <Nav />

      <main>
        <Hero />
        <Marquee />
        <Dossier />
        <Slab lines={SLAB_A} invert note="FIG. 1 — THE ONLY THING A MEME OWNS IS TIMING" />
        <Chain />
        <Legion />
        <Slab lines={SLAB_B} note="FIG. 2 — SPEC SHEET, SHOUTED" />
        <MissionLog />
        <Supply />
        <Transmissions />
        <HowToBuy />
        <Faq />
      </main>

      <Marquee items={['$MARVIN', 'LEGIO I MARTIA', 'ROBINHOOD CHAIN', 'FOUR HUNDRED METERS', 'ON MARS']} speed={30} />
      <Footer />
    </>
  );
}

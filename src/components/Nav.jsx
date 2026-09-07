import { useEffect, useState } from 'react';
import { LINKS } from '../data/site';

const ITEMS = [
  { href: '#dossier', label: 'Dossier' },
  { href: '#chain', label: 'Chain' },
  { href: '#legion', label: 'Legion' },
  { href: '#log', label: 'Mission log' },
  { href: '#supply', label: 'Supply' },
];

export default function Nav() {
  const [lifted, setLifted] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setLifted(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`nav ${lifted ? 'is-lifted' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__mark" onClick={() => setOpen(false)}>
          <span className="nav__glyph" aria-hidden="true" />
          <span className="nav__word">MARVIN</span>
          <span className="nav__sub">/ RHC</span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {ITEMS.map((i) => (
            <a key={i.href} href={i.href}>{i.label}</a>
          ))}
        </nav>

        <div className="nav__right">
          <a className="btn btn--neon nav__cta" href={LINKS.buy}>Buy $MARVIN</a>
          <button
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span style={{ transform: open ? 'translateY(4px) rotate(45deg)' : 'none' }} />
            <span style={{ transform: open ? 'translateY(-4px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </div>

      <div className={`nav__sheet ${open ? 'is-open' : ''}`}>
        {ITEMS.map((i) => (
          <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="serif-display">
            {i.label}
          </a>
        ))}
        <a className="btn btn--neon" href={LINKS.buy} onClick={() => setOpen(false)}>
          Buy $MARVIN
        </a>
      </div>

      <div className="nav__progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  );
}

import { useCallback, useEffect, useRef, useState } from 'react';
import { CAMERAS, DEFAULT_CAM } from '../data/cameras';
import {
  coordinatedMarsTime,
  formatMtc,
  lightDelaySeconds,
  formatDelay,
  solsSince,
} from '../lib/marstime';
import { LINKS } from '../data/site';
import { clipsWanted } from '../lib/motion';

const LAUNCH = '2026-07-01';
const ACQUIRE_MS = 620;

const readClock = () => ({
  mtc: formatMtc(coordinatedMarsTime()),
  delay: formatDelay(lightDelaySeconds()),
  sol: solsSince(LAUNCH),
});

export default function CameraDeck() {
  const [active, setActive] = useState(DEFAULT_CAM);
  const [acquiring, setAcquiring] = useState(false);
  const [live, setLive] = useState(false);
  const [clock, setClock] = useState(readClock);

  const video = useRef(null);
  const rail = useRef(null);
  const timer = useRef(null);
  const cam = CAMERAS[active];

  /* The clock is the one reading on this page that is genuinely true. */
  useEffect(() => {
    const id = setInterval(() => setClock(readClock()), 1000);
    return () => clearInterval(id);
  }, []);

  const select = useCallback((index) => {
    const next = CAMERAS[index];
    if (!next || next.offline) return;
    setActive(index);
    setLive(false);
    setAcquiring(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAcquiring(false), ACQUIRE_MS);
  }, []);

  useEffect(() => () => clearTimeout(timer.current), []);

  /* Number keys jump, arrows walk past the dead camera. */
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;

      if (/^[0-9]$/.test(e.key)) {
        const n = e.key === '0' ? 9 : Number(e.key) - 1;
        if (CAMERAS[n] && !CAMERAS[n].offline) {
          e.preventDefault();
          select(n);
        }
        return;
      }
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const step = e.key === 'ArrowRight' ? 1 : -1;
      for (let i = 1; i <= CAMERAS.length; i++) {
        const n = (active + step * i + CAMERAS.length * 2) % CAMERAS.length;
        if (!CAMERAS[n].offline) {
          select(n);
          break;
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, select]);

  /* One video element for the whole deck; only its source changes. */
  useEffect(() => {
    const v = video.current;
    if (!v || !cam.clip) return;
    if (!clipsWanted()) return;
    v.src = `${import.meta.env.BASE_URL}video/${cam.clip}.mp4`;
    const p = v.play();
    if (p) p.catch(() => {});
  }, [cam.clip]);

  /* Keep the selected thumbnail in view when the keyboard drives the rail. */
  useEffect(() => {
    const el = rail.current?.querySelector('[data-on="true"]');
    el?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }, [active]);

  return (
    <section className="deck" id="top">
      {/* Stage and pitch share a frame, so the pitch can overlay the feed on a
          wide screen and stack beneath it on a narrow one, from one markup. */}
      <div className="deck__frame">
        <div className="deck__stage">
          <div className={`feed ${cam.ir ? 'feed--ir' : ''} ${acquiring ? 'is-acquiring' : ''}`}>
            <img
              className="feed__poster"
              src={`${import.meta.env.BASE_URL}art/${cam.poster}.webp`}
              srcSet={`${import.meta.env.BASE_URL}art/${cam.poster}@sm.webp 860w, ${import.meta.env.BASE_URL}art/${cam.poster}.webp 1600w`}
              sizes="100vw"
              alt={`Camera ${cam.id}, ${cam.name}`}
              fetchPriority="high"
              decoding="sync"
            />
            {cam.clip && (
              <video
                ref={video}
                className={`feed__video ${live && !acquiring ? 'is-live' : ''}`}
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
                onPlaying={() => setLive(true)}
              />
            )}

            <div className="feed__grade" aria-hidden="true" />
            <div className="feed__scan" aria-hidden="true" />
            <div className="feed__vig" aria-hidden="true" />
          </div>

          {/* On-screen display. Furniture, except the clock. */}
          <div className="osd" aria-hidden="true">
            <div className="osd__tl mono">
              <span className={`osd__rec ${cam.clip ? '' : 'osd__rec--still'}`} />
              {cam.clip ? 'REC' : 'STILL'}
              <span className="osd__cam">CAM {cam.id} · {cam.name}</span>
            </div>
            <div className="osd__tr mono">{cam.note}</div>
            <div className="osd__bl mono">SOL {String(clock.sol).padStart(4, '0')}</div>
            <div className="osd__br mono">
              <span className="osd__live">{clock.mtc}</span> MTC
              <span className="osd__sep">·</span>DELAY ~{clock.delay}
            </div>
            <span className="osd__tick osd__tick--tl" />
            <span className="osd__tick osd__tick--tr" />
            <span className="osd__tick osd__tick--bl" />
            <span className="osd__tick osd__tick--br" />
          </div>

          {acquiring && <div className="feed__acquire mono">ACQUIRING SIGNAL</div>}
        </div>

        <div className="deck__title">
          <h1 className="deck__h display">
            MARVIN
            <br />
            <em>goes to</em> MARS
          </h1>
          <p className="deck__lede">
            Elon Musk’s dog, in a Roman helmet. Fixed supply, no presale, no
            adults in the room.
          </p>
          <div className="deck__actions">
            <a className="btn btn--neon" href={LINKS.buy}>Buy $MARVIN</a>
            <a className="btn btn--ghost" href="#dossier">Read the dossier</a>
          </div>
        </div>
      </div>

      <div className="deck__rail" ref={rail} role="tablist" aria-label="Surface cameras">
        {CAMERAS.map((c, i) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={i === active}
            aria-label={`Camera ${c.id}, ${c.name}${c.offline ? ', offline' : ''}`}
            data-on={i === active}
            disabled={c.offline}
            className={`thumb ${i === active ? 'is-on' : ''} ${c.offline ? 'is-dead' : ''} ${c.ir ? 'thumb--ir' : ''}`}
            onClick={() => select(i)}
          >
            <img
              src={`${import.meta.env.BASE_URL}art/${c.poster}@sm.webp`}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <span className="thumb__id mono">{c.id}</span>
            {c.offline && <span className="thumb__dead mono">NO SIGNAL</span>}
          </button>
        ))}
      </div>

      <p className="deck__hint mono">Select a camera, or press 1–0</p>
    </section>
  );
}

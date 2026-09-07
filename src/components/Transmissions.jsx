import Reveal from './ui/Reveal';
import Img from './ui/Img';

/* Tall and wide cells alternate in pairs so the four-column wall packs solid. */
const FRAMES = [
  { img: 'transmission-01', tall: true, cap: 'TX 001 · CABIN' },
  { img: 'transmission-02', tall: true, cap: 'TX 002 · FLAG' },
  { img: 'transmission-04', cap: 'TX 004 · OUTPOST' },
  { img: 'starship-landing', cap: 'TX 007 · DESCENT' },
  { img: 'transmission-03', tall: true, cap: 'TX 003 · REST' },
  { img: 'slab-tile-2', tall: true, cap: 'TX 008 · TRACE' },
  { img: 'transmission-05', cap: 'TX 005 · ROVER' },
  { img: 'transmission-06', cap: 'TX 006 · THE RIM' },
];

export default function Transmissions() {
  return (
    <section className="sec transmissions" id="transmissions">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label">Chapter VI — Transmissions</Reveal>
          <Reveal className="sec-head__n" delay={80}>DOWNLINK / UNSORTED</Reveal>
        </div>
      </div>

      <div className="tx__grid">
        {FRAMES.map((f, i) => (
          <Reveal
            className={`tx__cell ${f.tall ? 'tx__cell--tall' : 'tx__cell--wide'}`}
            key={f.img}
            delay={(i % 4) * 70}
          >
            <div className="tx__frame">
              <Img name={f.img} alt={f.cap} />
              <span className="tx__cap mono">{f.cap}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

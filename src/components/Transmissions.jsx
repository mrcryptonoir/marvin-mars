import Reveal from './ui/Reveal';
import Img from './ui/Img';

const FRAMES = [
  { img: 'transmission-01', ratio: '3 / 4', cap: 'TX 001 · CABIN', span: 1 },
  { img: 'transmission-04', ratio: '16 / 9', cap: 'TX 004 · OUTPOST', span: 2 },
  { img: 'transmission-02', ratio: '3 / 4', cap: 'TX 002 · FLAG' },
  { img: 'transmission-05', ratio: '16 / 9', cap: 'TX 005 · ROVER', span: 2 },
  { img: 'transmission-03', ratio: '3 / 4', cap: 'TX 003 · REST' },
  { img: 'transmission-06', ratio: '16 / 9', cap: 'TX 006 · THE RIM', span: 2 },
  { img: 'starship-landing', ratio: '16 / 9', cap: 'TX 007 · DESCENT', span: 2 },
  { img: 'slab-tile-2', ratio: '1 / 1', cap: 'TX 008 · TRACE' },
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
            className={`tx__cell ${f.span === 2 ? 'tx__cell--wide' : ''}`}
            key={f.img}
            delay={(i % 3) * 80}
          >
            <div className="tx__frame">
              <Img name={f.img} alt={f.cap} ratio={f.ratio} />
              <span className="tx__cap mono">{f.cap}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import Reveal from './ui/Reveal';
import Img from './ui/Img';

/* Tall and wide cells alternate in pairs so the four-column wall packs solid. */
const FRAMES = [
  { img: 'transmission-01', tall: true },
  { img: 'transmission-02', tall: true },
  { img: 'transmission-04' },
  { img: 'starship-landing' },
  { img: 'transmission-03', tall: true },
  { img: 'slab-tile-2', tall: true },
  { img: 'transmission-05' },
  { img: 'transmission-06' },
];

export default function Transmissions() {
  return (
    <section className="sec transmissions" id="transmissions">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label">Chapter VI / Transmissions</Reveal>
          <Reveal className="sec-head__n" delay={80}>DOWNLINK · UNSORTED</Reveal>
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
              <Img name={f.img} alt="" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import Reveal from './ui/Reveal';
import Img from './ui/Img';
import Loop from './ui/Loop';

/* Tall and wide cells alternate in pairs so the four-column wall packs solid.
   Roughly every third cell moves, which reads as a live feed rather than a
   gallery without asking the visitor to download eight videos. */
const FRAMES = [
  { img: 'transmission-01', tall: true },
  { img: 'transmission-02', tall: true },
  { img: 'transmission-04', loop: 'tx-console' },
  { img: 'starship-landing', loop: 'starship-loop' },
  { img: 'transmission-03', tall: true },
  { img: 'slab-tile-2', tall: true },
  { img: 'transmission-05', loop: 'tx-rover' },
  { img: 'robots-marvin' },
  { img: 'owner-console', loop: 'owner-console-loop' },
  { img: 'legion-03', tall: true },
  { img: 'transmission-06' },
  { img: 'plate-archive-alt', tall: true },
];

export default function Transmissions() {
  return (
    <section className="sec transmissions" id="transmissions">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label">Chapter VII / Transmissions</Reveal>
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
              {f.loop ? (
                <Loop name={f.loop} poster={f.img} alt="" />
              ) : (
                <Img name={f.img} alt="" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

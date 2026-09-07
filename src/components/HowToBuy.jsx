import Reveal from './ui/Reveal';
import { BUY_STEPS, LINKS } from '../data/site';

export default function HowToBuy() {
  return (
    <section className="sec buy" id="buy">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label">Chapter VIII / Boarding</Reveal>
          <Reveal className="sec-head__n" delay={80}>FOUR STEPS · NO CREW REQUIRED</Reveal>
        </div>

        <Reveal>
          <h2 className="buy__h display">
            Getting on is <em>easier</em> than getting there
          </h2>
        </Reveal>

        <div className="buy__grid">
          {BUY_STEPS.map((s, i) => (
            <Reveal className="buy__step" key={s.n} delay={i * 70}>
              <span className="buy__n slab">{s.n}</span>
              <h3 className="buy__title">{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="buy__actions">
          <a className="btn btn--neon" href={LINKS.chart} target="_blank" rel="noreferrer">
            Open the chart
          </a>
          <a className="btn btn--ghost" href={LINKS.telegram} target="_blank" rel="noreferrer">
            Join the legion
          </a>
        </Reveal>
      </div>
    </section>
  );
}

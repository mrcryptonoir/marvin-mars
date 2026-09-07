import Reveal from './ui/Reveal';
import Img from './ui/Img';
import { MISSION_LOG } from '../data/site';

export default function MissionLog() {
  return (
    <section className="sec log" id="log">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label">Chapter IV — Mission log</Reveal>
          <Reveal className="sec-head__n" delay={80}>FLIGHT PLAN / OPEN RECORD</Reveal>
        </div>

        <div className="log__list">
          {MISSION_LOG.map((e, i) => (
            <Reveal className="log__row" key={e.sol} delay={i * 70}>
              <div className="log__sol">
                <span className="mono">{e.sol}</span>
                <span className={`log__status log__status--${e.status.toLowerCase()} mono`}>
                  {e.status}
                </span>
              </div>

              <div className="log__main">
                <h3 className="log__title serif-display">{e.title}</h3>
                <p className="log__body measure">{e.body}</p>
              </div>

              <div className="log__thumb">
                <Img name={e.img} alt={e.title} ratio="1 / 1" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

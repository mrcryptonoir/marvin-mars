import { TELEMETRY } from '../data/site';

export default function Marquee({ items = TELEMETRY, invert = false, speed = 46 }) {
  const run = [...items, ...items];
  return (
    <div className={`marquee ${invert ? 'marquee--invert' : ''}`}>
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        {run.map((t, i) => (
          <span className="marquee__item mono" key={i}>
            {t}
            <i aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}

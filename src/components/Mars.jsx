import Reveal from './ui/Reveal';
import Loop from './ui/Loop';
import { MARS_FIGURES } from '../data/site';

export default function Mars() {
  return (
    <section className="sec mars" id="mars">
      <Reveal className="mars__bleed">
        <Loop
          name="pad-loop"
          poster="spacex-pad"
          ratio="21 / 9"
          alt="An interplanetary rocket stacked on its launch tower at dawn"
        />
      </Reveal>

      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label">Chapter II / Why Mars</Reveal>
          <Reveal className="sec-head__n" delay={80}>SPACEX · TRANSFER WINDOW</Reveal>
        </div>

        <div className="mars__intro">
          <Reveal>
            <h2 className="mars__h display">
              The deadline has <em>moved</em> four times
            </h2>
          </Reveal>

          <Reveal delay={90} className="mars__lede measure-wide">
            <p>
              SpaceX has been promising an uncrewed landing on Mars since 2016.
              The date was 2018, then 2022, then 2026. The company’s own site now
              sells cargo to the Martian surface no earlier than 2028, at $100
              million a tonne.
            </p>
            <p>
              The vehicle got built while the date moved. Earth and Mars line up
              for a cheap crossing only about every 26 months, so losing a window
              costs two years. The hard part was never the rocket, it is
              refuelling one in orbit.
            </p>
          </Reveal>
        </div>

        <div className="mars__figures">
          {MARS_FIGURES.map((f, i) => (
            <Reveal className="figure" key={f.k} delay={i * 70}>
              <strong className="figure__v slab">{f.v}</strong>
              <span className="figure__k mono">{f.k}</span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mars__owner">
          <Loop
            name="owner-pad-loop"
            poster="owner-pad"
            ratio="16 / 9"
            alt="A man and a small armoured dog watching a rocket vent on the pad"
          />
        </Reveal>

        <div className="mars__split">
          <Reveal className="mars__still">
            <Loop
              name="refuel-loop"
              poster="refuel-orbit"
              ratio="16 / 9"
              alt="Two vehicles docked tail to tail for propellant transfer"
            />
          </Reveal>
          <Reveal delay={80} className="mars__body measure">
            <p>
              The plan for the November window was up to five uncrewed Starships
              carrying Italian Space Agency experiments and a crew of Tesla’s
              Optimus robots. Musk put the odds of making it at 50/50.
            </p>
            <p>
              Fifty-fifty is an honest number, which is why a dog in a Roman
              helmet fits. The ambition is real and the timeline is a running
              joke. Anyone who has held a bag through a nine-month accumulation
              knows both can be true at once.
            </p>
            <p className="mono mars__note">
              Every figure here comes from SpaceX or Musk in public. None of it
              is a promise anyone can make on their behalf.
            </p>
          </Reveal>
        </div>

        <div className="mars__row">
          <Reveal className="mars__cell mars__cell--tall">
            <Loop name="launch-loop" poster="spacex-launch" ratio="3 / 4" alt="Liftoff at dawn" />
          </Reveal>
          <Reveal className="mars__cell" delay={80}>
            <Loop name="colony-loop" poster="colony-dome" ratio="16 / 9" alt="An early Mars settlement at dusk" />
          </Reveal>
          <Reveal className="mars__cell mars__cell--tall" delay={140}>
            <Loop name="starship-window-loop" poster="starship-window" alt="Marvin at a spacecraft window, looking at Mars" ratio="3 / 4" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

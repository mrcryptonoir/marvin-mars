import Reveal from './ui/Reveal';
import Loop from './ui/Loop';
import Img from './ui/Img';
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
              That is not a knock. The vehicle got built while the date moved.
              Earth and Mars only line up for a cheap crossing about every 26
              months, so losing one window costs two years, and the hard part was
              never the rocket. It is refuelling one in orbit.
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
          <p className="mars__caption mono">
            The man who owns the dog has been at this since 2002.
          </p>
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
              That is the honest number, and it is why a dog in a Roman helmet is
              a reasonable mascot for the whole thing. The ambition is real, the
              timeline is a running joke, and the internet worked out years ago
              that both can be true at once.
            </p>
            <p className="mono mars__note">
              Every figure here comes from SpaceX or from Musk in public. None of
              it is ours, and none of it is a promise anyone can make on their
              behalf.
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
            <Img name="starship-window" alt="Marvin at a spacecraft window, looking at Mars" ratio="3 / 4" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

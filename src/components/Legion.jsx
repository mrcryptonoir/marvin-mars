import { useRef } from 'react';
import { useScrollPass, lerp } from '../lib/scroll';
import Reveal from './ui/Reveal';
import Plate from './ui/Plate';
import Img from './ui/Img';
import Loop from './ui/Loop';

const LEGION = [
  { img: 'legion-01', loop: 'legion-wall' },
  { img: 'legion-02' },
  { img: 'legion-04' },
  { img: 'transmission-02' },
];

export default function Legion() {
  const rail = useRef(null);

  const ref = useScrollPass((p) => {
    if (rail.current) {
      rail.current.style.transform = `translate3d(${lerp(p, 4, -22)}%, 0, 0)`;
    }
  });

  return (
    <section className="sec sec--bone legion" id="legion" ref={ref}>
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label label--ink">Chapter IV / The legion</Reveal>
          <Reveal className="sec-head__n" delay={80}>LEGIO I MARTIA · FIELD PLATES</Reveal>
        </div>

        <div className="legion__top">
          <Reveal>
            <h2 className="legion__h display">
              One dog is a joke.
              <br />
              <em>a legion</em> is a position.
            </h2>
          </Reveal>
          <Reveal delay={90} className="legion__body measure">
            <p>
              Every holder gets the same helmet. No tiered art, no rarity ladder,
              nobody's dog is worth more than yours. The armour is a uniform on
              purpose: a legion only works because the figure beside you is
              carrying the identical shield.
            </p>
            <p className="mono legion__meta">
              REFERENCE SHEET · FRONT / REAR / THREE-QUARTER · V3
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal className="legion__sheet wrap" delay={60}>
        <Plate
          name="legion-sheet"
          ratio="1366 / 768"
          alt="Character reference sheet: front, rear and three-quarter views"
          left="MODEL SHEET · I MARTIA"
          right="ISSUE V3"
        />
      </Reveal>

      <div className="legion__railwrap">
        <div className="legion__rail" ref={rail}>
          {LEGION.map((c) => (
            <div className="legion__card" key={c.img}>
              {c.loop ? (
                <Loop name={c.loop} poster={c.img} ratio="3 / 4" alt="" />
              ) : (
                <Img name={c.img} alt="" ratio="3 / 4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

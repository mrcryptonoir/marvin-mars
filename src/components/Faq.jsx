import { useState } from 'react';
import Reveal from './ui/Reveal';
import { FAQ } from '../data/site';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sec sec--tight faq" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label">Appendix / Plain answers</Reveal>
          <Reveal className="sec-head__n" delay={80}>NO SMALL PRINT</Reveal>
        </div>

        <div className="faq__list">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal className={`faq__item ${isOpen ? 'is-open' : ''}`} key={f.q} delay={i * 50}>
                <button
                  className="faq__q"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <i aria-hidden="true" />
                </button>
                <div className="faq__a" hidden={!isOpen}>
                  <p className="measure-wide">{f.a}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

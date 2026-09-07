import Reveal from './ui/Reveal';
import Img from './ui/Img';
import { CHAIN_SPECS } from '../data/site';

export default function Chain() {
  return (
    <section className="sec sec--tight chain" id="chain">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label">Chapter III / The boring part</Reveal>
          <Reveal className="sec-head__n" delay={80}>ROBINHOOD CHAIN</Reveal>
        </div>

        <div className="chain__intro">
          <Reveal>
            <h2 className="chain__h display">
              Where it <em>actually</em> lives
            </h2>
          </Reveal>
          <Reveal delay={90} className="chain__lede measure-wide">
            <p>
              Three lines, then we go back to the dog. Robinhood Chain is a
              layer 2 a brokerage built for tokenized stocks. It settles to
              Ethereum and charges gas in ETH.
            </p>
          </Reveal>
        </div>

        <div className="chain__grid">
          {CHAIN_SPECS.map((s, i) => (
            <Reveal className="spec" key={s.k} delay={i * 60}>
              <span className="spec__k mono">{s.k}</span>
              <span className="spec__label mono">{s.label}</span>
              <strong className="spec__value">{s.value}</strong>
              <p className="spec__body">{s.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={60} className="chain__schematic">
          <Img name="chain-schematic" alt="Transfer-orbit schematic between two worlds" ratio="16 / 9" />
        </Reveal>
      </div>
    </section>
  );
}

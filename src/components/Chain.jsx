import Reveal from './ui/Reveal';
import Img from './ui/Img';
import { CHAIN_SPECS } from '../data/site';

export default function Chain() {
  return (
    <section className="sec chain" id="chain">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label">Chapter III / The network</Reveal>
          <Reveal className="sec-head__n" delay={80}>ROBINHOOD CHAIN · MAINNET</Reveal>
        </div>

        <div className="chain__intro">
          <Reveal>
            <h2 className="chain__h display">
              A brokerage built <em>its own</em> chain
            </h2>
          </Reveal>
          <Reveal delay={90} className="chain__lede measure-wide">
            <p>
              Robinhood Chain is an Ethereum layer 2 running Arbitrum’s Orbit
              stack. It settles to Ethereum, keeps its data in Ethereum blob
              space, and closes a block about every 100 milliseconds. It was built
              so shares of listed companies can trade outside market hours, in a
              wallet the holder controls.
            </p>
            <p>
              The same rails now carry a dog in a Roman helmet. The protocol has
              no way to tell the two apart, which is roughly the point of running
              anything on a public chain.
            </p>
          </Reveal>
        </div>

        <Reveal delay={60} className="chain__schematic">
          <Img name="chain-schematic" alt="Transfer-orbit schematic between two worlds" ratio="16 / 9" />
          <div className="chain__schematic-ticks" aria-hidden="true">
            <span>ETHEREUM · L1 SETTLEMENT</span>
            <span>BLOB DATA</span>
            <span>ROBINHOOD CHAIN · L2</span>
          </div>
        </Reveal>

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
      </div>
    </section>
  );
}

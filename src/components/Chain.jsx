import Reveal from './ui/Reveal';
import Img from './ui/Img';
import { CHAIN_SPECS } from '../data/site';

export default function Chain() {
  return (
    <section className="sec chain" id="chain">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label">Chapter II — The network</Reveal>
          <Reveal className="sec-head__n" delay={80}>ROBINHOOD CHAIN / MAINNET</Reveal>
        </div>

        <div className="chain__intro">
          <Reveal>
            <h2 className="chain__h serif-display">
              A brokerage built <em>a planet</em> to put its stocks on.
            </h2>
          </Reveal>
          <Reveal delay={90} className="chain__lede measure-wide">
            <p>
              Robinhood Chain is an Ethereum layer 2 running Arbitrum Orbit, settling
              straight to Ethereum and using its blob space for data. It exists so that
              shares of listed companies can move at 100 milliseconds a block, around
              the clock, in a wallet the holder actually controls.
            </p>
            <p>
              That is the serious half. The unserious half is that the same rails now
              carry a dog in a Roman helmet, and nothing in the protocol has any opinion
              about the difference. That is the whole promise of a public chain,
              stated plainly.
            </p>
          </Reveal>
        </div>

        <Reveal delay={60} className="chain__schematic">
          <Img name="chain-schematic" alt="Transfer-orbit schematic between two worlds" ratio="16 / 9" />
          <div className="chain__schematic-ticks" aria-hidden="true">
            <span>ETHEREUM · L1 SETTLEMENT</span>
            <span>TRANSFER ARC · BLOB DA</span>
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

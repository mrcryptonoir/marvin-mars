import { useState } from 'react';
import Reveal from './ui/Reveal';
import Img from './ui/Img';
import { TOKEN } from '../data/site';

const ROWS = [
  { k: 'Total supply', v: TOKEN.supply },
  { k: 'Buy / sell tax', v: TOKEN.tax },
  { k: 'Liquidity', v: TOKEN.lp },
  { k: 'Contract ownership', v: TOKEN.ownership },
  { k: 'Team allocation', v: 'None' },
  { k: 'Presale', v: 'None' },
];

export default function Supply() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(TOKEN.contract);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="sec sec--bone supply" id="supply">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label label--ink">Chapter VI / Payload</Reveal>
          <Reveal className="sec-head__n" delay={80}>MANIFEST · {TOKEN.ticker}</Reveal>
        </div>

        <div className="supply__grid">
          <div>
            <Reveal>
              <p className="supply__big slab">
                1,000,000,000
              </p>
            </Reveal>
            <Reveal delay={80} className="supply__cap">
              <span className="mono">Fixed supply, no mint function.</span>
            </Reveal>

            <Reveal delay={120} className="supply__table">
              {ROWS.map((r) => (
                <div className="supply__row" key={r.k}>
                  <span className="mono">{r.k}</span>
                  <strong>{r.v}</strong>
                </div>
              ))}
            </Reveal>

            <Reveal delay={180} className="supply__ca">
              <span className="mono">Contract · Robinhood Chain</span>
              <button className="supply__addr" onClick={copy} title="Copy contract address">
                <code>{TOKEN.contract}</code>
                <span className="supply__copy mono">{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <p className="supply__warn mono">
                Read the address back before you swap. Nobody official will ever DM it to you.
              </p>
            </Reveal>
          </div>

          <Reveal delay={100} className="supply__art">
            <Img name="settlement-diagram" alt="Layered settlement diagram" ratio="16 / 9" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

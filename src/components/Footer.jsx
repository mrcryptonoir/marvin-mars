import Img from './ui/Img';
import Reveal from './ui/Reveal';
import { LINKS, TOKEN } from '../data/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bleed">
        <Img name="footer-bleed" alt="Paw prints leading away across the Martian plain at night" ratio="21 / 9" />
        <div className="footer__bleed-scrim" />
      </div>

      <div className="wrap footer__inner">
        <Reveal>
          <p className="footer__line serif-display">
            He is four hundred metres from the lander
            <br />
            and he has <em>no intention</em> of turning round.
          </p>
        </Reveal>

        <div className="footer__cols">
          <div>
            <span className="label">Signal</span>
            <a href={LINKS.x} target="_blank" rel="noreferrer">X / Twitter</a>
            <a href={LINKS.telegram} target="_blank" rel="noreferrer">Telegram</a>
            <a href={LINKS.chart} target="_blank" rel="noreferrer">Chart</a>
          </div>
          <div>
            <span className="label">Sections</span>
            <a href="#dossier">Dossier</a>
            <a href="#chain">Chain</a>
            <a href="#log">Mission log</a>
            <a href="#supply">Supply</a>
          </div>
          <div className="footer__meta">
            <span className="label">Manifest</span>
            <p className="mono">{TOKEN.ticker} · {TOKEN.chain}</p>
            <p className="mono footer__addr">{TOKEN.contract}</p>
          </div>
        </div>
      </div>

      <div className="footer__word slab" aria-hidden="true">MARVIN</div>

      <div className="wrap footer__legal">
        <p>
          MARVIN is an independent community meme token. It is not affiliated with,
          endorsed by, or issued by Robinhood Markets, SpaceX, Tesla, or any individual
          referenced on this page. Nothing here is financial advice or an offer of any
          security. Crypto assets are volatile and you can lose everything you put in.
          Do your own research and never risk money you need.
        </p>
        <p className="mono">© {new Date().getFullYear()} MARVIN · LEGIO I MARTIA</p>
      </div>
    </footer>
  );
}

import Plate from './ui/Plate';
import Reveal from './ui/Reveal';

export default function Dossier() {
  return (
    <section className="sec dossier" id="dossier">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label">Chapter I / Subject</Reveal>
          <Reveal className="sec-head__n" delay={80}>FILE 001 · MARVIN</Reveal>
        </div>

        <div className="dossier__grid">
          <div className="dossier__col">
            <Reveal>
              <h2 className="dossier__h display">
                The dog <em>before</em> the helmet
              </h2>
            </Reveal>

            <Reveal delay={90} className="dossier__body measure">
              <p>
                Marvin is a scruffy black-and-white dog with floppy ears and a bow
                tie. He belongs to Elon Musk, who spends his working hours arguing
                that people should not stay on one planet and has spent twenty
                years building the rocket to prove it. That is the only reason
                anyone outside that house has ever seen a photo of the dog.
              </p>
              <p>
                The internet did the obvious thing and put a helmet on him. Roman,
                domed, gold-crested: the same silhouette as the cartoon Martian who
                has been threatening to blow up the Earth since 1948. Nobody
                designed the joke. It just fit.
              </p>
              <p>
                It landed at a useful moment. Robinhood Chain went live for
                tokenized stocks in July 2026, three months before the Mars
                transfer window opened, and a meme on rails people actually use is
                worth more than a meme on rails nobody does.
              </p>
            </Reveal>

            <Reveal delay={140} className="dossier__stats">
              <div>
                <span className="mono">Subject</span>
                <strong>Marvin</strong>
              </div>
              <div>
                <span className="mono">Class</span>
                <strong>Legionary, I Martia</strong>
              </div>
              <div>
                <span className="mono">Home</span>
                <strong>Earth (former)</strong>
              </div>
              <div>
                <span className="mono">Assignment</span>
                <strong>Robinhood Chain</strong>
              </div>
            </Reveal>
          </div>

          <div className="dossier__col dossier__col--plates">
            <Reveal delay={60}>
              <Plate
                name="plate-archive"
                ratio="4 / 3"
                alt="Archive photograph of the subject before the mission"
                left="ARCHIVE 001"
                right="PRE-FLIGHT · EARTH"
              />
            </Reveal>
            <Reveal delay={160}>
              <Plate
                name="plate-portrait"
                ratio="3 / 4"
                alt="The subject in legionary armour"
                left="ARCHIVE 002"
                right="I MARTIA · SOL 001"
              />
            </Reveal>
            <Reveal delay={220}>
              <Plate
                name="owner-dog"
                ratio="3 / 4"
                alt="The dog's owner crouched down, scratching his ear"
                left="ARCHIVE 003"
                right="THE OWNER · EARTH"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

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
                Marvin is a small scruffy black-and-white dog with floppy ears, a
                white chest blaze and a striped bow tie. He belongs to Elon Musk.
                That is the whole reason anyone outside that house has ever seen a
                photo of him, and it is also the reason he ended up here.
              </p>
              <p>
                His owner has spent twenty years building a rocket around one
                argument: that people should not stay on a single planet. So the
                internet did the obvious thing and put a helmet on the dog. Roman,
                domed, gold-crested, the same silhouette as the cartoon Martian who
                has been threatening to blow up the Earth since 1948. Nobody
                designed the joke. It just fit.
              </p>
              <p>
                Then the timing did the rest. The Mars transfer window opened in
                November, the chain went live in July, and a dog who has never
                left Earth got a legion, a helmet and a ticker. He does not know
                about any of it. He is asleep on a rug somewhere.
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
